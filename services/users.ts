import { API_URL } from "@/config/envs";
import { IUser } from "@/interfaces/IUser";
import axios from "axios";

// BUSCAR USUARIOS
export const findUsers = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/user`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const findInstallers = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/installer`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// ACCIONES PARA USUARIOS

export const disabledUser = async (id: string) => {
  try {
    const { data } = await axios.delete(`${API_URL}/user/disabled/${id}`);
    console.log(data)
    return data;
  } catch (error) {
    console.log(error)
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
    const { data } = await axios.put(`${API_URL}/user/restore/${id}`);
    return data;
  } catch (error) {
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
    const { data } = await axios.patch(`${API_URL}/installer/${id}/status`, {
      status,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const editUser = async (id: string, values: Partial<IUser>) => {
  try {
    const { data } = await axios.patch(`${API_URL}/user/${id}`, values);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    const { data } = await axios.delete(`${API_URL}/user/deleted/${id}`);
    console.log(data);
    return data;
  } catch (error: unknown) {
    console.log(error);
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Error al eliminar rol");
    }
    throw new Error("Error al eliminar rol");
  }
};
