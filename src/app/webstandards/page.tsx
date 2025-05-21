import React from "react";
import Link from "next/link";

export default function Webstandards() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Webstandards & technische Leitfäden
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Informationen zu relevanten Webstandards, Best Practices und
            technischen Leitfäden zur Umsetzung barrierefreier Webseiten.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mt-16">
          {/* Main Content */}
          <div className="flex-grow">
            <section id="einleitung" className="mb-16">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                Warum Webstandards wichtig sind
              </h2>
              <p className="mb-4">
                Webstandards sind die technische Grundlage des Internets und
                sorgen für Konsistenz, Interoperabilität und Zugänglichkeit im
                Web. Die Einhaltung dieser Standards ist nicht nur technisch
                sinnvoll, sondern auch rechtlich relevant, insbesondere im
                Kontext des Barrierefreiheitsstärkungsgesetzes (BFSG).
              </p>

              <p className="mb-6">
                Standardkonforme Websites bieten zahlreiche Vorteile:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Bessere Zugänglichkeit für Menschen mit Behinderungen</li>
                <li>
                  Höhere Kompatibilität mit unterschiedlichen Browsern und
                  Geräten
                </li>
                <li>Verbesserte Suchmaschinenoptimierung (SEO)</li>
                <li>Einfachere Wartbarkeit und Weiterentwicklung</li>
                <li>Rechtssicherheit im Kontext der geltenden Gesetzgebung</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Das Wichtigste in Kürze
                </h3>
                <p>
                  Die Einhaltung von Webstandards ist keine optionale Maßnahme
                  mehr, sondern wird durch das BFSG, die EU-Richtlinie 2016/2102
                  und nationale Gesetzgebungen zunehmend verpflichtend.
                  Unternehmen und öffentliche Stellen müssen ihre digitalen
                  Angebote entsprechend anpassen, um Barrierefreiheit zu
                  gewährleisten.
                </p>
              </div>
            </section>

            <section id="standards" className="mb-16">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                Übersicht der relevanten Standards
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border-l-4 border-blue-600 p-4 bg-white rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    WCAG 2.1 / 2.2
                  </h3>
                  <p className="text-gray-700">
                    Web Content Accessibility Guidelines – der internationale
                    Standard für barrierefreie Webinhalte, entwickelt vom W3C.
                    Die Versionen 2.1 und 2.2 erweitern die Basis-Version 2.0 um
                    zusätzliche Erfolgskriterien.
                  </p>
                </div>

                <div className="border-l-4 border-teal-500 p-4 bg-white rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">BITV 2.0</h3>
                  <p className="text-gray-700">
                    Die Barrierefreie-Informationstechnik-Verordnung setzt in
                    Deutschland die EU-Richtlinie um und definiert Anforderungen
                    für öffentliche Stellen des Bundes. Sie basiert auf den
                    WCAG-Kriterien.
                  </p>
                </div>

                <div className="border-l-4 border-amber-500 p-4 bg-white rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    EN 301 549
                  </h3>
                  <p className="text-gray-700">
                    Die europäische Norm für barrierefreie IKT-Produkte und
                    -Dienste. Sie dient als technische Grundlage für die
                    Umsetzung der EU-Richtlinien zur digitalen Barrierefreiheit.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-500 p-4 bg-white rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    EU-Richtlinie 2016/2102
                  </h3>
                  <p className="text-gray-700">
                    Die EU-Richtlinie über den barrierefreien Zugang zu Websites
                    und mobilen Anwendungen öffentlicher Stellen. Sie
                    verpflichtet öffentliche Stellen zur Einhaltung der EN 301
                    549.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <details className="bg-gray-50 p-4 rounded-lg">
                  <summary className="font-medium cursor-pointer">
                    WCAG 2.1 / 2.2 im Detail
                  </summary>
                  <div className="mt-4">
                    <p className="mb-4">
                      Die Web Content Accessibility Guidelines (WCAG) sind in
                      vier Hauptprinzipien unterteilt:
                    </p>

                    <ol className="list-decimal pl-6 space-y-4 mb-4">
                      <li>
                        <strong>Wahrnehmbar:</strong> Informationen und
                        Komponenten der Benutzeroberfläche müssen für die
                        Benutzer wahrnehmbar sein.
                      </li>
                      <li>
                        <strong>Bedienbar:</strong> Die Komponenten der
                        Benutzeroberfläche und die Navigation müssen bedienbar
                        sein.
                      </li>
                      <li>
                        <strong>Verständlich:</strong> Die Informationen und die
                        Bedienung der Benutzeroberfläche müssen verständlich
                        sein.
                      </li>
                      <li>
                        <strong>Robust:</strong> Inhalte müssen robust genug
                        sein, um von verschiedenen Benutzeragenten,
                        einschließlich Hilfstechnologien, zuverlässig
                        interpretiert werden zu können.
                      </li>
                    </ol>

                    <p className="mb-4">
                      Jedes dieser Prinzipien enthält spezifische Richtlinien
                      mit Erfolgskriterien auf drei Konformitätsstufen (A, AA,
                      AAA).
                    </p>

                    <p>
                      <strong>Was ist neu in WCAG 2.2?</strong> Die Version 2.2
                      hat 9 neue Erfolgskriterien hinzugefügt, die besonders
                      mobile Barrierefreiheit, kognitive Einschränkungen und Low
                      Vision verbessern.
                    </p>
                  </div>
                </details>

                <details className="bg-gray-50 p-4 rounded-lg">
                  <summary className="font-medium cursor-pointer">
                    EU-Richtlinie & BFSG: Zeitplan und Anforderungen
                  </summary>
                  <div className="mt-4">
                    <p className="mb-4">
                      Die EU-Richtlinie 2016/2102 verpflichtet öffentliche
                      Stellen zur Barrierefreiheit ihrer Websites und Apps. In
                      Deutschland wurde diese Richtlinie durch die BITV 2.0
                      umgesetzt.
                    </p>

                    <p className="mb-4">
                      Das Barrierefreiheitsstärkungsgesetz (BFSG) setzt die
                      EU-Richtlinie 2019/882 (European Accessibility Act) um und
                      erweitert die Anforderungen auf die Privatwirtschaft:
                    </p>

                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>
                        Ab dem <strong>28. Juni 2025</strong> müssen neue
                        Produkte und Dienstleistungen barrierefrei sein
                      </li>
                      <li>
                        Für bestehende Produkte und Dienstleistungen gilt eine
                        Übergangsfrist bis <strong>28. Juni 2030</strong>
                      </li>
                      <li>
                        Dienstleistungsverträge können unverändert bis maximal{" "}
                        <strong>28. Juni 2030</strong> weiterlaufen
                      </li>
                    </ul>

                    <p>
                      Das BFSG betrifft u.a. E-Commerce, Bankdienstleistungen,
                      E-Books und zahlreiche weitere digitale Angebote.
                    </p>
                  </div>
                </details>
              </div>
            </section>

            <section id="best-practices" className="mb-16">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                Best Practices für barrierefreies Webdesign
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Struktur & Navigation
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      Logische und hierarchische Überschriftenstruktur (H1-H6)
                    </li>
                    <li>Strukturierte Inhalte mit semantischem HTML5</li>
                    <li>Konsistente und vorhersehbare Navigation</li>
                    <li>Skip-Links für Tastaturnutzer</li>
                    <li>Aussagekräftige Linkbeschreibungen</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Farben & Kontraste
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      Ausreichender Kontrastunterschied (mindestens 4,5:1)
                    </li>
                    <li>
                      Keine Informationsvermittlung ausschließlich durch Farbe
                    </li>
                    <li>Fokus-Indikatoren deutlich sichtbar gestalten</li>
                    <li>Flexible Layouts mit relativen Einheiten (rem, em)</li>
                    <li>
                      Designs, die hohen Zoom-Faktor unterstützen (bis 200%)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-4 my-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Tipp: Mobile-First-Design
                </h3>
                <p>
                  Ein Mobile-First-Ansatz führt oft zu klareren, fokussierteren
                  und leichter zugänglichen Interfaces. Viele der Anforderungen
                  für barrierefreies Design überschneiden sich mit bewährten
                  Praktiken für mobile Designs: übersichtliche Strukturen, klare
                  Touch-Targets und eine vereinfachte Navigation kommen allen
                  Nutzern zugute.
                </p>
              </div>
            </section>

            <section id="resourcen" className="mb-16">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                Externe Ressourcen
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
                  <p className="text-sm text-gray-600">
                    Interaktive Referenz für die Web Content Accessibility
                    Guidelines mit Filteroptionen für alle Erfolgskriterien.
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
                  <p className="text-sm text-gray-600">
                    Der BITV-Test ist ein Prüfverfahren für die Barrierefreiheit
                    von Webseiten nach BITV 2.0.
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
                  <p className="text-sm text-gray-600">
                    Browser-Erweiterung für automatisierte
                    Barrierefreiheitstests während der Entwicklung.
                  </p>
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/4 lg:min-w-[250px]">
            <aside className="lg:sticky lg:top-24">
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-medium text-gray-800 mb-3">Inhalt</h3>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#einleitung"
                        className="text-blue-600 hover:underline"
                      >
                        Warum Webstandards wichtig sind
                      </a>
                    </li>
                    <li>
                      <a
                        href="#standards"
                        className="text-blue-600 hover:underline"
                      >
                        Übersicht der relevanten Standards
                      </a>
                    </li>
                    <li>
                      <a
                        href="#best-practices"
                        className="text-blue-600 hover:underline"
                      >
                        Best Practices für Webdesign
                      </a>
                    </li>
                    <li>
                      <a
                        href="#resourcen"
                        className="text-blue-600 hover:underline"
                      >
                        Externe Ressourcen
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-4">
                  Mehr erfahren
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
                      BFSG Grundlagen
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
                      Barrierefreiheit
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
                      Accessibility Check
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
