import IOrder from "@/interfaces/IOrder";

export interface ITrackingRowsProps {
  order: IOrder;
  editOrder: () => void;
  deleteOrder: () => void;
  openTextModal: () => void;
}

export default ITrackingRowsProps;
