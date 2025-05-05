import IOrder from "@/interfaces/IOrder";

export interface ITrackingRowsProps {
  order: IOrder;
  editOrder: () => void;
  deleteOrder: () => void;
  descriptionModal: () => void;
  clientInfoModal: () => void;
}

export default ITrackingRowsProps;
