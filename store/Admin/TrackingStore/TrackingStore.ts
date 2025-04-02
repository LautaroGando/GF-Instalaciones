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
  getAllOrders,
  updateInstallation,
  updateOrder,
} from "@/services/orders";
import ICreateInstallationFormValues from "@/interfaces/ICreateInstallationFormValues";
import IEditInstallationFormValues from "@/interfaces/IEditInstallationFormValues";

export const useTrackingStore = create<ITrackingProps>((set, get) => ({
  orders: [],
  isLoading: false,

  handleLoading: (conditional: boolean) => {
    set({ isLoading: conditional });
  },

  // ORDERS

  handleFetchOrders: async () => {
    try {
      get().handleLoading(true);
      const orders = await getAllOrders();
      set({ orders });
    } catch (err) {
      console.log("Error al obtener las órdenes:", err);
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

      get().handleFetchOrders();

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

  // INSTALLATIONS

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
    orderId: string,
    installationId: string,
    values: IEditInstallationFormValues
  ) => {
    try {
      const updatedInstallation = await updateInstallation(orderId, installationId, values);
      if (!updatedInstallation) throw new Error("Error al actualizar la instalación");

      set((state) => ({
        orders: state.orders.map((order) => {
          if (order.id !== orderId) return order;

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
