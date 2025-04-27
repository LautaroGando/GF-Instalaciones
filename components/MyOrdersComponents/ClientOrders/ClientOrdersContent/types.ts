import IOrder from "@/interfaces/IOrder";

export interface ClientOrdersContentProps {
  orders: IOrder[];
  isLoading: boolean;
  isLoadingOrders: boolean;
}