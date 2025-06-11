import { ISelectedCoordinator } from "@/interfaces/ISelectedCoordinator";

export interface ICoordinatorsSelectModalProps {
  isOpen: boolean;
  selectedCoordinators: ISelectedCoordinator[];
  addCoordinator: (coordinator: ISelectedCoordinator) => void;
  deleteCoordinator: (id: string) => void;
  clearCoordinators: () => void;
  openModal: () => void;
  closeModal: () => void;
}
