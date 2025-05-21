"use client";

import React from "react";
import { useLanguage } from "@/components/layout/LanguageContext";

export default function WasBedeutetBarrierefrei() {
  const { language } = useLanguage();

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {language === "de"
              ? "Was bedeutet barrierefrei?"
              : "What does accessibility mean?"}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {language === "de"
              ? "Digitale Barrierefreiheit bedeutet, dass Websites, Apps und elektronische Dokumente für alle Menschen zugänglich und nutzbar sind – unabhängig von ihren körperlichen oder kognitiven Fähigkeiten."
              : "Digital accessibility means that websites, apps, and electronic documents are accessible and usable for all people – regardless of their physical or cognitive abilities."}
          </p>
        </div>

        {/* WCAG Erklärung */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
              {language === "de"
                ? "WCAG 2.1 - Der internationale Standard"
                : "WCAG 2.1 - The International Standard"}
            </h2>
            <p className="text-lg text-gray-600">
              {language === "de" ? (
                <>
                  Die{" "}
                  <strong>
                    Web Content Accessibility Guidelines (WCAG) 2.1
                  </strong>{" "}
                  sind der international anerkannte Standard für
                  Barrierefreiheit im Web. Das BFSG fordert die Einhaltung der
                  WCAG 2.1 auf Konformitätsstufe AA.
                </>
              ) : (
                <>
                  The{" "}
                  <strong>
                    Web Content Accessibility Guidelines (WCAG) 2.1
                  </strong>{" "}
                  are the internationally recognized standard for web
                  accessibility. The BFSG requires compliance with WCAG 2.1 at
                  conformance level AA.
                </>
              )}
            </p>
            <p className="mt-4 text-lg text-gray-600">
              {language === "de"
                ? "Die WCAG basieren auf vier Grundprinzipien, die digitale Inhalte erfüllen müssen:"
                : "The WCAG are based on four core principles that digital content must fulfill:"}
            </p>
          </div>

          {/* Die vier WCAG-Prinzipien */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16">
            {/* Wahrnehmbar */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
                {language === "de" ? "1. Wahrnehmbar" : "1. Perceivable"}
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {language === "de"
                  ? "Informationen und Benutzeroberflächen müssen für alle Nutzer wahrnehmbar sein."
                  : "Information and user interfaces must be perceivable to all users."}
              </p>
              <ul className="mt-4 space-y-3 text-base text-gray-600">
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-blue-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {language === "de"
                    ? "Textalternativen für Nicht-Text-Inhalte"
                    : "Text alternatives for non-text content"}
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-blue-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {language === "de"
                    ? "Alternativen für zeitbasierte Medien"
                    : "Alternatives for time-based media"}
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-blue-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {language === "de"
                    ? "Anpassbare Darstellung von Inhalten"
                    : "Adaptable presentation of content"}
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-blue-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {language === "de"
                    ? "Ausreichender Kontrast"
                    : "Sufficient contrast"}
                </li>
              </ul>
            </div>

            {/* Bedienbar */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
                {language === "de" ? "2. Bedienbar" : "2. Operable"}
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {language === "de"
                  ? "Komponenten der Benutzeroberfläche und Navigation müssen bedienbar sein."
                  : "User interface components and navigation must be operable."}
              </p>
              <ul className="mt-4 space-y-3 text-base text-gray-600">
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {language === "de"
                    ? "Vollständige Tastaturbedienbarkeit"
                    : "Complete keyboard operability"}
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {language === "de"
                    ? "Ausreichend Zeit zur Bedienung"
                    : "Sufficient time for operation"}
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {language === "de"
                    ? "Vermeidung von Inhalten, die Anfälle auslösen können"
                    : "Avoiding content that could trigger seizures"}
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {language === "de"
                    ? "Navigationshilfen und Orientierung"
                    : "Navigation aids and orientation"}
                </li>
              </ul>
            </div>

            {/* Verständlich */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
                {language === "de" ? "3. Verständlich" : "3. Understandable"}
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {language === "de"
                  ? "Informationen und Bedienung der Benutzeroberfläche müssen verständlich sein."
                  : "Information and operation of the user interface must be understandable."}
              </p>
              <ul className="mt-4 space-y-3 text-base text-gray-600">
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-purple-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {language === "de"
                    ? "Lesbarkeit und Verständlichkeit von Texten"
                    : "Readability and comprehensibility of texts"}
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-purple-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {language === "de"
                    ? "Berechenbare Funktionsweise"
                    : "Predictable behavior"}
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-purple-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {language === "de"
                    ? "Hilfe bei der Eingabe und Fehlervermeidung"
                    : "Input assistance and error prevention"}
                </li>
              </ul>
            </div>

            {/* Robust */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
                {language === "de" ? "4. Robust" : "4. Robust"}
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {language === "de"
                  ? "Inhalte müssen robust genug sein, um von verschiedenen Benutzeragenten, einschließlich Hilfstechnologien, zuverlässig interpretiert werden zu können."
                  : "Content must be robust enough to be reliably interpreted by a wide variety of user agents, including assistive technologies."}
              </p>
              <ul className="mt-4 space-y-3 text-base text-gray-600">
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-amber-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {language === "de"
                    ? "Kompatibilität mit aktuellen und zukünftigen Technologien"
                    : "Compatibility with current and future technologies"}
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-amber-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {language === "de"
                    ? "Kompatibel mit Hilfstechnologien (Screenreader, etc.)"
                    : "Compatible with assistive technologies (screen readers, etc.)"}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Weitere Informationen */}
        <div className="mx-auto mt-20 max-w-2xl lg:max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
            {language === "de"
              ? "Wem hilft Barrierefreiheit?"
              : "Who benefits from accessibility?"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {language === "de"
                  ? "Menschen mit Behinderungen"
                  : "People with disabilities"}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  {language === "de"
                    ? "Sehbehinderte und blinde Menschen"
                    : "People with visual impairments and blindness"}
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  {language === "de"
                    ? "Hörbehinderte und gehörlose Menschen"
                    : "People with hearing impairments and deafness"}
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  {language === "de"
                    ? "Menschen mit motorischen Einschränkungen"
                    : "People with motor impairments"}
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  {language === "de"
                    ? "Menschen mit kognitiven Einschränkungen"
                    : "People with cognitive impairments"}
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {language === "de" ? "Ältere Menschen" : "Elderly people"}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  {language === "de"
                    ? "Nachlassende Sehkraft"
                    : "Declining vision"}
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  {language === "de"
                    ? "Verminderte Feinmotorik"
                    : "Reduced fine motor skills"}
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  {language === "de"
                    ? "Schwierigkeiten mit komplexen Oberflächen"
                    : "Difficulties with complex interfaces"}
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {language === "de" ? "Alle Nutzer" : "All users"}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  {language === "de"
                    ? "Menschen mit temporären Einschränkungen"
                    : "People with temporary limitations"}
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  {language === "de"
                    ? "Nutzer mit langsamen Internetverbindungen"
                    : "Users with slow internet connections"}
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  {language === "de"
                    ? "Nutzer von Sprachassistenten"
                    : "Users of voice assistants"}
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 flex-none text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  {language === "de"
                    ? "Mobile Nutzer in erschwerten Situationen"
                    : "Mobile users in challenging situations"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
