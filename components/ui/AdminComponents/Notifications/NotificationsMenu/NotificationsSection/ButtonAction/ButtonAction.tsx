import { useUserStore } from "@/store/UserStore/userStore";
import { faCheck, faInfo, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IButtonActionProps } from "./types";

export const ButtonAction: React.FC<IButtonActionProps> = ({
  user,
}: IButtonActionProps) => {
  const { handleChangeStatusInstaller, setMoreInfo } = useUserStore();

  return (
    <div className="flex gap-3">
      <button
        onClick={() => setMoreInfo(user.installer!.id)}
        className="flex justify-center items-center border rounded-full w-[30px] h-[30px] border-primaryColor bg-primaryColor/5 text-primaryColor"
      >
        <FontAwesomeIcon icon={faInfo} />
      </button>
      <button
        onClick={() =>
          handleChangeStatusInstaller(user.installer!.id, "RECHAZADO")
        }
        className="flex justify-center items-center border rounded-full w-[30px] h-[30px] border-admin-inactiveColor bg-admin-inactiveColor/5 text-admin-inactiveColor"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <button
        onClick={() =>
          handleChangeStatusInstaller(user.installer!.id, "APROBADO")
        }
        className="flex justify-center items-center border rounded-full w-[30px] h-[30px] border-admin-activeColor bg-admin-activeColor/5 text-admin-activeColor"
      >
        <FontAwesomeIcon icon={faCheck} />
      </button>
    </div>
  );
};

export default ButtonAction;
