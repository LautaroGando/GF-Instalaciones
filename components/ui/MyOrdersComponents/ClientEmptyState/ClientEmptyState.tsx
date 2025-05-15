"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { IClientEmptyStateProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClientEmptyState: React.FC<IClientEmptyStateProps> = ({
  icon: Icon,
  title,
  description,
  showBackButton = false,
  backButtonText = "Volver",
}) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[600px] gap-6 text-center px-4"
    >
      <div className="flex items-center justify-center size-20 rounded-full bg-primaryColor/40">
        <FontAwesomeIcon icon={Icon} className="w-10 h-10 text-primaryColor" />
      </div>

      <h1 className="text-3xl font-bold text-primaryColor">{title}</h1>

      <p className="text-gray-500 max-w-[360px] dark:text-white">{description}</p>

      {showBackButton && (
        <button
          onClick={handleBack}
          className="
            mt-4
            flex items-center justify-center gap-2
            rounded-2xl px-5 py-2
            bg-primaryColor text-white font-semibold
            hover:bg-primaryColorHover
            active:scale-95
            transition-all
            shadow-md hover:shadow-lg
            disabled:opacity-50 disabled:pointer-events-none
          "
        >
          {backButtonText}
        </button>
      )}
    </motion.div>
  );
};

export default ClientEmptyState;
