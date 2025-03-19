export interface ITextModalStateProps {
  isOpen: boolean;
  title: string;
  text: React.ReactNode;
  openModal: (title: string, text: React.ReactNode) => void;
  closeModal: () => void;
}
