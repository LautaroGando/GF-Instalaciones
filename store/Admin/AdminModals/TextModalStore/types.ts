export interface ITextModalStateProps {
  isOpen: boolean;
  title: string;
  text: string | null;
  images?: string[];
  openModal: (title: string, text: string, images?: string[]) => void;
  closeModal: () => void;
}
