import IOrder from "@/interfaces/IOrder";

export interface IOrderCardStatusProps {
  toReview: boolean;
  orderIsCompleted: boolean;
  order: IOrder;
}
