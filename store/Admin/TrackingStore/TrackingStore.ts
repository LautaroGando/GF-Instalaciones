import { create } from "zustand";
import ICreateOrderFormValues from "@/interfaces/ICreateOrderFormValues";
import IOrder from "@/interfaces/IOrder";
import IEditOrderFormValues from "@/interfaces/IEditOrderFormValues";

import { ITrackingProps } from "./types";
import {
  createInstallation,
  createOrder,
  deleteInstallation,
  deleteOrder,
  getAllInstallations,
  getAllOrders,
  getOrderById,
  updateInstallation,
  updateOrder,
} from "@/services/orders";
import ICreateInstallationFormValues from "@/interfaces/ICreateInstallationFormValues";
import IEditInstallationFormValues from "@/interfaces/IEditInstallationFormValues";
import IInstallation from "@/interfaces/IInstallation";
import { TInstallationQueryParams } from "@/types/TInstallationQueryParams";
import { TOrdersQueryParams } from "@/types/TOrdersQueryParams";

export const useTrackingStore = create<ITrackingProps>((set, get) => ({
  // ===========================
  // 🔘 1. Estados iniciales
  // ===========================

  orders: [],
  selectedOrder: null as IOrder | null,
  isLoading: false,
  ordersPage: 1,
  ordersTotalPages: 1,
  orderFilters: {
    completed: false,
  },
  orderSortParams: {
    progress: "",
    createdAt: "",
    updatedAt: "",
  },
  installationFilters: {
    status: "",
    province: "",
    city: "",
  },
  installationSort: {
    createdAt: "",
    updatedAt: "",
  },

  handleLoading: (conditional: boolean) => {
    set({ isLoading: conditional });
  },

  // ===========================
  // 📕 2. Paginacion
  // ===========================

  ordersNextPage: async () => {
    const currentPage = get().ordersPage;
    const totalPages = get().ordersTotalPages;

    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      set({ ordersPage: newPage });
      await get().handleFetchOrders({ page: newPage });
    }
  },

  ordersPreviousPage: async () => {
    const currentPage = get().ordersPage;

    if (currentPage > 1) {
      const newPage = currentPage - 1;
      set({ ordersPage: newPage });
      await get().handleFetchOrders({ page: newPage });
    }
  },
  installationsNextPage: () => {},
  installationsPreviousPage: () => {},

  // ===========================
  // 📦 3. Ordenes
  // ===========================

  handleFetchOrders: async (params?: Partial<TOrdersQueryParams>) => {
    get().handleLoading(true);

    try {
      const {
        progress = "",
        createdAt = "",
        updatedAt = "",
        completed = get().orderFilters.completed,
        page = get().ordersPage,
      } = params || {};

      const finalParams = { progress, createdAt, updatedAt, completed, page };

      const { result: orders, totalPages } = await getAllOrders(finalParams);

      set(() => ({
        orders,
        orderFilters: { completed },
        orderSortParams: { progress, createdAt, updatedAt },
        ordersTotalPages: totalPages,
      }));
    } catch (err) {
      console.error("Error al obtener las órdenes:", err);
    } finally {
      get().handleLoading(false);
    }
  },

  handleCreateOrder: async (values: ICreateOrderFormValues) => {
    try {
      get().handleLoading(true);
      const newOrder: IOrder = await createOrder(values);
      setTimeout(() => {
        set((state) => ({ orders: [...state.orders, newOrder] }));
      }, 500);
      return newOrder;
    } catch (err) {
      console.log("Error al crear la orden:", err);
      throw err;
    } finally {
      get().handleLoading(false);
    }
  },

  handleUpdateOrder: async (
    id: string,
    values: IEditOrderFormValues
  ): Promise<IEditOrderFormValues> => {
    try {
      get().handleLoading(true);

      const updatedOrder = await updateOrder(id, values);
      if (!updatedOrder) throw new Error("Error al actualizar la orden");

      set((state) => ({
        orders: state.orders.map((order) =>
          order.id === id ? { ...order, ...updatedOrder } : order
        ),
      }));

      const fetchOrders = get().handleFetchOrders;
      if (fetchOrders) await fetchOrders();

      return updatedOrder;
    } catch (err) {
      console.log("Error al actualizar la orden:", err);
      throw err;
    } finally {
      get().handleLoading(false);
    }
  },

  handleDeleteOrder: async (id: string) => {
    try {
      await deleteOrder(id);
      set((state) => ({
        orders: state.orders.filter((o) => o.id !== id),
      }));
    } catch (err) {
      console.error("Error al eliminar la orden:", err);
      throw err;
    }
  },

  // ===========================
  // 🧰 4. Instalaciones
  // ===========================

  handleFetchInstallations: async (
    orderId: string,
    params?: Partial<TInstallationQueryParams>
  ): Promise<IInstallation[] | null> => {
    get().handleLoading(true);

    try {
      const {
        status = "",
        province = "",
        city = "",
        createdAt = "",
        updatedAt = "",
      } = params || {};

      const allInstallations = await getAllInstallations(orderId, params);
      const existingOrder = get().orders.find((o) => o.id === orderId);
      const fetchedOrder = existingOrder ?? (await getOrderById(orderId));

      set(() => ({
        installationFilters: { status, province, city },
        installationSort: { createdAt, updatedAt },
        selectedOrder: {
          ...fetchedOrder,
          installations: allInstallations,
        },
      }));

      return allInstallations;
    } catch (error) {
      console.error("Error al obtener las instalaciones:", error);
      return null;
    } finally {
      get().handleLoading(false);
    }
  },

  handleCreateInstallation: async (orderId: string, values: ICreateInstallationFormValues) => {
    try {
      get().handleLoading(true);
      const newInstallation = await createInstallation(orderId, values);

      set((state) => ({
        orders: state.orders.map((order) =>
          order.id === orderId
            ? {
                ...order,
                installations: [...(order.installations || []), newInstallation],
              }
            : order
        ),
      }));

      return newInstallation;
    } catch (err) {
      console.log("Error al crear la instalación:", err);
      throw err;
    } finally {
      get().handleLoading(false);
    }
  },

  handleUpdateInstallation: async (

    installationId: string,
    values: IEditInstallationFormValues
  ) => {
    try {
      const updatedInstallation = await updateInstallation(installationId, values);
      if (!updatedInstallation) throw new Error("Error al actualizar la instalación");

      set((state) => ({
        orders: state.orders.map((order) => {
          
          return {
            ...order,
            installations: order.installations.map((installation) =>
              installation.id === installationId
                ? { ...installation, ...updatedInstallation }
                : installation
            ),
          };
        }),
      }));

      return updatedInstallation;
    } catch (err) {
      console.log("Error al actualizar la instalación:", err);
      throw err;
    }
  },

  handleDeleteInstallation: async (id: string) => {
    try {
      await deleteInstallation(id);
      set((state) => ({
        orders: state.orders.map((order) => ({
          ...order,
          installations: order.installations.filter((inst) => inst.id !== id),
        })),
      }));
    } catch (err) {
      console.error("Error al eliminar la instalación:", err);
      throw err;
    }
  },
}));
