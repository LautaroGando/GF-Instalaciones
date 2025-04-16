"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "motion/react";
import { useThemeStore } from "@/store/ThemeStore/themeStore";
import { useMounted } from "@/hooks/useMounted";
import { ISelectThemeProps } from "./types";
import clsx from "clsx";

export const SelectTheme: React.FC<ISelectThemeProps> = ({
  admin,
  adminResponsive,
}) => {
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
        className={clsx(
          "leading-[0%] text-xl",
          admin
            ? "text-letterColorLight"
            : adminResponsive
            ? "text-secondaryColor"
            : null
        )}
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
