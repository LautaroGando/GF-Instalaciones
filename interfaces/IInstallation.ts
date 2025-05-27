import TInstallationStatus from "@/types/TInstallationStatus";
import { IInstaller } from "./IInstaller";
import IAddress from "./IAddress";
import { IUser } from "./IUser";

export interface IInstallation {
  id: string;
  startDate: string | null;
  endDate: string | null;
  address: IAddress;
  status: TInstallationStatus;
  notes: string;
  installers: IInstaller[];
  coordinator: {
    id: string;
    user: IUser;
  };
  images: string[];
}

export default IInstallation;
