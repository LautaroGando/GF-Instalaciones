import PersonalizedPopUp from "@/components/ui/GeneralComponents/PersonalizedPopUp/PersonalizedPopUp";
import { API_URL } from "@/config/envs";
import { IUserSignIn, IUserSignUp, IUserSignUpInstaller } from "@/interfaces/IAuth";
import type { TColor } from "@/types/TColor";
import axios from "axios";

export const signIn = async (values: IUserSignIn, color: TColor) => {
  try {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const { data } = await axios.post(`${API_URL}/auth/signInUser`, values, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
    if (axios.isAxiosError(error) && error.response) {
      PersonalizedPopUp({
        color: color,
        withResult: false,
        simpleModal: true,
        title: "Error",
        text: error.response.data.message,
        icon: "error",
      });
    }
  }
};

export const signUpUser = async (values: IUserSignUp, color: TColor) => {
  console.log(values);
  try {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const { data } = await axios.post(`${API_URL}/auth/signUpUser`, values, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
    if (axios.isAxiosError(error) && error.response) {
      PersonalizedPopUp({
        color: color,
        withResult: false,
        simpleModal: true,
        title: "Error",
        text: error.response.data.message,
        icon: "error",
      });
    }
  }
};

export const signUpInstaller = async (values: IUserSignUpInstaller, color: TColor) => {
  try {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const { data } = await axios.post(`${API_URL}/auth/signUpInstaller`, values, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
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
    if (axios.isAxiosError(error) && error.response) {
      PersonalizedPopUp({
        color: color,
        withResult: false,
        simpleModal: true,
        title: "Error",
        text: error.response.data.message,
        icon: "error",
      });
    }
  }
};
