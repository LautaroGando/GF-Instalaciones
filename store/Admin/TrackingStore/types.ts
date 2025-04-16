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
import TInstallationStatus from "@/types/TInstallationStatus";

export interface ITrackingProps {
  // ===========================
  // 🔘 1. Estados iniciales
  // ===========================

  orders: IOrder[];
  selectedOrder: IOrder | null;
  isLoading: boolean;
  ordersPage: number;
  ordersTotalPages: number;
  installations: IInstallation[] | null;
  installationsPage: number;
  installationsTotalPages: number;
  editedInstallationId: string | null;
  orderFilters: IOrderFilters;
  orderSortParams: IOrderSortParams;
  installationFilters: IInstallationFilters;
  installationSort: IInstallationSortParams;
  installationStatus: TInstallationStatus;
  completeModal: boolean;

  handleLoading: (conditional: boolean) => void;
  setEditedInstallationId: (id: string | null) => void;

  // ===========================
  // 📕 2. Paginacion
  // ===========================

  ordersNextPage: () => void;
  ordersPreviousPage: () => void;
  installationsNextPage: () => void;
  installationsPreviousPage: () => void;

  // ===========================
  // 📦 3. Ordenes
  // ===========================
  handleFetchOrders: (params?: Partial<TOrdersQueryParams>) => Promise<void>;
  handleCreateOrder: (values: ICreateOrderFormValues) => Promise<IOrder>;
  handleUpdateOrder: (
    id: string,
    values: IEditOrderFormValues
  ) => Promise<IEditOrderFormValues>;
  handleDeleteOrder: (id: string) => Promise<void>;

  // ===========================
  // 🧰 4. Instalaciones
  // ===========================

  handleFetchInstallationsNotPagination: () => Promise<IInstallation[] | void>;
  handleFetchInstallations: (
    orderId: string,
    params?: Partial<TInstallationQueryParams>
  ) => Promise<IInstallation[] | null>;

  handleCreateInstallation: (
    id: string,
    values: ICreateInstallationFormValues
  ) => Promise<IInstallation>;
  handleUpdateInstallation: (
    installationId: string,
    values: IEditInstallationFormValues
  ) => Promise<void>;
  handleDeleteInstallation: (id: string) => Promise<void>;
  handleInstallationStatus: (
    id: string,
    status: TInstallationStatus
  ) => Promise<void>;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}
