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
import { IInstallationFilters } from "@/interfaces/IInstallationFilters";
import { IInstallationSortParams } from "@/interfaces/IInstallationSortParams";
import { TInstallationQueryParams } from "@/types/TInstallationQueryParams";

export interface ITrackingProps {
  orders: IOrder[];
  selectedOrder: IOrder | null;
  isLoading: boolean;
  handleLoading: (conditional: boolean) => void;
  orderFilters: IOrderFilters;
  orderSortParams: IOrderSortParams;
  installationFilters: IInstallationFilters;
  installationSort: IInstallationSortParams;

  //? ORDERS
  handleFetchOrders: (params?: Partial<TOrdersQueryParams>) => Promise<void>;
  handleCreateOrder: (values: ICreateOrderFormValues) => Promise<IOrder>;
  handleUpdateOrder: (id: string, values: IEditOrderFormValues) => Promise<IEditOrderFormValues>;
  handleDeleteOrder: (id: string) => Promise<void>;

  //? INSTALLATIONS
  handleFetchInstallations: (
    orderId: string,
    params?: Partial<TInstallationQueryParams>
  ) => Promise<IInstallation[] | null>;

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
