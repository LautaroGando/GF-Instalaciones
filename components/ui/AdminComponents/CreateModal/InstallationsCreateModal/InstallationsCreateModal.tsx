// InstallationsCreateModal.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Field, Form, Formik, FormikHelpers } from "formik";
import useDisableScroll from "@/hooks/useDisableScroll";
import { useInstallationsCreateModal } from "@/store/Admin/AdminModals/CreateModals/InstallationsCreateModalStore/InstalationsCreateModalStore";
import ICreateInstallationFormValues from "@/interfaces/ICreateInstallationFormValues";
import installationSchema from "@/helpers/AdminValidations/validateCreateInstallation";
import { useInstallersSelectModal } from "@/store/Admin/AdminModals/InstallersSelectModalStore/InstallersSelectModalStore";
import InstallersSelectModal from "../../InstallersSelectModal/InstallersSelectModal";

const InstallationsCreateModal = () => {
  const { isOpen, closeModal } = useInstallationsCreateModal();
  const { openModal: openInstallersModal } = useInstallersSelectModal();
  useDisableScroll(isOpen);
  if (!isOpen) return null;
  const handleOnSubmit = (
    values: ICreateInstallationFormValues,
    { setSubmitting }: FormikHelpers<ICreateInstallationFormValues>
  ) => {
    console.log(values);
    closeModal();
    setSubmitting(false);
  };
  return (
    <>
      <div className="fixed px-4 inset-0 flex min-h-screen items-center justify-center bg-bgColorDark bg-opacity-50 z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white relative rounded-lg shadow-lg pt-4 w-full max-w-[600px] max-h-[90vh] my-auto flex flex-col overflow-hidden"
        >
          <div className="absolute w-full h-[7px] bg-primaryColor top-0 left-0"></div>
          <h2 className="text-[20px] font-bold text-primaryColor mt-[7px] mb-4 px-6">
            Crear Nueva Instalación
          </h2>
          <div className="overflow-y-auto px-6 pb-6 pt-1">
            <Formik
              initialValues={{
                street: "",
                number: "",
                city: "",
                province: "",
                postalCode: "",
                startDate: "",
                notes: "",
                selectInstaller: [],
                status: "Pendiente",
              }}
              validationSchema={installationSchema}
              onSubmit={handleOnSubmit}
            >
              {({ errors, touched }) => (
                <Form className="space-y-3 text-bgColorDark/60">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <label htmlFor="street" className="text-sm font-medium text-primaryColor/80">
                      Calle
                    </label>
                    <Field
                      name="street"
                      type="text"
                      placeholder="Ingrese la calle"
                      className="shadow-sm shadow-primaryColor/60 p-2 rounded-[4px] w-full outline-none transition-all duration-200 focus:border-primaryColor-xl focus:shadow-primaryColor/100 placeholder:text-black/50 placeholder:text-sm"
                    />
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: errors.street && touched.street ? 1 : 0,
                        height: errors.street && touched.street ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {errors.street}
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                  >
                    <label htmlFor="number" className="text-sm font-medium text-primaryColor/80">
                      Número de calle
                    </label>
                    <Field
                      name="number"
                      type="text"
                      placeholder="Ingrese el número de calle"
                      className="shadow-sm shadow-primaryColor/60 p-2 rounded-[4px] w-full outline-none transition-all duration-200 focus:border-primaryColor-xl focus:shadow-primaryColor/100 placeholder:text-black/50 placeholder:text-sm"
                    />
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: errors.number && touched.number ? 1 : 0,
                        height: errors.number && touched.number ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {errors.number}
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                  >
                    <label htmlFor="city" className="text-sm font-medium text-primaryColor/80">
                      Ciudad
                    </label>
                    <Field
                      name="city"
                      type="text"
                      placeholder="Ingrese la ciudad"
                      className="shadow-sm shadow-primaryColor/60 p-2 rounded-[4px] w-full outline-none transition-all duration-200 focus:border-primaryColor-xl focus:shadow-primaryColor/100 placeholder:text-black/50 placeholder:text-sm"
                    />
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: errors.city && touched.city ? 1 : 0,
                        height: errors.city && touched.city ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {errors.city}
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
                  >
                    <label htmlFor="province" className="text-sm font-medium text-primaryColor/80">
                      Provincia
                    </label>
                    <Field
                      name="province"
                      type="text"
                      placeholder="Ingrese la provincia"
                      className="shadow-sm shadow-primaryColor/60 p-2 rounded-[4px] w-full outline-none transition-all duration-200 focus:border-primaryColor-xl focus:shadow-primaryColor/100 placeholder:text-black/50 placeholder:text-sm"
                    />
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: errors.province && touched.province ? 1 : 0,
                        height: errors.province && touched.province ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {errors.province}
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
                  >
                    <label
                      htmlFor="postalCode"
                      className="text-sm font-medium text-primaryColor/80"
                    >
                      Código Postal
                    </label>
                    <Field
                      name="postalCode"
                      type="text"
                      placeholder="Ingrese el código postal"
                      className="shadow-sm shadow-primaryColor/60 p-2 rounded-[4px] w-full outline-none transition-all duration-200 focus:border-primaryColor-xl focus:shadow-primaryColor/100 placeholder:text-black/50 placeholder:text-sm"
                    />
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: errors.postalCode && touched.postalCode ? 1 : 0,
                        height: errors.postalCode && touched.postalCode ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {errors.postalCode}
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
                  >
                    <label htmlFor="startDate" className="text-sm font-medium text-primaryColor/80">
                      Fecha de Inicio
                    </label>
                    <Field
                      name="startDate"
                      type="date"
                      placeholder="Seleccione la fecha de inicio"
                      className="shadow-sm shadow-primaryColor/60 p-2 rounded-[4px] w-full outline-none transition-all duration-200 focus:border-primaryColor-xl focus:shadow-primaryColor/100 placeholder:text-black/50 placeholder:text-sm text-primaryColor"
                    />
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: errors.startDate && touched.startDate ? 1 : 0,
                        height: errors.startDate && touched.startDate ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {errors.startDate}
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
                  >
                    <button
                      type="button"
                      onClick={openInstallersModal}
                      className="w-full mt-2 border border-primaryColor text-primaryColor p-2 rounded-md transition-all duration-200 hover:bg-primaryColorHover hover:text-white"
                    >
                      Seleccionar instaladores
                    </button>
                  </motion.div>
                  <motion.div
                    className="flex flex-col xl:flex-row xl:justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
                  >
                    <button
                      type="button"
                      onClick={closeModal}
                      className="w-full mt-4 order-2 bg-bgColorDark/30 text-white p-2 rounded-md transition-all duration-200 hover:bg-bgColorDark/40 xl:order-1 xl:w-[240px]"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="w-full mt-4 order-1 bg-primaryColor text-white p-2 rounded-md transition-all duration-200 hover:bg-primaryColorHover xl:w-[240px]"
                    >
                      Crear Instalación
                    </button>
                  </motion.div>
                </Form>
              )}
            </Formik>
          </div>
        </motion.div>
      </div>
      <InstallersSelectModal />
    </>
  );
};

export default InstallationsCreateModal;
