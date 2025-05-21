"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

type Language = "de" | "en";

interface LanguageContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// Übersetzungen für Deutsch und Englisch
const translations = {
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.legal": "Gesetzliche Grundlagen",
    "nav.accessibility": "Was bedeutet barrierefrei?",
    "nav.webstandards": "Webstandards",
    "nav.check": "Accessibility Check",
    "nav.contact": "Kontakt",

    // Startseite
    "home.title": "Barrierefreiheitsstärkungsgesetz",
    "home.description":
      "Ab dem 28. Juni 2025 tritt das Barrierefreiheitsstärkungsgesetz (BFSG) in Kraft. Es verpflichtet Unternehmen, ihre digitalen Produkte und Dienstleistungen barrierefrei zu gestalten.",
    "home.check": "Website prüfen",
    "home.checkAriaLabel": "Website auf Barrierefreiheit prüfen",
    "home.learnMore": "Mehr erfahren",
    "home.learnMoreAriaLabel": "Mehr über die gesetzlichen Grundlagen erfahren",
    "home.heroImageAlt":
      "Barrierefreier Zugang symbolisiert durch verschiedene Nutzungsmöglichkeiten eines Computers",

    // Startseite Info-Sektion
    "home.infoHeading": "BFSG 2025",
    "home.infoSubheading": "Was bedeutet das für Sie?",
    "home.infoDescription":
      "Das Barrierefreiheitsstärkungsgesetz (BFSG) legt neue Standards für digitale Produkte und Dienstleistungen fest, um Menschen mit Behinderungen einen besseren Zugang zu ermöglichen.",

    // Startseite Features
    "home.feature1Title": "Inkrafttreten & Fristen",
    "home.feature1Description":
      "Das Gesetz tritt am 28. Juni 2025 in Kraft. Für bestehende Produkte gibt es Übergangsfristen bis 2030.",
    "home.feature2Title": "Betroffene Unternehmen",
    "home.feature2Description":
      "Das BFSG gilt für Unternehmen, die digitale Produkte oder Dienstleistungen in der EU anbieten - unabhängig von der Unternehmensgröße.",
    "home.feature3Title": "Betroffene Produkte",
    "home.feature3Description":
      "Websites, Apps, E-Books, E-Commerce, Online-Banking und digitale Selbstbedienungsterminals müssen barrierefrei gestaltet werden.",
    "home.feature4Title": "Jetzt handeln",
    "home.feature4Description":
      "Starten Sie frühzeitig mit der Analyse und Anpassung Ihrer digitalen Angebote. Nutzen Sie unseren kostenlosen Accessibility Check.",

    // Startseite CTA-Sektion
    "home.ctaTitle": "Prüfen Sie Ihre Website auf Barrierefreiheit",
    "home.ctaDescription":
      "Unser kostenloser Accessibility Check analysiert Ihre Website und gibt Ihnen konkrete Handlungsempfehlungen zur Verbesserung der Barrierefreiheit.",
    "home.ctaButton": "Jetzt Website prüfen",
    "home.ctaLink": "Mehr zu Barrierefreiheit",

    // Accessibility Check
    "check.title": "Accessibility Check",
    "check.description":
      "Überprüfen Sie Ihre Website auf Barrierefreiheit und erhalten Sie konkrete Handlungsempfehlungen zur Verbesserung.",
    "check.enterUrl": "URL Ihrer Website eingeben",
    "check.placeholder": "https://www.example.com",
    "check.submit": "Website prüfen",
    "check.loading":
      "Die Website wird auf Barrierefreiheit überprüft. Dies kann einige Sekunden dauern...",

    // Ergebnisse
    "results.score": "Gesamtbewertung",
    "results.issuesFound": "Gefundene Probleme",
    "results.overview": "Übersicht",
    "results.details": "Probleme im Detail",
    "results.tips": "Verbesserungstipps",
    "results.categories": "Probleme nach Kategorien",
    "results.congrats": "Keine Probleme gefunden. Gratulation!",
    "results.disclaimer":
      "Dieser Check bietet eine automatisierte Bewertung der Barrierefreiheit nach WCAG 2.1 Richtlinien. Eine vollständige manuelle Prüfung durch Experten wird für kritische Anwendungen empfohlen.",

    // Bewertungen
    "rating.veryGood": "Sehr gut",
    "rating.good": "Gut",
    "rating.needsImprovement": "Verbesserungswürdig",
    "rating.problematic": "Problematisch",

    // Schweregrade
    "severity.critical": "Kritisch",
    "severity.serious": "Schwerwiegend",
    "severity.moderate": "Moderat",
    "severity.minor": "Gering",

    // Allgemein
    "general.problem": "Problem",
    "general.problems": "Probleme",
    "general.moreInfo": "Mehr Information",
    "general.examples": "Beispiele",
    "general.found": "gefunden",

    // Skip-Link
    skipLink: "Zum Hauptinhalt springen",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.legal": "Legal Basis",
    "nav.accessibility": "What is Accessibility?",
    "nav.webstandards": "Web Standards",
    "nav.check": "Accessibility Check",
    "nav.contact": "Contact",

    // Startseite
    "home.title": "Accessibility Strengthening Act",
    "home.description":
      "The Accessibility Strengthening Act (BFSG) will come into effect on June 28, 2025. It obliges companies to make their digital products and services accessible.",
    "home.check": "Check Website",
    "home.checkAriaLabel": "Check website for accessibility",
    "home.learnMore": "Learn more",
    "home.learnMoreAriaLabel": "Learn more about the legal basis",
    "home.heroImageAlt":
      "Accessible access symbolized by different ways of using a computer",

    // Startseite Info-Sektion
    "home.infoHeading": "BFSG 2025",
    "home.infoSubheading": "What does this mean for you?",
    "home.infoDescription":
      "The Accessibility Strengthening Act (BFSG) establishes new standards for digital products and services to provide better access for people with disabilities.",

    // Startseite Features
    "home.feature1Title": "Effective Date & Deadlines",
    "home.feature1Description":
      "The law comes into effect on June 28, 2025. For existing products, there are transition periods until 2030.",
    "home.feature2Title": "Affected Companies",
    "home.feature2Description":
      "The BFSG applies to companies offering digital products or services in the EU - regardless of company size.",
    "home.feature3Title": "Affected Products",
    "home.feature3Description":
      "Websites, apps, e-books, e-commerce, online banking, and digital self-service terminals must be made accessible.",
    "home.feature4Title": "Act Now",
    "home.feature4Description":
      "Start early with analyzing and adapting your digital offerings. Use our free Accessibility Check.",

    // Startseite CTA-Sektion
    "home.ctaTitle": "Check Your Website for Accessibility",
    "home.ctaDescription":
      "Our free Accessibility Check analyzes your website and gives you concrete recommendations for improving accessibility.",
    "home.ctaButton": "Check Website Now",
    "home.ctaLink": "More about Accessibility",

    // Accessibility Check
    "check.title": "Accessibility Check",
    "check.description":
      "Check your website for accessibility and receive concrete recommendations for improvement.",
    "check.enterUrl": "Enter your website URL",
    "check.placeholder": "https://www.example.com",
    "check.submit": "Check Website",
    "check.loading":
      "The website is being checked for accessibility. This may take a few seconds...",

    // Ergebnisse
    "results.score": "Overall Rating",
    "results.issuesFound": "Issues Found",
    "results.overview": "Overview",
    "results.details": "Detailed Issues",
    "results.tips": "Improvement Tips",
    "results.categories": "Issues by Category",
    "results.congrats": "No issues found. Congratulations!",
    "results.disclaimer":
      "This check provides an automated assessment of accessibility according to WCAG 2.1 guidelines. A complete manual review by experts is recommended for critical applications.",

    // Bewertungen
    "rating.veryGood": "Very Good",
    "rating.good": "Good",
    "rating.needsImprovement": "Needs Improvement",
    "rating.problematic": "Problematic",

    // Schweregrade
    "severity.critical": "Critical",
    "severity.serious": "Serious",
    "severity.moderate": "Moderate",
    "severity.minor": "Minor",

    // Allgemein
    "general.problem": "Issue",
    "general.problems": "Issues",
    "general.moreInfo": "More Information",
    "general.examples": "Examples",
    "general.found": "found",

    // Skip-Link
    skipLink: "Skip to main content",
  },
};

// Create the context with a default value
const LanguageContext = createContext<LanguageContextProps>({
  language: "de",
  setLanguage: () => {},
  t: (key: string) => key,
});

// Create a provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("de");

  // Load the language from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "de" || savedLanguage === "en")) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Set the language and save it to localStorage
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem("language", newLanguage);
    document.documentElement.lang = newLanguage;
  };

  // Translation function
  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  return useContext(LanguageContext);
}
