import "./globals.css";
import { Metadata } from "next";
import { fontDMSans } from "@/app/fonts";
import { keywords } from "@/config/metadata";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Miedo al éxito",
  description: "⚡️Lo relevante",
  openGraph: {
    title: "Miedo al éxito",
    description: "⚡️Lo relevante",
    images: ["/img/metadata-logo.jpg"],
  },
  twitter: {
    title: "Miedo al éxito",
    description: "⚡️Lo relevante",
    images: ["/img/metadata-logo.jpg"],
  },
  appleWebApp: {
    title: "Miedo al éxito",
    startupImage: ["/img/metadata-logo.jpg"],
  },
  keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={fontDMSans.className}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-DYT6J2BCM9" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-DYT6J2BCM9');
        `}
      </Script>
      <Script
        async
        id="google-adsense-account"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2186237898462075"
        crossOrigin="anonymous"
      />
      {children}
    </html>
  );
}
