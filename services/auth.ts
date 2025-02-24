import { API_URL } from "@/config/envs";
import {
  IUserSignIn,
  IUserSignUp,
  IUserSignUpInstaller,
} from "@/interfaces/IAuth";
import { popUpSignUp } from "@/utils/popUp";
import axios from "axios";

export const signIn = async (values: IUserSignIn) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signinUser`, values);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const signUpUser = async (values: IUserSignUp) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signupUser`, values);
    const data = response.data;
    if (data) popUpSignUp(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const signUpInstaller = async (data: IUserSignUpInstaller) => {
  console.log(data);
  try {
    const response = await axios.post(`${API_URL}/auth/signupInstaller`, data);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
