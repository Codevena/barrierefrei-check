import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Barrierefreiheitsstärkungsgesetz",
  description: "Impressum und rechtliche Hinweise zur Informationsplattform",
};

export default function ImpressumPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Impressum
          </h1>
          <div className="mt-8 space-y-6 text-gray-600">
            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="mt-4">
                <p>Barrierefrei GmbH</p>
                <p>Musterstraße 123</p>
                <p>12345 Musterstadt</p>
                <p>Deutschland</p>
              </div>
            </section>

            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900">Kontakt</h2>
              <div className="mt-4">
                <p>Telefon: +49 (0) 123 456789</p>
                <p>E-Mail: info@beispiel-barrierefrei.de</p>
              </div>
            </section>

            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Handelsregister
              </h2>
              <div className="mt-4">
                <p>Registergericht: Amtsgericht Musterstadt</p>
                <p>Registernummer: HRB 12345</p>
              </div>
            </section>

            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Umsatzsteuer-ID
              </h2>
              <div className="mt-4">
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                  Umsatzsteuergesetz: DE123456789
                </p>
              </div>
            </section>

            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <div className="mt-4">
                <p>Max Mustermann</p>
                <p>Musterstraße 123</p>
                <p>12345 Musterstadt</p>
                <p>Deutschland</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                Haftungsausschluss
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  Die Inhalte dieser Seiten wurden mit größter Sorgfalt
                  erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                  der Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                  gespeicherte fremde Informationen zu überwachen oder nach
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                  hinweisen.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
