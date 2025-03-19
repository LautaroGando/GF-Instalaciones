import { IUser } from "./IUser";

export interface ICreateInstallationFormValues {
  street: string;
  number: string;
  city: string;
  province: string;
  postalCode: string;
  startDate: string;
  notes?: string;
  selectInstaller: IUser[];
  status: "Pendiente" | "En proceso" | "A revisar" | "Pospuesta" | "Finalizada" | "Cancelada";
}

export default ICreateInstallationFormValues;
