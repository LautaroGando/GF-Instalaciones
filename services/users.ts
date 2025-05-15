import { API_URL } from "@/config/envs";
import { IUser } from "@/interfaces/IUser";
import axios from "axios";

// BUSCAR USUARIOS
export const findUsers = async () => {
  try {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const { data } = await axios.get(`${API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const findInstallers = async () => {
  try {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const { data } = await axios.get(`${API_URL}/installer`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

// ACCIONES PARA USUARIOS

export const disabledUser = async (id: string) => {
  try {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const { data } = await axios.delete(`${API_URL}/user/disabled/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || "Error al desactivar usuario"
      );
    }
    throw new Error("Error al desactivar usuario");
  }
};

export const activeUser = async (id: string) => {
  try {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const { data } = await axios.patch(`${API_URL}/user/restore/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    console.log(error)
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || "Error al activar usuario"
      );
    }
    throw new Error("Error al activar usuario");
  }
};

export const changeStatusInstaller = async (id: string, status: string) => {
  try {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const { data } = await axios.patch(
      `${API_URL}/installer/${id}/status`,
      {
        status,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const editUser = async (id: string, values: Partial<IUser>) => {
  try {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const { data } = await axios.patch(`${API_URL}/user/update/${id}`, values, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const { data } = await axios.delete(`${API_URL}/user/deleted/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error: unknown) {
    console.log(error);
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Error al eliminar rol");
    }
    throw new Error("Error al eliminar rol");
  }
};
