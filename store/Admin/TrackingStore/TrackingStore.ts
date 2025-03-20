import { create } from "zustand";

import getAllOrders from "@/services/orders/getOrders";
import createOrder from "@/services/orders/createOrder";
import ICreateOrderFormValues from "@/interfaces/ICreateOrderFormValues";
import IOrder from "@/interfaces/IOrder";
import IEditOrderFormValues from "@/interfaces/IEditOrderFormValues";
import updateOrder from "@/services/orders/updateOrder";
import { ITrackingProps } from "./types";

export const useTrackingStore = create<ITrackingProps>((set, get) => ({
  orders: [],
  isLoading: false,
  handleFetchOrders: async () => {
    try {
      set({ isLoading: true });
      const orders = await getAllOrders();
      set({ orders });
    } catch (err) {
      console.log(err);
    } finally {
      set({ isLoading: false });
    }
  },
  handleCreateOrder: async (values: ICreateOrderFormValues) => {
    try {
      set({ isLoading: true });
      const newOrder: IOrder = await createOrder(values);
      set((state) => ({ orders: [...state.orders, newOrder] }));
      return newOrder;
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      set({ isLoading: false });
    }
  },

  handleUpdateOrder: async (
    id: string,
    values: IEditOrderFormValues
  ): Promise<IEditOrderFormValues> => {
    try {
      set({ isLoading: true });

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
      console.log("Error updating order:", err);
      throw err;
    } finally {
      set({ isLoading: false });
    }
  },
}));
