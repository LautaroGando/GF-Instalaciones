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
    label: "Empleados",
  },
  {
    icon: faArrowDownWideShort,
    label: "Órdenes",
  },
  {
    icon: faNewspaper,
    label: "Artículos",
  },
];
