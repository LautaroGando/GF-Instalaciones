import { API_URL } from "@/config/envs";
import ICreateOrderFormValues from "@/interfaces/ICreateOrderFormValues";
import axios from "axios";

export const createOrder = async (values: ICreateOrderFormValues) => {
  try {
    // const token = localStorage.getItem("token");
    // if (!token) {
    //   throw new Error("No se encontró el token de autenticación");
    // }

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     "Content-Type": "application/json",
    //   },
    // };

    const response = await axios.post(`${API_URL}/orders`, values);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default createOrder;
