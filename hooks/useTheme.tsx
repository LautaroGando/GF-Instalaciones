"use client";

import type { TTheme } from "@/types/TTheme";
import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<TTheme | undefined>(undefined);

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

  return { theme, setTheme };
};
