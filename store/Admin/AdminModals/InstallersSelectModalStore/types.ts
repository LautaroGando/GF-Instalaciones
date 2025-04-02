import { IUser } from "@/interfaces/IUser";

export interface IInstallersSelectModalProps {
  isOpen: boolean;
  selectedInstallers: IUser[];
  addInstaller: (installer: IUser) => void;
  deleteInstaller: (id: string) => void;
  openModal: () => void;
  closeModal: () => void;
}
