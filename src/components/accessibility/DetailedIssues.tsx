"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/layout/LanguageContext";
import { AccessibilityResult } from "@/app/accessibility-check/page";

interface DetailedIssuesProps {
  result: AccessibilityResult;
}

export default function DetailedIssues({ result }: DetailedIssuesProps) {
  const { language } = useLanguage();
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  // Übersetze Kategorienamen
  const translateCategory = (category: string): string => {
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

    // Versuche eine direkte Übersetzung zu finden
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

  // Übersetze und formatiere Schweregrad-Bezeichnungen
  const translateImpact = (impact: string): string => {
    switch (impact) {
      case "critical":
        return language === "de" ? "Kritisch" : "Critical";
      case "serious":
        return language === "de" ? "Schwerwiegend" : "Serious";
      case "moderate":
        return language === "de" ? "Moderat" : "Moderate";
      case "minor":
        return language === "de" ? "Geringfügig" : "Minor";
      default:
        return impact.charAt(0).toUpperCase() + impact.slice(1);
    }
  };

  // Bestimme die Farbklassen basierend auf dem Schweregrad
  const getImpactClasses = (
    impact: string
  ): {
    bg: string;
    text: string;
    border: string;
  } => {
    switch (impact) {
      case "critical":
        return {
          bg: "bg-red-100",
          text: "text-red-800",
          border: "border-red-200",
        };
      case "serious":
        return {
          bg: "bg-orange-100",
          text: "text-orange-800",
          border: "border-orange-200",
        };
      case "moderate":
        return {
          bg: "bg-yellow-100",
          text: "text-yellow-800",
          border: "border-yellow-200",
        };
      case "minor":
        return {
          bg: "bg-blue-100",
          text: "text-blue-800",
          border: "border-blue-200",
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-800",
          border: "border-gray-200",
        };
    }
  };

  // Funktion zum Umschalten einer Kategorie (auf/zuklappen)
  const toggleCategory = (category: string) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter((c) => c !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  // Texte basierend auf der Sprache
  const t = {
    detailedIssues:
      language === "de"
        ? "Detaillierte Problembeschreibung"
        : "Detailed Issue Description",
    errorType: language === "de" ? "Fehlertyp" : "error type",
    errorTypes: language === "de" ? "Fehlertypen" : "error types",
    elements: language === "de" ? "Elemente" : "elements",
    examples: language === "de" ? "Beispiele" : "Examples",
    found: language === "de" ? "gefunden" : "found",
    moreInfo: language === "de" ? "Mehr Informationen" : "More information",
    congrats:
      language === "de"
        ? "Glückwunsch! Es wurden keine Probleme gefunden."
        : "Congratulations! No issues were found.",
  };

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        {t.detailedIssues}
      </h3>
      {Object.keys(result.issuesByCategory).length > 0 ? (
        <div className="space-y-6">
          {Object.entries(result.issuesByCategory)
            .sort(([categoryA], [categoryB]) =>
              categoryA.localeCompare(categoryB)
            )
            .map(([category, issues]) => (
              <div
                key={category}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 text-left"
                >
                  <span className="font-medium text-gray-800">
                    {translateCategory(category)}
                  </span>
                  <span className="flex items-center text-gray-500">
                    <span className="mr-2 text-sm">
                      {issues.length}{" "}
                      {issues.length === 1 ? t.errorType : t.errorTypes}
                      {" - "}
                      {issues.reduce((sum, issue) => sum + issue.count, 0)}{" "}
                      {t.elements}
                    </span>
                    <svg
                      className={`h-5 w-5 transform ${
                        expandedCategories.includes(category)
                          ? "rotate-180"
                          : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                {expandedCategories.includes(category) && (
                  <div className="divide-y divide-gray-200">
                    {issues.map((issue, index) => {
                      const impactClasses = getImpactClasses(issue.impact);

                      return (
                        <div key={index} className="p-4">
                          <div className="flex items-start mb-2">
                            <div
                              className={`inline-flex items-center justify-center h-7 w-7 rounded-full mr-2 ${impactClasses.bg} ${impactClasses.text} border ${impactClasses.border}`}
                            >
                              <span className="text-sm font-bold">
                                {issue.impact === "critical"
                                  ? "C"
                                  : issue.impact === "serious"
                                  ? "S"
                                  : issue.impact === "moderate"
                                  ? "M"
                                  : "L"}
                              </span>
                            </div>
                            <h4 className="font-medium text-gray-900">
                              {issue.help}
                            </h4>
                            <span
                              className={`ml-2 px-2 py-0.5 rounded text-xs font-medium ${impactClasses.bg} ${impactClasses.text} border ${impactClasses.border}`}
                            >
                              {translateImpact(issue.impact)}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3 ml-8">
                            {issue.description}
                          </p>
                          <div className="ml-8">
                            <div className="text-sm font-medium text-gray-800 mb-1">
                              {t.examples} ({issue.count} {t.found}):
                            </div>
                            <div className="bg-gray-50 p-4 rounded-md text-base font-mono overflow-x-auto border border-gray-200 shadow-inner">
                              {issue.examples.map((example, i) => (
                                <div key={i} className="mb-2 last:mb-0">
                                  <code className="text-xs">
                                    {example.html}
                                  </code>
                                </div>
                              ))}
                            </div>
                            <a
                              href={issue.helpUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 mt-3"
                            >
                              {t.moreInfo}
                              <svg
                                className="ml-1 h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
        </div>
      ) : (
        <p className="text-gray-600">{t.congrats}</p>
      )}
    </div>
  );
}
