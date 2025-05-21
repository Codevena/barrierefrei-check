"use client";

import React from "react";
import { useLanguage } from "@/components/layout/LanguageContext";

export default function GesetzlicheGrundlagen() {
  const { language } = useLanguage();

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {language === "de" ? "Gesetzliche Grundlagen" : "Legal Foundations"}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {language === "de"
              ? "Das Barrierefreiheitsstärkungsgesetz (BFSG) setzt die europäische Richtlinie 2019/882 (European Accessibility Act) in deutsches Recht um und stellt neue Anforderungen an die Barrierefreiheit von Produkten und Dienstleistungen."
              : "The Accessibility Strengthening Act (BFSG) transposes the European Directive 2019/882 (European Accessibility Act) into German law and establishes new requirements for the accessibility of products and services."}
          </p>
        </div>

        {/* Hauptinformationen */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="bg-blue-50 p-6 rounded-lg mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {language === "de"
                ? "Wichtige Informationen zum BFSG"
                : "Important Information about the BFSG"}
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  {language === "de"
                    ? "Am 28. Juni 2025 tritt das Gesetz vollständig in Kraft."
                    : "The law will fully come into effect on June 28, 2025."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  {language === "de"
                    ? "Übergangsfristen für Dienstleistungsverträge, die vor dem 28. Juni 2025 geschlossen wurden, gelten bis zum 28. Juni 2030."
                    : "Transitional periods for service contracts concluded before June 28, 2025, will apply until June 28, 2030."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  {language === "de"
                    ? "Selbstbedienungsterminals dürfen bis zum Ende ihrer wirtschaftlichen Nutzungsdauer, längstens aber bis zum 28. Juni 2045, verwendet werden."
                    : "Self-service terminals may be used until the end of their economic life, but no later than June 28, 2045."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  {language === "de"
                    ? "Mikrounternehmen, die Dienstleistungen anbieten (weniger als 10 Mitarbeiter und Jahresumsatz von höchstens 2 Mio. Euro), sind von den Anforderungen ausgenommen."
                    : "Microenterprises providing services (fewer than 10 employees and annual turnover not exceeding €2 million) are exempt from the requirements."}
                </span>
              </li>
            </ul>
          </div>

          {/* Timeline */}
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
            {language === "de" ? "Zeitlicher Ablauf" : "Timeline"}
          </h2>
          <div className="relative">
            <div
              className="absolute top-0 left-1 w-1 h-full bg-blue-200"
              aria-hidden="true"
            ></div>
            <div className="space-y-12">
              {/* 2019 */}
              <div className="relative pl-12">
                <div className="absolute -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  {language === "de" ? "April 2019" : "April 2019"}
                </h3>
                <p className="mt-2 text-base text-gray-700">
                  {language === "de"
                    ? "Die EU verabschiedet die Richtlinie 2019/882 (European Accessibility Act), die europaweit einheitliche Anforderungen an die Barrierefreiheit von Produkten und Dienstleistungen festlegt."
                    : "The EU adopts Directive 2019/882 (European Accessibility Act), which establishes uniform requirements for the accessibility of products and services throughout Europe."}
                </p>
              </div>

              {/* 2021 */}
              <div className="relative pl-12">
                <div className="absolute -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  {language === "de" ? "Juni 2021" : "June 2021"}
                </h3>
                <p className="mt-2 text-base text-gray-700">
                  {language === "de"
                    ? "Das Barrierefreiheitsstärkungsgesetz (BFSG) wird in Deutschland verabschiedet. Es setzt die europäische Richtlinie in nationales Recht um und definiert konkrete Anforderungen an Barrierefreiheit."
                    : "The Accessibility Strengthening Act (BFSG) is passed in Germany. It transposes the European directive into national law and defines specific accessibility requirements."}
                </p>
              </div>

              {/* 2022 */}
              <div className="relative pl-12">
                <div className="absolute -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  {language === "de" ? "Juli 2022" : "July 2022"}
                </h3>
                <p className="mt-2 text-base text-gray-700">
                  {language === "de"
                    ? "Erste Teile des BFSG treten in Kraft, hauptsächlich organisatorische und verfahrenstechnische Regelungen."
                    : "First parts of the BFSG come into force, mainly organizational and procedural regulations."}
                </p>
              </div>

              {/* 2025 */}
              <div className="relative pl-12">
                <div className="absolute -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  {language === "de" ? "28. Juni 2025" : "June 28, 2025"}
                </h3>
                <p className="mt-2 text-base text-gray-700">
                  <strong>
                    {language === "de"
                      ? "Inkrafttreten aller Regelungen des BFSG:"
                      : "All BFSG regulations come into effect:"}
                  </strong>{" "}
                  {language === "de"
                    ? "Ab diesem Datum müssen alle neuen Produkte und Dienstleistungen, die in den Anwendungsbereich des Gesetzes fallen, die Barrierefreiheitsanforderungen erfüllen."
                    : "From this date, all new products and services falling within the scope of the law must meet the accessibility requirements."}
                </p>
              </div>

              {/* 2030 */}
              <div className="relative pl-12">
                <div className="absolute -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  {language === "de" ? "28. Juni 2030" : "June 28, 2030"}
                </h3>
                <p className="mt-2 text-base text-gray-700">
                  <strong>
                    {language === "de"
                      ? "Ende der Übergangsfrist für Dienstleistungsverträge:"
                      : "End of transitional period for service contracts:"}
                  </strong>{" "}
                  {language === "de"
                    ? "Auch Dienstleistungen, die auf Verträgen vor dem 28. Juni 2025 basieren, müssen nun die Barrierefreiheitsanforderungen erfüllen."
                    : "Services based on contracts concluded before June 28, 2025 must now also meet the accessibility requirements."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Betroffene Produkte und Dienstleistungen */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
            {language === "de"
              ? "Betroffene Produkte und Dienstleistungen"
              : "Affected Products and Services"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {language === "de" ? "Produkte" : "Products"}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
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
                    ? "Computer und Betriebssysteme"
                    : "Computers and operating systems"}
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
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
                    ? "Selbstbedienungsterminals "
                    : "Self-service terminals"}
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
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
                    ? "Smartphones und andere Verbraucherendgeräte"
                    : "Smartphones and other consumer devices"}
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
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
                  {language === "de" ? "E-Book-Reader" : "E-book readers"}
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
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
                    ? "Geräte für digitales Fernsehen"
                    : "Digital TV equipment"}
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {language === "de" ? "Dienstleistungen" : "Services"}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
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
                    ? "Websites und mobile Anwendungen"
                    : "Websites and mobile applications"}
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
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
                    ? "Elektronische Tickets und Check-in-Dienste"
                    : "Electronic tickets and check-in services"}
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
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
                    ? "Elektronische Kommunikationsdienste"
                    : "Electronic communication services"}
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
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
                    ? "Bankdienstleistungen"
                    : "Banking services"}
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
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
                    ? "E-Books und E-Commerce"
                    : "E-books and e-commerce"}
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
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
                    ? "Personenverkehrsdienste"
                    : "Passenger transport services"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
