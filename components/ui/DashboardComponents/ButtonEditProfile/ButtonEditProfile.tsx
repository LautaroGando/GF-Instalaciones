import { useUserStore } from "@/store/UserStore/userStore";
import React from "react";

export const ButtonEditProfile: React.FC = () => {
  const { user, handleEditUser } = useUserStore();
console.log(user)
  if (!user) return null;

  const userInfo = "user" in user ? user.user : user;

  return (
    <button
      onClick={() =>
        handleEditUser(userInfo.id, {
          email: "lautarogandocavs@gmail.com",
        })
      }
      className="text-primaryColor text-xs font-semibold w-[200px] h-[37px] border transition-all duration-300 border-primaryColor rounded-[4px] hover:text-letterColorLight hover:bg-primaryColor sm:text-sm sm:h-[40px]"
    >
      MODIFICAR DATOS
    </button>
  );
};

export default ButtonEditProfile;
