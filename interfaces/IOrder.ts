import IInstallation from "./IInstallation";

export interface IOrderClient {
  id: string;
  role: {
    id: string;
    name: string;
  };
  notifications: string[];
}

export interface IOrder {
  id: string;
  client: IOrderClient
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
