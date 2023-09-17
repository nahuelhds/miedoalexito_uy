import "./globals.css";
import { Metadata } from "next";
import { fontDMSans } from "@/app/fonts";

export const metadata: Metadata = {
  title: "Miedo al éxito | Lo relevante",
  description: "Miedo al éxito | Lo relevante",
  openGraph: {
    title: "Miedo al éxito | Lo relevante",
    description: "Miedo al éxito | Lo relevante",
    images: ["/img/metadata-logo.jpg"],
  },
  twitter: {
    title: "Miedo al éxito | Lo relevante",
    description: "Miedo al éxito | Lo relevante",
    images: ["/img/metadata-logo.jpg"],
  },
  appleWebApp: {
    title: "Miedo al éxito | Lo relevante",
    startupImage: ["/img/metadata-logo.jpg"],
  },
  keywords: [
    "miedo al éxito",
    "Lo relevante",
    "comunidad",
    "independiente",
    "información",
    "separando la señal del ruido",
    "uruguay",
    "uruguayo",
    "plataforma digital",
    "medio de comunicación",
    "comunicación",
    "medios",
    "noticias",
    "resumen semanal",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={fontDMSans.className}>
      <body>{children}</body>
    </html>
  );
}
