"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "motion/react";
import { useThemeStore } from "@/store/ThemeStore/themeStore";
import { useMounted } from "@/hooks/useMounted";

export const SelectTheme: React.FC = () => {
  const { isDark, changeTheme } = useThemeStore();
  const { mounted } = useMounted();

  if (!mounted) {
    return <div className="w-6 h-6" />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.button
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.5 }}
        className="leading-[0%] text-xl"
        onClick={changeTheme}
      >
        {isDark ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </motion.button>
    </AnimatePresence>
  );
};

export default SelectTheme;
