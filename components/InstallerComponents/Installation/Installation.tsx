"use client";
import IInstallation from "@/interfaces/IInstallation";
import { IInstaller } from "@/interfaces/IInstaller";
import IOrder from "@/interfaces/IOrder";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import { useUserStore } from "@/store/UserStore/userStore";
import React, { useEffect } from "react";

export const Installation: React.FC = () => {
  const { user, installers, handleFetchInstallers } = useUserStore();
  const { orders, handleFetchOrders } = useTrackingStore();

  useEffect(() => {
    handleFetchInstallers();
    handleFetchOrders();
  }, []);

  const userInfo = user && "user" in user ? user.user : user;

  const assignedInstallations = orders.flatMap((order: IOrder) =>
    order.installations.filter((installation: IInstallation) =>
      installation.installers.some(
        (installer: IInstaller) => installer.id === userInfo?.installer.id
      )
    )
  );
  console.log(assignedInstallations);
  return (
    <div className="flex flex-col gap-5 mt-[80px] max-h-[calc(100dvh-150px)] overflow-auto">
      <div className="flex flex-col gap-5">
        {assignedInstallations.map((installation: IInstallation) => (
          <div
            key={installation.id}
            className="w-full flex flex-col md:flex-row md:items-center"
          >
            <div className="w-full h-[40px] text-primaryColor border-b border-primaryColor flex items-center justify-center font-semibold md:border-r md:border-b-0 md:h-[140px] md:w-max md:px-5">
              <h3>{installation.status}</h3>
            </div>
            <div className="flex flex-col gap-3 px-2 py-4 md:flex-row">
              <div className="flex flex-col gap-3 px-2 py-4">
                <h6 className="text-sm">{installation.startDate}</h6>
                <div className="flex flex-wrap gap-3">
                  <h4 className="font-semibold">
                    ID: <span className="font-normal">{installation.id}</span>
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
                      {installation.address.city},{" "}
                      {installation.address.province}
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
              <button className="w-[120px] h-[36px] border rounded-md border-primaryColor text-primaryColor text-sm font-semibold self-center transition-all duration-300 hover:bg-primaryColor hover:text-letterColorLight md:w-full md:max-w-[170px]">
                LLEGUÉ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
