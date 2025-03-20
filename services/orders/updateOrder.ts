import { API_URL } from "@/config/envs";
import IEditOrderFormValues from "@/interfaces/IEditOrderFormValues";
import axios from "axios";

export const updateOrder = async (
  id: string,
  values: IEditOrderFormValues
): Promise<IEditOrderFormValues | null> => {
  try {
    const response = await axios.patch<IEditOrderFormValues>(`${API_URL}/orders/${id}`, values);
   console.log(response);
   
    return response.data;
  } catch (err) {
    console.log(
      axios.isAxiosError(err)
        ? `Error updating order: ${err.response?.data || err.message}`
        : `Unexpected error: ${err}`
    );
    throw err;
  }
};

export default updateOrder;
