import ButtonOpenMenu from "@/components/ui/GeneralComponents/ButtonOpenMenu/ButtonOpenMenu";
import ProfileMenu from "@/components/ui/GeneralComponents/ProfileMenu/ProfileMenu";
import { useProfileStore } from "@/store/ProfileStore/profileStore";
import { useUserStore } from "@/store/UserStore/userStore";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const UserProfile: React.FC = () => {
  const { user } = useUserStore();
  const { handleToggle } = useProfileStore();

  const userInfo = user && "user" in user ? user.user : user;

  return (
    <div className="flex items-center gap-5 relative cursor-pointer">
      <ButtonOpenMenu />
      <ProfileMenu />
      <p onClick={handleToggle} data-ignore-profile-outside-click>
        {userInfo?.fullName}
      </p>
      <div
        onClick={handleToggle}
        className="w-[40px] h-[60px] flex items-center justify-center text-3xl"
        data-ignore-profile-outside-click
      >
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
};

export default UserProfile;
