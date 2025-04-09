import IInstallation from "@/interfaces/IInstallation";

export interface IInstallationsRowProps {
  installation: IInstallation;
  coordinatorName: string | null;
  onEdit: () => void;
  onDelete: () => void;
  onViewNotes: () => void;
  onViewAddress: () => void;
}

export default IInstallationsRowProps;
