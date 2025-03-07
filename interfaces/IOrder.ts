import IInstallation from "./IInstallation";

export interface IOrder {
  id: string;
  order_id: string;
  order_name: string;
  order_description: string;
  province: string;
  client_id: string;
  start_date: string;
  end_date: string;
  status: string;
  installation_id: string;
  installations: IInstallation[];
}

export default IOrder;
