import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import { siteConfig } from "@/data/siteConfig";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} — ${siteConfig.tagline} | Delivery & Retiro`,
  description:
    "Promociones de sushi, sushi burgers, rolls, tortas de sushi, salchipapas y comida rápida en Quillón. Pedidos por WhatsApp.",
  keywords: [
    "D'Toditos Sushi",
    "sushi quillón",
    "delivery sushi quillón",
    "sushi rolls chile",
    "sushi burger",
    "promos sushi quillón",
    "salchipapas",
    "tortas de sushi",
  ],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: "Sushi fresco, rolls, comida rápida y promociones en Quillón. Pide directo por WhatsApp.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/images/tabla-sushi.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Sushi y Comida Rápida en Quillón`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: "Sushi fresco, rolls, comida rápida y promociones en Quillón. Pide directo por WhatsApp.",
    images: ["/images/tabla-sushi.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FastFoodRestaurant",
  name: siteConfig.name,
  description: "Sushi fresco, rolls hechos al momento, sushi burgers, promociones y comida rápida en Quillón.",
  image: `${siteConfig.url}/images/tabla-sushi.jpg`,
  telephone: siteConfig.phoneFormatted,
  url: siteConfig.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Quillón",
    addressRegion: "Región de Ñuble",
    addressCountry: "CL",
  },
  servesCuisine: ["Sushi", "Comida Rápida", "Japonesa"],
  priceRange: "$$",
  hasMap: siteConfig.maps,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "14:00",
      closes: "21:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday", "Sunday"],
      opens: "15:00",
      closes: "22:30",
    },
  ],
  sameAs: [siteConfig.instagram, siteConfig.facebook, siteConfig.maps],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0a0c0a] text-white antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
