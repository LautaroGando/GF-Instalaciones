import PersonalizedPopUp from "@/components/ui/GeneralComponents/PersonalizedPopUp/PersonalizedPopUp";
import { API_URL } from "@/config/envs";
import {
  IUserSignIn,
  IUserSignUp,
  IUserSignUpInstaller,
} from "@/interfaces/IAuth";
import type { TColor } from "@/types/TColor";
import axios from "axios";

export const signIn = async (values: IUserSignIn, color: TColor) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signInUser`, values);
    const data = response.data;
    if ((data.installer && data.installer.status === "APROBADO") || data.user)
      PersonalizedPopUp({
        color: color,
        withResult: false,
        simpleModal: true,
        title: "Inicio de sesión exitoso",
        text: "Bienvenido a GF Instalaciones.",
        icon: "success",
      });
    return data;
  } catch (error) {
    axios.isAxiosError(error) &&
      error.response &&
      PersonalizedPopUp({
        color: color,
        withResult: false,
        simpleModal: true,
        title: "Error",
        text: error.response.data.message,
        icon: "error",
      });
  }
};

export const signUpUser = async (values: IUserSignUp, color: TColor) => {
  console.log(values);
  try {
    const response = await axios.post(`${API_URL}/auth/signUpUser`, values);
    const data = response.data;
    if (data)
      PersonalizedPopUp({
        color: color,
        withResult: false,
        simpleModal: true,
        title: "Registro exitoso",
        text: "Usuario registrado con éxito.",
        icon: "success",
      });
    return data;
  } catch (error) {
    axios.isAxiosError(error) &&
      error.response &&
      PersonalizedPopUp({
        color: color,
        withResult: false,
        simpleModal: true,
        title: "Error",
        text: error.response.data.message,
        icon: "error",
      });
  }
};

export const signUpInstaller = async (values: IUserSignUpInstaller, color: TColor) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/signUpInstaller`,
      values
    );
    const data = response.data;
    if (data)
      PersonalizedPopUp({
        color: color,
        withResult: false,
        simpleModal: true,
        title: "Registro exitoso",
        text: "Instalador registrado con éxito.",
        icon: "success",
      });
    return data;
  } catch (error) {
    axios.isAxiosError(error) &&
      error.response &&
      PersonalizedPopUp({
        color: color,
        withResult: false,
        simpleModal: true,
        title: "Error",
        text: error.response.data.message,
        icon: "error",
      });
  }
};
