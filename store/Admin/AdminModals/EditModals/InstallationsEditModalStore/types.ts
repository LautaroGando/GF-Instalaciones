import IInstallation from "@/interfaces/IInstallation";

export interface InstallationsEditModalProps {
  isOpen: boolean;
  selectedInstallation: IInstallation | null;
  openModal: (order: IInstallation) => void;
  closeModal: () => void;
}
