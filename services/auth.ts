import { API_URL } from "@/config/envs";
import {
  IUserSignIn,
  IUserSignUp,
  IUserSignUpInstaller,
} from "@/interfaces/IAuth";
import axios from "axios";

export const signIn = async (values: IUserSignIn) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signInUser`, values);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const signUpUser = async (values: IUserSignUp) => {
  console.log(values);
  try {
    const response = await axios.post(`${API_URL}/auth/signUpUser`, values);
    const data = response.data;
    return data;
  } catch (error: unknown) {
    console.log(error);
  }
};

export const signUpInstaller = async (values: IUserSignUpInstaller) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/signUpInstaller`,
      values
    );
    const data = response.data;
    return data;
  } catch (error: unknown) {
    console.log(error);
  }
};
