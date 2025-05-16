import IInstallation from "./IInstallation";
import { IUserSafe } from "./IUserSafe";

export interface IClientSafe {
  id: string;
  isActive: boolean;
  user: IUserSafe;
}

export interface IOrder {
  id: string;
  client: IClientSafe;
  orderNumber: string;
  title: string;
  description: string;
  createdAt: string;
  finishedAt: string | null;
  completed: boolean;
  endDate: string;
  installationsFinished: string;
  progress: string;
  installations: IInstallation[];
}

export default IOrder;
