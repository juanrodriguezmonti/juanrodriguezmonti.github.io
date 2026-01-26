"use client";
import { useCallback } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface ExportPDFButtonProps {
  chapterNumber: number;
  lang: "en" | "es";
  contentId?: string;
}

export default function ExportPDFButton({ chapterNumber, lang, contentId = "main-content" }: ExportPDFButtonProps) {
  const handleExport = useCallback(async () => {
    const element = document.getElementById(contentId);
    if (!element) return;
    const canvas = await html2canvas(element, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    // Ajustar la imagen al ancho de la página, mantener el aspect ratio
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let position = 0;
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    // Si la imagen es más alta que la página, agregar páginas
    let remainingHeight = imgHeight - pageHeight;
    while (remainingHeight > 0) {
      position = position - pageHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      remainingHeight -= pageHeight;
    }
    const filename = lang === "es"
      ? `capitulo-${chapterNumber}.pdf`
      : `chapter-${chapterNumber}.pdf`;
    pdf.save(filename);
  }, [chapterNumber, lang, contentId]);

  return (
    <button
      onClick={handleExport}
      className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition font-semibold shadow"
      type="button"
    >
      {lang === "es" ? "Exportar a PDF" : "Export to PDF"}
    </button>
  );
} 