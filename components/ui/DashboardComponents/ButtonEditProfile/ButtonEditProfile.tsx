import { useUserStore } from "@/store/UserStore/userStore";
import React from "react";

export const ButtonEditProfile: React.FC = () => {
  const { user, handleOpenEditMenu } = useUserStore();

  if (!user) return null;

  return (
    <button
      onClick={handleOpenEditMenu}
      className="text-primaryColor text-xs font-semibold w-[200px] h-[37px] border transition-all duration-300 border-primaryColor rounded-[4px] hover:text-letterColorLight hover:bg-primaryColor sm:text-sm sm:h-[40px]"
    >
      MODIFICAR DATOS
    </button>
  );
};

export default ButtonEditProfile;
