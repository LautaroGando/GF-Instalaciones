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
