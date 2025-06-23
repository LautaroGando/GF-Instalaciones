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
  getAllInstallationsNotPagination,
  getAllInstallationsPagination,
  getAllOrders,
  getAllOrdersWithParams,
  getOrderById,
  updateInstallation,
  updateInstallationStatus,
  updateOrder,
} from "@/services/orders";
import ICreateInstallationFormValues from "@/interfaces/ICreateInstallationFormValues";
import IEditInstallationFormValues from "@/interfaces/IEditInstallationFormValues";
import IInstallation from "@/interfaces/IInstallation";
import { TInstallationQueryParams } from "@/types/TInstallationQueryParams";
import { TOrdersQueryParams } from "@/types/TOrdersQueryParams";
import TInstallationStatus from "@/types/TInstallationStatus";

export const useTrackingStore = create<ITrackingProps>((set, get) => ({
  // ===========================
  // 🔘 1. Estados iniciales
  // ===========================

  orders: [],
  allOrders: [],
  selectedOrder: null as IOrder | null,
  isLoading: false,
  ordersPage: 1,
  ordersTotalPages: 1,
  installationsPage: 1,
  installationsTotalPages: 1,
  editedInstallationId: null,
  ordersSearch: "",
  installationsSearch: "",

  orderFilters: {
    completed: false,
  },
  orderSortParams: {
    progress: "",
    createdAt: "",
    updatedAt: "",
  },
  installations: null,
  installationFilters: {
    status: "",
    province: "",
    city: "",
  },
  installationSort: {
    createdAt: "",
    updatedAt: "",
  },
  installationStatus: "En proceso" as TInstallationStatus,
  completeModal: null,

  // ===========================
  // 🛠️ 2. Utilidades Generales
  // ===========================

  handleLoading: (conditional: boolean) => {
    set({ isLoading: conditional });
  },
  setEditedInstallationId: (id: string | null) =>
    set({ editedInstallationId: id }),

  handleOpenModal: (id) => set(() => ({ completeModal: id })), // habria que colocar un nombre mas especifico
  handleCloseModal: () => set(() => ({ completeModal: null })), // habria que colocar un nombre mas especifico

  // ===========================
  // 🔎 3. Busqueda
  // ===========================
  setOrdersSearch: (search: string) => set({ ordersSearch: search }),
  getFilteredOrders: () => {
    const { orders, ordersSearch } = get();

    const normalize = (text: string) =>
      text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ")
        .trim();

    const search = normalize(ordersSearch);

    return orders.filter(
      (order) =>
        normalize(order.orderNumber).includes(search) ||
        normalize(order.title).includes(search)
    );
  },
  setInstallationsSearch: (search: string) =>
    set({ installationsSearch: search }),
  getFilteredInstallations: () => {
    const { selectedOrder, installationsSearch } = get();

    const normalize = (text: string) =>
      text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ")
        .trim();

    const search = normalize(installationsSearch);

    if (!selectedOrder?.installations?.length) return [];

    return selectedOrder.installations.filter(
      (inst) =>
        normalize(inst.address?.city?.name ?? "").includes(search) ||
        inst.coordinator?.some((coor) =>
          normalize(coor.user.fullName).includes(search)
        )
    );
  },

  // ===========================
  // 📕 4. Paginacion
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
  installationsNextPage: async () => {
    const currentPage = get().installationsPage;
    const totalPages = get().installationsTotalPages;
    const orderId = get().selectedOrder?.id;

    if (!orderId) return;

    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      set({ installationsPage: newPage });
      await get().handleFetchInstallations(orderId, { page: newPage });
    }
  },
  installationsPreviousPage: async () => {
    const currentPage = get().installationsPage;
    const orderId = get().selectedOrder?.id;

    if (!orderId || currentPage <= 1) return;

    const newPage = currentPage - 1;
    set({ installationsPage: newPage });
    await get().handleFetchInstallations(orderId, { page: newPage });
  },

  // ===========================
  // 📦 5. Ordenes
  // ===========================

  handleFetchAllOrders: async () => {
    try {
      get().handleLoading(true);
      const { result: allOrdersData } = await getAllOrders();
      set(() => ({
        allOrders: allOrdersData,
      }));
    } catch (err) {
      console.error("Error al obtener las órdenes:", err);
    } finally {
      get().handleLoading(false);
    }
  },
  handleFetchOrders: async (params?: Partial<TOrdersQueryParams>) => {
    try {
      get().handleLoading(true);
      const {
        progress = "",
        createdAt = "",
        updatedAt = "",
        completed = get().orderFilters.completed,
        page = get().ordersPage,
        ordersSearch = "",
      } = params || {};

      const finalParams = {
        progress,
        createdAt,
        updatedAt,
        completed,
        page,
        ordersSearch,
      };

      const { result: orders, totalPages } = await getAllOrdersWithParams(
        finalParams
      );

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
        set((state) => ({ orders: [newOrder, ...state.orders] }));
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
  // 🧰 6. Instalaciones
  // ===========================

  handleFetchInstallationsPagination: async () => {
    try {
      const getInstallations = await getAllInstallationsPagination();
      set(() => ({ installations: getInstallations }));
    } catch (error) {
      console.log(error);
    }
  },
  handleFetchInstallationsNotPagination: async () => {
    try {
      const getInstallations = await getAllInstallationsNotPagination();
      set(() => ({ installations: getInstallations }));
    } catch (error) {
      console.log(error);
    }
  },
  handleFetchInstallations: async (
    orderId: string,
    params?: Partial<TInstallationQueryParams>
  ): Promise<IInstallation[] | null> => {
    try {
      get().handleLoading(true);
      const {
        status = "",
        province = "",
        city = "",
        createdAt = "",
        updatedAt = "",
        page = get().installationsPage,
      } = params || {};

      const finalParams = {
        status,
        province,
        city,
        createdAt,
        updatedAt,
        page,
      };

      const { result: allInstallations, totalPages } =
        await getAllInstallations(orderId, finalParams);

      const existingOrder = get().orders.find((o) => o.id === orderId);
      const fetchedOrder = existingOrder ?? (await getOrderById(orderId));

      set(() => ({
        installationFilters: { status, province, city },
        installationSort: { createdAt, updatedAt },
        installationsPage: page,
        installationsTotalPages: totalPages,
        selectedOrder: {
          ...fetchedOrder,
          installations: allInstallations,
        },
      }));

      return allInstallations;
    } catch (error) {
      console.log("Error al obtener las instalaciones:", error);
      return null;
    } finally {
      get().handleLoading(false);
    }
  },
  handleCreateInstallation: async (
    orderId: string,
    values: ICreateInstallationFormValues
  ) => {
    try {
      const newInstallation = await createInstallation(orderId, values);

      const normalizedInstallation = Array.isArray(newInstallation)
        ? newInstallation[0]
        : newInstallation;

      set((state) => ({
        orders: state.orders.map((order) =>
          order.id === orderId
            ? {
                ...order,
                installations: [
                  normalizedInstallation,
                  ...(order.installations || []),
                ],
              }
            : order
        ),
        selectedOrder:
          state.selectedOrder?.id === orderId
            ? {
                ...state.selectedOrder,
                installations: [
                  normalizedInstallation,
                  ...(state.selectedOrder.installations || []),
                ],
              }
            : state.selectedOrder,
      }));

      return newInstallation;
    } catch (err) {
      console.log("Error al crear la instalación:", err);
      throw err;
    }
  },
  handleUpdateInstallation: async (
    installationId: string,
    values: IEditInstallationFormValues
  ) => {
    try {
      const updatedInstallation = await updateInstallation(
        installationId,
        values
      );
      if (!updatedInstallation)
        throw new Error("Error al actualizar la instalación");

      set((state) => {
        const updatedOrders = state.orders.map((order) => ({
          ...order,
          installations: order.installations.map((installation) =>
            installation.id === installationId
              ? { ...installation, ...updatedInstallation }
              : installation
          ),
        }));

        const updatedSelectedOrder = state.selectedOrder?.id
          ? {
              ...state.selectedOrder,
              installations: state.selectedOrder.installations.map(
                (installation) =>
                  installation.id === installationId
                    ? { ...installation, ...updatedInstallation }
                    : installation
              ),
            }
          : state.selectedOrder;

        return {
          orders: updatedOrders,
          selectedOrder: updatedSelectedOrder,
        };
      });

      return updatedInstallation;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  handleDeleteInstallation: async (id: string) => {
    try {
      await deleteInstallation(id);

      set((state) => {
        const updatedOrders = state.orders.map((order) => ({
          ...order,
          installations: order.installations.filter((inst) => inst.id !== id),
        }));

        const updatedSelectedOrder = state.selectedOrder
          ? {
              ...state.selectedOrder,
              installations: state.selectedOrder.installations.filter(
                (inst) => inst.id !== id
              ),
            }
          : state.selectedOrder;

        return {
          orders: updatedOrders,
          selectedOrder: updatedSelectedOrder,
        };
      });
    } catch (err) {
      console.error("Error al eliminar la instalación:", err);
      throw err;
    }
  },
  handleInstallationStatus: async (id: string, status: TInstallationStatus) => {
    try {
      await updateInstallationStatus(id, status);

      set((state) => {
        const updatedInstallations =
          state.installations?.result.map((installation) =>
            installation.id === id ? { ...installation, status } : installation
          ) || [];

        const updatedOrders = state.orders.map((order) => ({
          ...order,
          installations: order.installations.map((installation) =>
            installation.id === id ? { ...installation, status } : installation
          ),
        }));

        const updatedSelectedOrder = state.selectedOrder
          ? {
              ...state.selectedOrder,
              installations: state.selectedOrder.installations.map(
                (installation) =>
                  installation.id === id
                    ? { ...installation, status }
                    : installation
              ),
            }
          : null;

        return {
          installations: {
            ...state.installations!,
            result: updatedInstallations,
          },
          orders: updatedOrders,
          selectedOrder: updatedSelectedOrder,
        };
      });
    } catch (err) {
      console.error("Error al actualizar el estado:", err);
      throw err;
    }
  },
}));
