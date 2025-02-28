import {
  faArrowDownWideShort,
  faNewspaper,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import type { IBannerPanel } from "./types";
import { findUsers } from "@/services/users";

const fetchUsers = async (): Promise<number> => {
  const users = await findUsers();
  return users.length;
};

export const bannerPanel: IBannerPanel[] = [
  {
    icon: faUser,
    label: "Usuarios",
    quantity: fetchUsers(),
  },
  {
    icon: faUsers,
    label: "Empleados",
    quantity: fetchUsers(),
  },
  {
    icon: faArrowDownWideShort,
    label: "Órdenes",
    quantity: fetchUsers(),
  },
  {
    icon: faNewspaper,
    label: "Artículos",
    quantity: fetchUsers(),
  },
];
