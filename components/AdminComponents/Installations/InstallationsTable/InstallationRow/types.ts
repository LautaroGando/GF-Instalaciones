import IInstallation from "@/interfaces/IInstallation";

export interface IInstallationsRowProps {
  installation: IInstallation;
  onEdit: () => void;
  onDelete: () => void;
  onCancel: () => void;
  onPostpone: () => void;
  onViewNotes: () => void;
  onViewInstallers: () => void;
  onViewCoordinators: () => void; 
  onViewAddress: () => void;

  wasRecentlyEdited?: boolean;
}

export default IInstallationsRowProps;
