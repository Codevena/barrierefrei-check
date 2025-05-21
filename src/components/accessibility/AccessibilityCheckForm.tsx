"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/layout/LanguageContext";

interface AccessibilityCheckFormProps {
  onSubmit: (url: string) => Promise<void>;
  isLoading: boolean;
}

export default function AccessibilityCheckForm({
  onSubmit,
  isLoading,
}: AccessibilityCheckFormProps) {
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [validationMessage, setValidationMessage] = useState("");
  const { language, t } = useLanguage();

  const validateUrl = (
    value: string
  ): { isValid: boolean; processedUrl: string } => {
    if (!value.trim()) {
      setValidationMessage(
        language === "de"
          ? "Bitte geben Sie eine URL ein"
          : "Please enter a URL"
      );
      return { isValid: false, processedUrl: value };
    }

    let processedUrl = value;
    if (
      !processedUrl.startsWith("http://") &&
      !processedUrl.startsWith("https://")
    ) {
      processedUrl = "http://" + processedUrl;
    }

    try {
      const urlObj = new URL(processedUrl);
      if (!["http:", "https:"].includes(urlObj.protocol)) {
        setValidationMessage(
          language === "de"
            ? "Nur HTTP und HTTPS URLs werden unterstützt"
            : "Only HTTP and HTTPS URLs are supported"
        );
        return { isValid: false, processedUrl };
      }
      setValidationMessage("");
      return { isValid: true, processedUrl };
    } catch {
      setValidationMessage(
        language === "de"
          ? "Bitte geben Sie eine gültige URL ein (z.B. example.com oder www.example.com)"
          : "Please enter a valid URL (e.g. example.com or www.example.com)"
      );
      return { isValid: false, processedUrl: value };
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { isValid, processedUrl } = validateUrl(url);
    setIsValid(isValid);

    if (isValid) {
      onSubmit(processedUrl);
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    if (!isValid) {
      setIsValid(true);
      setValidationMessage("");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        {t("check.title")}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="url"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            {t("check.enterUrl")}
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow">
              <input
                type="text"
                id="url"
                name="url"
                placeholder={t("check.placeholder")}
                value={url}
                onChange={handleUrlChange}
                className={`w-full block rounded-md px-4 py-3 border ${
                  !isValid ? "border-red-500" : "border-gray-300"
                } shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:text-gray-900 focus:bg-white text-gray-900 bg-white placeholder:text-gray-500 disabled:bg-gray-100 disabled:text-gray-700 disabled:border-gray-300`}
                aria-describedby={!isValid ? "url-error" : undefined}
                aria-invalid={!isValid}
                disabled={isLoading}
              />
              {!isValid && (
                <p
                  className="mt-2 text-sm text-red-600"
                  id="url-error"
                  role="alert"
                >
                  {validationMessage}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {language === "de" ? "Prüfung läuft..." : "Checking..."}
                </>
              ) : (
                t("check.submit")
              )}
            </button>
          </div>
        </div>
      </form>
      <div className="mt-6 text-sm text-gray-600">
        <p className="mb-2">
          {language === "de"
            ? "Der Accessibility Check überprüft Ihre Website nach den WCAG 2.1 Richtlinien und gibt Ihnen:"
            : "The Accessibility Check reviews your website according to WCAG 2.1 guidelines and provides you with:"}
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            {language === "de"
              ? "Eine Gesamtbewertung der Barrierefreiheit in Prozent"
              : "An overall accessibility score as a percentage"}
          </li>
          <li>
            {language === "de"
              ? "Detaillierte Informationen zu gefundenen Problemen"
              : "Detailed information about identified issues"}
          </li>
          <li>
            {language === "de"
              ? "Konkrete Handlungsempfehlungen zur Verbesserung"
              : "Specific recommendations for improvement"}
          </li>
        </ul>
      </div>
    </div>
  );
}
