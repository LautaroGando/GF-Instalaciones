import { API_URL } from "@/config/envs";
import { Role } from "@/enums/Role";
import axios from "axios";

export const assignRole = async (roleId: Role, userId: string) => {
  try {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const { data } = await axios.post(
      `${API_URL}/user-role/assign-role`,
      {
        roleId,
        userId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Error al asignar rol");
    }
    throw new Error("Error al asignar rol");
  }
};

export const deleteRole = async (roleId: Role, userId: string) => {
  try {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const { data } = await axios.delete(`${API_URL}/user-role/${userId}/${roleId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Error al eliminar rol");
    }
    throw new Error("Error al eliminar rol");
  }
};
