import { IFilter, IOrder } from "@/data/OrderAndFilter/types";

export interface IOrderAndFilterProps {
  filter: IFilter[];
  order: IOrder[];
  filterId: string;
  orderId: string;
}
