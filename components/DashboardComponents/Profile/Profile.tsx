"use client";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import React from "react";
import EditSection from "./EditSection/EditSection";
import { useUserData } from "@/hooks/useUserData";
import ModalEditProfile from "@/components/ui/DashboardComponents/ModalEditProfile/ModalEditProfile";
import { useUserStore } from "@/store/UserStore/userStore";

export const Profile: React.FC = () => {
  const { userData, userRole } = useUserData();
  const { editMenu } = useUserStore();

  return (
    <div className="flex flex-col gap-5 py-14 lg:flex-row lg:items-center">
      {editMenu && <ModalEditProfile />}
      <div className="flex flex-col gap-5 w-max sm:mx-auto lg:flex-1">
        <h2 className="font-medium text-primaryColor sm:self-start">
          {userRole}
        </h2>
        <div className="grid gap-y-3 gap-x-1 sm:grid-cols-2">
          {userData === null ? (
            <div className="col-span-2 h-full flex justify-center items-center">
              <Loading theme="light" />
            </div>
          ) : (
            userData.map((user, i) => (
              <div key={i} className="text-sm flex flex-col gap-2">
                <h4 className="font-light">{user.key}</h4>
                <p className="sm:text-base">{user.value}</p>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="w-full h-[3px] bg-primaryColor lg:w-[3px] lg:h-[288px]"></div>
      <EditSection />
    </div>
  );
};

export default Profile;
