"use client";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import { useUserStore } from "@/store/UserStore/userStore";
import React from "react";

export const UserInfo: React.FC = () => {
  const { user } = useUserStore();
console.log(user)
  if (!user)
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Loading theme="light" />
      </div>
    );

  const userInfo = "user" in user ? user.user : user;

  return (
    <div className="flex gap-2 items-center h-[60px] sm:h-[64px]">
      <div className="max-w-16 h-16 flex-1 rounded-full bg-bgColor sm:max-w-20 sm:h-20 lg:relative lg:top-10"></div>
      <div className="flex flex-1 flex-col w-full h-full justify-end">
        <h2 className="font-medium">{userInfo.fullName}</h2>
        <p className="text-xs font-light">#{userInfo.id}</p>
      </div>
    </div>
  );
};

export default UserInfo;
