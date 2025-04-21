import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import React from "react";
import FormCompleteInstallation from "./FormCompleteInstallation/FormCompleteInstallation";
import { IModalCompleteInstallationProps } from "./types";
import { AnimatePresence, motion } from "motion/react";

export const ModalCompleteInstallation: React.FC<
  IModalCompleteInstallationProps
> = ({ id }: IModalCompleteInstallationProps) => {
  const { completeModal } = useTrackingStore();

  return (
    <>
      <AnimatePresence mode="wait">
        {completeModal && (
          <motion.div
            key={id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "backInOut" }}
            className="fixed w-full h-[100vh] bg-secondaryColor/30 left-0 top-0 z-50"
          >
            <FormCompleteInstallation id={id} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCompleteInstallation;
