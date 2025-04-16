import IInstallation from "@/interfaces/IInstallation";

export interface IInstallationNoteModalState {
  isOpen: boolean;
  installation: IInstallation | null;
  title: string | null;
  text: string | null;
  images: string[];
  openModal: (params: {
    installation: IInstallation;
    title: string;
    text: string;
    images?: string[];
  }) => void;
  closeModal: () => void;
}
