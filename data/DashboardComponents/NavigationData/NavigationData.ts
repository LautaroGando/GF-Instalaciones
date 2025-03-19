import { faInfoCircle, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { INavigationData } from "./types";

export const navigationData: INavigationData[] = [
  {
    icon: faInfoCircle,
    label: "Información",
    href: "/dashboard/profile",
  },
  {
    icon: faNewspaper,
    label: "Newslatter",
    href: "/dashboard/newslatter",
  },
];
