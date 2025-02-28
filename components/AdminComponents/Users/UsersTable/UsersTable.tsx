import { IUser } from "@/interfaces/IUser";
import { useUserStore } from "@/store/UserStore/userStore";
import {
  faPenToSquare,
  faTrash,
  faUserSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React from "react";

export const UsersTable: React.FC = () => {
  const { filterUsers } = useUserStore();

  return (
    <div className="w-full overflow-x-auto">
      <table className="text-sm text-left w-full">
        <thead>
          <tr className="border-b-2 border-admin-borderColor">
            <th className="min-w-[170px] h-12">Nombre Completo</th>
            <th className="min-w-[220px] h-12">Correo electrónico</th>
            <th className="min-w-[170px] h-12">Fecha de creación</th>
            <th className="min-w-[220px] h-12">Fecha de actualización</th>
            <th className="min-w-[150px] h-12">Estado</th>
            <th className="min-w-[150px] h-12">Rol</th>
            <th className="min-w-[150px] h-12">Acción</th>
          </tr>
        </thead>
        <tbody>
          {filterUsers &&
            filterUsers.map((item: IUser, i: number) => (
              <tr key={i} className="border-b-2 border-admin-borderColor">
                <td
                  className={clsx(
                    "h-12",
                    item.role.name === "Admin"
                      ? "font-semibold"
                      : item.role.name === "Instalador"
                      ? "text-primaryColor"
                      : item.role.name === "Coordinador"
                      ? "text-primaryColor font-semibold"
                      : "text-secondaryColor"
                  )}
                >
                  {item.fullName}
                </td>
                <td
                  className={clsx(
                    "h-12",
                    item.role.name === "Admin"
                      ? "font-semibold"
                      : item.role.name === "Instalador"
                      ? "text-primaryColor"
                      : item.role.name === "Coordinador"
                      ? "text-primaryColor font-semibold"
                      : "text-secondaryColor"
                  )}
                >
                  {item.email}
                </td>
                <td
                  className={clsx(
                    "h-12",
                    item.role.name === "Admin"
                      ? "font-semibold"
                      : item.role.name === "Instalador"
                      ? "text-primaryColor"
                      : item.role.name === "Coordinador"
                      ? "text-primaryColor font-semibold"
                      : "text-secondaryColor"
                  )}
                >
                  {item.createAt}
                </td>
                <td
                  className={clsx(
                    "h-12",
                    item.role.name === "Admin"
                      ? "font-semibold"
                      : item.role.name === "Instalador"
                      ? "text-primaryColor"
                      : item.role.name === "Coordinador"
                      ? "text-primaryColor font-semibold"
                      : "text-secondaryColor"
                  )}
                >
                  {item.disabledAt}
                </td>
                <td className="h-12">
                  {!item.disabledAt ? (
                    <span className="h-9 w-[87px] px-3 text-admin-activeColor border border-admin-activeColor flex justify-center items-center">
                      Activo
                    </span>
                  ) : (
                    <span className="h-9 w-[87px] px-3 text-admin-inactiveColor border border-admin-inactiveColor flex justify-center items-center">
                      Inactivo
                    </span>
                  )}
                </td>
                <td
                  className={clsx(
                    "h-12",
                    item.role.name === "Admin"
                      ? "font-semibold"
                      : item.role.name === "Instalador"
                      ? "text-primaryColor"
                      : item.role.name === "Coordinador"
                      ? "text-primaryColor font-semibold"
                      : "text-secondaryColor"
                  )}
                >
                  {item.role && item.role.name}
                </td>
                <td className="flex h-12 items-center gap-2 text-base text-letterColorLight">
                  <button className="bg-admin-editColor w-8 h-8 rounded-[3px]">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <button className="bg-admin-inactiveColor w-8 h-8 rounded-[3px]">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button className="bg-admin-inactiveColor w-8 h-8 rounded-[3px]">
                    <FontAwesomeIcon icon={faUserSlash} />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
