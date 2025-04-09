export type OrderField = "createdAt" | "updatedAt" | "progress";
export type OrderDirection = "ASC" | "DESC";

export type OrderOptionValue = `${OrderField}-${OrderDirection}`;

export type OrderOption = {
  value: OrderOptionValue;
  label: string;
};

export type TGroupedOrderOption = {
  label: string;
  options: OrderOption[];
};
