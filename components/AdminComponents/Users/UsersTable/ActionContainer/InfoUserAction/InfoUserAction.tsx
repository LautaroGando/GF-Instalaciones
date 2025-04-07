import React from "react";
import { IInfoUserActionProps } from "./types";

export const InfoUserAction: React.FC<IInfoUserActionProps> = ({
  item,
}: IInfoUserActionProps) => {
  return (
    <div className="text-secondaryColor flex flex-col gap-5">
      <h3 className="font-medium text-2xl">Acciones disponibles</h3>
      <ul className="font-medium flex flex-col gap-3 text-sm sm:flex-row sm:text-base">
        <li>
          Correo electrónico: <span className="font-light">{item.email}</span>
        </li>
        <div className="w-full h-[2px] bg-primaryColor sm:w-[2px] sm:h-[25px]"></div>
        <li>
          Rol: <span className="font-light">{item.userRoles[0].role.name}</span>
        </li>
      </ul>
    </div>
  );
};

export default InfoUserAction;
