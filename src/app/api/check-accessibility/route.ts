import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import { AxePuppeteer } from "@axe-core/puppeteer";

// Typdefinitionen für axe-core Ergebnisse
interface AxeNode {
  html: string;
  target: string[];
  [key: string]: unknown;
}

interface AxeViolation {
  id: string;
  impact: "minor" | "moderate" | "serious" | "critical";
  tags: string[];
  nodes: AxeNode[];
  help: string;
  description: string;
  helpUrl: string;
  [key: string]: unknown;
}

export async function POST(request: Request) {
  try {
    const { url, language = "de" } = await request.json();

    if (!url) {
      return NextResponse.json(
        {
          error: language === "de" ? "URL ist erforderlich" : "URL is required",
        },
        { status: 400 }
      );
    }

    // Validiere URL-Format
    let validatedUrl: string;
    try {
      const urlObj = new URL(url);
      if (!["http:", "https:"].includes(urlObj.protocol)) {
        throw new Error(
          language === "de"
            ? "Nur HTTP und HTTPS URLs werden unterstützt"
            : "Only HTTP and HTTPS URLs are supported"
        );
      }
      validatedUrl = urlObj.toString();
    } catch (_error) {
      // _ vor error bedeutet, dass wir die Variable absichtlich nicht verwenden
      return NextResponse.json(
        {
          error: language === "de" ? "Ungültige URL" : "Invalid URL",
        },
        { status: 400 }
      );
    }

    // Starte Puppeteer
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // Setze Viewport für Desktop-Ansicht
    await page.setViewport({ width: 1280, height: 800 });

    try {
      await page.goto(validatedUrl, {
        waitUntil: "networkidle2",
        timeout: 30000,
      });
    } catch (_error) {
      // _ vor error bedeutet, dass wir die Variable absichtlich nicht verwenden
      await browser.close();
      return NextResponse.json(
        {
          error:
            language === "de"
              ? "Seite konnte nicht geladen werden"
              : "Page could not be loaded",
        },
        { status: 500 }
      );
    }

    // Führe axe-Analyse durch
    const axeRunner = new AxePuppeteer(page);
    const results = await axeRunner.analyze();

    // Sichere Typkonvertierung für die Verarbeitung
    const violations = results.violations as unknown as AxeViolation[];

    // Berechne Score
    const totalIssues = violations.reduce(
      (acc: number, violation: AxeViolation) => acc + violation.nodes.length,
      0
    );

    const impactWeights = {
      minor: 1,
      moderate: 2,
      serious: 3,
      critical: 4,
    };

    const weightedIssues = violations.reduce(
      (acc: number, violation: AxeViolation) => {
        const weight =
          impactWeights[violation.impact as keyof typeof impactWeights] || 2;
        return acc + violation.nodes.length * weight;
      },
      0
    );

    // Maximale Punktzahl basiert auf der Anzahl durchgeführter Tests
    const maxScore = 100;
    const totalTests =
      results.passes.length + violations.length + results.incomplete.length;

    // Berechne Score - ziehe Punkte basierend auf gewichteten Problemen ab
    const penaltyPerIssue = totalTests > 0 ? 50 / totalTests : 0;
    let accessibilityScore = Math.max(
      0,
      maxScore - weightedIssues * penaltyPerIssue
    );

    // Runde auf ganze Zahlen
    accessibilityScore = Math.round(accessibilityScore);

    // Gruppiere Probleme nach Kategorien für besseres Verständnis
    const issuesByCategory = violations.reduce(
      (
        acc: { [key: string]: Record<string, unknown>[] },
        violation: AxeViolation
      ) => {
        if (!acc[violation.tags[0]]) {
          acc[violation.tags[0]] = [];
        }

        acc[violation.tags[0]].push({
          id: violation.id,
          impact: violation.impact,
          help: violation.help,
          description: violation.description,
          helpUrl: violation.helpUrl,
          count: violation.nodes.length,
          examples: violation.nodes.slice(0, 3).map((node) => ({
            html: node.html,
            target: node.target,
          })),
        });

        return acc;
      },
      {}
    );

    // Generiere Verbesserungstipps
    const improvementTips = generateImprovementTips(violations, language);

    await browser.close();

    return NextResponse.json({
      url: validatedUrl,
      score: accessibilityScore,
      totalIssues,
      totalTests,
      categories: getCategories(violations),
      issuesByCategory,
      improvementTips,
      timestamp: new Date().toISOString(),
      language,
    });
  } catch (error) {
    console.error("Fehler bei der Barrierefreiheitsprüfung:", error);
    return NextResponse.json(
      { error: "Fehler bei der Barrierefreiheitsprüfung" },
      { status: 500 }
    );
  }
}

