import { API_URL } from "@/config/envs";
import { IUser } from "@/interfaces/IUser";
import { popUpDeleteUserError } from "@/utils/popUp";
import axios from "axios";

// BUSCAR USUARIOS

export const findUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/user`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const findInstallers = async () => {
  try {
    const response = await axios.get(`${API_URL}/installer`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

// ACCIONES PARA USUARIOS

export const disabledUser = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/user/disabled/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const activeUser = async (id: string) => {
  try {
    const response = await axios.put(`${API_URL}/user/restore/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const changeStatusInstaller = async (id: string, status: string) => {
  try {
    const response = await axios.patch(`${API_URL}/installer/${id}`, {
      status,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const editUser = async (id: string, values: Partial<IUser>) => {
  try {
    const response = await axios.patch(`${API_URL}/user/${id}`, values);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/user/${id}`);
    const data = response.data;
    return data;
  } catch (error: unknown) {
    axios.isAxiosError(error) && error.response
      ? popUpDeleteUserError(error.response.data.message)
      : popUpDeleteUserError("Ocurrió un error inesperado");
  }
};
