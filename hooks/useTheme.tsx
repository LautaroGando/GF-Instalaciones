"use client";
import type { TTheme } from "@/types/TTheme";
import { useEffect, useState } from "react";
import { useSize } from "./useSize";

export const useTheme = () => {
  const [theme, setTheme] = useState<TTheme>("light");
  const { size } = useSize();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as TTheme;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));
  }, []);

  useEffect(() => {
    if (!theme) return;

    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as TTheme;
    if (savedTheme && savedTheme !== theme) {
      setTheme(savedTheme);
    }
  }, [size]);

  return { theme, setTheme };
};
