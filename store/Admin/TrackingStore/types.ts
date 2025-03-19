import ICreateOrderFormValues from "@/interfaces/ICreateOrderFormValues";
import IEditOrderFormValues from "@/interfaces/IEditOrderFormValues";
import IOrder from "@/interfaces/IOrder";

export interface ITrackingProps {
  orders: IOrder[];
  isLoading: boolean;
  handleFetchOrders: () => Promise<void>;
  handleCreateOrder: (values: ICreateOrderFormValues) => Promise<IOrder>;
  handleUpdateOrder: (id: string, values: IEditOrderFormValues) => Promise<IEditOrderFormValues>;
}
