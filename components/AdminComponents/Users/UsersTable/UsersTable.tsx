import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import { IUser } from "@/interfaces/IUser";
import { useUserStore } from "@/store/UserStore/userStore";
import {
  faPenToSquare,
  faTrash,
  faUser,
  faUserSecret,
  faUserSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React, { useEffect } from "react";
import InfoRows from "./InfoRows/InfoRows";

export const UsersTable: React.FC = () => {
  const {
    filterUsers,
    isLoading,
    handleFetchUsers,
    handleDisabledUser,
    handleActiveUser,
    page,
  } = useUserStore();

  useEffect(() => {
    handleFetchUsers();
  }, [handleFetchUsers]);

  return (
    <div className="w-full h-[calc(100vh-354px)] min-h-[400px] overflow-x-auto">
      {isLoading ? (
        <div className="flex items-center min-h-full">
          <Loading theme="light" />
        </div>
      ) : (
        <table className="text-sm text-left w-full">
          {filterUsers && (
            <>
              <thead>
                <tr className="sticky top-0 bg-bgColor border-b border-primaryColor">
                  <th className="min-w-[170px] h-12">Nombre Completo</th>
                  <th className="min-w-[220px] h-12">Correo electrónico</th>
                  <th className="min-w-[170px] h-12">Fecha de creación</th>
                  <th className="min-w-[220px] h-12">
                    Fecha de deshabilitación
                  </th>
                  <th className="min-w-[150px] h-12">Estado</th>
                  <th className="min-w-[150px] h-12">Rol</th>
                  <th className="min-w-[150px] h-12">Acción</th>
                </tr>
              </thead>
              <tbody>
                {filterUsers
                  .slice((page - 1) * 10, page * 10)
                  .map((item: IUser, i: number) => (
                    <tr key={i} className="border-b border-admin-borderColor">
                      <InfoRows item={item} label={item.fullName} />
                      <InfoRows item={item} label={item.email} />
                      <InfoRows item={item} label={item.createAt} />
                      <InfoRows
                        item={item}
                        label={item.disabledAt ? item.disabledAt : "-"}
                      />
                      <td className="h-12">
                        {item.installer?.status === "EN_PROCESO" ? (
                          <span className="h-9 w-[110px] px-3 text-admin-inProccess border border-admin-inProccess flex justify-center items-center">
                            En proceso
                          </span>
                        ) : item.installer?.status === "RECHAZADO" ? (
                          <span className="h-9 w-[110px] px-3 text-admin-inactiveColor border border-admin-inactiveColor flex justify-center items-center">
                            Rechazado
                          </span>
                        ) : !item.disabledAt ? (
                          <span className="h-9 w-[110px] px-3 text-admin-activeColor border border-admin-activeColor flex justify-center items-center">
                            Activo
                          </span>
                        ) : item.disabledAt ? (
                          <span className="h-9 w-[110px] px-3 text-admin-inactiveColor border border-admin-inactiveColor flex justify-center items-center">
                            Inactivo
                          </span>
                        ) : null}
                      </td>
                      <InfoRows
                        item={item}
                        label={item.role && item.role.name}
                      />
                      <td className="flex h-12 items-center gap-2 text-base text-letterColorLight">
                        <button className="bg-admin-editColor w-8 h-8 rounded-[3px]">
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button className="bg-admin-inactiveColor w-8 h-8 rounded-[3px]">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <button
                          onClick={
                            item.disabledAt
                              ? () => handleActiveUser(item.id)
                              : () => handleDisabledUser(item.id)
                          }
                          className={clsx(
                            "w-8 h-8 rounded-[3px]",
                            item.disabledAt
                              ? "bg-admin-activeColor"
                              : "bg-admin-inactiveColor disabled:bg-disabledButton"
                          )}
                          disabled={
                            item.installer?.status === "EN_PROCESO" ||
                            item.installer?.status === "RECHAZADO"
                          }
                        >
                          <FontAwesomeIcon
                            icon={item.disabledAt ? faUser : faUserSlash}
                          />
                        </button>

                        <button
                          className="bg-admin-activeColor w-8 h-8 rounded-[3px] disabled:bg-disabledButton"
                          disabled={
                            (item.installer?.status !== "APROBADO" &&
                              item.role.name !== "Usuario") ||
                            !!item.disabledAt
                          }
                        >
                          <FontAwesomeIcon icon={faUserSecret} />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </>
          )}
        </table>
      )}
    </div>
  );
};

export default UsersTable;
