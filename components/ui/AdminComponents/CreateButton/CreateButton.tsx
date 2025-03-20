import { useInstallationsCreateModal } from "@/store/Admin/AdminModals/CreateModals/InstallationsCreateModalStore/InstalationsCreateModalStore";
import { useTrackingCreateModal } from "@/store/Admin/AdminModals/CreateModals/TrackingCreateModalStore/TrackingCreateModalStore";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import React from "react";

const CreateButton = () => {
  const pathname = usePathname();

  const { openModal: openTrackingModal } = useTrackingCreateModal();
  const { openModal: openInstallationModal } = useInstallationsCreateModal();

  const openModal =
    pathname === "/admin/tracking"
      ? openTrackingModal
      : pathname === "/admin/tracking/installations"
      ? openInstallationModal
      : () => {};

  return (
    <div className="flex w-full h-[42px] mt-6 items-start justify-end">
      <button
        onClick={openModal}
        className="flex items-center justify-center gap-3 w-[167px] h-full text-letterColorLight bg-primaryColor rounded-[4px] transition-all duration-200 hover:bg-primaryColorHover"
      >
        <span className="text-[16px] font-bold">Crear Nuevo</span>
        {}
        <FontAwesomeIcon icon={faPlus} className="w-[16px]" />
      </button>
    </div>
  );
};

export default CreateButton;
