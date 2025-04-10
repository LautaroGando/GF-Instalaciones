import { IInstaller } from "@/interfaces/IInstaller";

export interface IInstallersSelectModalProps {
  isOpen: boolean;
  selectedInstallers: IInstaller[];
  addInstaller: (installer: IInstaller) => void;
  deleteInstaller: (id: string) => void;
  openModal: () => void;
  closeModal: () => void;
}
