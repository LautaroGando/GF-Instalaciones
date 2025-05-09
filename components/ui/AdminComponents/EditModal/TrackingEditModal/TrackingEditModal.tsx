"use client";
import React from "react";
import { motion } from "framer-motion";
import { Field, Form, Formik } from "formik";
import { FormikHelpers } from "formik";
import useDisableScroll from "@/hooks/useDisableScroll";
import { useTrackingEditModal } from "@/store/Admin/AdminModals/EditModals/TrackingEditModalStore/TrackingEditModalStore";
import IEditOrderFormValues from "@/interfaces/IEditOrderFormValues";
import validateEditOrder from "@/helpers/AdminValidations/ValidateEditOrder";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import PersonalizedPopUp from "@/components/ui/GeneralComponents/PersonalizedPopUp/PersonalizedPopUp";
import { useThemeStore } from "@/store/ThemeStore/themeStore";

const TrackingEditModal = () => {
  const { isOpen, closeModal, selectedOrder } = useTrackingEditModal();
  const { handleUpdateOrder } = useTrackingStore();
  const { isDark } = useThemeStore();

  useDisableScroll(isOpen);

  if (!isOpen || !selectedOrder) return null;

  const handleOnSubmit = async (
    values: IEditOrderFormValues,
    { setSubmitting }: FormikHelpers<IEditOrderFormValues>
  ) => {
    PersonalizedPopUp({
      color: isDark ? "#000000" : "#FAFAFA",
      withResult: false,
      titleSuccess: "Orden actualizada",
      textSuccess: "Los cambios se han guardado correctamente.",
      titleError: "Error",
      textError: "No se pudo actualizar la orden. Inténtalo de nuevo.",
      setSubmiting: setSubmitting,
      genericFunction: () => handleUpdateOrder(selectedOrder.id, values),
      closeModal: () => closeModal(),
    });
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
        className="relative bg-bgColor rounded-lg shadow-lg pt-4 w-full max-w-[600px] max-h-[90vh] my-auto flex flex-col overflow-hidden dark:bg-bgColorDark"
      >
        <div className="absolute w-full h-[7px] bg-primaryColor top-0 left-0"></div>
        <h2 className="text-[20px] font-bold text-primaryColor mt-[7px] mb-4 px-6">
          Editar Orden
        </h2>

        <div className="overflow-y-auto px-6 pb-6 pt-1">
          <Formik
            initialValues={{
              orderNumber: selectedOrder.orderNumber ?? "",
              title: selectedOrder.title ?? "",
              description: selectedOrder.description ?? "",
              completed: selectedOrder.completed,
            }}
            validationSchema={validateEditOrder}
            onSubmit={handleOnSubmit}
          >
            {({ handleSubmit, errors, touched, isSubmitting }) => (
              <Form
                onSubmit={handleSubmit}
                className="space-y-3 text-bgColorDark/60"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                >
                  <label
                    htmlFor="orderNumber"
                    className="text-sm font-medium text-primaryColor/80 dark:text-letterColorLight/80"
                  >
                    Número de Orden
                  </label>
                  <Field
                    name="orderNumber"
                    type="text"
                    placeholder="Ingrese el número de la orden"
                    className="shadow-sm shadow-primaryColor/60 p-2 rounded-[4px] w-full outline-none transition-all duration-200 bg-transparent focus:border-primaryColor-xl focus:shadow-primaryColor/100 placeholder:text-black/50 placeholder:text-sm dark:text-letterColorLight dark:placeholder:text-letterColorLight/50"
                  />
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity:
                        errors.orderNumber && touched.orderNumber ? 1 : 0,
                      height:
                        errors.orderNumber && touched.orderNumber ? "auto" : 0,
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
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                >
                  <label
                    htmlFor="title"
                    className="text-sm font-medium text-primaryColor/80 dark:text-letterColorLight/80"
                  >
                    Nombre de la Orden
                  </label>
                  <Field
                    name="title"
                    type="text"
                    placeholder="Ingrese el nombre de la orden"
                    className="shadow-sm shadow-primaryColor/60 p-2 rounded-[4px] w-full outline-none transition-all duration-200 bg-transparent focus:border-primaryColor-xl focus:shadow-primaryColor/100 placeholder:text-black/50 placeholder:text-sm dark:text-letterColorLight dark:placeholder:text-letterColorLight/50"
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
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
                >
                  <label
                    htmlFor="description"
                    className="text-sm font-medium text-primaryColor/80 dark:text-letterColorLight/80"
                  >
                    Descripción
                  </label>
                  <Field
                    as="textarea"
                    name="description"
                    placeholder="Ingrese la descripción"
                    className="shadow-sm shadow-primaryColor/60 p-2 rounded-[4px] w-full outline-none h-[100px] md:h-[150px] transition-all duration-200 bg-transparent focus:border-primaryColor-xl focus:shadow-primaryColor/100 placeholder:text-black/50 placeholder:text-sm dark:text-letterColorLight dark:placeholder:text-letterColorLight/50"
                  />
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity:
                        errors.description && touched.description ? 1 : 0,
                      height:
                        errors.description && touched.description ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-red-500 text-sm mt-2"
                  >
                    {errors.description}
                  </motion.div>
                </motion.div>
                <motion.div className="flex flex-col xl:flex-row xl:justify-between gap-3">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="w-full mt-4 order-2 bg-gray-400 text-white p-2 rounded-md transition-all duration-200 hover:bg-gray-500 xl:w-[120px] xl:order-1"
                  >
                    Cancelar
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full mt-4 text-white p-2 rounded-md transition-all duration-200 xl:order-2 ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-primaryColor hover:bg-primaryColorHover"
                    } xl:w-[240px]`}
                  >
                    {isSubmitting ? "Guardando..." : "Guardar Cambios"}
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

export default TrackingEditModal;
