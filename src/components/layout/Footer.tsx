"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const currentYear = new Date().getFullYear();

  // Footer-Links mit Übersetzungen
  const footerLinks = [
    { name: language === "de" ? "Impressum" : "Imprint", href: "/impressum" },
    {
      name: language === "de" ? "Datenschutz" : "Privacy Policy",
      href: "/datenschutz",
    },
    {
      name:
        language === "de"
          ? "Barrierefreiheitserklärung"
          : "Accessibility Statement",
      href: "/barrierefreiheitserklaerung",
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-sm text-gray-600">
              © {currentYear} Barrierefrei.
              {language === "de"
                ? " Alle Rechte vorbehalten."
                : " All rights reserved."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
