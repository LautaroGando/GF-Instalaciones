import TInstallationStatus from "@/types/TInstallationStatus";

export interface IEditInstallationFormValues {
  id: string;
  startDate: string | null;
  endDate: string | null;
  status: TInstallationStatus;
  notes: string;
}


export default IEditInstallationFormValues;
