import TInstallationStatus from "@/types/TInstallationStatus";
import { IInstaller } from "./IInstaller";

export interface IInstallation {
  id: string;
  startDate: string | null;
  endDate: string | null;
  address: {
    id: string;
    street: string;
    number: string;
    postalCode: string;
    note: string;
    city: {
      id: string;
      name: string;
      province: {
        id: string;
        name: string;
      };
    };
  };
  status: TInstallationStatus;
  notes: string;
  installers: IInstaller[];
  coordinator: { id: string } | null;
}

export default IInstallation;
