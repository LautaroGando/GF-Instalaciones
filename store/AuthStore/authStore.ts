import { create } from "zustand";
import { IAuthStoreProps } from "./types";
import { TAuth } from "@/types/TAuth";

export const useAuthStore = create<IAuthStoreProps>((set) => ({
  view: "signIn",
  handleVisibleForm: (view: TAuth) => set(() => ({ view })),
}));
