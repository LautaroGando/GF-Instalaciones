import PersonalizedPopUp from "@/components/ui/GeneralComponents/PersonalizedPopUp/PersonalizedPopUp";
import { API_URL } from "@/config/envs";
import {
  IUserSignIn,
  IUserSignUp,
  IUserSignUpInstaller,
} from "@/interfaces/IAuth";
import type { TColor } from "@/types/TColor";
import axios from "axios";
import Cookies from "js-cookie";

export const signIn = async (values: IUserSignIn, color: TColor) => {
  try {
    const cookieData = Cookies.get("user-storage");
    const token = cookieData ? JSON.parse(cookieData).token : null;

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
  try {
    const cookieData = Cookies.get("user-storage");
    const token = cookieData ? JSON.parse(cookieData).token : null;

    console.log(values);
    

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

export const signUpInstaller = async (
  values: IUserSignUpInstaller,
  color: TColor
) => {
  try {
    const cookieData = Cookies.get("user-storage");
    const token = cookieData ? JSON.parse(cookieData).token : null;

    const { data } = await axios.post(
      `${API_URL}/auth/signUpInstaller`,
      values,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

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

export const sendMailRecoveryPassword = async (
  values: Record<string, string>,
  color: TColor
) => {
  try {
    const cookieData = Cookies.get("user-storage");
    const token = cookieData ? JSON.parse(cookieData).token : null;

    const { data } = await axios.post(
      `${API_URL}/auth/recovery-request`,
      values,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (data)
      PersonalizedPopUp({
        color: color,
        withResult: false,
        simpleModal: true,
        title: "Correo enviado con éxito",
        text: "Verifica tu correo para recuperar tu clave.",
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

export const recoveryPassword = async (
  values: Record<string, string>,
  color: TColor
) => {
  try {
    const cookieData = Cookies.get("user-storage");
    const token = cookieData ? JSON.parse(cookieData).token : null;
    const { data } = await axios.post(
      `${API_URL}/auth/recovery-change-password`,
      values,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (data)
      PersonalizedPopUp({
        color: color,
        withResult: false,
        simpleModal: true,
        title: "Has cambiado tu clave con éxito.",
        text: "Vuelve a ingresar para verificarlo.",
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
