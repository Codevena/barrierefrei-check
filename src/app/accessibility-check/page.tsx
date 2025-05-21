"use client";

import React, { useState } from "react";
import AccessibilityCheckForm from "@/components/accessibility/AccessibilityCheckForm";
import AccessibilityResults from "@/components/accessibility/AccessibilityResults";
import { useLanguage } from "@/components/layout/LanguageContext";

export interface AccessibilityResult {
  url: string;
  score: number;
  totalIssues: number;
  totalTests?: number;
  categories: { name: string; count: number }[];
  issuesByCategory: {
    [key: string]: {
      id: string;
      impact: string;
      help: string;
      description: string;
      helpUrl: string;
      count: number;
      examples: { html: string; target: string[] }[];
    }[];
  };
  improvementTips: string[];
  timestamp: string;
  language?: string;
}

export default function AccessibilityCheck() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AccessibilityResult | null>(null);
  const { language } = useLanguage();

  const checkAccessibility = async (url: string) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/check-accessibility", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, language }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            (language === "de"
              ? "Ein Fehler ist aufgetreten"
              : "An error occurred")
        );
      }

      setResult(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : language === "de"
          ? "Ein unerwarteter Fehler ist aufgetreten"
          : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {language === "de" ? "Accessibility Check" : "Accessibility Check"}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {language === "de"
              ? "Überprüfen Sie Ihre Website auf Barrierefreiheit und erhalten Sie konkrete Handlungsempfehlungen zur Verbesserung."
              : "Check your website for accessibility and receive concrete recommendations for improvement."}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="bg-blue-50 p-8 rounded-lg mb-12">
            <AccessibilityCheckForm
              onSubmit={checkAccessibility}
              isLoading={loading}
            />
          </div>

          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-gray-700">
                {language === "de"
                  ? "Die Website wird auf Barrierefreiheit überprüft. Dies kann einige Sekunden dauern..."
                  : "The website is being checked for accessibility. This may take a few seconds..."}
              </p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border-l-4 border-red-600 p-4 mt-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          {result && <AccessibilityResults result={result} />}
        </div>
      </div>
    </div>
  );
}
