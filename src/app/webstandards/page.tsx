"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/layout/LanguageContext";

export default function Webstandards() {
  const { language } = useLanguage();

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {language === "de"
              ? "Webstandards & technische Leitfäden"
              : "Web Standards & Technical Guidelines"}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {language === "de"
              ? "Informationen zu relevanten Webstandards, Best Practices und technischen Leitfäden zur Umsetzung barrierefreier Webseiten."
              : "Information on relevant web standards, best practices, and technical guidelines for implementing accessible websites."}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mt-16">
          {/* Main Content */}
          <div className="flex-grow">
            <section id="einleitung" className="mb-16">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                {language === "de"
                  ? "Warum Webstandards wichtig sind"
                  : "Why Web Standards Are Important"}
              </h2>
              <p className="mb-4 text-base text-gray-700 leading-relaxed">
                {language === "de"
                  ? "Webstandards sind die technische Grundlage des Internets und sorgen für Konsistenz, Interoperabilität und Zugänglichkeit im Web. Die Einhaltung dieser Standards ist nicht nur technisch sinnvoll, sondern auch rechtlich relevant, insbesondere im Kontext des Barrierefreiheitsstärkungsgesetzes (BFSG)."
                  : "Web standards are the technical foundation of the internet and ensure consistency, interoperability, and accessibility on the web. Adhering to these standards is not only technically sensible but also legally relevant, especially in the context of the Accessibility Strengthening Act (BFSG)."}
              </p>

              <p className="mb-6 text-base text-gray-700 leading-relaxed">
                {language === "de"
                  ? "Standardkonforme Websites bieten zahlreiche Vorteile:"
                  : "Standards-compliant websites offer numerous advantages:"}
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2 text-base text-gray-700">
                <li>
                  {language === "de"
                    ? "Bessere Zugänglichkeit für Menschen mit Behinderungen"
                    : "Better accessibility for people with disabilities"}
                </li>
                <li>
                  {language === "de"
                    ? "Höhere Kompatibilität mit unterschiedlichen Browsern und Geräten"
                    : "Higher compatibility with different browsers and devices"}
                </li>
                <li>
                  {language === "de"
                    ? "Verbesserte Suchmaschinenoptimierung (SEO)"
                    : "Improved search engine optimization (SEO)"}
                </li>
                <li>
                  {language === "de"
                    ? "Einfachere Wartbarkeit und Weiterentwicklung"
                    : "Easier maintenance and further development"}
                </li>
                <li>
                  {language === "de"
                    ? "Rechtssicherheit im Kontext der geltenden Gesetzgebung"
                    : "Legal certainty in the context of applicable legislation"}
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {language === "de"
                    ? "Das Wichtigste in Kürze"
                    : "Key Points in Brief"}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {language === "de"
                    ? "Die Einhaltung von Webstandards ist keine optionale Maßnahme mehr, sondern wird durch das BFSG, die EU-Richtlinie 2016/2102 und nationale Gesetzgebungen zunehmend verpflichtend. Unternehmen und öffentliche Stellen müssen ihre digitalen Angebote entsprechend anpassen, um Barrierefreiheit zu gewährleisten."
                    : "Compliance with web standards is no longer an optional measure but is increasingly becoming mandatory through the BFSG, EU Directive 2016/2102, and national legislation. Companies and public authorities must adapt their digital offerings accordingly to ensure accessibility."}
                </p>
              </div>
            </section>

            <section id="standards" className="mb-16">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                {language === "de"
                  ? "Übersicht der relevanten Standards"
                  : "Overview of Relevant Standards"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border-l-4 border-blue-600 p-4 bg-white rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    WCAG 2.1 / 2.2
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {language === "de"
                      ? "Web Content Accessibility Guidelines – der internationale Standard für barrierefreie Webinhalte, entwickelt vom W3C. Die Versionen 2.1 und 2.2 erweitern die Basis-Version 2.0 um zusätzliche Erfolgskriterien."
                      : "Web Content Accessibility Guidelines – the international standard for accessible web content, developed by the W3C. Versions 2.1 and 2.2 extend the base version 2.0 with additional success criteria."}
                  </p>
                </div>

                <div className="border-l-4 border-teal-500 p-4 bg-white rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">BITV 2.0</h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {language === "de"
                      ? "Die Barrierefreie-Informationstechnik-Verordnung setzt in Deutschland die EU-Richtlinie um und definiert Anforderungen für öffentliche Stellen des Bundes. Sie basiert auf den WCAG-Kriterien."
                      : "The Barrier-Free Information Technology Ordinance implements the EU Directive in Germany and defines requirements for federal public authorities. It is based on the WCAG criteria."}
                  </p>
                </div>

                <div className="border-l-4 border-amber-500 p-4 bg-white rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    EN 301 549
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {language === "de"
                      ? "Die europäische Norm für barrierefreie IKT-Produkte und -Dienste. Sie dient als technische Grundlage für die Umsetzung der EU-Richtlinien zur digitalen Barrierefreiheit."
                      : "The European standard for accessible ICT products and services. It serves as the technical basis for implementing the EU directives on digital accessibility."}
                  </p>
                </div>

                <div className="border-l-4 border-indigo-500 p-4 bg-white rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    EU-Richtlinie 2016/2102
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {language === "de"
                      ? "Die EU-Richtlinie über den barrierefreien Zugang zu Websites und mobilen Anwendungen öffentlicher Stellen. Sie verpflichtet öffentliche Stellen zur Einhaltung der EN 301 549."
                      : "The EU Directive on the accessibility of websites and mobile applications of public sector bodies. It obliges public authorities to comply with EN 301 549."}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <details className="bg-gray-50 p-4 rounded-lg">
                  <summary className="font-medium cursor-pointer text-lg text-gray-900 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {language === "de"
                      ? "WCAG 2.1 / 2.2 im Detail"
                      : "WCAG 2.1 / 2.2 in Detail"}
                  </summary>
                  <div className="mt-4">
                    <p className="mb-4 text-base text-gray-700 leading-relaxed">
                      {language === "de"
                        ? "Die Web Content Accessibility Guidelines (WCAG) sind in vier Hauptprinzipien unterteilt:"
                        : "The Web Content Accessibility Guidelines (WCAG) are divided into four main principles:"}
                    </p>

                    <ol className="list-decimal pl-6 space-y-4 mb-4">
                      <li className="text-base text-gray-700 leading-relaxed">
                        <strong>
                          {language === "de" ? "Wahrnehmbar:" : "Perceivable:"}
                        </strong>{" "}
                        {language === "de"
                          ? "Informationen und Komponenten der Benutzeroberfläche müssen für die Benutzer wahrnehmbar sein."
                          : "Information and user interface components must be presentable to users in ways they can perceive."}
                      </li>
                      <li className="text-base text-gray-700 leading-relaxed">
                        <strong>
                          {language === "de" ? "Bedienbar:" : "Operable:"}
                        </strong>{" "}
                        {language === "de"
                          ? "Die Komponenten der Benutzeroberfläche und die Navigation müssen bedienbar sein."
                          : "User interface components and navigation must be operable."}
                      </li>
                      <li className="text-base text-gray-700 leading-relaxed">
                        <strong>
                          {language === "de"
                            ? "Verständlich:"
                            : "Understandable:"}
                        </strong>{" "}
                        {language === "de"
                          ? "Die Informationen und die Bedienung der Benutzeroberfläche müssen verständlich sein."
                          : "Information and the operation of the user interface must be understandable."}
                      </li>
                      <li className="text-base text-gray-700 leading-relaxed">
                        <strong>
                          {language === "de" ? "Robust:" : "Robust:"}
                        </strong>{" "}
                        {language === "de"
                          ? "Inhalte müssen robust genug sein, um von verschiedenen Benutzeragenten, einschließlich Hilfstechnologien, zuverlässig interpretiert werden zu können."
                          : "Content must be robust enough to be reliably interpreted by a wide variety of user agents, including assistive technologies."}
                      </li>
                    </ol>

                    <p className="mb-4 text-base text-gray-700 leading-relaxed">
                      {language === "de"
                        ? "Jedes dieser Prinzipien enthält spezifische Richtlinien mit Erfolgskriterien auf drei Konformitätsstufen (A, AA, AAA)."
                        : "Each of these principles contains specific guidelines with success criteria at three levels of conformance (A, AA, AAA)."}
                    </p>

                    <p className="text-base text-gray-700 leading-relaxed">
                      <strong>
                        {language === "de"
                          ? "Was ist neu in WCAG 2.2?"
                          : "What's new in WCAG 2.2?"}
                      </strong>{" "}
                      {language === "de"
                        ? "Die Version 2.2 hat 9 neue Erfolgskriterien hinzugefügt, die besonders mobile Barrierefreiheit, kognitive Einschränkungen und Low Vision verbessern."
                        : "Version 2.2 has added 9 new success criteria that particularly improve mobile accessibility, cognitive limitations, and low vision."}
                    </p>
                  </div>
                </details>

                <details className="bg-gray-50 p-4 rounded-lg">
                  <summary className="font-medium cursor-pointer text-lg text-gray-900 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {language === "de"
                      ? "EU-Richtlinie & BFSG: Zeitplan und Anforderungen"
                      : "EU Directive & BFSG: Timeline and Requirements"}
                  </summary>
                  <div className="mt-4">
                    <p className="mb-4 text-base text-gray-700 leading-relaxed">
                      {language === "de"
                        ? "Die EU-Richtlinie 2016/2102 verpflichtet öffentliche Stellen zur Barrierefreiheit ihrer Websites und Apps. In Deutschland wurde diese Richtlinie durch die BITV 2.0 umgesetzt."
                        : "EU Directive 2016/2102 requires public sector bodies to make their websites and apps accessible. In Germany, this directive was implemented through BITV 2.0."}
                    </p>

                    <p className="mb-4 text-base text-gray-700 leading-relaxed">
                      {language === "de"
                        ? "Das Barrierefreiheitsstärkungsgesetz (BFSG) setzt die EU-Richtlinie 2019/882 (European Accessibility Act) um und erweitert die Anforderungen auf die Privatwirtschaft:"
                        : "The Accessibility Strengthening Act (BFSG) implements EU Directive 2019/882 (European Accessibility Act) and extends the requirements to the private sector:"}
                    </p>

                    <ul className="list-disc pl-6 mb-4 space-y-2 text-base text-gray-700">
                      <li>
                        {language === "de" ? `Ab dem ` : `From `}
                        <strong className="text-blue-800">
                          {language === "de"
                            ? "28. Juni 2025"
                            : "June 28, 2025"}
                        </strong>
                        {language === "de"
                          ? " müssen neue Produkte und Dienstleistungen barrierefrei sein"
                          : ", new products and services must be accessible"}
                      </li>
                      <li>
                        {language === "de"
                          ? "Für bestehende Produkte und Dienstleistungen gilt eine Übergangsfrist bis "
                          : "For existing products and services, there is a transition period until "}
                        <strong className="text-blue-800">
                          {language === "de"
                            ? "28. Juni 2030"
                            : "June 28, 2030"}
                        </strong>
                      </li>
                      <li>
                        {language === "de"
                          ? "Dienstleistungsverträge können unverändert bis maximal "
                          : "Service contracts can remain unchanged until at most "}
                        <strong className="text-blue-800">
                          {language === "de"
                            ? "28. Juni 2030"
                            : "June 28, 2030"}
                        </strong>
                        {language === "de" ? " weiterlaufen" : ""}
                      </li>
                    </ul>

                    <p className="text-base text-gray-700 leading-relaxed">
                      {language === "de"
                        ? "Das BFSG betrifft u.a. E-Commerce, Bankdienstleistungen, E-Books und zahlreiche weitere digitale Angebote."
                        : "The BFSG affects e-commerce, banking services, e-books, and numerous other digital offerings."}
                    </p>
                  </div>
                </details>
              </div>
            </section>

            <section id="best-practices" className="mb-16">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                {language === "de"
                  ? "Best Practices für barrierefreies Webdesign"
                  : "Best Practices for Accessible Web Design"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                    {language === "de"
                      ? "Struktur & Navigation"
                      : "Structure & Navigation"}
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 mb-6 text-base text-gray-700">
                    <li>
                      {language === "de"
                        ? "Logische und hierarchische Überschriftenstruktur (H1-H6)"
                        : "Logical and hierarchical heading structure (H1-H6)"}
                    </li>
                    <li>
                      {language === "de"
                        ? "Strukturierte Inhalte mit semantischem HTML5"
                        : "Structured content with semantic HTML5"}
                    </li>
                    <li>
                      {language === "de"
                        ? "Konsistente und vorhersehbare Navigation"
                        : "Consistent and predictable navigation"}
                    </li>
                    <li>
                      {language === "de"
                        ? "Skip-Links für Tastaturnutzer"
                        : "Skip links for keyboard users"}
                    </li>
                    <li>
                      {language === "de"
                        ? "Aussagekräftige Linkbeschreibungen"
                        : "Meaningful link descriptions"}
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                    {language === "de"
                      ? "Farben & Kontraste"
                      : "Colors & Contrasts"}
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 mb-6 text-base text-gray-700">
                    <li>
                      {language === "de"
                        ? "Ausreichender Kontrastunterschied (mindestens 4,5:1)"
                        : "Sufficient contrast ratio (at least 4.5:1)"}
                    </li>
                    <li>
                      {language === "de"
                        ? "Keine Informationsvermittlung ausschließlich durch Farbe"
                        : "No information conveyed solely through color"}
                    </li>
                    <li>
                      {language === "de"
                        ? "Fokus-Indikatoren deutlich sichtbar gestalten"
                        : "Make focus indicators clearly visible"}
                    </li>
                    <li>
                      {language === "de"
                        ? "Flexible Layouts mit relativen Einheiten (rem, em)"
                        : "Flexible layouts with relative units (rem, em)"}
                    </li>
                    <li>
                      {language === "de"
                        ? "Designs, die hohen Zoom-Faktor unterstützen (bis 200%)"
                        : "Designs that support high zoom factors (up to 200%)"}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-4 my-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {language === "de"
                    ? "Tipp: Mobile-First-Design"
                    : "Tip: Mobile-First Design"}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {language === "de"
                    ? "Ein Mobile-First-Ansatz führt oft zu klareren, fokussierteren und leichter zugänglichen Interfaces. Viele der Anforderungen für barrierefreies Design überschneiden sich mit bewährten Praktiken für mobile Designs: übersichtliche Strukturen, klare Touch-Targets und eine vereinfachte Navigation kommen allen Nutzern zugute."
                    : "A mobile-first approach often leads to clearer, more focused, and more accessible interfaces. Many of the requirements for accessible design overlap with best practices for mobile designs: clear structures, distinct touch targets, and simplified navigation benefit all users."}
                </p>
              </div>
            </section>

            <section id="resourcen" className="mb-16">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                {language === "de"
                  ? "Externe Ressourcen"
                  : "External Resources"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href="https://www.w3.org/WAI/WCAG21/quickref/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-blue-700 mb-2 flex items-center">
                    <span>WCAG 2.1 QuickRef</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {language === "de"
                      ? "Interaktive Referenz für die Web Content Accessibility Guidelines mit Filteroptionen für alle Erfolgskriterien."
                      : "Interactive reference for the Web Content Accessibility Guidelines with filter options for all success criteria."}
                  </p>
                </a>

                <a
                  href="https://www.bitvtest.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-blue-700 mb-2 flex items-center">
                    <span>BITV-Test</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {language === "de"
                      ? "Der BITV-Test ist ein Prüfverfahren für die Barrierefreiheit von Webseiten nach BITV 2.0."
                      : "The BITV test is a testing procedure for the accessibility of websites according to BITV 2.0."}
                  </p>
                </a>

                <a
                  href="https://www.deque.com/axe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-blue-700 mb-2 flex items-center">
                    <span>axe DevTools</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {language === "de"
                      ? "Browser-Erweiterung für automatisierte Barrierefreiheitstests während der Entwicklung."
                      : "Browser extension for automated accessibility testing during development."}
                  </p>
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/4 lg:min-w-[250px]">
            <aside className="lg:sticky lg:top-24">
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-medium text-gray-800 mb-3">
                  {language === "de" ? "Inhalt" : "Content"}
                </h3>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#einleitung"
                        className="text-blue-600 hover:underline"
                      >
                        {language === "de"
                          ? "Warum Webstandards wichtig sind"
                          : "Why Web Standards Are Important"}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#standards"
                        className="text-blue-600 hover:underline"
                      >
                        {language === "de"
                          ? "Übersicht der relevanten Standards"
                          : "Overview of Relevant Standards"}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#best-practices"
                        className="text-blue-600 hover:underline"
                      >
                        {language === "de"
                          ? "Best Practices für Webdesign"
                          : "Best Practices for Web Design"}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#resourcen"
                        className="text-blue-600 hover:underline"
                      >
                        {language === "de"
                          ? "Externe Ressourcen"
                          : "External Resources"}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-4">
                  {language === "de" ? "Mehr erfahren" : "Learn More"}
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/gesetzliche-grundlagen"
                      className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {language === "de" ? "BFSG Grundlagen" : "BFSG Basics"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/was-bedeutet-barrierefrei"
                      className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      {language === "de" ? "Barrierefreiheit" : "Accessibility"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/accessibility-check"
                      className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                      {language === "de"
                        ? "Accessibility Check"
                        : "Accessibility Check"}
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
