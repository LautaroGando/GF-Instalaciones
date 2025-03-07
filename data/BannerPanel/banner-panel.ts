import {
  faArrowDownWideShort,
  faNewspaper,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import type { IBannerPanel } from "./types";
import { findUsers } from "@/services/users";

const fetchUsers = async () => {
  try {
    const users = await findUsers();
    return users.length;
  } catch (error) {
    console.log(error);
  }
};

const quantity = await fetchUsers() ?? 0;

export const bannerPanel: IBannerPanel[] = [
  {
    icon: faUser,
    label: "Usuarios",
    quantity: quantity | 0,
  },
  {
    icon: faUsers,
    label: "Empleados",
    quantity: quantity | 0,
  },
  {
    icon: faArrowDownWideShort,
    label: "Órdenes",
    quantity: quantity | 0,
  },
  {
    icon: faNewspaper,
    label: "Artículos",
    quantity: quantity | 0,
  },
];
