import { ISelectOption } from "@/interfaces/ISelectOption";

export const orderTableFilterOptions: ISelectOption[] = [
  { value: "all", label: "Todo" },
  { value: "completed", label: "Completada" },
];

export const orderTableOrderOptions = [
  { key: "progress", value: "ASC", label: "Progreso ascendente" },
  { key: "progress", value: "DESC", label: "Progreso descendente" },
  { key: "createdAt", value: "ASC", label: "Fecha de creación ascendente" },
  { key: "createdAt", value: "DESC", label: "Fecha de creación descendente" },
  { key: "updatedAt", value: "ASC", label: "Última actualización ascendente" },
  { key: "updatedAt", value: "DESC", label: "Última actualización descendente" },
];
