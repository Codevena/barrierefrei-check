import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barrierefreiheitserklärung | Barrierefreiheitsstärkungsgesetz",
  description: "Barrierefreiheitserklärung der Informationsplattform",
};

export default function BarrierefreiheitserklaerungPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Barrierefreiheitserklärung
          </h1>
          <div className="mt-8 space-y-8 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                Verpflichtung zur Barrierefreiheit
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  Wir sind bemüht, unsere Website im Einklang mit dem
                  Barrierefreiheitsstärkungsgesetz (BFSG) und den Richtlinien
                  für Web-Zugänglichkeit (WCAG 2.1, Level AA) barrierefrei
                  zugänglich zu machen. Diese Barrierefreiheitserklärung gilt
                  für die Webseite unter barrierefrei.de.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                Stand der Vereinbarkeit mit den Anforderungen
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  Diese Website ist mit den Anforderungen des
                  Barrierefreiheitsstärkungsgesetzes und dem WCAG 2.1 AA
                  Standard weitgehend vereinbar. Die Übereinstimmung wurde
                  anhand von internen Tests und automatisierten Prüfverfahren
                  ermittelt.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                Nicht barrierefreie Inhalte
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  Trotz unserer Bemühungen können einige Inhalte möglicherweise
                  nicht vollständig barrierefrei sein:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Einige ältere PDF-Dokumente erfüllen möglicherweise nicht
                    alle Anforderungen an die Barrierefreiheit
                  </li>
                  <li>
                    Einige eingebettete Videos verfügen noch nicht über
                    vollständige Untertitel
                  </li>
                  <li>
                    Bei einigen komplexen Datenvisualisierungen können
                    alternative Textbeschreibungen unvollständig sein
                  </li>
                </ul>
                <p>
                  Wir arbeiten kontinuierlich daran, diese Probleme zu beheben
                  und die Barrierefreiheit unserer Website zu verbessern.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                Feedback und Kontaktinformationen
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  Wir freuen uns über Ihr Feedback zur Barrierefreiheit unserer
                  Website. Wenn Sie Probleme feststellen oder
                  Verbesserungsvorschläge haben, kontaktieren Sie uns bitte
                  unter:
                </p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p>E-Mail: barrierefreiheit@beispiel-barrierefrei.de</p>
                  <p>Telefon: +49 (0) 123 456789</p>
                </div>
                <p>
                  Wir bemühen uns, auf alle Anfragen innerhalb von 7
                  Arbeitstagen zu antworten.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                Durchsetzungsverfahren
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  Wenn Sie mit unserer Antwort auf Ihr Feedback nicht zufrieden
                  sind oder wenn wir nicht innerhalb einer angemessenen Frist
                  antworten, können Sie sich an die zuständige
                  Durchsetzungsstelle wenden:
                </p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p>Bundesfachstelle für Barrierefreiheit</p>
                  <p>Wilhelmstraße 139, 10963 Berlin</p>
                  <p>E-Mail: info@bundesfachstelle-barrierefreiheit.de</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                Erstellungsdatum und Überprüfung
              </h2>
              <div className="mt-4">
                <p>
                  Diese Erklärung wurde am 01.06.2023 erstellt. Die letzte
                  Überprüfung der Barrierefreiheit erfolgte am 15.05.2023.
                </p>
                <p className="mt-2">
                  Wir überprüfen diese Erklärung regelmäßig und aktualisieren
                  sie bei Bedarf.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
