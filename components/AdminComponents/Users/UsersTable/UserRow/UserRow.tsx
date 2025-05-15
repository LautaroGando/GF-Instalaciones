"use client";
import { motion } from "framer-motion";
import { IUser } from "@/interfaces/IUser";
import InfoRows from "../InfoRows/InfoRows";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faBarsStaggered,
  faTrash,
  faUser,
  faUserSecret,
  faUserSlash,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { useUserStore } from "@/store/UserStore/userStore";
import { Role } from "@/enums/Role";
import { useThemeStore } from "@/store/ThemeStore/themeStore";
import { formatDateWithTime } from "@/utils/formatDateWithTime";

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

const cellVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const UserRow: React.FC<Props> = ({ item }) => {
  const {
    handleActiveUser,
    handleDisabledUser,
    handleDeleteUser,
    handleAssignRoleUser,
    handleDeleteRoleUser,
  } = useUserStore();
  const { isDark } = useThemeStore();
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
        <InfoRows item={item} label={formatDateWithTime(item.createdAt)} />
      </motion.td>

      <motion.td
        className="px-4 h-12"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        <InfoRows
          item={item}
          label={formatDateWithTime(item.disabledAt) || "-"}
        />
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
                : item.installer?.status === "EN PROCESO"
                ? "text-admin-inProccess border-admin-inProccess bg-admin-inProccess/10"
                : item.installer?.status === "RECHAZADO"
                ? "text-admin-inactiveColor border-admin-inactiveColor bg-admin-inactiveColor/10"
                : "text-admin-activeColor border-admin-activeColor bg-admin-activeColor/10"
            }
          `}
        >
          {item.disabledAt
            ? "Inactivo"
            : item.installer?.status === "EN PROCESO"
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
        variants={cellVariants}
        className="mx-auto h-12 whitespace-nowrap text-letterColorLight text-sm"
      >
        <div className="flex justify-center items-center w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="relative group">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 flex items-center justify-center rounded bg-primaryColor hover:bg-primaryColorHover transition-colors"
                >
                  <FontAwesomeIcon icon={faBarsStaggered} />
                </motion.button>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-48 rounded-md shadow-lg border border-gray-200 bg-white"
            >
              <DropdownMenuItem
                onClick={() =>
                  handleDeleteUser(item.id, isDark ? "#000000" : "#FAFAFA")
                }
                className="text-inherit flex items-center gap-3 px-4 py-3 min-h-[48px] text-base sm:text-sm cursor-pointer text-admin-deleteColor data-[highlighted]:bg-admin-deleteColor/10 data-[highlighted]:text-admin-deleteColor rounded-md transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faTrash} />
                Eliminar
              </DropdownMenuItem>
              {item.disabledAt ? (
                <DropdownMenuItem
                  onClick={() =>
                    handleActiveUser(item.id, isDark ? "#000000" : "#FAFAFA")
                  }
                  disabled={item.disabledAt ? false : true}
                  className={`text-inherit flex items-center gap-3 px-4 py-3 min-h-[48px] text-base sm:text-sm rounded-md transition-colors duration-200 ${
                    !item.disabledAt
                      ? "cursor-not-allowed text-gray-400/60"
                      : "cursor-pointer text-admin-activeColor data-[highlighted]:bg-admin-activeColor/10 data-[highlighted]:text-admin-activeColor"
                  }`}
                >
                  <FontAwesomeIcon icon={faUser} />
                  Activar
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem
                  onClick={() =>
                    handleDisabledUser(item.id, isDark ? "#000000" : "#FAFAFA")
                  }
                  disabled={item.disabledAt ? true : false}
                  className={`text-inherit flex items-center gap-3 px-4 py-3 min-h-[48px] text-base sm:text-sm rounded-md transition-colors duration-200 ${
                    item.disabledAt
                      ? "cursor-not-allowed text-gray-400/60"
                      : "cursor-pointer text-admin-inactiveColor data-[highlighted]:bg-admin-inactiveColor/10 data-[highlighted]:text-admin-inactiveColor"
                  }`}
                >
                  <FontAwesomeIcon icon={faBan} />
                  Desactivar
                </DropdownMenuItem>
              )}
              {item.userRoles.some(
                (role) =>
                  role.role.name === "Usuario" ||
                  role.role.name === "Instalador"
              ) &&
                !item.userRoles.some(
                  (role) => role.role.name === "Coordinador"
                ) && (
                  <DropdownMenuItem
                    onClick={() =>
                      handleAssignRoleUser(
                        Role.COORDINADOR,
                        item.id,
                        isDark ? "#000000" : "#FAFAFA"
                      )
                    }
                    className="text-inherit flex items-center gap-3 px-4 py-3 min-h-[48px] text-base sm:text-sm cursor-pointer text-yellow-600 data-[highlighted]:bg-yellow-600/10 data-[highlighted]:text-yellow-600 rounded-md transition-colors duration-200"
                  >
                    <FontAwesomeIcon icon={faUserSecret} />
                    Coordinador
                  </DropdownMenuItem>
                )}

              {item.userRoles.some(
                (role) => role.role.name === "Coordinador"
              ) && (
                <DropdownMenuItem
                  onClick={() =>
                    handleDeleteRoleUser(
                      Role.COORDINADOR,
                      item.id,
                      isDark ? "#000000" : "#FAFAFA"
                    )
                  }
                  className="text-inherit flex items-center gap-3 px-4 py-3 min-h-[48px] text-base sm:text-sm cursor-pointer text-admin-inactiveColor data-[highlighted]:bg-admin-inactiveColor/10 data-[highlighted]:text-admin-inactiveColor rounded-md transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faUserSlash} />
                  Coordinador
                </DropdownMenuItem>
              )}
              {!item.userRoles.some((role) => role.role.name === "Admin") && (
                <DropdownMenuItem
                  onClick={() =>
                    handleAssignRoleUser(
                      Role.ADMIN,
                      item.id,
                      isDark ? "#000000" : "#FAFAFA"
                    )
                  }
                  className="text-inherit flex items-center gap-3 px-4 py-3 min-h-[48px] text-base sm:text-sm cursor-pointer text-admin-editColor data-[highlighted]:bg-admin-editColor/10 data-[highlighted]:text-admin-editColor rounded-md transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faUserTie} />
                  Admin
                </DropdownMenuItem>
              )}
              {item.userRoles.some((role) => role.role.name === "Admin") && (
                <DropdownMenuItem
                  onClick={() =>
                    handleDeleteRoleUser(
                      Role.ADMIN,
                      item.id,
                      isDark ? "#000000" : "#FAFAFA"
                    )
                  }
                  className="text-inherit flex items-center gap-3 px-4 py-3 min-h-[48px] text-base sm:text-sm cursor-pointer text-admin-inactiveColor data-[highlighted]:bg-admin-inactiveColor/10 data-[highlighted]:text-admin-inactiveColor rounded-md transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faUserSlash} />
                  Admin
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </motion.td>
    </motion.tr>
  );
};

export default UserRow;
