import { IHeaderLink } from "./types";
import {
  faChartPie,
  faDiagramProject,
  faTableCellsLarge,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const headerLinks: IHeaderLink[] = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Servicios",
    href: "/services",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Ingresar",
    href: "/auth",
  },
];

export const headerLinksInstaller: IHeaderLink[] = [
  {
    label: "Instalaciones",
    href: "/installer/installations",
  },
  {
    label: "Historial",
    href: "/installer/history",
  },
];

export const headerLinksAdmin: IHeaderLink[] = [
  {
    icon: faChartPie,
    label: "Panel",
    href: "/admin/panel",
  },
  {
    icon: faUser,
    label: "Users",
    href: "/admin/users",
  },
  {
    icon: faDiagramProject,
    label: "Tracking",
    href: "/admin/tracking",
  },
  {
    icon: faTableCellsLarge,
    label: "Blog",
    href: "/admin/blog",
  },
];
