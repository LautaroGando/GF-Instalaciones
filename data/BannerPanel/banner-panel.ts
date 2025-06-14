import {
  faArrowDownWideShort,
  faNewspaper,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import type { IBannerPanel } from "./types";

export const bannerPanel: IBannerPanel[] = [
  {
    icon: faUser,
    label: "Usuarios",
  },
  {
    icon: faUsers,
    label: "Colaboradores",
  },
  {
    icon: faArrowDownWideShort,
    label: "Instalaciónes",
  },
  {
    icon: faNewspaper,
    label: "Artículos",
  },
];
