import IInstallation from "./IInstallation";

export interface IOrder {
  id: string;
  orderNumber: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string | null;
  completed: boolean;
  instalationsFinished: string;
  progress: string;
  instalations: IInstallation[];
}

export default IOrder;
