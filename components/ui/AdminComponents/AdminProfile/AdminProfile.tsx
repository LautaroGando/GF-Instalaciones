"use client";
import { useMenuAdminStore } from "@/store/MenuAdminStore/menuAdminStore";
import clsx from "clsx";
import React from "react";
import { IAdminProfileProps } from "./types";
import AdminMenu from "./AdminMenu/AdminMenu";

export const AdminProfile: React.FC<IAdminProfileProps> = ({
  viewAdmin,
  containerClasses,
  imgClasses,
  nameClasses,
}) => {
  const { menuAdmin } = useMenuAdminStore();

  return (
    <div className={clsx("flex flex-col items-center gap-3", containerClasses)}>
      <AdminMenu />
      <div
        className={clsx("w-[80px] h-[80px] rounded-full bg-black", imgClasses)}
      ></div>
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
          Gastón Fernandez
        </h3>
      </div>
    </div>
  );
};

export default AdminProfile;
