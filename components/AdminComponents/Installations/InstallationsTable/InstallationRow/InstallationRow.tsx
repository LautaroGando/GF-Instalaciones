import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import clsx from "clsx";
import IInstallationsRowProps from "./types";

const InstallationRow: React.FC<IInstallationsRowProps> = ({
  installation,
  coordinator,
  onEdit,
  onDelete,
  onViewNotes,
  onViewAddress,
}) => {
  return (
    <tr className="border-b border-admin-borderColor">
      <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
        {installation.startDate || "-"}
      </td>
      <td className="px-4 h-14 whitespace-nowrap border-y border-admin-letterColor/40">
        {installation.endDate || "-"}
      </td>
      <td className="px-4 h-14 whitespace-nowrap border-y border-admin-letterColor/40">
        <button
          onClick={onViewAddress}
          className="bg-primaryColor h-[34px] px-5 font-bold text-letterColorLight rounded-[4px] transition-bg duration-200 hover:bg-primaryColorHover"
        >
          Ver Dirección
        </button>
      </td>
      <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
        <span
          className={clsx(
            "font-bold",
            installation.status === "Pendiente" || installation.status === "En proceso"
              ? "text-primaryColor"
              : installation.status === "A revisar"
              ? "text-admin-editColor"
              : installation.status === "Pospuesta" || installation.status === "Cancelada"
              ? "text-admin-inactiveColor"
              : "text-admin-activeColor"
          )}
        >
          {installation.status}
        </span>
      </td>
      <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
        <button
          onClick={onViewNotes}
          className="bg-primaryColor h-[34px] px-5 font-bold text-letterColorLight rounded-[4px] transition-bg duration-200 hover:bg-primaryColorHover"
        >
          Ver Notas
        </button>
      </td>
      <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
        <button
          onClick={onViewNotes}
          className="bg-primaryColor h-[34px] px-5 font-bold text-letterColorLight rounded-[4px] transition-bg duration-200 hover:bg-primaryColorHover"
        >
          {}
        </button>
      </td>
      <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
        <button
          onClick={onViewNotes}
          className="bg-primaryColor h-[34px] px-5 font-bold text-letterColorLight rounded-[4px] transition-bg duration-200 hover:bg-primaryColorHover"
        >
          Ver Instaladores
        </button>
      </td>
      <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
        <div className="flex items-center gap-2 text-base text-letterColorLight">
          <button onClick={onEdit} className="bg-admin-editColor w-8 h-8 rounded-[3px]">
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button onClick={onDelete} className="bg-admin-inactiveColor w-8 h-8 rounded-[3px]">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default InstallationRow;
