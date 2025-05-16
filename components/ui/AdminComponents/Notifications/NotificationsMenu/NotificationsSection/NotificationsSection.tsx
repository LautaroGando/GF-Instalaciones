import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import { IUser } from "@/interfaces/IUser";
import { useUserStore } from "@/store/UserStore/userStore";
import React from "react";
import ButtonAction from "./ButtonAction/ButtonAction";
import { capitalize } from "@/utils/capitalize";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBellSlash } from "@fortawesome/free-solid-svg-icons";

export const NotificationsSection: React.FC = () => {
  const { users, isLoading, moreInfo } = useUserStore();

  const filterUsersInProccess = users?.filter(
    (user: IUser) => user.installer?.status === "EN PROCESO"
  );

  if (filterUsersInProccess?.length === 0) {
    return (
      <div className="flex items-center gap-3 text-gray-400 h-[500px]  justify-center lg:h-[385px]">
        <FontAwesomeIcon
          className="text-[25px] w-[25px]"
          icon={faBellSlash}
          width={25}
        />
        <p>No se encontraron notificaciones.</p>
      </div>
    );
  }

  return (
    <div>
      {isLoading ? (
        <div className="h-[385px] flex items-center">
          <Loading theme="light" />
        </div>
      ) : (
        users &&
        users.map(
          (user: IUser) =>
            user.installer?.status === "EN PROCESO" && (
              <div
                key={user.installer.id}
                className={clsx(
                  "flex flex-col items-center gap-3 justify-between p-2 border-b transition-all duration-300 border-b-admin-borderColor/50",
                  moreInfo === user.installer.id ? "h-[325px] overflow-auto" : "h-[48px] overflow-hidden"
                )}
              >
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-xs">{user.email}</h3>
                  <ButtonAction user={user} />
                </div>
                <ul className="font-medium text-xs w-full flex flex-col gap-3">
                  <li className="flex justify-between">
                    Condición fiscal:{" "}
                    <span className="font-normal">
                      {user.installer.taxCondition &&
                        capitalize(user.installer.taxCondition)
                          .split("_")
                          .join(" ")}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    Información o consultas:{" "}
                    <span className="font-normal">
                      {user.installer.queries}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    ¿Posee Seguro de Accidentes Personales?:{" "}
                    <span className="font-normal">
                      {user.installer.hasPersonalAccidentInsurance
                        ? "Sí"
                        : "No"}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    ¿Instalaciones en Altura?:{" "}
                    <span className="font-normal">
                      {user.installer.canWorkAtHeight ? "Sí" : "No"}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    ¿Tensado de Lonas Front y Back?:{" "}
                    <span className="font-normal">
                      {user.installer.canTensionFrontAndBackLonas ? "Sí" : "No"}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    ¿Instalación de Corpóreos?:{" "}
                    <span className="font-normal">
                      {user.installer.canInstallCorporealSigns ? "Sí" : "No"}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    ¿Instalación de Vinilos Esmerilados?:{" "}
                    <span className="font-normal">
                      {user.installer.canInstallFrostedVinyl ? "Sí" : "No"}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    ¿Instalación de Vinilos sobre Pared/Vidrios?:{" "}
                    <span className="font-normal">
                      {user.installer.canInstallVinylOnWallsOrGlass
                        ? "Sí"
                        : "No"}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    ¿Forrado Completo de Autos (Carwrapping)?:{" "}
                    <span className="font-normal">
                      {user.installer.canDoCarWrapping ? "Sí" : "No"}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    ¿Posee Movilidad Propia?:{" "}
                    <span className="font-normal">
                      {user.installer.hasOwnTransportation ? "Sí" : "No"}
                    </span>
                  </li>
                </ul>
              </div>
            )
        )
      )}
    </div>
  );
};

export default NotificationsSection;
