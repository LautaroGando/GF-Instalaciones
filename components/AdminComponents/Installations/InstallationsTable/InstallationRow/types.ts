import IInstallation from "@/interfaces/IInstallation";

export interface IInstallationsRowProps {
  installation: IInstallation;
  coordinatorName: string | null;
  onEdit: () => void;
  onDelete: () => void;
  onViewNotes: () => void;
  onViewInstallers: () => void;
  onViewAddress: () => void;
  onCancel: ()=>void;
  wasRecentlyEdited?: boolean;
}

export default IInstallationsRowProps;
