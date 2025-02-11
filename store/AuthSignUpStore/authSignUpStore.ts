import { create } from "zustand";
import { IAuthSignUpStoreProps } from "./types";
import type { TAuthSignUp } from "@/types/TAuth";

export const useAuthSignUpStore = create<IAuthSignUpStoreProps>((set) => ({
  form: "user",
  handleFormSignUp: (form: TAuthSignUp) => set(() => ({ form })),
}));
