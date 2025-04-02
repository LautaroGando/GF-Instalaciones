import ICreateInstallationFormValues from "@/interfaces/ICreateInstallationFormValues";
import ICreateOrderFormValues from "@/interfaces/ICreateOrderFormValues";
import IEditInstallationFormValues from "@/interfaces/IEditInstallationFormValues";
import IEditOrderFormValues from "@/interfaces/IEditOrderFormValues";
import IInstallation from "@/interfaces/IInstallation";
import IOrder from "@/interfaces/IOrder";

export interface ITrackingProps {
  orders: IOrder[];
  isLoading: boolean;
  handleLoading: (conditional: boolean) => void;
  handleFetchOrders: () => Promise<void>;
  handleCreateOrder: (values: ICreateOrderFormValues) => Promise<IOrder>;
  handleUpdateOrder: (id: string, values: IEditOrderFormValues) => Promise<IEditOrderFormValues>;
  handleDeleteOrder: (id: string) => Promise<void>;
  handleCreateInstallation: (
    id: string,
    values: ICreateInstallationFormValues
  ) => Promise<IInstallation>;
  handleUpdateInstallation: (
    orderId: string,
    installationId: string,
    values: IEditInstallationFormValues
  ) => Promise<void>;
  handleDeleteInstallation: (id: string) => Promise<void>;
}
