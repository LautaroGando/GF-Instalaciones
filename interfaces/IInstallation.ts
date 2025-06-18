import TInstallationStatus from "@/types/TInstallationStatus";
import { IInstaller } from "./IInstaller";
import IAddress from "./IAddress";
import { ICoordinator } from "./ICoordinator";

export interface IInstallation {
  id: string;
  startDate: string | null;
  endDate: string | null;
  address: IAddress;
  status: TInstallationStatus;
  notes: string;
  installers: IInstaller[];
  coordinator: ICoordinator[];
  images: string[];
}

export interface IInstallationResult {
  result: IInstallation[];
}

export default IInstallation;
