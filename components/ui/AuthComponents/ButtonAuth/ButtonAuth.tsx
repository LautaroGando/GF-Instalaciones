import React from "react";
import { IButtonAuthProps } from "./types";
import clsx from "clsx";

export const ButtonAuth: React.FC<IButtonAuthProps> = ({
  label,
  form,
}: IButtonAuthProps) => {
  return (
    <button
      type="submit"
      className={clsx(
        "mt-10 text-xs font-semibold border w-[150px] self-center py-3 rounded-md transition-all dark:border-primaryColor",
        form === "signIn"
          ? "text-letterColorLight hover:bg-bgColor hover:text-primaryColor dark:text-primaryColor dark:hover:bg-primaryColor dark:hover:text-letterColorLight"
          : "text-primaryColor border-primaryColor hover:bg-primaryColor hover:text-letterColorLight"
      )}
    >
      {label}
    </button>
  );
};

export default ButtonAuth;
