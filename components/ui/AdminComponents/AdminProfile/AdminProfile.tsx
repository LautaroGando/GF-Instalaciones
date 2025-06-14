"use client";
import { useMenuAdminStore } from "@/store/MenuAdminStore/menuAdminStore";
import clsx from "clsx";
import React from "react";
import { IAdminProfileProps } from "./types";
import ProfileMenu from "../../GeneralComponents/ProfileMenu/ProfileMenu";
import { useUserStore } from "@/store/UserStore/userStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

export const AdminProfile: React.FC<IAdminProfileProps> = ({
  viewAdmin,
  containerClasses,
  imgClasses,
  nameClasses,
}) => {
  const { menuAdmin } = useMenuAdminStore();
  const { user } = useUserStore();

  const userInfo = user && "user" in user ? user.user : user;

  return (
    <div className={clsx("flex flex-col items-center gap-3", containerClasses)}>
      <ProfileMenu />
      <div
        className={clsx(
          "w-[80px] h-[80px] rounded-full flex items-center justify-center overflow-hidden",
          imgClasses
        )}
      >
        <FontAwesomeIcon
          className="max-w-[30px] text-[30px]"
          icon={faUserTie}
          width={30}
        />
      </div>
      <div className="flex flex-col gap-2">
        {viewAdmin && (
          <h4 className="font-medium text-xs text-letterColorLight/50">
            Admin
          </h4>
        )}
        <h3
          className={clsx(
            "font-medium truncate",
            !menuAdmin && "w-[110px]",
            nameClasses
          )}
        >
          {userInfo?.fullName}
        </h3>
      </div>
    </div>
  );
};

export default AdminProfile;
