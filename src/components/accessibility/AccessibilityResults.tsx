"use client";

import React, { useState, useEffect } from "react";
import { AccessibilityResult } from "@/app/accessibility-check/page";
import { useLanguage } from "@/components/layout/LanguageContext";
import WcagConformity from "./WcagConformity";
import DetailedIssues from "./DetailedIssues";

// Tooltip-Map für detaillierte Erklärungen der Kategorie-Codes
export const tooltipMap = {
  "Best practice": {
    de: "Empfohlene Entwicklungspraktiken, auch wenn nicht gesetzlich vorgeschrieben.",
    en: "Recommended development practices, even if not legally required.",
  },
  "Cat.keyboard": {
    de: "Inhalte sind nicht vollständig per Tastatur erreichbar.",
    en: "Content is not fully accessible via keyboard.",
  },
  Wcag2a: {
    de: "Enthält alle Erfolgskriterien der WCAG 2.0 auf Level A.",
    en: "Includes all success criteria of WCAG 2.0 at Level A.",
  },
  "EN 301 549": {
    de: "Europäischer Standard für barrierefreie IT-Produkte und -Dienste.",
    en: "European standard for accessible IT products and services.",
  },
  "Cat.aria": {
    de: "Fehlerhafte oder überflüssige ARIA-Rollen/Attribute.",
    en: "Incorrect or unnecessary ARIA roles/attributes.",
  },
  Wcag131: {
    de: "Inhalte und Beziehungen müssen programmatisch erkennbar sein.",
    en: "Content and relationships must be programmatically determinable.",
  },
  "EN 9.1.3.1": {
    de: "Informationen dürfen nicht ausschließlich visuell vermittelt werden.",
    en: "Information must not be conveyed solely through visual presentation.",
  },
  "Cat.semantics": {
    de: "Fehlende oder inkorrekte semantische HTML-Struktur (z. B. <div> statt <nav>).",
    en: "Missing or incorrect semantic HTML structure (e.g., <div> instead of <nav>).",
  },
  Wcag412: {
    de: "UI-Komponenten müssen eine programmatische Rolle, einen Namen und Status haben.",
    en: "UI components must have a programmatic role, name, and state.",
  },
  "EN 9.4.1.2": {
    de: "Nutzer:innen müssen den Status und Namen von Bedienelementen erkennen können.",
    en: "Users must be able to perceive the state and name of controls.",
  },
  Wcag111: {
    de: "Nicht-Text-Inhalte wie Bilder benötigen aussagekräftige Alt-Texte.",
    en: "Non-text content such as images requires meaningful alt text.",
  },
  "EN 9.1.1.1": {
    de: "Bilder oder andere Medieninhalte müssen durch Text beschrieben werden.",
    en: "Images or other media content must be described with text.",
  },
  "Cat.structure": {
    de: "Fehlende logische Dokumentstruktur, z. B. keine Regionen oder Landmarks.",
    en: "Missing logical document structure, e.g., no regions or landmarks.",
  },
  TTv5: {
    de: "Testpunkt zur strukturellen Prüfung von Navigation, Regionen und Aria-Rollen.",
    en: "Test point for structural check of navigation, regions, and ARIA roles.",
  },
  "TT6.a": {
    de: "Testpunkt zur korrekten Hierarchie von Überschriften (z. B. H1 → H2 → H3).",
    en: "Test point for correct heading hierarchy (e.g., H1 → H2 → H3).",
  },
  "Cat.color": {
    de: "Links oder wichtige Informationen sind nur über Farbe erkennbar – das ist problematisch.",
    en: "Links or important information are only indicated by color – this is problematic.",
  },
  Wcag141: {
    de: "Informationen dürfen nicht ausschließlich über Farbe vermittelt werden.",
    en: "Information must not be conveyed solely through color.",
  },
  "TT13.a": {
    de: "Formularfelder müssen eindeutig zu Labels zugeordnet werden.",
    en: "Form fields must be clearly associated with labels.",
  },
  "EN 9.1.4.1": {
    de: "Farben allein dürfen nicht zur Bedeutungserklärung verwendet werden.",
    en: "Colors alone must not be used to convey meaning.",
  },
  "Cat.name role value": {
    de: "Elemente wie Buttons oder Links müssen Name, Rolle und Status bereitstellen.",
    en: "Elements such as buttons or links must provide name, role, and state.",
  },
  Wcag244: {
    de: "Der Zweck eines Links muss erkennbar sein, z. B. nicht nur 'Hier klicken'.",
    en: "The purpose of a link must be clear, e.g., not just 'Click here'.",
  },
  "Section508.22.a": {
    de: "US-Richtlinie zur strukturierten Gliederung digitaler Inhalte.",
    en: "US guideline for structured organization of digital content.",
  },
  Section508: {
    de: "US-Bundesstandard für Barrierefreiheit in Informations- und Kommunikationstechnologie.",
    en: "US federal standard for accessibility in information and communication technology.",
  },
  ACT: {
    de: "W3C-Testregel für automatische Prüfung auf WCAG-Konformität (Accessibility Conformance Testing).",
    en: "W3C test rule for automated WCAG conformance checking.",
  },
  "EN 9.2.4.4": {
    de: "Jeder Linktext muss allein oder im Kontext verständlich sein.",
    en: "Each link text must be understandable on its own or in context.",
  },
  "Cat.forms": {
    de: "Formularelemente sind nicht korrekt beschriftet oder nicht zugänglich.",
    en: "Form elements are not properly labeled or accessible.",
  },
  "Cat.time and media": {
    de: "Automatische Weiterleitungen oder Medieninhalte lassen sich nicht stoppen oder kontrollieren.",
    en: "Automatic redirects or media content cannot be stopped or controlled.",
  },
  "EN 9.2.2.1": {
    de: "Seiteninhalte dürfen sich nicht automatisch neu laden oder ändern ohne Nutzerkontrolle.",
    en: "Page content must not automatically reload or change without user control.",
  },
  "TT8.a": {
    de: "Testpunkt zur Prüfung auf fehlende Überschriften oder unlogische Reihenfolge.",
    en: "Test point for checking missing headings or illogical order.",
  },
  "TT7.a": {
    de: "Testpunkt für Textalternativen in UI-Elementen (z. B. Buttons ohne Beschriftung).",
    en: "Test point for text alternatives in UI elements (e.g., buttons without labels).",
  },
  "TT7.b": {
    de: "Prüft, ob alle interaktiven Komponenten barrierefreie Namen haben.",
    en: "Checks whether all interactive components have accessible names.",
  },
  Wcag221: {
    de: "Inhalte müssen auch bei 200 % Zoom zugänglich und vollständig lesbar bleiben.",
    en: "Content must remain accessible and fully readable at 200% zoom.",
  },
  // Neue Kategorien ab hier
  "Cat.language": {
    de: 'Dokumente müssen eine deklarierte Hauptsprache (z. B. lang="de") besitzen.',
    en: 'Documents must declare a main language (e.g., lang="en").',
  },
  Wcag311: {
    de: "Die natürliche Sprache einer Webseite muss programmatisch bestimmt werden können.",
    en: "The natural language of a web page must be programmatically determinable.",
  },
  Wcag3111: {
    de: "Abschnitte mit abweichender Sprache müssen korrekt gekennzeichnet sein.",
    en: "Sections with a different language must be properly marked.",
  },
  Wcag125: {
    de: "Bewegte Inhalte, Blinken und automatische Audioinhalte müssen pausierbar oder abschaltbar sein.",
    en: "Moving content, blinking, and automatic audio must be pauseable or stoppable.",
  },
  Wcag133: {
    de: "Visuelle Hilfen wie Feldgruppen oder Tabreihenfolgen müssen logisch und nachvollziehbar sein.",
    en: "Visual aids like field groups or tab order must be logical and understandable.",
  },
  Wcag245: {
    de: "Die visuelle Fokusanzeige muss sichtbar und deutlich sein.",
    en: "The visual focus indicator must be visible and distinct.",
  },
  Wcag246: {
    de: "Navigationsmethoden müssen mehrfach verfügbar sein (z. B. Suche, Menü, Sitemap).",
    en: "Navigation methods must be available in multiple ways (e.g., search, menu, sitemap).",
  },
  "Cat.navigation": {
    de: "Die Navigation auf der Website ist nicht konsistent oder unklar strukturiert.",
    en: "Navigation on the website is not consistent or clearly structured.",
  },
  "Cat.skiplink": {
    de: "Fehlende Möglichkeit, den Hauptinhalt direkt zu überspringen (z. B. Skip Link).",
    en: "Missing option to skip directly to the main content (e.g., skip link).",
  },
  "Cat.iframe": {
    de: "iFrames oder eingebettete Inhalte fehlen oft beschreibende Titel.",
    en: "iFrames or embedded content often lack descriptive titles.",
  },
  Wcag1311: {
    de: "Beschriftungen müssen visuell und programmatisch vorhanden sein.",
    en: "Labels must be present visually and programmatically.",
  },
  "Cat.audio video": {
    de: "Multimedia-Inhalte benötigen Untertitel, Audiobeschreibungen oder Transkripte.",
    en: "Multimedia content requires captions, audio descriptions, or transcripts.",
  },
  Wcag1411: {
    de: "Benutzer:innen müssen Farben und Schriftgrößen anpassen können, ohne die Funktionalität zu verlieren.",
    en: "Users must be able to adjust colors and font sizes without losing functionality.",
  },
  Wcag253: {
    de: "Statusmeldungen müssen programmatisch erkennbar sein (z. B. bei Formularüberprüfung).",
    en: "Status messages must be programmatically determinable (e.g., in form validation).",
  },
};

