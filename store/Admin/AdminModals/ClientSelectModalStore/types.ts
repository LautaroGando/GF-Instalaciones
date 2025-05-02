import { IUser } from "@/interfaces/IUser";

export interface IClientsSelectModalProps {
  isOpen: boolean;
  selectedClient: IUser | null;
  addClient: (client: IUser) => void;
  clearClient: () => void;
  openModal: () => void;
  closeModal: () => void;
}
