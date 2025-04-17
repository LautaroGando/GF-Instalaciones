"use client";
import { motion } from "framer-motion";
import { IUser } from "@/interfaces/IUser";
import InfoRows from "../InfoRows/InfoRows";
import ActionContainer from "../ActionContainer/ActionContainer";

interface Props {
  item: IUser;
}

const rowVariants = {
  hidden: { opacity: 0, borderColor: "transparent" },
  visible: {
    opacity: 1,
    borderColor: "rgba(182,182,182,0.4)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    borderColor: "transparent",
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const UserRow: React.FC<Props> = ({ item }) => {
  return (
    <motion.tr
      layout
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={rowVariants}
      className="border-b border-admin-borderColor"
    >
      <motion.td
        className="px-4 h-12"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <InfoRows item={item} label={item.fullName} />
      </motion.td>

      <motion.td
        className="px-4 h-12"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
      >
        <InfoRows item={item} label={item.email} />
      </motion.td>

      <motion.td
        className="px-4 h-12"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <InfoRows item={item} label={item.createdAt} />
      </motion.td>

      <motion.td
        className="px-4 h-12"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        <InfoRows item={item} label={item.disabledAt || "-"} />
      </motion.td>

      <motion.td
        className="px-4 h-12 whitespace-nowrap text-[15px] text-secondaryColor"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <span
          className={`
            inline-flex items-center justify-center
            min-w-[110px] h-9 px-3 text-sm font-medium
            rounded-md border transition-all duration-300
            ${
              item.disabledAt
                ? "text-admin-inactiveColor border-admin-inactiveColor bg-admin-inactiveColor/10"
                : item.installer?.status === "EN_PROCESO"
                ? "text-admin-inProccess border-admin-inProccess bg-admin-inProccess/10"
                : item.installer?.status === "RECHAZADO"
                ? "text-admin-inactiveColor border-admin-inactiveColor bg-admin-inactiveColor/10"
                : "text-admin-activeColor border-admin-activeColor bg-admin-activeColor/10"
            }
          `}
        >
          {item.disabledAt
            ? "Inactivo"
            : item.installer?.status === "EN_PROCESO"
            ? "En proceso"
            : item.installer?.status === "RECHAZADO"
            ? "Rechazado"
            : "Activo"}
        </span>
      </motion.td>

      <motion.td
        className="px-4 h-[56px]"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.25 }}
      >
        <InfoRows item={item} label={item.userRoles.at(-1)?.role.name || "-"} />
      </motion.td>

      <motion.td
        className="px-4 h-12"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <ActionContainer item={item} />
      </motion.td>
    </motion.tr>
  );
};

export default UserRow;
