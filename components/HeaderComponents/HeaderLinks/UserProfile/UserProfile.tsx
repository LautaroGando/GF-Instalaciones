import ButtonOpenMenu from "@/components/ui/GeneralComponents/ButtonOpenMenu/ButtonOpenMenu";
import ProfileMenu from "@/components/ui/GeneralComponents/ProfileMenu/ProfileMenu";
import { useUserStore } from "@/store/UserStore/userStore";
import React from "react";

export const UserProfile: React.FC = () => {
  const { user } = useUserStore();

  const userInfo = user && "user" in user ? user.user : user;

  return (
    <div className="flex items-center gap-5 relative">
      <ButtonOpenMenu theme="dark" />
      <ProfileMenu />
      <p>{userInfo?.fullName}</p>
      <div className="w-[60px] h-[60px] bg-secondaryColor"></div>
    </div>
  );
};

export default UserProfile;
