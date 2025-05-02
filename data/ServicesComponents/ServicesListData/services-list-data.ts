import { IServicesListData } from "./types";
import imgDePrueba from "@/public/assets/images/services/auto.png";

export const servicesListData: IServicesListData[] = [
  {
    title: "Gráfica vehicular y ploteo de flotas",
    description:
      "Especialistas en intervención de flotas corporativas y vehículos particulares. Ejecutamos campañas de branding vehicular a gran escala, cumpliendo estándares de imagen y durabilidad.",
    items: [
      "630 vehículos de Aysa ploteados en 13 días.",
      "400 camiones Bimbo intervenidos en 8 provincias.",
    ],
    images: [imgDePrueba, imgDePrueba],
  },
  {
    title: "Redes de puntos de venta y retail",
    description:
      "Instalación de vinilos, corpóreos, POP y cartelería en cadenas de retail y franquicias. Ejecutamos campañas simultáneas en más de 100 sucursales por día, garantizando imagen uniforme en todo el país.",
    items: [
      "55 locales de Burger King intervenidos en 5 horas.",
      "180 sucursales de Farmacity actualizadas en simultáneo.",
    ],
    images: [imgDePrueba, imgDePrueba],
  },
  {
    title: "Instalaciones en altura",
    description:
      "Instalaciones de gráfica en altura utilizando silletas, grúas y sistemas certificados de seguridad. Ejecutamos desde lonas frontlight y backlight hasta corpóreos de gran tamaño en fachadas y medianeras.",
    items: [
      "Lonas de 9x42m en Edificio Libertad.",
      "Medianeras promocionales de alta visibilidad.",
    ],
    images: [imgDePrueba, imgDePrueba],
  },
  {
    title: "Instalación de corpóreos y gráfica de alto impacto",
    description:
      "Montaje de letras corpóreas, estructuras tridimensionales y gráfica de gran tamaño para edificios, locales y eventos. Dominamos el manejo de materiales como MDF, Acrílico, Polyfan y Metalex.",
    items: ["Corpóreos institucionales para Banco Provincia y Cuesta Blanca."],
    images: [imgDePrueba],
  },
  {
    title: "Ferias, exposiciones y eventos",
    description:
      "Montaje de gráfica para eventos masivos, ferias corporativas y activaciones promocionales. Equipos expertos en instalaciones temporales de alto impacto, con tiempos críticos de ejecución.",
    items: ["Lollapalooza Argentina.", "Copa América 2024 (predio AFA)."],
    images: [imgDePrueba, imgDePrueba],
  },
];
