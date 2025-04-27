import React from "react";
import TrackingStep from "../TrackingStep/TrackingStep";
import { getStepVisualState, installationSteps } from "@/utils/getStepVisualState";
import clsx from "clsx";
import IInstallation from "@/interfaces/IInstallation";

const InstallationProgress: React.FC<{ installation: IInstallation }> = ({ installation }) => {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:gap-4 sm:max-w-[800px] sm:mx-auto">
      {installationSteps.map((step, j) => {
        const visualState = getStepVisualState(installation.status, step);

        return (
          <React.Fragment key={step}>
            <TrackingStep statusName={step} date="22/05/2001" visualState={visualState} />

            {j < installationSteps.length - 1 && (
              <div className="flex justify-center w-[32px] sm:h-[32px] sm:items-center sm:w-full">
                <div className="w-[3px] h-[30px] bg-gray-200 rounded-full overflow-hidden sm:w-full sm:h-[3px]">
                  <div
                    className={clsx("rounded-full", {
                      "bg-admin-activeColor h-full w-[100%] sm:h-full sm:w-[100%]":
                        visualState === "done",
                      "bg-admin-activeColor h-[50%] w-full sm:w-[50%] sm:h-full":
                        visualState === "half",
                      "bg-gray-200": visualState === "pending",
                      "bg-gray-100": visualState === "inactive",
                    })}
                  />
                </div>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default InstallationProgress;
