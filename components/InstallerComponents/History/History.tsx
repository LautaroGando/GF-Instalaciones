"use client";
import IInstallation from "@/interfaces/IInstallation";
import { IInstaller } from "@/interfaces/IInstaller";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import { useUserStore } from "@/store/UserStore/userStore";
import React, { useEffect } from "react";

export const History: React.FC = () => {
  const { user } = useUserStore();
  const { installations, handleFetchInstallationsNotPagination } =
    useTrackingStore();

  useEffect(() => {
    handleFetchInstallationsNotPagination();
  }, [handleFetchInstallationsNotPagination]);

  const userInfo = user && "user" in user ? user.user : user;

  const assignedInstallations = installations?.filter(
    (installation: IInstallation) =>
      installation.installers.some(
        (installer: IInstaller) => installer.id === userInfo?.installer.id
      )
  );

  const filterCompleteInstallations = assignedInstallations?.filter(
    (installation: IInstallation) => installation.status === "Finalizada"
  );
console.log(filterCompleteInstallations)
  return (
    <div className="flex flex-col gap-5 mt-[80px] max-h-[calc(100dvh-150px)] overflow-auto">
      <div className="flex flex-col gap-5">
        {filterCompleteInstallations?.map((installation: IInstallation) => (
          <div key={installation.id}>
            {installation.status !== "Finalizada" && (
              <div className="w-full flex flex-col md:flex-row md:items-center">
                <div className="w-full h-[50px] text-primaryColor border-b border-primaryColor flex items-center justify-center font-semibold md:border-r md:border-b-0 md:px-5 md:w-[200px] md:h-[200px]">
                  <h3>{installation.status}</h3>
                </div>
                <div className="flex flex-col gap-3 px-2 py-4 w-full md:flex-row md:justify-between">
                  <div className="flex flex-col gap-3 px-2 py-4">
                    <h6 className="text-sm">{installation.startDate}</h6>
                    <div className="flex flex-col gap-3">
                      <h4 className="font-semibold">
                        ID:{" "}
                        <span className="font-normal">{installation.id}</span>
                      </h4>
                      <h4 className="font-semibold">
                        Dirección:{" "}
                        <span className="font-normal">
                          {installation.address.street}{" "}
                          {installation.address.number}
                        </span>
                      </h4>
                      <h4 className="font-semibold">
                        Localidad:{" "}
                        <span className="font-normal">
                          {installation.address.city.name},{" "}
                          {installation.address.city.province.name}
                        </span>
                      </h4>
                      <h4 className="font-semibold">
                        CP:{" "}
                        <span className="font-normal">
                          {installation.address.postalCode}
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
