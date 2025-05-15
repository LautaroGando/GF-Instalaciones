import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/HeaderComponents/Header";
import BannerHome from "@/components/HomeComponents/BannerHome/BannerHome";
import clsx from "clsx";
import Footer from "@/components/FooterComponents/Footer";
import BlogBanner from "@/components/ui/BlogComponents/BlogBanner/BlogBanner";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "GF Instalaciones | Instalaciones Gráficas Profesionales",
  description: "Especialistas en instalaciones gráficas de gran formato en todo el país. Cartelería, señalética, stands y más. Más de 28 años de experiencia en soluciones visuales.",
  keywords: [
    "instalaciones gráficas",
    "cartelería",
    "señalética",
    "gráfica publicitaria",
    "gran formato",
    "stands publicitarios",
    "instalación de carteles",
    "servicios gráficos",
    "GF Recursos Gráficos",
    "gráfica en Argentina"
  ],
  applicationName: "GF Instalaciones",
  authors: [{ name: "GF Instalaciones", url: "https://www.gfinstalaciones.com.ar/" }],
  creator: "GF Instalaciones",
  publisher: "GF Instalaciones",
  metadataBase: new URL("https://www.gfinstalaciones.com.ar/"),
  alternates: {
    canonical: "https://www.gfinstalaciones.com.ar/",
  },
  openGraph: {
    type: "website",
    url: "https://www.gfinstalaciones.com.ar/",
    title: "GF Instalaciones | Instalaciones Gráficas Profesionales",
    description:
      "Especialistas en instalaciones gráficas de gran formato en todo el país. Cartelería, señalética, stands y más. Más de 28 años de experiencia en soluciones visuales.",
    siteName: "GF Instalaciones",
    locale: "es_AR",
    images: [
      {
        url: "https://www.gfinstalaciones.com.ar/og-image.png",
        width: 1200,
        height: 630,
        alt: "GF Instalaciones | Instalaciones Gráficas Profesionales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GF Instalaciones | Instalaciones Gráficas Profesionales",
    description:
      "Especialistas en instalaciones gráficas de gran formato en todo el país. Cartelería, señalética, stands y más. Más de 28 años de experiencia en soluciones visuales.",
    site: "",
    images: ["https://www.gfinstalaciones.com.ar/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={clsx(
        "bg-bgColor transition-all duration-300 font-textFont text-secondaryColor dark:text-letterColorLight dark:bg-secondaryColor"
      )}
    >
      <Header />
      <BannerHome />
      <BlogBanner />
      <main className="px-[15px] mt-20 py-10 sm:px-[20px] lg:max-w-[960px] lg:mx-auto xl:max-w-[1200px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
