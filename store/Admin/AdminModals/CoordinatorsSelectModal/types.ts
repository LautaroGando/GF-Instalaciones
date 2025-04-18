import { IUser } from "@/interfaces/IUser";

export interface ICoordinatorsSelectModalProps {
  isOpen: boolean;
  selectedCoordinators: IUser[];
  addCoordinator: (coordinator: IUser) => void;
  deleteCoordinator: (id: string) => void;
  clearCoordinators: () => void;
  openModal: () => void;
  closeModal: () => void;
}
