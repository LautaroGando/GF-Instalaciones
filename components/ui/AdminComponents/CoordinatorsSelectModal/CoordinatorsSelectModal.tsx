"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUserStore } from "@/store/UserStore/userStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useCoordinatorsSelectModal } from "@/store/Admin/AdminModals/CoordinatorsSelectModal/CoordinatorsSelectModal";
import { ISelectedCoordinator } from "@/interfaces/ISelectedCoordinator";

const CoordinatorsSelectModal: React.FC = () => {
  const { isOpen, closeModal, addCoordinator, selectedCoordinators, deleteCoordinator } =
    useCoordinatorsSelectModal();
  const { users, handleFetchUsers } = useUserStore();

  const [search, setSearch] = useState("");

  useEffect(() => {
    handleFetchUsers();
  }, [handleFetchUsers]);

  const normalize = (text: string) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ")
      .trim();

  const coordinators = (users ?? []).filter((user) =>
    user.userRoles.some((u) => u.role.name.toLowerCase() === "coordinador")
  );

const coordinatorsWithRoleId: ISelectedCoordinator[] = coordinators
  .map((user) => {
    const role = user.userRoles.find((r) => r.role.name.toLowerCase() === "coordinador");
    if (!role) return null;

    return {
      id: role.id,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
      },
    };
  })
  .filter((item): item is ISelectedCoordinator => item !== null);

  const filteredCoordinators = coordinatorsWithRoleId.filter((c) =>
    normalize(c.user.fullName).includes(normalize(search))
  );

  if (!isOpen) return null;

  console.log(filteredCoordinators);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-bgColor rounded-2xl shadow-xl p-6 w-full max-w-[500px] max-h-[90vh] overflow-hidden flex flex-col dark:bg-bgColorDark sm:p-8"
      >
        <div className="flex flex-col items-center gap-4 mb-6">
          <h2 className="text-xl font-semibold text-primaryColor text-center">
            Seleccionar Coordinador
          </h2>

          <div className="relative w-full">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Buscar coordinadores por nombre"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-lg bg-transparent py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor transition"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 h-[47vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pr-1">
          <AnimatePresence mode="popLayout">
            {filteredCoordinators.map((coordinator) => (
              <motion.div
                key={coordinator.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                layout
                className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200 transition-all duration-200 dark:bg-gray-100/10"
              >
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    className="text-gray-500 text-2xl dark:text-gray-200"
                  />
                  <p className="text-gray-800 font-medium dark:text-gray-100">
                    {coordinator.user.fullName}
                  </p>
                </div>

                {selectedCoordinators.some((sc) => sc.id === coordinator.id) ? (
                  <button
                    onClick={() => deleteCoordinator(coordinator.id)}
                    className="border border-red-500 text-red-500 px-4 py-1.5 rounded-lg text-sm hover:bg-red-500 hover:text-white transition"
                  >
                    Desasignar
                  </button>
                ) : (
                  <button
                    onClick={() => addCoordinator(coordinator)}
                    className="bg-primaryColor text-white px-4 py-1.5 rounded-lg text-sm hover:bg-primaryColorHover transition"
                  >
                    Asignar
                  </button>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-6">
          <button
            onClick={() => {
              closeModal();
              setSearch("");
            }}
            className="w-full bg-gray-700 text-white py-2 rounded-lg transition hover:bg-gray-800"
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CoordinatorsSelectModal;
