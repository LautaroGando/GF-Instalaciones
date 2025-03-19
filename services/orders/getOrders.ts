import { API_URL } from "@/config/envs";
import IOrder from "@/interfaces/IOrder";
import axios from "axios";

const getAllOrders = async (): Promise<IOrder[]> => {
  try {
    const { data } = await axios.get<IOrder[]>(`${API_URL}/orders`);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default getAllOrders;
