"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/layout/LanguageContext";

export default function HomeContent() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* Hero-Sektion */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          {/* Linke Spalte mit Text */}
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              {t("home.title")}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t("home.description")}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/accessibility-check"
                className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                aria-label={t("home.checkAriaLabel")}
              >
                {t("home.check")}
              </Link>
              <Link
                href="/gesetzliche-grundlagen"
                className="text-lg font-semibold leading-6 text-gray-900 hover:text-blue-600"
                aria-label={t("home.learnMoreAriaLabel")}
              >
                {t("home.learnMore")} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Rechte Spalte mit Bild - korrigierter Abstand */}
          <div className="hidden mx-auto mt-16 sm:mt-24 lg:block lg:ml-45 lg:mr-0 lg:mt-0 lg:max-w-lg lg:flex-1 lg:flex lg:items-center lg:justify-end">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/barrier-free-access.png"
                alt={t("home.heroImageAlt")}
                width={500}
                height={350}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/30 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Informationssektion */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              {t("home.infoHeading")}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t("home.infoSubheading")}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t("home.infoDescription")}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                  {t("home.feature1Title")}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {t("home.feature1Description")}
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                      />
                    </svg>
                  </div>
                  {t("home.feature2Title")}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {t("home.feature2Description")}
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                      />
                    </svg>
                  </div>
                  {t("home.feature3Title")}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {t("home.feature3Description")}
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                      />
                    </svg>
                  </div>
                  {t("home.feature4Title")}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {t("home.feature4Description")}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA-Sektion */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-blue-800 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t("home.ctaTitle")}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              {t("home.ctaDescription")}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/accessibility-check"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-800 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {t("home.ctaButton")}
              </Link>
              <Link
                href="/was-bedeutet-barrierefrei"
                className="text-lg font-semibold text-white hover:text-blue-200"
              >
                {t("home.ctaLink")} <span aria-hidden="true">→</span>
              </Link>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#radial-blue)"
                fillOpacity="0.15"
              />
              <defs>
                <radialGradient id="radial-blue">
                  <stop stopColor="#fff" />
                  <stop offset={1} stopColor="#38bdf8" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
