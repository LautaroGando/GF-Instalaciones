import { API_URL } from "@/config/envs";
import ICreateInstallationFormValues from "@/interfaces/ICreateInstallationFormValues";
import ICreateOrderFormValues from "@/interfaces/ICreateOrderFormValues";
import IEditInstallationFormValues from "@/interfaces/IEditInstallationFormValues";
import IEditOrderFormValues from "@/interfaces/IEditOrderFormValues";
import { ICompleteJob } from "@/interfaces/IJob";
import IOrder from "@/interfaces/IOrder";
import { TInstallationQueryParams } from "@/types/TInstallationQueryParams";
import TInstallationStatus from "@/types/TInstallationStatus";
import { TOrdersQueryParams } from "@/types/TOrdersQueryParams";
import { cleanParams } from "@/utils/cleanParams";
import axios from "axios";

// ORDERS
export const getAllOrders = async () => {
  try {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const { data } = await axios.get(`${API_URL}/orders`, {
      params: {
        limit: Number.MAX_SAFE_INTEGER,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getAllOrdersWithParams = async (params: Partial<TOrdersQueryParams>) => {
  try {
    const cleanedParams = cleanParams(params);
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const { data } = await axios.get(`${API_URL}/orders`, {
      params: cleanedParams,
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const res = await axios.get(`${API_URL}/orders/${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
  console.log(values);

  try {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const response = await axios.post(`${API_URL}/orders`, values, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const response = await axios.patch<IEditOrderFormValues>(`${API_URL}/orders/${id}`, values, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    console.log(err);

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
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const res = await axios.delete(`${API_URL}/orders/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
export const getAllInstallationsNotPagination = async () => {
  try {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const { data } = await axios.get(`${API_URL}/installations`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllInstallations = async (
  orderId: string,
  params?: Partial<TInstallationQueryParams>
) => {
  try {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const cleanedParams = params ? cleanParams(params) : undefined;

    const { data } = await axios.get(`${API_URL}/orders/${orderId}/installations`, {
      params: cleanedParams,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    const message = axios.isAxiosError(error)
      ? "No se pudieron obtener las instalaciones."
      : "Error inesperado al obtener las instalaciones.";
    console.log(message);
  }
};

export const createInstallation = async (
  orderId: string,
  values: ICreateInstallationFormValues
) => {
  try {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const { data } = await axios.post(`${API_URL}/orders/${orderId}/installations`, values, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

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
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const { data } = await axios.patch(`${API_URL}/installations/${installationId}`, values, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (err) {
    console.log(err)
    if (axios.isAxiosError(err)) {
      console.error("Error al actualizar la instalación");
      throw new Error("No se pudo actualizar la instalación.");
    } else {
      console.error("Error inesperado al actualizar la instalación");
      throw new Error("Error inesperado al actualizar la instalación.");
    }
  }
};

export const updateInstallationStatus = async (id: string, status: TInstallationStatus) => {
  try {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const res = await axios.patch(
      `${API_URL}/installations/${id}/status`,
      {
        status,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const completeInstallation = async (id: string, values: ICompleteJob) => {
  const formData = new FormData();

  formData.append("commentary", values.commentary ?? "");

  values.files.forEach((file) => {
    formData.append("files", file);
  });

  try {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const { data } = await axios.post(`${API_URL}/installations/${id}/images`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error("Error al subir la instalación:", error);
    throw error;
  }
};

export const deleteInstallation = async (id: string) => {
  try {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const { data } = await axios.delete(`${API_URL}/installations/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

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
