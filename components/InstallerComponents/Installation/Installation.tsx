"use client";
import IInstallation from "@/interfaces/IInstallation";
import { IInstaller } from "@/interfaces/IInstaller";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import { useUserStore } from "@/store/UserStore/userStore";
import React, { useEffect, useState } from "react";
import ModalCompleteInstallation from "./ModalCompleteInstallation/ModalCompleteInstallation";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faUser } from "@fortawesome/free-solid-svg-icons";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import PersonalizedPopUp from "@/components/ui/GeneralComponents/PersonalizedPopUp/PersonalizedPopUp";
import { useThemeStore } from "@/store/ThemeStore/themeStore";
import { formatHour } from "@/utils/formatDate";
import { formatDateWithTime } from "@/utils/formatDateWithTime";

export const Installation: React.FC = () => {
  const { user } = useUserStore();
  const {
    installations,
    handleFetchInstallationsNotPagination,
    handleInstallationStatus,
    handleOpenModal,
  } = useTrackingStore();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { isDark } = useThemeStore();

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
        (installer: IInstaller) =>
          userInfo &&
          userInfo.installer &&
          installer.id === userInfo?.installer.id
      )
  );

  const filterIncompleteInstallations = assignedInstallations?.filter(
    (installation: IInstallation) =>
      installation.status === "Pendiente" ||
      installation.status === "En proceso" ||
      installation.status === "A revisar" ||
      installation.status === "Pospuesta"
  );

  return (
    <div className="flex flex-col gap-10 max-w-[1200px] min-h-[calc(100dvh-120px)] mx-auto">
      <h1 className="text-primaryColor text-2xl text-center w-full border-b border-primaryColor py-3 ">
        INSTALACIONES
      </h1>
      {isLoading ? (
        <div className="w-full flex items-center h-[calc(100vh-181px)]">
          <Loading theme="light" />
        </div>
      ) : filterIncompleteInstallations &&
        filterIncompleteInstallations.length > 0 ? (
        <div className="grid grid-cols-1 place-items-center place-content-start gap-5 py-2 md:grid-cols-2 lg:grid-cols-3">
          {filterIncompleteInstallations?.map((installation: IInstallation) => {
            if (
              installation.status === "Cancelada" ||
              installation.status === "Finalizada"
            )
              return;

            return (
              <div
                key={installation.id}
                className={clsx(
                  "w-full max-w-[320px] min-h-[370px] max-h-[370px] shadow-[3px_0px_2px_#00000040] border-l-[7px] rounded-[4px] py-3 flex flex-col justify-between gap-5 dark:shadow-[3px_0px_2px_#fafafa40]",
                  installation.status === "Pendiente"
                    ? "border-primaryColor bg-bgColor dark:bg-[#0E0E0E]"
                    : installation.status === "En proceso"
                    ? "border-installer-inProccess bg-primaryColor text-letterColorLight"
                    : installation.status === "A revisar"
                    ? "border-installer-toReview bg-bgColor dark:bg-[#0E0E0E]"
                    : installation.status === "Pospuesta" &&
                      "border-installer-postponed bg-bgColor dark:bg-[#0E0E0E]"
                )}
              >
                <div className="flex items-center justify-between px-2">
                  <h6
                    className={clsx(
                      "text-xs font-bold border-l-[3px] pl-1",
                      installation.status === "Pendiente"
                        ? "text-primaryColor border-primaryColor"
                        : installation.status === "En proceso"
                        ? "text-letterColorLight border-bgColor"
                        : installation.status === "A revisar"
                        ? "text-installer-toReview border-installer-toReview"
                        : installation.status === "Pospuesta" &&
                          "text-installer-postponed border-installer-postponed"
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
                    <h3 className="font-bold">Coordinadores</h3>
                    <h4>
                      {installation.coordinator.map(
                        (coordinator) => `${coordinator.user.fullName}, `
                      ) || "Sin coordinadores"}
                    </h4>
                  </div>
                </div>
                <div className="flex justify-center text-sm">
                  {installation.status === "Pendiente" ? (
                    <button
                      onClick={() => {
                        PersonalizedPopUp({
                          color: isDark ? "#000000" : "#FAFAFA",
                          withResult: true,
                          text: "Esta acción indicará que has llegado al lugar de destino.",
                          textError:
                            "No se pudo actualizar el estado. Intenta nuevamente.",
                          textSuccess: "Se actualizó el estado exitósamente.",
                          title: "¿Estás seguro?",
                          titleError: "Error",
                          titleSuccess: "Has llegado",
                          cancelButtonText: "Cancelar",
                          confirmButtonText: "Sí, confirmar",
                          genericFunction: () =>
                            handleInstallationStatus(
                              installation.id,
                              "En proceso"
                            ),
                        });
                      }}
                      className="rounded-sm w-[200px] h-[40px] bg-primaryColor text-letterColorLight transition-all duration-300 font-semibold hover:bg-primaryColorHover"
                    >
                      Llegué
                    </button>
                  ) : installation.status === "En proceso" ? (
                    <>
                      <button
                        onClick={() => handleOpenModal(installation.id)}
                        className="rounded-sm w-[200px] h-[40px] bg-bgColor border border-bgColor text-primaryColor transition-all duration-300 font-semibold hover:bg-primaryColor hover:text-letterColorLight"
                      >
                        Completar
                      </button>
                      <ModalCompleteInstallation id={installation.id} />
                    </>
                  ) : installation.status === "A revisar" ? (
                    <div className="w-full h-[40px] bg-installer-toReview/15 text-installer-toReview flex items-center justify-center font-bold">
                      <h3>EN REVISIÓN</h3>
                    </div>
                  ) : (
                    installation.status === "Pospuesta" && (
                      <div className="w-full h-[40px] bg-installer-postponed/15 text-installer-postponed flex flex-col items-center justify-center font-bold">
                        <h3>POSPUESTA</h3>
                        <h4 className="font-normal">
                          {formatDateWithTime(installation.startDate)}
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
            Acá se mostrarán las instalaciones pendientes, en proceso, a revisar
            o pospuestas.
          </p>
        </div>
      )}
    </div>
  );
};

export default Installation;
