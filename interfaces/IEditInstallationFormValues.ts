import type TInstallationStatus from "@/types/TInstallationStatus";

export interface IEditInstallationFormValues {
  id: string;
  startDate: string | null;
  installersIds: string[];
  status: TInstallationStatus;
}

export default IEditInstallationFormValues;
