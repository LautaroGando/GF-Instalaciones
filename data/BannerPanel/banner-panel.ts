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
    quantity: 340,
  },
  {
    icon: faUsers,
    label: "Empleados",
    quantity: 120,
  },
  {
    icon: faArrowDownWideShort,
    label: "Órdenes",
    quantity: 30,
  },
  {
    icon: faNewspaper,
    label: "Artículos",
    quantity: 12,
  },
];
