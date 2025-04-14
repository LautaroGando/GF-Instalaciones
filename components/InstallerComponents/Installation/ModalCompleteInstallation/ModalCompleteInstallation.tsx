import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import React from "react";

export const ModalCompleteInstallation: React.FC = () => {
  const { completeModal } = useTrackingStore();

  return (
    <>
      {completeModal && (
        <div className="fixed w-full h-[100vh] bg-secondaryColor/80 left-0 top-0 z-50">
          <div className="min-w-[330px] max-w-[330px] h-[600px] bg-bgColor shadow-md absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 overflow-auto sm:min-w-[600px] sm:max-w-[600px] md:min-w-[700px] md:max-w-[700px] md:h-max"></div>
        </div>
      )}
    </>
  );
};

export default ModalCompleteInstallation;
