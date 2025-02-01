"use client";
import { useTheme } from "@/hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { AnimatePresence, motion } from "motion/react";

export const SelectTheme: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <AnimatePresence mode="wait">
      <motion.button
        key={theme}
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.5 }}
        className="leading-[0%] text-xl"
        onClick={handleToggleTheme}
      >
        {theme === "dark" ? (
          <FontAwesomeIcon className="" icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </motion.button>
    </AnimatePresence>
  );
};

export default SelectTheme;
