"use client";

import React from "react";
import { motion } from "framer-motion";
import { Field, Form, Formik } from "formik";
import { FormikHelpers } from "formik";
import useDisableScroll from "@/hooks/useDisableScroll";

import { useInstallationsEditModal } from "@/store/Admin/AdminModals/EditModals/InstallationsEditModalStore/InstallationsEditModalStore";
import IEditInstallationFormValues from "@/interfaces/IEditInstallationFormValues";
import validateEditInstallation from "@/helpers/AdminValidations/ValidateEditInstallations";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import { useSearchParams } from "next/navigation";

const InstallationEditModal = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const { isOpen, closeModal, selectedInstallation } = useInstallationsEditModal();
  const { handleUpdateInstallation } = useTrackingStore();

  useDisableScroll(isOpen);

  if (!orderId) throw new Error('No se encontro el id de la orden.');

  if (!isOpen || !selectedInstallation) return null;

  const initialValues: IEditInstallationFormValues = {
    id: selectedInstallation.id ?? "",
    startDate: selectedInstallation.startDate ?? "",
    endDate: selectedInstallation.endDate ?? "",
    notes: selectedInstallation.notes ?? "",
    status: selectedInstallation.status ?? "Pendiente",
  };

  const handleOnSubmit = async (
    values: IEditInstallationFormValues,
    { setSubmitting }: FormikHelpers<IEditInstallationFormValues>
  ) => {
    const installationId = values.id;
    handleUpdateInstallation(orderId, installationId, values);
    console.log(values);

    closeModal();
    setSubmitting(false);
  };

  return (
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
        className="relative bg-white rounded-lg shadow-lg pt-4 w-full max-w-[600px] max-h-[90vh] my-auto flex flex-col overflow-hidden"
      >
        <div className="absolute w-full h-[7px] bg-primaryColor top-0 left-0"></div>
        <h2 className="text-[20px] font-bold text-bgColorDark/60 mt-[7px] mb-4 px-6">
          Editar Instalación
        </h2>

        <div className="overflow-y-auto px-6 pb-6 pt-1">
          <Formik
            initialValues={initialValues}
            validationSchema={validateEditInstallation}
            onSubmit={handleOnSubmit}
          >
            {({ handleSubmit, errors, touched, isSubmitting }) => (
              <Form onSubmit={handleSubmit} className="space-y-3 text-bgColorDark/60">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                >
                  <label htmlFor="id" className="text-sm font-medium text-primaryColor/80">
                    ID
                  </label>
                  <Field
                    name="id"
                    type="text"
                    disabled
                    className="shadow-sm shadow-primaryColor/60 p-2 rounded-[4px] w-full bg-gray-100 cursor-not-allowed outline-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
                >
                  <label htmlFor="startDate" className="text-sm font-medium text-primaryColor/80">
                    Fecha de Inicio
                  </label>
                  <Field
                    name="startDate"
                    type="date"
                    className="shadow-sm shadow-primaryColor/60 p-2 rounded-[4px] w-full outline-none"
                  />
                  {errors.startDate && touched.startDate && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {errors.startDate}
                    </motion.div>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
                >
                  <label htmlFor="endDate" className="text-sm font-medium text-primaryColor/80">
                    Fecha de Fin
                  </label>
                  <Field
                    name="endDate"
                    type="date"
                    className="shadow-sm shadow-primaryColor/60 p-2 rounded-[4px] w-full outline-none"
                  />
                  {errors.endDate && touched.endDate && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {errors.endDate}
                    </motion.div>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
                >
                  <label htmlFor="notes" className="text-sm font-medium text-primaryColor/80">
                    Notas
                  </label>
                  <Field
                    as="textarea"
                    name="notes"
                    placeholder="Ingrese notas adicionales"
                    className="shadow-sm shadow-primaryColor/60 p-2 rounded-[4px] w-full h-[100px] outline-none resize-none"
                  />
                  {errors.notes && touched.notes && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {errors.notes}
                    </motion.div>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
                >
                  <label htmlFor="status" className="text-sm font-medium text-primaryColor/80">
                    Estado
                  </label>
                  <Field
                    as="select"
                    name="status"
                    className="shadow-sm shadow-primaryColor/60 p-2 rounded-[4px] w-full outline-none"
                  >
                    <option value="Pendiente">Pendiente</option>
                    <option value="En proceso">En proceso</option>
                    <option value="A revisar">A revisar</option>
                    <option value="Pospuesta">Pospuesta</option>
                    <option value="Finalizada">Finalizada</option>
                    <option value="Cancelada">Cancelada</option>
                  </Field>
                  {errors.status && touched.status && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {errors.status}
                    </motion.div>
                  )}
                </motion.div>

                <motion.div
                  className="flex flex-col xl:flex-row xl:justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.7 }}
                >
                  <button
                    type="button"
                    onClick={closeModal}
                    className="w-full mt-4 bg-bgColorDark/30 text-white p-2 rounded-md order-2 transition-all duration-200 hover:bg-bgColorDark/40 xl:order-1 xl:w-[240px]"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full mt-4 bg-primaryColor text-white p-2 rounded-md order-1 transition-all duration-200 xl:order-2 xl:w-[240px] ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-primaryColorHover"
                    }`}
                  >
                    {isSubmitting ? "Guardando..." : "Guardar instalación"}
                  </button>
                </motion.div>
              </Form>
            )}
          </Formik>
        </div>
      </motion.div>
    </div>
  );
};

export default InstallationEditModal;
