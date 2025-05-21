import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function POST(req: NextRequest) {
  try {
    // Extrahieren des HTML-Inhalts aus dem Request
    const { html } = await req.json();

    if (!html) {
      return NextResponse.json(
        { error: "Kein HTML-Inhalt bereitgestellt" },
        { status: 400 }
      );
    }

    // Starten von Puppeteer im Headless-Modus
    const browser = await puppeteer.launch({
      headless: true, // Standardmäßiger Headless-Modus
      args: ["--no-sandbox", "--disable-setuid-sandbox"], // Für einige Umgebungen notwendig
    });

    try {
      // Neue Seite erstellen
      const page = await browser.newPage();

      // Timeout für Seitenoperationen setzen (10 Sekunden)
      page.setDefaultNavigationTimeout(10000);

      // HTML-Inhalt setzen und warten, bis die Seite vollständig geladen ist
      await page.setContent(html, {
        waitUntil: "networkidle0", // Warten, bis keine Netzwerkaktivität mehr vorhanden ist
      });

      // PDF generieren (A4-Format, Hochformat, Standard-Rand)
      const pdfBuffer = await page.pdf({
        format: "A4",
        printBackground: true,
        margin: {
          top: "20mm",
          bottom: "20mm",
          left: "20mm",
          right: "20mm",
        },
      });

      // Browser schließen
      await browser.close();

      // PDF als Download senden
      const response = new NextResponse(pdfBuffer);

      // Content-Type und Disposition für den Download setzen
      response.headers.set("Content-Type", "application/pdf");
      response.headers.set(
        "Content-Disposition",
        'attachment; filename="accessibility-report.pdf"'
      );

      return response;
    } catch (error) {
      // Sicherstellen, dass der Browser geschlossen wird, auch bei Fehlern
      await browser.close();
      throw error;
    }
  } catch (error) {
    console.error("Fehler bei der PDF-Generierung:", error);

    return NextResponse.json(
      {
        error:
          "Fehler bei der PDF-Generierung: " +
          (error instanceof Error ? error.message : String(error)),
      },
      { status: 500 }
    );
  }
}
