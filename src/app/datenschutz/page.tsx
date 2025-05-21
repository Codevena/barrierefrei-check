import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | Barrierefreiheitsstärkungsgesetz",
  description: "Datenschutzerklärung der Informationsplattform",
};

export default function DatenschutzPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Datenschutzerklärung
          </h1>
          <div className="mt-8 space-y-8 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                1. Datenschutz auf einen Blick
              </h2>
              <div className="mt-4 space-y-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Allgemeine Hinweise
                </h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick
                  darüber, was mit Ihren personenbezogenen Daten passiert, wenn
                  Sie diese Website besuchen. Personenbezogene Daten sind alle
                  Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                2. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              <div className="mt-4 space-y-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Datenschutz
                </h3>
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                  persönlichen Daten sehr ernst. Wir behandeln Ihre
                  personenbezogenen Daten vertraulich und entsprechend der
                  gesetzlichen Datenschutzvorschriften sowie dieser
                  Datenschutzerklärung.
                </p>
                <p>
                  Wenn Sie diese Website benutzen, werden verschiedene
                  personenbezogene Daten erhoben. Personenbezogene Daten sind
                  Daten, mit denen Sie persönlich identifiziert werden können.
                  Die vorliegende Datenschutzerklärung erläutert, welche Daten
                  wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
                  und zu welchem Zweck das geschieht.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                3. Datenerfassung auf dieser Website
              </h2>
              <div className="mt-4 space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Cookies</h3>
                <p>
                  Unsere Internetseiten verwenden so genannte
                  &quot;Cookies&quot;. Cookies sind kleine Datenpakete und
                  richten auf Ihrem Endgerät keinen Schaden an. Sie werden
                  entweder vorübergehend für die Dauer einer Sitzung
                  (Session-Cookies) oder dauerhaft (permanente Cookies) auf
                  Ihrem Endgerät gespeichert.
                </p>
                <p>
                  Sie können Ihren Browser so einstellen, dass Sie über das
                  Setzen von Cookies informiert werden und Cookies nur im
                  Einzelfall erlauben, die Annahme von Cookies für bestimmte
                  Fälle oder generell ausschließen sowie das automatische
                  Löschen der Cookies beim Schließen des Browsers aktivieren.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                4. Analyse-Tools und Werbung
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  Aktuell verzichten wir auf den Einsatz von Analyse-Tools und
                  Werbung auf unserer Website. Sollte sich dies ändern, werden
                  wir diese Datenschutzerklärung entsprechend aktualisieren.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                5. Ihre Rechte
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                  Herkunft, Empfänger und Zweck Ihrer gespeicherten
                  personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                  Recht, die Berichtigung oder Löschung dieser Daten zu
                  verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
                  erteilt haben, können Sie diese Einwilligung jederzeit für die
                  Zukunft widerrufen. Außerdem haben Sie das Recht, unter
                  bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
