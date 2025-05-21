"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageContext";

const getNavigationItems = (t: (key: string) => string) => [
  { name: t("nav.home"), href: "/" },
  { name: t("nav.legal"), href: "/gesetzliche-grundlagen" },
  { name: t("nav.accessibility"), href: "/was-bedeutet-barrierefrei" },
  { name: t("nav.webstandards"), href: "/webstandards" },
  { name: t("nav.check"), href: "/accessibility-check" },
  { name: t("nav.contact"), href: "/kontakt" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const navigationItems = getNavigationItems(t);

  const toggleLanguage = () => {
    setLanguage(language === "de" ? "en" : "de");
    setLanguageMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label={language === "de" ? "Hauptnavigation" : "Main navigation"}
      >
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center text-blue-800 font-bold text-xl"
              aria-label={
                language === "de" ? "Zur Startseite" : "Go to homepage"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 mr-2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99 0l-1.306-.375a2.25 2.25 0 01-1.632-2.163v-2.25"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span>Barrierefrei</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  pathname === item.href
                    ? "bg-blue-50 text-blue-800"
                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Sprachauswahl */}
            <div className="relative ml-3">
              <button
                type="button"
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                aria-label={
                  language === "de"
                    ? "Sprachauswahl öffnen"
                    : "Open language selection"
                }
                aria-expanded={languageMenuOpen}
                aria-haspopup="true"
              >
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                    />
                  </svg>
                  {language === "de" ? "DE" : "EN"}
                </span>
                <svg
                  className={`h-5 w-5 transition-transform ${
                    languageMenuOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown für Sprachauswahl */}
              {languageMenuOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="language-menu-button"
                >
                  <button
                    onClick={() => {
                      setLanguage("de");
                      setLanguageMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      language === "de"
                        ? "bg-gray-100 text-blue-700"
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                    }`}
                    role="menuitem"
                  >
                    <span className="flex items-center">
                      <span className="ml-2">Deutsch</span>
                      {language === "de" && (
                        <svg
                          className="ml-auto h-5 w-5 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("en");
                      setLanguageMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      language === "en"
                        ? "bg-gray-100 text-blue-700"
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                    }`}
                    role="menuitem"
                  >
                    <span className="flex items-center">
                      <span className="ml-2">English</span>
                      {language === "en" && (
                        <svg
                          className="ml-auto h-5 w-5 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            {/* Sprachauswahl für Mobile */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 mr-2 text-gray-700 hover:bg-gray-100 hover:text-blue-700"
              onClick={toggleLanguage}
              aria-label={
                language === "de" ? "Sprache wechseln" : "Change language"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                />
              </svg>
              <span className="ml-1 text-xs">
                {language === "de" ? "DE" : "EN"}
              </span>
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-700"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">
                {language === "de" ? "Menü öffnen" : "Open menu"}
              </span>
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  pathname === item.href
                    ? "bg-blue-50 text-blue-800"
                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
