import IInstallation from "./IInstallation";
import { IUserSafe } from "./IUserSafe";

export interface IOrder {
  id: string;
  client: IUserSafe;
  orderNumber: string;
  title: string;
  description: string;
  createdAt: string;
  finishedAt: string | null;
  completed: boolean;
  installationsFinished: string;
  progress: string;
  installations: IInstallation[];
}

export default IOrder;
