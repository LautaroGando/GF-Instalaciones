import { IUser } from "@/interfaces/IUser";

export interface IClientsSelectModalProps {
  isOpen: boolean;
  selectedClients: IUser[];
  addClient: (client: IUser) => void;
  removeClient: (clientId: string) => void;
  clearClients: () => void;
  openModal: () => void;
  closeModal: () => void;
}
