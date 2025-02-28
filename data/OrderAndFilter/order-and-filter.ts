import { IFilter, IOrder } from "./types";

export const filterUsers: IFilter[] = [
  {
    value: "all",
    label: "Todo",
  },
  {
    value: "user",
    label: "Usuarios",
  },
  {
    value: "installer",
    label: "Instaladores",
  },
  {
    value: "coordinator",
    label: "Coordinadores",
  },
  {
    value: "active",
    label: "Activo",
  },
  {
    value: "inactive",
    label: "Inactivo",
  },
];

export const orderUsers: IOrder[] = [
  {
    value: "latest",
    label: "Más reciente",
  },
  {
    value: "abc",
    label: "A - Z",
  },
  {
    value: "role",
    label: "Rol",
  },
  {
    value: "status",
    label: "Estado",
  },
];
