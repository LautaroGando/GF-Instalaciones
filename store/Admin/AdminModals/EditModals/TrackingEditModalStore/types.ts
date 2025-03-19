import IOrder from "@/interfaces/IOrder";

export interface ITrackingEditModalProps {
  isOpen: boolean;
  selectedOrder: IOrder | null;
  openModal: (order: IOrder) => void;
  closeModal: () => void;
}
