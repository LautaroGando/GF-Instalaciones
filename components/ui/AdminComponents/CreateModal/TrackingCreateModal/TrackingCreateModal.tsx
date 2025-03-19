"use client";

import React from "react";
import { motion } from "framer-motion";
import { Field, Form, Formik } from "formik";
import orderSchema from "@/helpers/AdminValidations/validateCreateOrder";
import { FormikHelpers } from "formik";
import ICreateOrderFormValues from "@/interfaces/ICreateOrderFormValues";
import useDisableScroll from "@/hooks/useDisableScroll";
import { useTrackingCreateModal } from "@/store/Admin/AdminModals/CreateModals/TrackingCreateModalStore/TrackingCreateModalStore";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import Swal from "sweetalert2";

const TrackingCreateModal = () => {
  const { isOpen, closeModal } = useTrackingCreateModal();
  const { handleCreateOrder } = useTrackingStore();

  useDisableScroll(isOpen);

  if (!isOpen) return null;

  const handleOnSubmit = async (
    values: ICreateOrderFormValues,
    { setSubmitting }: FormikHelpers<ICreateOrderFormValues>
  ) => {
    try {
      console.log(values);
      await handleCreateOrder(values);

      Swal.fire({
        icon: "success",
        title: "Orden creada",
        text: "La orden ha sido creada correctamente.",
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });

      closeModal();
    } catch (error) {
      console.error("Error al crear la orden:", error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al crear la orden. Inténtalo de nuevo.",
        position: "center",
        showConfirmButton: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed px-4 inset-0 flex min-h-screen items-center justify-center bg-bgColorDark bg-opacity-50 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative bg-white rounded-lg shadow-lg pt-4 w-full max-w-[600px] max-h-[90vh] my-auto flex flex-col overflow-hidden"
      >
        <div className="absolute w-full h-[7px] bg-primaryColor top-0 left-0"></div>
        <h2 className="text-[20px] font-bold text-bgColorDark/60 mt-[7px] mb-4 px-6">
          Crear Nueva Orden
        </h2>

        <div className="overflow-y-auto px-6 pb-6 pt-1">
          <Formik
            initialValues={{
              orderNumber: "",
              title: "",
              description: "",
            }}
            validationSchema={orderSchema}
            onSubmit={handleOnSubmit}
          >
            {({ handleSubmit, errors, touched }) => (
              <Form onSubmit={handleSubmit} className="space-y-3 text-bgColorDark/60">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <label htmlFor="orderNumber" className="text-sm font-medium text-primaryColor/80">
                    Número de Orden
                  </label>
                  <Field
                    name="orderNumber"
                    type="text"
                    placeholder="Ingrese el número de la orden"
                    className="shadow-sm shadow-primaryColor/60 p-2 rounded-[4px] w-full outline-none transition-all duration-200 focus:border-primaryColor-xl focus:shadow-primaryColor/100 placeholder:text-black/50 placeholder:text-sm"
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
                    Nombre de la Orden
                  </label>
                  <Field
                    name="title"
                    type="text"
                    placeholder="Ingrese el nombre de la orden"
                    className="shadow-sm shadow-primaryColor/60 p-2 rounded-[4px] w-full outline-none transition-all duration-200 focus:border-primaryColor-xl focus:shadow-primaryColor/100 placeholder:text-black/50 placeholder:text-sm"
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
                  <label htmlFor="description" className="text-sm font-medium text-primaryColor/80">
                    Descripción
                  </label>
                  <Field
                    as="textarea"
                    name="description"
                    placeholder="Ingrese la descripción de la orden"
                    className="shadow-sm shadow-primaryColor/60 p-2 rounded-[4px] w-full outline-none transition-all duration-200 h-[100px] focus:border-primaryColor-xl focus:shadow-primaryColor/100 placeholder:text-black/50 placeholder:text-sm md:h-[150px]"
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
                  className="flex flex-col xl:flex-row xl:justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
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
                    className="w-full mt-4 bg-primaryColor text-white p-2 rounded-md transition-all duration-200 hover:bg-primaryColorHover xl:order-2 xl:w-[240px]"
                  >
                    Crear Orden
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

export default TrackingCreateModal;