// Exportfunktion für Tooltips
export function getTooltip(
  categoryId: string,
  language: string = "de"
): string {
  const normalize = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9]/gi, "");

  const normalized = normalize(categoryId);

  const entry = Object.entries(tooltipMap).find(
    ([key]) => normalize(key) === normalized
  );

  if (entry) {
    const value = entry[1] as {
      de: string;
      en: string;
      [key: string]: string; // Erlaube zusätzliche Sprachcodes, falls vorhanden
    };
    if (typeof value === "object" && value !== null) {
      return value[language] || value["de"];
    } else if (typeof value === "string") {
      // Dieser Fall sollte basierend auf deiner tooltipMap-Struktur nicht eintreten,
      // aber wir behandeln ihn zur Sicherheit.
      return value;
    }
  }

  return language === "de"
    ? `Keine Beschreibung gefunden für: ${categoryId}`
    : `No description found for: ${categoryId}`;
}

interface AccessibilityResultsProps {
  result: AccessibilityResult;
}

// Tooltip-Komponente für WCAG-Erklärungen
interface TooltipProps {
  text: string;
  children: React.ReactNode;
  position?: "left" | "center" | "right";
}

const Tooltip = ({ text, children, position = "center" }: TooltipProps) => {
  // Positionsklassen basierend auf der Position
  const positionClasses = {
    left: "origin-top-left left-0 -translate-x-0",
    center: "left-1/2 -translate-x-1/2",
    right: "origin-top-right right-0 translate-x-0",
  };

  // Pfeilpositionsklassen
  const arrowClasses = {
    left: "left-4 -translate-x-0",
    center: "left-1/2 -translate-x-1/2",
    right: "right-4 translate-x-0",
  };

  return (
    <div className="relative group inline-block">
      {children}
      <div
        className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute z-10 p-2 bg-blue-500 text-white text-xs rounded w-64 bottom-full ${positionClasses[position]} -translate-y-2 pointer-events-none min-w-max max-w-xs`}
      >
        {text}
        <div
          className={`absolute ${arrowClasses[position]} transform translate-y-1 top-full w-3 h-3 bg-blue-500 rotate-45`}
        ></div>
      </div>
    </div>
  );
};

// Hilfsfunktion zur Übersetzung der Problemkategorien
const translateCategory = (category: string, language: string): string => {
  const categoryTranslations: Record<string, Record<string, string>> = {
    aria: {
      de: "ARIA & Semantik",
      en: "ARIA & Semantics",
    },
    "color-contrast": {
      de: "Farbkontrast",
      en: "Color Contrast",
    },
    forms: {
      de: "Formulare",
      en: "Forms",
    },
    keyboard: {
      de: "Tastaturzugriff",
      en: "Keyboard Access",
    },
    language: {
      de: "Sprache",
      en: "Language",
    },
    "name-role-value": {
      de: "Name, Rolle, Wert",
      en: "Name, Role, Value",
    },
    parsing: {
      de: "HTML-Parsing",
      en: "HTML Parsing",
    },
    structure: {
      de: "Dokumentstruktur",
      en: "Document Structure",
    },
    tables: {
      de: "Tabellen",
      en: "Tables",
    },
    "text-alternatives": {
      de: "Textalternativen",
      en: "Text Alternatives",
    },
    wcag: {
      de: "WCAG Konformität",
      en: "WCAG Conformance",
    },
  };

  // Zuerst versuchen, eine direkte Übersetzung zu finden
  if (
    categoryTranslations[category] &&
    categoryTranslations[category][language === "de" ? "de" : "en"]
  ) {
    return categoryTranslations[category][language === "de" ? "de" : "en"];
  }

  // Fallback für nicht definierte Kategorien - erste Buchstabe groß
  return (
    category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, " ")
  );
};

// Funktion zum Zählen der Probleme nach Schweregrad
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const countIssuesByImpact = (issuesByCategory: Record<string, any[]>) => {
  const counts = {
    critical: 0,
    serious: 0,
    moderate: 0,
    minor: 0,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Object.values(issuesByCategory).forEach((category: any[]) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    category.forEach((issue: any) => {
      if (counts[issue.impact as keyof typeof counts] !== undefined) {
        counts[issue.impact as keyof typeof counts] += issue.count;
      }
    });
  });

  return counts;
};

// Funktion zum Zählen der gesamten betroffenen Elemente
interface Issue {
  impact: string;
  count: number;
  // Füge hier weitere erwartete Eigenschaften hinzu, falls vorhanden
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const countTotalAffectedElements = (
  issuesByCategory: Record<string, Issue[]>
): number => {
  let total = 0;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Object.values(issuesByCategory).forEach((category: any[]) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    category.forEach((issue: any) => {
      total += issue.count;
    });
  });

  return total;
};

// PDF-Generierung mit Aufruf der API-Route
const generatePDF = async (result: AccessibilityResult, language: string) => {
  try {
    // Berechne die Gesamtzahl der betroffenen Elemente
    const totalAffectedElements = countTotalAffectedElements(
      result.issuesByCategory
    );

    // HTML vorbereiten (hier könnte man eine spezielle PDF-Layout-Komponente rendern)
    const htmlContent = `
      <html>
        <head>
          <title>Accessibility Report - ${result.url}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
            h1 { color: #2563eb; }
            .score { font-size: 24px; font-weight: bold; margin: 20px 0; }
            .issues { margin-top: 20px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #e5e7eb; padding: 8px; text-align: left; }
            th { background-color: #f3f4f6; }
            .footer { margin-top: 30px; font-size: 12px; color: #6b7280; }
          </style>
        </head>
        <body>
          <h1>${
            language === "de"
              ? "Barrierefreiheits-Bericht"
              : "Accessibility Report"
          }</h1>
          <p><strong>${
            language === "de" ? "Getestete URL" : "Tested URL"
          }:</strong> ${result.url}</p>
          <p><strong>${
            language === "de" ? "Datum" : "Date"
          }:</strong> ${new Date(result.timestamp).toLocaleString(
      language === "de" ? "de-DE" : "en-US"
    )}</p>
          
          <div class="score">
            <strong>${
              language === "de" ? "Gesamtscore" : "Overall Score"
            }:</strong> ${result.score}/100
          </div>
          
          <div class="issues">
            <h2>${language === "de" ? "Fehlerarten" : "Error Types"}: ${
      Object.keys(result.issuesByCategory).length
    }</h2>
            <h2>${
              language === "de" ? "Betroffene Elemente" : "Affected Elements"
            }: ${totalAffectedElements}</h2>
            
            <table>
              <thead>
                <tr>
                  <th>${language === "de" ? "Kategorie" : "Category"}</th>
                  <th>${
                    language === "de"
                      ? "Anzahl betroffener Elemente"
                      : "Number of affected elements"
                  }</th>
                </tr>
              </thead>
              <tbody>
                ${result.categories
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map(
                    (cat) => `
                    <tr>
                      <td>${cat.name}</td>
                      <td>${cat.count}</td>
                    </tr>
                  `
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
          
          <div class="footer">
            <p>${
              language === "de"
                ? "Generiert mit dem Barrierefreiheits-Check-Tool"
                : "Generated with the Accessibility Check Tool"
            }</p>
          </div>
        </body>
      </html>
    `;

    // API-Anfrage für PDF-Generierung
    const response = await fetch("/api/export-pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ html: htmlContent }),
    });

    if (!response.ok) {
      throw new Error(`PDF Generierung fehlgeschlagen: ${response.status}`);
    }

    // PDF-Datei als Blob herunterladen
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `accessibility-report-${result.url
      .replace(/https?:\/\//, "")
      .replace(/\//g, "-")}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    return true;
  } catch (error) {
    console.error("Fehler beim PDF-Export:", error);
    alert(language === "de" ? "Fehler beim PDF-Export" : "Error exporting PDF");
    return false;
  }
};

export default function AccessibilityResults({
  result,
}: AccessibilityResultsProps) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "issues" | "tips" | "wcag"
  >("overview");
  const [animateCircles, setAnimateCircles] = useState(false);
  const { language, t } = useLanguage();

  // Berechne die Gesamtzahl der betroffenen Elemente
  const totalAffectedElements = countTotalAffectedElements(
    result.issuesByCategory
  );

  // Sortierte Kategorien für die Übersicht
  const sortedCategories = [...result.categories].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // Starte Animation nach Abschluss der Analyse
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateCircles(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat(language === "de" ? "de-DE" : "en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(date);
    } catch {
      return dateString;
    }
  };

  // Bestimme die Farbe für den Score
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-700";
    if (score >= 70) return "text-yellow-600";
    if (score >= 50) return "text-orange-600";
    return "text-red-700";
  };

  // Bestimme die Bewertung basierend auf dem Score
  const getScoreRating = (score: number) => {
    if (score >= 90) return t("rating.veryGood");
    if (score >= 70) return t("rating.good");
    if (score >= 50) return t("rating.needsImprovement");
    return t("rating.problematic");
  };

  // Bestimme die Hintergrundfarbe für den Kreis-Score
  const getScoreBgColor = (score: number) => {
    if (score >= 90) return "bg-green-100";
    if (score >= 70) return "bg-yellow-100";
    if (score >= 50) return "bg-orange-100";
    return "bg-red-100";
  };

  // Bestimme die Grenzfarbe für den Kreis-Score
  const getScoreBorderColor = (score: number) => {
    if (score >= 90) return "border-green-500";
    if (score >= 70) return "border-yellow-500";
    if (score >= 50) return "border-orange-500";
    return "border-red-500";
  };

  // Download als PDF
  const downloadPdf = () => {
    generatePDF(result, language);
  };

  // Kontaktfunktion
  const contactSupport = () => {
    window.location.href =
      "/kontakt?reason=accessibility&url=" + encodeURIComponent(result.url);
  };

  // Zähle Probleme nach Schweregrad
  const issuesByImpact = countIssuesByImpact(result.issuesByCategory);

  // CSS-Klassen für animierte Kreise
  const circleAnimation = animateCircles ? "animate-scale-in" : "";

  // Konstanten für das Kreisdiagramm
  const CIRCLE_RADIUS = 60;
  const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

  // Berechnung für stroke-dashoffset
  const scoreValue = Math.min(100, Math.max(0, result.score)); // Stelle sicher, dass der Score zwischen 0 und 100 liegt
  const targetStrokeDashoffset = CIRCUMFERENCE * (1 - scoreValue / 100);
  const initialStrokeDashoffset = CIRCUMFERENCE;

  return (
    <div className="bg-white border border-gray-200 rounded-lg mt-8 mb-12 overflow-hidden">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">
          {language === "de"
            ? `Ergebnisse für ${result.url}`
            : `Results for ${result.url}`}
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          {language === "de" ? "Geprüft am" : "Checked on"}{" "}
          {formatDate(result.timestamp)}
        </p>
      </div>

      {/* Score-Anzeige mit Kreisdiagramm */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-6 sm:mb-0">
            {/* Kreisdiagramm für den Score */}
            <div className="relative">
              <div
                className={`w-32 h-32 rounded-full flex items-center justify-center ${getScoreBgColor(
                  result.score
                )} border-4 ${getScoreBorderColor(
                  result.score
                )} ${circleAnimation}`}
              >
                <div className="text-center">
                  <div
                    className={`text-4xl font-bold ${getScoreColor(
                      result.score
                    )}`}
                  >
                    {result.score}
                  </div>
                  <div className="text-sm text-gray-600">
                    {language === "de" ? "von" : "of"} 100
                  </div>
                </div>
              </div>
              <svg
                className={`absolute inset-0 ${circleAnimation}`}
                width="128"
                height="128"
                viewBox="0 0 128 128"
              >
                <circle
                  cx="64"
                  cy="64"
                  r={CIRCLE_RADIUS}
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                />
                <circle
                  cx="64"
                  cy="64"
                  r={CIRCLE_RADIUS}
                  fill="none"
                  stroke={
                    result.score >= 90
                      ? "#10b981"
                      : result.score >= 70
                      ? "#f59e0b"
                      : result.score >= 50
                      ? "#f97316"
                      : "#ef4444"
                  }
                  strokeWidth="8"
                  strokeDasharray={`${CIRCUMFERENCE} ${CIRCUMFERENCE}`}
                  strokeDashoffset={
                    animateCircles
                      ? targetStrokeDashoffset
                      : initialStrokeDashoffset
                  }
                  strokeLinecap="round"
                  transform="rotate(-90 64 64)"
                  style={{
                    transition: animateCircles
                      ? "stroke-dashoffset 0.8s ease-out"
                      : "none",
                  }}
                />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-medium text-gray-700">
                {t("results.score")}
              </span>
              <span
                className={`text-2xl font-semibold ${getScoreColor(
                  result.score
                )}`}
              >
                {getScoreRating(result.score)}
              </span>
              <p className="text-sm text-gray-600 max-w-sm mt-2">
                {language === "de"
                  ? "Dieser Wert zeigt die Barrierefreiheit Ihrer Website basierend auf automatisierten Tests nach WCAG 2.1 Richtlinien."
                  : "This score shows the accessibility of your website based on automated tests according to WCAG 2.1 guidelines."}
              </p>
              {/* Neu: Kontext für die Punktzahl */}
              <p className="text-xs text-gray-500 mt-1">
                {language === "de"
                  ? `Basierend auf ${
                      result.totalTests || 25
                    } geprüften Kriterien`
                  : `Based on ${result.totalTests || 25} checked criteria`}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center py-4 px-6 bg-gray-50 rounded-lg">
            <span className="text-gray-700 font-medium mb-1">
              {language === "de" ? "Fehlerarten gefunden" : "Error Types Found"}
            </span>
            <div className="text-3xl font-bold text-gray-800">
              {Object.keys(result.issuesByCategory).length}
            </div>
            <span className="text-gray-700 font-medium mb-1 mt-2">
              {language === "de" ? "Betroffene Elemente" : "Affected Elements"}
            </span>
            <div className="text-3xl font-bold text-gray-800">
              {totalAffectedElements}
            </div>
            {/* Verbesserte Anzeige der Schweregrade mit animierten Badges */}
            <div className="mt-2 flex flex-col items-center text-sm text-gray-600">
              <span className="font-medium">
                {language === "de" ? "Schweregrad:" : "Severity:"}
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 ${circleAnimation}`}
                  style={{ animationDelay: "0.1s" }}
                >
                  {issuesByImpact.critical} {t("severity.critical")}
                </span>
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800 ${circleAnimation}`}
                  style={{ animationDelay: "0.2s" }}
                >
                  {issuesByImpact.serious} {t("severity.serious")}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800 ${circleAnimation}`}
                  style={{ animationDelay: "0.3s" }}
                >
                  {issuesByImpact.moderate} {t("severity.moderate")}
                </span>
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 ${circleAnimation}`}
                  style={{ animationDelay: "0.4s" }}
                >
                  {issuesByImpact.minor} {t("severity.minor")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Export-Funktionen - "Link kopieren" entfernt und PDF-Button prominenter */}
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex justify-center">
        <button
          onClick={downloadPdf}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base font-semibold flex items-center shadow-md transition-all hover:shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          {language === "de"
            ? "PDF-Bericht herunterladen"
            : "Download PDF Report"}
        </button>
      </div>

      {/* Tabs - füge WCAG 2.1 Tab hinzu */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-6 py-3 text-center border-b-2 font-medium text-sm ${
              activeTab === "overview"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            aria-current={activeTab === "overview" ? "page" : undefined}
          >
            {t("results.overview")}
          </button>
          <button
            onClick={() => setActiveTab("wcag")}
            className={`px-6 py-3 text-center border-b-2 font-medium text-sm ${
              activeTab === "wcag"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            aria-current={activeTab === "wcag" ? "page" : undefined}
          >
            {language === "de" ? "WCAG 2.1 Konformität" : "WCAG 2.1 Conformity"}
          </button>
          <button
            onClick={() => setActiveTab("issues")}
            className={`px-6 py-3 text-center border-b-2 font-medium text-sm ${
              activeTab === "issues"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            aria-current={activeTab === "issues" ? "page" : undefined}
          >
            {t("results.details")}
          </button>
          <button
            onClick={() => setActiveTab("tips")}
            className={`px-6 py-3 text-center border-b-2 font-medium text-sm ${
              activeTab === "tips"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            aria-current={activeTab === "tips" ? "page" : undefined}
          >
            {t("results.tips")}
          </button>
        </nav>
      </div>

      {/* Tab Inhalte */}
      <div className="p-6">
        {/* Übersicht - ohne WCAG Konformität, aber mit Tooltips für Kategorien */}
        {activeTab === "overview" && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {t("results.categories")}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
              {sortedCategories.length > 0 ? (
                sortedCategories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div>
                      {/* Tooltip wieder hinzufügen, aber nur für Kategorien */}
                      <Tooltip
                        text={getTooltip(category.name, language)}
                        position={index % 2 === 0 ? "left" : "right"}
                      >
                        <span className="font-medium text-gray-800 border-b border-dotted border-blue-400 cursor-help">
                          {translateCategory(category.name, language)}
                        </span>
                      </Tooltip>
                    </div>
                    <div className="flex items-center">
                      <div className="w-14 h-14 relative mr-3">
                        <svg
                          className={`w-14 h-14 ${circleAnimation}`}
                          style={{ animationDelay: `${index * 0.05}s` }}
                          viewBox="0 0 36 36"
                        >
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="3"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke={
                              category.count > 10
                                ? "#ef4444"
                                : category.count > 5
                                ? "#f97316"
                                : category.count > 0
                                ? "#f59e0b"
                                : "#10b981"
                            }
                            strokeWidth="3"
                            strokeDasharray={`${Math.min(
                              category.count * 10,
                              100
                            )}, 100`}
                            strokeLinecap="round"
                            className={
                              animateCircles ? "animate-circle-progress" : ""
                            }
                          />
                          <text
                            x="18"
                            y="20.5"
                            textAnchor="middle"
                            fontSize="12"
                            fontWeight="bold"
                            fill="currentColor"
                            className="text-gray-900"
                          >
                            {category.count}
                          </text>
                        </svg>
                      </div>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 shadow-sm">
                        {category.count}{" "}
                        {language === "de"
                          ? "betroffene Elemente"
                          : "affected elements"}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 col-span-2">
                  {t("results.congrats")}
                </p>
              )}
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">
                {language === "de"
                  ? "Barrierefreiheits-Bewertung:"
                  : "Accessibility Assessment:"}
              </h4>
              <p className="text-gray-700 mb-4">
                {language === "de"
                  ? `Die automatische Analyse hat ${
                      Object.keys(result.issuesByCategory).length
                    } Fehlerarten mit insgesamt ${totalAffectedElements} betroffenen Elementen auf Ihrer Website gefunden.`
                  : `The automated analysis found ${
                      Object.keys(result.issuesByCategory).length
                    } error types with a total of ${totalAffectedElements} affected elements on your website.`}
                {result.score >= 90
                  ? language === "de"
                    ? " Ihre Website erfüllt bereits die meisten Barrierefreiheitsanforderungen. Mit einigen wenigen Verbesserungen können Sie vollständige Konformität erreichen."
                    : " Your website already meets most accessibility requirements. With a few improvements, you can achieve full compliance."
                  : result.score >= 70
                  ? language === "de"
                    ? " Ihre Website erfüllt viele Barrierefreiheitsanforderungen, weist jedoch noch einige wichtige Mängel auf, die behoben werden sollten."
                    : " Your website meets many accessibility requirements, but still has some important issues that should be addressed."
                  : result.score >= 50
                  ? language === "de"
                    ? " Ihre Website hat erhebliche Barrierefreiheitsprobleme, die behoben werden müssen, um grundlegende Zugänglichkeit zu gewährleisten."
                    : " Your website has significant accessibility issues that need to be addressed to ensure basic accessibility."
                  : language === "de"
                  ? " Ihre Website weist schwerwiegende Barrierefreiheitsprobleme auf, die dringend behoben werden müssen."
                  : " Your website has serious accessibility issues that need to be addressed urgently."}
              </p>
              <div className="text-sm text-gray-600">
                <strong>{language === "de" ? "Hinweis:" : "Note:"}</strong>{" "}
                {language === "de"
                  ? "Diese automatisierte Prüfung kann einige Probleme nicht erkennen. Eine manuelle Überprüfung wird empfohlen."
                  : "This automated check may not detect all issues. A manual review is recommended."}
              </div>
            </div>

            {/* Neu: Button für Kontaktaufnahme */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={contactSupport}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {language === "de"
                  ? "Diese Probleme beheben lassen (Kontakt)"
                  : "Get help fixing these issues (Contact)"}
              </button>
            </div>
          </div>
        )}

        {/* WCAG 2.1 Konformität - separater Tab */}
        {activeTab === "wcag" && (
          <div>
            <WcagConformity
              results={result}
              onAnalysisComplete={() => setAnimateCircles(true)}
            />
          </div>
        )}

        {/* Probleme im Detail */}
        {activeTab === "issues" && <DetailedIssues result={result} />}

        {/* Verbesserungstipps */}
        {activeTab === "tips" && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {t("results.tips")}
            </h3>
            <div className="bg-blue-50 p-5 rounded-lg">
              <ul className="space-y-3">
                {result.improvementTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className={`h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0 ${circleAnimation}`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Footer mit Disclaimer */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">{t("results.disclaimer")}</p>
      </div>
    </div>
  );
}
