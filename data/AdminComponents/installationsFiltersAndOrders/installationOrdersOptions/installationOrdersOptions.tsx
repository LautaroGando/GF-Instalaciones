import { TGroupedOrderOption } from "./types";

export const orderOptions: TGroupedOrderOption[] = [
  {
    label: "Fecha de creación",
    options: [
      { value: "createdAt-ASC", label: "Ascendente ↑" },
      { value: "createdAt-DESC", label: "Descendente ↓" },
    ],
  },
  {
    label: "Última modificación",
    options: [
      { value: "updatedAt-ASC", label: "Ascendente ↑" },
      { value: "updatedAt-DESC", label: "Descendente ↓" },
    ],
  },
];

