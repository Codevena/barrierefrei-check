"use client";

import { useLanguage } from "./LanguageContext";

export default function SkipLink() {
  const { t } = useLanguage();

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:top-0 focus:left-0"
    >
      {t("skipLink")}
    </a>
  );
}
