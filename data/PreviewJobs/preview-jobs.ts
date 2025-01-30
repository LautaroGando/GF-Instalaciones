import { IPreviewJobs } from "./types";
import previewJob1 from "../../public/assets/images/home/preview-job-1.svg";
import previewJob2 from "../../public/assets/images/home/preview-job-2.svg";
import previewJob3 from "../../public/assets/images/home/preview-job-3.svg";
import previewJob4 from "../../public/assets/images/home/preview-job-4.svg";
import previewJob5 from "../../public/assets/images/home/preview-job-5.svg";

export const previewJobs: IPreviewJobs[] = [
  {
    id: 1,
    image: previewJob1,
    title: "Helicópteros",
    text: "Realzamos la imagen de tu helicóptero con gráficos de alta precisión y materiales resistentes, diseñados para soportar condiciones extremas.",
  },
  {
    id: 2,
    image: previewJob2,
    title: "Trabajos en Altura",
    text: "Especialistas en instalación gráfica en altura, garantizando seguridad, precisión y acabados duraderos en cualquier entorno.",
  },
  {
    id: 3,
    image: previewJob3,
    title: "Vehículos",
    text: "Transforma tu vehículo con ploteos personalizados que combinan diseño innovador y resistencia a largo plazo.",
  },
  {
    id: 4,
    image: previewJob4,
    title: "Trenes",
    text: "Damos vida a trenes con soluciones gráficas impactantes, adaptadas a grandes superficies y alta durabilidad.",
  },
  {
    id: 5,
    image: previewJob5,
    title: "Ambulancias",
    text: "Optimiza la visibilidad de tus ambulancias con gráficos claros y profesionales que cumplen con normativas de seguridad.",
  },
];
