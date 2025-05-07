"use client";
import IInstallation from "@/interfaces/IInstallation";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import { useUserStore } from "@/store/UserStore/userStore";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faUser } from "@fortawesome/free-solid-svg-icons";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import { formatDate, formatHour } from "@/utils/formatDate";
import { useInstallationNoteModalStore } from "@/store/Admin/AdminModals/InstallationNoteModalStore/InstallationNoteModalStore";
import ModalFinalizedInstallation from "./ModalFinalizedInstallation/ModalFinalizedInstallation";

export const Installation: React.FC = () => {
  const { user } = useUserStore();
  const { installations, handleFetchInstallationsNotPagination } =
    useTrackingStore();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { openModal } = useInstallationNoteModalStore();

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

  const filterIncompleteInstallations = assignedInstallations?.filter(
    (installation: IInstallation) => installation.status === "A revisar"
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
                  installation.status === "A revisar" &&
                    "border-installer-toReview bg-bgColor dark:bg-[#0E0E0E]"
                )}
              >
                <div className="flex items-center justify-between px-2">
                  <h6
                    className={clsx(
                      "text-xs font-bold border-l-[3px] pl-1",
                      installation.status === "A revisar" &&
                        "text-installer-toReview border-installer-toReview"
                    )}
                  >
                    {installation.status}
                  </h6>
                  <p className="text-xs">
                    {installation.startDate &&
                      formatDate(installation.startDate)}
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
                <button
                  onClick={() =>
                    openModal({
                      installation: installation,
                      title: "",
                      text: "",
                      images: installation.images,
                    })
                  }
                  className="w-[200px] h-[40px] rounded-[4px] bg-primaryColor text-letterColorLight mx-auto transition-all duration-300 hover:bg-primaryColorHover"
                >
                  REVISAR
                </button>
                <ModalFinalizedInstallation />
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
            Acá se mostrarán las instalaciones a revisar.
          </p>
        </div>
      )}
    </div>
  );
};

export default Installation;
