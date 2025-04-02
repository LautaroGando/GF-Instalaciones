import IInstallation from "./IInstallation";

export interface IOrder {
  id: string;
  orderNumber: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string | null;
  completed: boolean;
  installationsFinished: string;
  progress: string;
  installations: IInstallation[];
}

export default IOrder;
