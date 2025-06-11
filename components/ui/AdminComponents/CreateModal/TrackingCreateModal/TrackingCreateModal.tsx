"use client";

import React, { useEffect, useRef } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { Field, Form, Formik, useFormikContext } from "formik";
import orderSchema from "@/helpers/AdminValidations/validateCreateOrder";
import { FormikHelpers } from "formik";
import ICreateOrderFormValues from "@/interfaces/ICreateOrderFormValues";
import useDisableScroll from "@/hooks/useDisableScroll";
import { useTrackingCreateModal } from "@/store/Admin/AdminModals/CreateModals/TrackingCreateModalStore/TrackingCreateModalStore";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import PersonalizedPopUp from "@/components/ui/GeneralComponents/PersonalizedPopUp/PersonalizedPopUp";
import { useThemeStore } from "@/store/ThemeStore/themeStore";
import ClientSelectModal from "../../ClientSelectModal/ClientSelectModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useClientsSelectModal } from "@/store/Admin/AdminModals/ClientSelectModalStore/ClientSelectModalStore";

const TrackingCreateModal = () => {
  const {
    selectedClients,
    openModal: openClientModal,
    removeClient,
    clearClients,
  } = useClientsSelectModal();
  const { isOpen, closeModal } = useTrackingCreateModal();
  const { handleCreateOrder, allOrders } = useTrackingStore();
  const { isDark } = useThemeStore();
  useDisableScroll(isOpen);

  const isOpenRef = useRef(isOpen);

  useEffect(() => {
    const prevIsOpen = isOpenRef.current;
    if (prevIsOpen && !isOpen) {
      clearClients();
    }
    isOpenRef.current = isOpen;
  }, [isOpen, clearClients]);

  const SyncClientsWithFormik = () => {
    const { setFieldValue } = useFormikContext<ICreateOrderFormValues>();
    const { selectedClients } = useClientsSelectModal();

    useEffect(() => {
      const clientRoleIds = selectedClients
        .map(
          (client) =>
            client.userRoles.find((role) => role.role.name.toLowerCase() === "usuario")?.id
        )
        .filter(Boolean);

      setFieldValue("clientsIds", clientRoleIds);
    }, [selectedClients, setFieldValue]);

    return null;
  };

  const handleOnSubmit = async (
    values: ICreateOrderFormValues,
    { setSubmitting }: FormikHelpers<ICreateOrderFormValues>
  ) => {
    const orderNumberExist = allOrders.find((ord) => ord.orderNumber === values.orderNumber);
    if (orderNumberExist) {
      Swal.fire({
        icon: "error",
        title: "Número de orden duplicado",
        text: "Ya existe una orden registrada con ese número.",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#A79351",
        background: isDark ? "#000000" : "#FAFAFA",
        color: "#8D8D8D",
      });
      return;
    }

    console.log(values);

    PersonalizedPopUp({
      color: isDark ? "#000000" : "#FAFAFA",
      withResult: false,
      titleSuccess: "Orden creada",
      titleError: "Error",
      textSuccess: "La orden ha sido creada correctamente.",
      textError: "Hubo un problema al crear la orden.",
      setSubmiting: setSubmitting,
      genericFunction: () => handleCreateOrder(values),
      closeModal: () => closeModal(),
    });

    clearClients();
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={closeModal}
        className="fixed px-4 inset-0 flex min-h-screen items-center justify-center bg-bgColorDark bg-opacity-50 z-50"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative bg-bgColor rounded-lg shadow-lg pt-4 w-full max-w-[600px] max-h-[90vh] my-auto flex flex-col overflow-hidden dark:bg-bgColorDark"
        >
          <div className="absolute w-full h-[7px] bg-primaryColor top-0 left-0"></div>
          <h2 className="text-[20px] font-bold text-primaryColor mt-[7px] mb-4 px-6">
            Crear nueva orden
          </h2>

          <div className="overflow-y-auto px-6 pb-6 pt-1">
            <Formik
              initialValues={
                {
                  orderNumber: "",
                  title: "",
                  description: "",
                  clientsIds: [],
                } as ICreateOrderFormValues
              }
              validationSchema={orderSchema}
              onSubmit={handleOnSubmit}
            >
              {({ handleSubmit, errors, touched }) => (
                <>
                  <SyncClientsWithFormik />
                  <Form onSubmit={handleSubmit} className="space-y-3 text-bgColorDark/60">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <label
                        htmlFor="orderNumber"
                        className="text-sm font-medium text-primaryColor/80"
                      >
                        Número de orden
                      </label>
                      <Field
                        name="orderNumber"
                        type="text"
                        placeholder="Ingrese el número de la orden"
                        className="shadow-sm shadow-primaryColor/60 bg-transparent text-secondaryColor p-2 rounded-[4px] w-full outline-none transition-all duration-200 focus:border-primaryColor-xl dark:text-letterColorLight focus:shadow-primaryColor/100 placeholder:text-black/50 placeholder:text-sm dark:placeholder:text-letterColorLight/50"
                      />
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: errors.orderNumber && touched.orderNumber ? 1 : 0,
                          height: errors.orderNumber && touched.orderNumber ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-red-500 text-sm mt-2"
                      >
                        {errors.orderNumber}
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                    >
                      <label htmlFor="title" className="text-sm font-medium text-primaryColor/80">
                        Nombre de la orden
                      </label>
                      <Field
                        name="title"
                        type="text"
                        placeholder="Ingrese el nombre de la orden"
                        className="shadow-sm shadow-primaryColor/60 bg-transparent text-secondaryColor p-2 rounded-[4px] w-full outline-none transition-all duration-200 focus:border-primaryColor-xl dark:text-letterColorLight focus:shadow-primaryColor/100 placeholder:text-black/50 placeholder:text-sm dark:placeholder:text-letterColorLight/50"
                      />
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: errors.title && touched.title ? 1 : 0,
                          height: errors.title && touched.title ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-red-500 text-sm mt-2"
                      >
                        {errors.title}
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                    >
                      <label
                        htmlFor="description"
                        className="text-sm font-medium text-primaryColor/80"
                      >
                        Descripción
                      </label>
                      <Field
                        as="textarea"
                        name="description"
                        placeholder="Ingrese la descripción de la orden"
                        className="shadow-sm shadow-primaryColor/60 bg-transparent text-secondaryColor p-2 rounded-[4px] w-full outline-none transition-all duration-200 h-[100px] focus:border-primaryColor-xl dark:text-letterColorLight focus:shadow-primaryColor/100 placeholder:text-black/50 placeholder:text-sm dark:placeholder:text-letterColorLight/50 md:h-[150px]"
                      />
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: errors.description && touched.description ? 1 : 0,
                          height: errors.description && touched.description ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-red-500 text-sm mt-2"
                      >
                        {errors.description}
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: 0.7,
                      }}
                    >
                      <label
                        htmlFor="selectedClient"
                        className="text-sm font-medium text-primaryColor/80"
                      >
                        Cliente asignado
                      </label>
                      <div className="flex flex-wrap gap-2 mt-2 bg-gray-100 p-3 rounded-md border border-gray-300 min-h-[50px] dark:bg-gray-100/10 dark:border-gray-300/20">
                        {selectedClients.length > 0 ? (
                          selectedClients.map((client) => (
                            <motion.div
                              key={client.id}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="flex items-center justify-center gap-2 bg-primaryColor/10 text-primaryColor px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                            >
                              <p>{client.fullName}</p>
                              <button
                                type="button"
                                onClick={() => removeClient(client.id)}
                                className="text-admin-inactiveColor hover:text-admin-inactiveColor/80"
                              >
                                <FontAwesomeIcon icon={faTimes} />
                              </button>
                            </motion.div>
                          ))
                        ) : (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="text-gray-400 text-sm"
                          >
                            Ningún cliente asignado
                          </motion.p>
                        )}
                      </div>

                      {errors.clientsIds && touched.clientsIds && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="text-red-500 text-sm mt-2"
                        >
                          {errors.clientsIds as string}
                        </motion.div>
                      )}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: 0.8,
                      }}
                    >
                      <button
                        type="button"
                        onClick={openClientModal}
                        className="w-full mt-2 border border-primaryColor bg-transparent text-primaryColor p-2 rounded-md transition-all duration-200 hover:bg-primaryColor hover:text-letterColorLight"
                      >
                        Seleccionar cliente
                      </button>
                    </motion.div>

                    <motion.div
                      className="flex flex-col xl:flex-row xl:justify-between"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
                    >
                      <button
                        type="button"
                        onClick={closeModal}
                        className="w-full mt-4 bg-gray-400 text-white p-2 rounded-md order-2 transition-all duration-200 hover:bg-gray-500 xl:order-1 xl:w-[240px]"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="w-full mt-4 bg-primaryColor text-white p-2 rounded-md transition-all duration-200 hover:bg-primaryColorHover xl:order-2 xl:w-[240px]"
                      >
                        Crear Orden
                      </button>
                    </motion.div>
                  </Form>
                </>
              )}
            </Formik>
          </div>
        </motion.div>
      </div>
      <ClientSelectModal />
    </>
  );
};

export default TrackingCreateModal;