// Hilfsfunktionen
function getCategories(violations: AxeViolation[]) {
  const categories: { [key: string]: number } = {};

  violations.forEach((violation) => {
    violation.tags.forEach((tag: string) => {
      if (!categories[tag]) {
        categories[tag] = 0;
      }
      categories[tag] += violation.nodes.length;
    });
  });

  return Object.entries(categories)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

function generateImprovementTips(
  violations: AxeViolation[],
  language: string = "de"
) {
  const tips: string[] = [];
  const issueTypes = new Set<string>();

  // Sammle eindeutige Problemtypen
  violations.forEach((violation) => {
    issueTypes.add(violation.id);
  });

  // Tipps-Übersetzungen
  const tipTranslations: Record<string, Record<string, string>> = {
    "image-alt": {
      de: "Fügen Sie allen Bildern aussagekräftige Alt-Texte hinzu, damit Screenreader-Nutzer den Inhalt verstehen können.",
      en: "Add meaningful alt text to all images so screen reader users can understand the content.",
    },
    "color-contrast": {
      de: "Verbessern Sie den Farbkontrast zwischen Text und Hintergrund, um die Lesbarkeit zu erhöhen.",
      en: "Improve color contrast between text and background to enhance readability.",
    },
    aria: {
      de: "Überprüfen Sie ARIA-Attribute und Rollen auf korrekte Implementierung.",
      en: "Check ARIA attributes and roles for correct implementation.",
    },
    "heading-order": {
      de: "Achten Sie auf eine logische Überschriftenhierarchie (h1, h2, h3, etc.).",
      en: "Ensure a logical heading hierarchy (h1, h2, h3, etc.).",
    },
    "form-labels": {
      de: "Versehen Sie alle Formularfelder mit passenden Labels für bessere Bedienbarkeit.",
      en: "Label all form fields appropriately for better usability.",
    },
    "link-name": {
      de: "Geben Sie allen Links einen beschreibenden Text, der ihren Zweck erklärt.",
      en: "Provide all links with descriptive text that explains their purpose.",
    },
    keyboard: {
      de: "Stellen Sie sicher, dass alle Funktionen per Tastatur zugänglich sind.",
      en: "Ensure all functionality is accessible via keyboard.",
    },
    "general-testing": {
      de: "Prüfen Sie regelmäßig auf Barrierefreiheit und beziehen Sie Menschen mit Behinderungen in Tests ein.",
      en: "Test regularly for accessibility and involve people with disabilities in testing.",
    },
    "semantic-html": {
      de: "Nutzen Sie semantisches HTML anstelle von DIV-Elementen für eine bessere Struktur.",
      en: "Use semantic HTML instead of DIV elements for better structure.",
    },
    "skip-link": {
      de: "Implementieren Sie eine Skip-Navigation, damit Tastaturnutzer direkt zum Hauptinhalt gelangen können.",
      en: "Implement a skip navigation link so keyboard users can go directly to the main content.",
    },
  };

  // Generiere spezifische Tipps basierend auf erkannten Problemen
  if (issueTypes.has("image-alt")) {
    tips.push(
      tipTranslations["image-alt"][language] ||
        tipTranslations["image-alt"]["en"]
    );
  }

  if (issueTypes.has("color-contrast")) {
    tips.push(
      tipTranslations["color-contrast"][language] ||
        tipTranslations["color-contrast"]["en"]
    );
  }

  if (issueTypes.has("aria-required-attr") || issueTypes.has("aria-roles")) {
    tips.push(
      tipTranslations["aria"][language] || tipTranslations["aria"]["en"]
    );
  }

  if (issueTypes.has("heading-order")) {
    tips.push(
      tipTranslations["heading-order"][language] ||
        tipTranslations["heading-order"]["en"]
    );
  }

  if (issueTypes.has("label") || issueTypes.has("form-field-multiple-labels")) {
    tips.push(
      tipTranslations["form-labels"][language] ||
        tipTranslations["form-labels"]["en"]
    );
  }

  if (issueTypes.has("link-name")) {
    tips.push(
      tipTranslations["link-name"][language] ||
        tipTranslations["link-name"]["en"]
    );
  }

  if (issueTypes.has("keyboard")) {
    tips.push(
      tipTranslations["keyboard"][language] || tipTranslations["keyboard"]["en"]
    );
  }

  // Allgemeine Tipps, wenn wenige spezifische Probleme gefunden wurden
  if (tips.length < 3) {
    tips.push(
      tipTranslations["general-testing"][language] ||
        tipTranslations["general-testing"]["en"]
    );
    tips.push(
      tipTranslations["semantic-html"][language] ||
        tipTranslations["semantic-html"]["en"]
    );
    tips.push(
      tipTranslations["skip-link"][language] ||
        tipTranslations["skip-link"]["en"]
    );
  }

  return tips;
}
