import { API_URL } from "@/config/envs";
import ICreateInstallationFormValues from "@/interfaces/ICreateInstallationFormValues";
import ICreateOrderFormValues from "@/interfaces/ICreateOrderFormValues";
import IEditInstallationFormValues from "@/interfaces/IEditInstallationFormValues";
import IEditOrderFormValues from "@/interfaces/IEditOrderFormValues";
import IOrder from "@/interfaces/IOrder";
import { TInstallationQueryParams } from "@/types/TInstallationQueryParams";
import { TOrdersQueryParams } from "@/types/TOrdersQueryParams";
import { cleanParams } from "@/utils/cleanParams";
import axios from "axios";

// ORDERS
export const getAllOrders = async (params: TOrdersQueryParams) => {
  try {
    const cleanedParams = cleanParams(params);

    const { data } = await axios.get(`${API_URL}/orders`, {
      params: cleanedParams,
    });

    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Error al obtener las órdenes con parámetros");
      throw new Error("No se pudieron obtener las órdenes.");
    } else {
      console.error("Error inesperado al obtener las órdenes");
      throw new Error("Error inesperado al obtener las órdenes.");
    }
  }
};

export const getOrderById = async (orderId: string): Promise<IOrder> => {
  try {
    const res = await axios.get(`${API_URL}/orders/${orderId}`);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Error al obtener la orden con parámetros");
      throw new Error("No se pudo obtener la orden.");
    } else {
      console.error("Error inesperado al obtener la orden");
      throw new Error("Error inesperado al obtener la orden.");
    }
  }
};

export const createOrder = async (values: ICreateOrderFormValues) => {
  try {
    const response = await axios.post(`${API_URL}/orders`, values);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Error al crear la orden");
      throw new Error("Ocurrió un error al crear la orden.");
    } else {
      console.error("Error inesperado al crear la orden");
      throw new Error("Error inesperado al crear la orden.");
    }
  }
};

export const updateOrder = async (
  id: string,
  values: IEditOrderFormValues
): Promise<IEditOrderFormValues | null> => {
  try {
    const response = await axios.patch<IEditOrderFormValues>(`${API_URL}/orders/${id}`, values);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Error al actualizar la orden");
      throw new Error("No se pudo actualizar la orden.");
    } else {
      console.error("Error inesperado al actualizar la orden");
      throw new Error("Error inesperado al actualizar la orden.");
    }
  }
};

export const deleteOrder = async (id: string) => {
  try {
    const res = await axios.delete(`${API_URL}/orders/${id}`);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Error al eliminar la orden");
      throw new Error("No se pudo eliminar la orden.");
    } else {
      console.error("Error inesperado al eliminar la orden");
      throw new Error("Error inesperado al eliminar la orden.");
    }
  }
};

// INSTALLATIONS
export const getAllInstallations = async (
  orderId: string,
  params?: Partial<TInstallationQueryParams>
) => {
  try {
    const cleanedParams = params ? cleanParams(params) : undefined;

    const { data } = await axios.get(`${API_URL}/orders/${orderId}/installations`, {
      params: cleanedParams,
    });

    return data;
  } catch (error) {
    const message = axios.isAxiosError(error)
      ? "No se pudieron obtener las instalaciones."
      : "Error inesperado al obtener las instalaciones.";

    console.error(message, error);
    throw new Error(message);
  }
};

export const createInstallation = async (
  orderId: string,
  values: ICreateInstallationFormValues
) => {
  try {
    const { data } = await axios.post(`${API_URL}/orders/${orderId}/installations`, values);

    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Error al crear la instalación");
      throw new Error("No se pudo crear la instalación.");
    } else {
      console.error("Error inesperado al crear la instalación");
      throw new Error("Error inesperado al crear la instalación.");
    }
  }
};

export const updateInstallation = async (
  installationId: string,
  values: IEditInstallationFormValues
) => {
  try {
    console.log(values);
    
    const { data } = await axios.patch(`${API_URL}/installations/${installationId}`, values);
  
    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Error al actualizar la instalación");
      throw new Error("No se pudo actualizar la instalación.");
    } else {
      console.error("Error inesperado al actualizar la instalación");
      throw new Error("Error inesperado al actualizar la instalación.");
    }
  }
};

export const deleteInstallation = async (id: string) => {
  try {
    const { data } = await axios.delete(`${API_URL}/installations/${id}`);

    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Error al eliminar la instalación");
      throw new Error("No se pudo eliminar la instalación.");
    } else {
      console.error("Error inesperado al eliminar la instalación");
      throw new Error("Error inesperado al eliminar la instalación.");
    }
  }
};
