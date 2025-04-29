import {
  faMagnifyingGlass,
  faRocket,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { IHighlightData } from "./types";

export const highlightItems: IHighlightData[] = [
  {
    title: "Simultaneidad nacional real",
    description:
      "Más de 120 instaladores activos, permitiendo acciones simultáneas en todo el país.",
    icon: faRocket,
  },
  {
    title: "Seguimiento en tiempo real",
    description:
      "Nuestro sistema de Tracking te permitirá seguir tus instalaciones en tiempo real, recibir reportes fotográficos y validar cada proyecto al instante.",
    icon: faMagnifyingGlass,
  },
  {
    title: "Especialización exclusiva",
    description:
      "Nos dedicamos únicamente a la instalación de gráfica de gran formato.",
    icon: faScrewdriverWrench,
  },
];

export default highlightItems;
