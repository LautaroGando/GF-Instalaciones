import { API_URL } from "@/config/envs";
import {
  IUserSignIn,
  IUserSignUp,
  IUserSignUpInstaller,
} from "@/interfaces/IAuth";
import {
  popUpSignIn,
  popUpSignInError,
  popUpSignUp,
  popUpSignUpError,
} from "@/utils/popUp";
import axios from "axios";

export const signIn = async (values: IUserSignIn) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signInUser`, values);
    const data = response.data;
    if ((data.installer && data.installer.status === "APROBADO") || data.user)
      popUpSignIn();
    return data;
  } catch (error) {
    axios.isAxiosError(error) && error.response
      ? popUpSignInError(error.response.data.message)
      : popUpSignInError("Ocurrió un error inesperado");
  }
};

export const signUpUser = async (values: IUserSignUp) => {
  console.log(values);
  try {
    const response = await axios.post(`${API_URL}/auth/signUpUser`, values);
    const data = response.data;
    if (data) popUpSignUp(data);
    return data;
  } catch (error: unknown) {
    axios.isAxiosError(error) && error.response
      ? popUpSignUpError(error.response.data.message)
      : popUpSignUpError("Ocurrió un error inesperado");
  }
};

export const signUpInstaller = async (values: IUserSignUpInstaller) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/signUpInstaller`,
      values
    );
    const data = response.data;
    if (data) popUpSignUp(data);
    else popUpSignUpError(data.response.data.message);
    return data;
  } catch (error: unknown) {
    axios.isAxiosError(error) && error.response
      ? popUpSignUpError(error.response.data.message)
      : popUpSignUpError("Ocurrió un error inesperado");
  }
};
