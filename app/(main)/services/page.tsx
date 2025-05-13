import Services from "@/components/ServicesComponents/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de Instalación Gráfica | GF Instalaciones",
  description:
    "Descubre los servicios profesionales de instalación gráfica de GF Instalaciones: gráfica vehicular, retail, eventos, altura y corpóreos. Cobertura nacional con más de 120 instaladores especializados.",
  keywords: [
    "instalación gráfica",
    "gráfica vehicular",
    "ploteo de flotas",
    "instalación en altura",
    "corpóreos",
    "gráfica para eventos",
    "retail",
    "puntos de venta",
    "vinilos",
    "GF Instalaciones",
  ],
};

export default function ServicesPage() {
  return <Services />;
}
