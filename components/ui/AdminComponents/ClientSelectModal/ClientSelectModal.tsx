"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUserStore } from "@/store/UserStore/userStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { useClientsSelectModal } from "@/store/Admin/AdminModals/ClientSelectModalStore/ClientSelectModalStore";

const ClientsSelectModal: React.FC = () => {
  const {
    isOpen,
    closeModal,
    addClient,
    selectedClient,
    clearClient,
  } = useClientsSelectModal();
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

  const clients = (users ?? []).filter((user) => user.userRoles.length === 1);

  const filteredClients = clients.filter((c) =>
    normalize(c.fullName).includes(normalize(search))
  );

  if (!isOpen) return null;

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
            Seleccionar Cliente
          </h2>

          <div className="relative w-full">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Buscar clientes por nombre"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-lg bg-transparent py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor transition"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 h-[47vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pr-1">
          <AnimatePresence mode="popLayout">
            {filteredClients.length > 0 ? (
              filteredClients.map((client) => (
                <motion.div
                  key={client.id}
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
                    <p className="text-gray-800 font-medium dark:text-gray-100 max-w-[60px] sm:max-w-full">
                      {client.fullName}
                    </p>
                  </div>

                  {selectedClient?.id === client.id ? (
                    <button
                      onClick={clearClient}
                      className="border border-red-500 text-red-500 px-4 py-1.5 rounded-lg text-sm hover:bg-red-500 hover:text-white transition"
                    >
                      Desasignar
                    </button>
                  ) : (
                    <button
                      onClick={() => addClient(client)}
                      className="bg-primaryColor text-white px-4 py-1.5 rounded-lg text-sm hover:bg-primaryColorHover transition"
                    >
                      Asignar
                    </button>
                  )}
                </motion.div>
              ))
            ) : (
              <motion.div
                key="no-result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-gray-500 text-sm h-[60vh]"
              >
                No se encontraron clientes.
              </motion.div>
            )}
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

export default ClientsSelectModal;
