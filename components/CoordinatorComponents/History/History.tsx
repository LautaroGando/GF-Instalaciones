"use client";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import IInstallation from "@/interfaces/IInstallation";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import { useUserStore } from "@/store/UserStore/userStore";
import { formatHour } from "@/utils/formatDate";
import { formatDateWithTime } from "@/utils/formatDateWithTime";
import { faBan, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

export const History: React.FC = () => {
  const { user } = useUserStore();
  const { installations, handleFetchInstallationsNotPagination } =
    useTrackingStore();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      await handleFetchInstallationsNotPagination();
      setIsLoading(false);
    };

    fetchData();

    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        fetchData();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [handleFetchInstallationsNotPagination]);

  const userInfo = user && "user" in user ? user.user : user;

  const assignedInstallations = installations?.filter(
    (installation) =>
      installation.coordinator?.id ===
      userInfo?.userRoles[userInfo.userRoles.length - 1].id
  );

  const filterCompleteInstallations = assignedInstallations?.filter(
    (installation: IInstallation) =>
      installation.status === "Finalizada" ||
      installation.status === "Cancelada"
  );

  return (
    <div className="flex flex-col gap-10 max-w-[1200px] min-h-[calc(100dvh-120px)] mx-auto">
      <h1 className="text-primaryColor text-2xl text-center w-full border-b border-primaryColor py-3 ">
        HISTORIAL
      </h1>
      {isLoading ? (
        <div className="w-full flex items-center h-[calc(100vh-181px)]">
          <Loading theme="light" />
        </div>
      ) : filterCompleteInstallations &&
        filterCompleteInstallations.length > 0 ? (
        <div className="grid grid-cols-1 place-items-center py-2 place-content-start gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filterCompleteInstallations?.map((installation: IInstallation) => {
            if (
              installation.status === "A revisar" ||
              installation.status === "En proceso" ||
              installation.status === "Pendiente" ||
              installation.status === "Pospuesta"
            )
              return;

            return (
              <div
                key={installation.id}
                className={clsx(
                  "w-full max-w-[320px] min-h-[370px] max-h-[370px] shadow-[3px_0px_2px_#00000040] border-l-[7px] rounded-[4px] py-3 flex flex-col justify-between gap-5 dark:shadow-[3px_0px_2px_#fafafa40]",
                  installation.status === "Cancelada"
                    ? "border-installer-cancelled bg-bgColor dark:bg-[#0E0E0E]"
                    : installation.status === "Finalizada" &&
                        "border-installer-finalized bg-bgColor dark:bg-[#0E0E0E]"
                )}
              >
                <div className="flex items-center justify-between px-2">
                  <h6
                    className={clsx(
                      "text-xs font-bold border-l-[3px] pl-1",
                      installation.status === "Cancelada"
                        ? "text-installer-cancelled border-installer-cancelled"
                        : installation.status === "Finalizada" &&
                            "text-installer-finalized border-installer-finalized"
                    )}
                  >
                    {installation.status}
                  </h6>
                  <p className="text-xs">
                    {installation.startDate &&
                      formatDateWithTime(installation.startDate)}
                  </p>
                </div>
                <div className="text-sm font-semibold flex flex-col gap-1 px-2">
                  <h3>
                    ID: <span className="font-normal">{installation.id}</span>
                  </h3>
                  <h3>
                    Dirección:{" "}
                    <span className="font-normal">
                      {installation.address.street}{" "}
                      {installation.address.number}
                    </span>
                  </h3>
                  <h3>
                    Ciudad:{" "}
                    <span className="font-normal">
                      {installation.address.city.province.name}
                    </span>
                  </h3>
                  <h3>
                    Localidad:{" "}
                    <span className="font-normal">
                      {installation.address.city.name}
                    </span>
                  </h3>
                  <h3>
                    CP:{" "}
                    <span className="font-normal">
                      {installation.address.postalCode}
                    </span>
                  </h3>
                  <h3>
                    Horario:{" "}
                    <span className="font-normal">
                      {installation.startDate &&
                        formatHour(installation.startDate)}
                    </span>
                  </h3>
                </div>
                <div className="flex items-center gap-3 px-2">
                  <FontAwesomeIcon
                    className="text-[25px] w-[25px]"
                    icon={faUser}
                    width={25}
                  />
                  <div className="flex flex-col text-sm">
                    <h3 className="font-bold">Coordinador</h3>
                    <h4>
                      {installation.coordinator?.user?.fullName ||
                        "Sin coordinador"}
                    </h4>
                  </div>
                </div>
                <div className="flex justify-center text-sm">
                  {installation.status === "Cancelada" ? (
                    <div className="w-full h-[40px] bg-installer-cancelled/15 text-installer-cancelled flex flex-col items-center justify-center font-bold">
                      <h3>CANCELADA</h3>
                      <h4 className="font-normal">
                        {formatDateWithTime(installation.endDate)}
                      </h4>
                    </div>
                  ) : (
                    installation.status === "Finalizada" && (
                      <div className="w-full h-[40px] bg-installer-finalized/15 text-installer-finalized flex flex-col items-center justify-center font-bold">
                        <h3>FINALIZADA</h3>
                        <h4 className="font-normal">
                          {formatDateWithTime(installation.endDate)}
                        </h4>
                      </div>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[calc(100dvh-217px)] text-center">
          <FontAwesomeIcon
            className="text-[70px] w-[70px] text-gray-400 mb-4"
            icon={faBan}
            width={70}
          />
          <h3 className="text-lg font-semibold text-[#4B5563]">
            No se encontró ninguna instalación
          </h3>
          <p className="text-sm text-gray-500">
            Acá se mostrarán las instalaciones finalizadas o canceladas.
          </p>
        </div>
      )}
    </div>
  );
};

export default History;
