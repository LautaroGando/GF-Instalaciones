"use client";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import IInstallation from "@/interfaces/IInstallation";
import { IInstaller } from "@/interfaces/IInstaller";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import { useUserStore } from "@/store/UserStore/userStore";
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
    (installation: IInstallation) =>
      installation.installers.some(
        (installer: IInstaller) => installer.id === userInfo?.installer.id
      )
  );

  const filterCompleteInstallations = assignedInstallations?.filter(
    (installation: IInstallation) =>
      installation.status === "Finalizada" ||
      installation.status === "Cancelada"
  );

  return (
    <div className="flex flex-col gap-10 max-w-[1200px] mx-auto">
      <h1 className="text-primaryColor text-2xl text-center w-full border-b border-primaryColor py-3 ">
        HISTORIAL
      </h1>
      {isLoading ? (
        <div className="w-full h-[calc(100dvh-217px)] flex items-center">
          <Loading theme="light" />
        </div>
      ) : filterCompleteInstallations &&
        filterCompleteInstallations.length > 0 ? (
        <div className="grid grid-cols-1 place-items-center place-content-start gap-5 h-[calc(100dvh-217px)] overflow-auto md:grid-cols-2 lg:grid-cols-3">
          {filterCompleteInstallations?.map((instalattion: IInstallation) => {
            if (
              instalattion.status === "A revisar" ||
              instalattion.status === "En proceso" ||
              instalattion.status === "Pendiente" ||
              instalattion.status === "Pospuesta"
            )
              return;

            return (
              <div
                key={instalattion.id}
                className={clsx(
                  "w-full max-w-[340px] min-h-[340px] shadow-[3px_0px_2px_#00000040] border-l-[7px] rounded-[4px] py-3 flex flex-col justify-between gap-5",
                  instalattion.status === "Cancelada"
                    ? "border-installer-cancelled"
                    : instalattion.status === "Finalizada" &&
                        "border-installer-finalized"
                )}
              >
                <div className="flex items-center justify-between px-2">
                  <h6
                    className={clsx(
                      "text-xs font-bold border-l-[3px] pl-1",
                      instalattion.status === "Cancelada"
                        ? "text-installer-cancelled border-installer-cancelled"
                        : instalattion.status === "Finalizada" &&
                            "text-installer-finalized border-installer-finalized"
                    )}
                  >
                    {instalattion.status}
                  </h6>
                  <p className="text-xs">{instalattion.startDate}</p>
                </div>
                <div className="text-sm font-semibold flex flex-col gap-1 px-2">
                  <h3>
                    ID: <span className="font-normal">{instalattion.id}</span>
                  </h3>
                  <h3>
                    Dirección:{" "}
                    <span className="font-normal">
                      {instalattion.address.street}{" "}
                      {instalattion.address.number}
                    </span>
                  </h3>
                  <h3>
                    Ciudad:{" "}
                    <span className="font-normal">
                      {instalattion.address.city.province.name}
                    </span>
                  </h3>
                  <h3>
                    Localidad:{" "}
                    <span className="font-normal">
                      {instalattion.address.city.name}
                    </span>
                  </h3>
                  <h3>
                    CP:{" "}
                    <span className="font-normal">
                      {instalattion.address.postalCode}
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
                      {instalattion.coordinator?.user?.fullName ||
                        "Sin coordinador"}
                    </h4>
                  </div>
                </div>
                <div className="flex justify-center text-sm">
                  {instalattion.status === "Cancelada" ? (
                    <div className="w-full h-[40px] bg-installer-cancelled/15 text-installer-cancelled flex flex-col items-center justify-center font-bold">
                      <h3>CANCELADA</h3>
                      <h4 className="font-normal">{instalattion.endDate}</h4>
                    </div>
                  ) : (
                    instalattion.status === "Finalizada" && (
                      <div className="w-full h-[40px] bg-installer-finalized/15 text-installer-finalized flex flex-col items-center justify-center font-bold">
                        <h3>FINALIZADA</h3>
                        <h4 className="font-normal">{instalattion.endDate}</h4>
                      </div>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[calc(100dvh-217px)]">
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
