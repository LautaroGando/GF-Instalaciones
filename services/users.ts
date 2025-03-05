import { API_URL } from "@/config/envs";
import axios from "axios";

export const findUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/user/findAllWhitDeleted`);
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
