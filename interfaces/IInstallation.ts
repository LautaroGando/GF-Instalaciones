import TInstallationStatus from "@/types/TInstallationStatus";
import { IAddress } from "./IAddress";

export interface IInstallation {
  id: number;
  startDate: string;
  address: IAddress;
  status: TInstallationStatus;
  notes: string;
}

export default IInstallation;
