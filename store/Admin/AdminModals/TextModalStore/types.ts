export interface ITextModalStateProps {
  isOpen: boolean;
  title: string;
  text: string | null;
  openModal: (title: string, text: string | null) => void;
  closeModal: () => void;
}
