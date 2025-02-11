import { create } from "zustand";
import { IThemeStoreProps } from "./types";

export const useThemeStore = create<IThemeStoreProps>((set) => ({
  isDark:
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false,
  changeTheme: () =>
    set((state) => {
      const newTheme = !state.isDark ? "dark" : "light";
      document.documentElement.classList.toggle("dark", !state.isDark);
      localStorage.setItem("theme", newTheme);
      return { isDark: !state.isDark };
    }),
}));
