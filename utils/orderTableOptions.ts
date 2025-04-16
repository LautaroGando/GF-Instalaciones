import { TGroupedOrderOption } from "@/data/AdminComponents/installationsFiltersAndOrders/installationOrdersOptions/types";
import { ISelectOption } from "@/interfaces/ISelectOption";

export const orderTableFilterOptions: ISelectOption[] = [
  { value: "completed", label: "Completada" },
];

export const orderTableOrderOptions: TGroupedOrderOption[] = [
  {
    label: "Progreso",
    options: [
      { value: "progress-ASC", label: "Ascendente ↑" },
      { value: "progress-DESC", label: "Descendente ↓" },
    ],
  },
  {
    label: "Fecha de creación",
    options: [
      { value: "createdAt-ASC", label: "Ascendente ↑" },
      { value: "createdAt-DESC", label: "Descendente ↓" },
    ],
  },
  {
    label: "Última actualización",
    options: [
      { value: "updatedAt-ASC", label: "Ascendente ↑" },
      { value: "updatedAt-DESC", label: "Descendente ↓" },
    ],
  },
];
