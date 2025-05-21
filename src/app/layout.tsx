import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/layout/LanguageContext";
import SkipLink from "@/components/layout/SkipLink";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Barrierefreiheitsstärkungsgesetz | BFSG Informationsplattform",
  description:
    "Informationen zum Barrierefreiheitsstärkungsgesetz (BFSG) und Prüfung von Websites auf Barrierefreiheit",
  applicationName: "BFSG Informationsplattform",
  authors: [{ name: "Barrierefrei-Team" }],
  keywords: [
    "BFSG",
    "Barrierefreiheit",
    "Accessibility",
    "WCAG",
    "Webstandards",
  ],
};

export const viewport = {
  themeColor: "#1D4ED8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} font-sans min-h-screen flex flex-col`}
      >
        <LanguageProvider>
          {/* Skip-Link für Barrierefreiheit */}
          <SkipLink />

          <Header />
          <main id="main-content" className="flex-grow" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
