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
  title: `${siteConfig.name} — ${siteConfig.tagline} | Delivery & Retiro`,
  description:
    "Promociones de sushi, sushi burgers, rolls, tortas de sushi, salchipapas y comida rápida en Quillón. Pedidos por WhatsApp.",
  keywords: [
    "D'Toditos Sushi",
    "delivery sushi",
    "sushi rolls chile",
    "sushi burger",
    "promos sushi",
    "salchipapas",
    "tortas de sushi",
  ],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: "Sushi fresco, rolls, comida rápida y promociones en Quillón. Pide directo por WhatsApp.",
    locale: "es_CL",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${montserrat.variable}`}>
      <body className="bg-[#0a0c0a] text-white antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
