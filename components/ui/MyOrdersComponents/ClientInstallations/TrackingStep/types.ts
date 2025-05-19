import IInstallation from "@/interfaces/IInstallation";
import TInstallationStatus from "@/types/TInstallationStatus";

export interface ITrackingStepProps {
  statusName: TInstallationStatus;
  installation: IInstallation;
  visualState: "done" | "half" | "pending" | "inactive";
}