import React from "react";
import { IActionContainerProps } from "./types";
import { useUserStore } from "@/store/UserStore/userStore";
import ListButtonAction from "./ListButtonAction/ListButtonAction";

export const ActionContainer: React.FC<IActionContainerProps> = ({
  item,
}: IActionContainerProps) => {
  const { handleActionMenu } = useUserStore();

  return (
    <>
      <button
        type="submit"
        onClick={() => handleActionMenu(item.id)}
        className="bg-primaryColor text-letterColorLight w-[150px] h-[36px] font-semibold border border-primaryColor rounded-[2px] transition-all duration-300 hover:bg-bgColor hover:text-primaryColor"
      >
        Opciones
      </button>
      <ListButtonAction item={item} />
    </>
  );
};

export default ActionContainer;
