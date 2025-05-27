import TInstallationStatus from "@/types/TInstallationStatus";

export interface ITrackingStepProps {
  statusName: TInstallationStatus;
  date: string;
  visualState: "done" | "half" | "pending" | "inactive";
}