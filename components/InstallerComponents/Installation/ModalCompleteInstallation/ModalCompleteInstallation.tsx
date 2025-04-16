import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import React from "react";
import FormCompleteInstallation from "./FormCompleteInstallation/FormCompleteInstallation";
import { IModalCompleteInstallationProps } from "./types";

export const ModalCompleteInstallation: React.FC<
  IModalCompleteInstallationProps
> = ({ id }: IModalCompleteInstallationProps) => {
  const { completeModal } = useTrackingStore();

  return (
    <>
      {completeModal && (
        <div className="fixed w-full h-[100vh] bg-secondaryColor/20 left-0 top-0 z-50">
          <FormCompleteInstallation id={id} />
        </div>
      )}
    </>
  );
};

export default ModalCompleteInstallation;
