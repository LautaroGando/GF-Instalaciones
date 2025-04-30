import { useMenuAdminStore } from "@/store/MenuAdminStore/menuAdminStore";
import clsx from "clsx";
import React from "react";
import Notifications from "../../../../ui/AdminComponents/Notifications/Notifications";
import AdminProfile from "@/components/ui/AdminComponents/AdminProfile/AdminProfile";
import ButtonAction from "@/components/ui/GeneralComponents/ButtonAction/ButtonAction";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export const SectionInfo: React.FC = () => {
  const { menuAdmin } = useMenuAdminStore();

  return (
    <div
      className={clsx(
        "border-b border-primaryColor pb-3 flex flex-col items-center gap-3",
        !menuAdmin && "lg:w-[90%] lg:mx-auto lg:overflow-hidden"
      )}
    >
      <AdminProfile />
      <div className="flex flex-col gap-3 lg:hidden">
        <Notifications />
        <ButtonAction
          href="/dashboard/profile"
          icon={faInfoCircle}
          label="Ver perfil"
        />
      </div>
    </div>
  );
};

export default SectionInfo;
