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
    <AnimatePresence mode="popLayout">
      <motion.button
        key={isDark ? "dark" : "light"}
        animate={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0, opacity: 0 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl bg-primaryColor text-[#f5eac7] min-w-[30px] min-h-[30px] max-w-[30px] max-h-[30px] rounded-full flex items-center justify-center"
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
