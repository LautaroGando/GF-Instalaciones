//? ORDERS
import IOrder from "@/interfaces/IOrder";
import ICreateOrderFormValues from "@/interfaces/ICreateOrderFormValues";
import IEditOrderFormValues from "@/interfaces/IEditOrderFormValues";
import { IOrderFilters } from "@/interfaces/IOrderFilters";
import { IOrderSortParams } from "@/interfaces/IOrderSortParams";
import { TOrdersQueryParams } from "@/types/TOrdersQueryParams";

//? INSTALLATIONS
import IInstallation from "@/interfaces/IInstallation";
import ICreateInstallationFormValues from "@/interfaces/ICreateInstallationFormValues";
import IEditInstallationFormValues from "@/interfaces/IEditInstallationFormValues";

export interface ITrackingProps {
  orders: IOrder[];
  selectedOrder: IOrder | null;
  isLoading: boolean;
  orderFilters: IOrderFilters;
  orderSortParams: IOrderSortParams;
  handleLoading: (conditional: boolean) => void;

  //? ORDERS
  handleFetchOrders: (params?: Partial<TOrdersQueryParams>) => Promise<void>;
  handleCreateOrder: (values: ICreateOrderFormValues) => Promise<IOrder>;
  handleUpdateOrder: (id: string, values: IEditOrderFormValues) => Promise<IEditOrderFormValues>;
  handleDeleteOrder: (id: string) => Promise<void>;

  //? INSTALLATIONS
  handleFetchInstallations: (orderId: string) => Promise<IInstallation[] | null>;
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
