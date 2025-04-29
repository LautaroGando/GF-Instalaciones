"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Field, Formik, Form } from "formik";
import { FormikHelpers } from "formik";
import useDisableScroll from "@/hooks/useDisableScroll";

import { useInstallationsEditModal } from "@/store/Admin/AdminModals/EditModals/InstallationsEditModalStore/InstallationsEditModalStore";
import IEditInstallationFormValues from "@/interfaces/IEditInstallationFormValues";
import validateEditInstallation from "@/helpers/AdminValidations/ValidateEditInstallations";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import { useSearchParams } from "next/navigation";
import { useInstallersSelectModal } from "@/store/Admin/AdminModals/InstallersSelectModalStore/InstallersSelectModalStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import InstallersSelectModal from "../../InstallersSelectModal/InstallersSelectModal";
import PersonalizedPopUp from "@/components/ui/GeneralComponents/PersonalizedPopUp/PersonalizedPopUp";
import { IInstaller } from "@/interfaces/IInstaller";
import { useThemeStore } from "@/store/ThemeStore/themeStore";

const InstallationEditModal = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const { isOpen, closeModal, selectedInstallation } = useInstallationsEditModal();
  const { handleUpdateInstallation, setEditedInstallationId } = useTrackingStore();

  const {
    selectedInstallers,
    deleteInstaller,
    addInstaller,
    clearInstallers,
    openModal: openInstallersModal,
  } = useInstallersSelectModal();
  const { isDark } = useThemeStore();

  useEffect(() => {
    if (!selectedInstallation?.installers) return;

    clearInstallers();
    selectedInstallation.installers.forEach((inst) => addInstaller(inst));
  }, [selectedInstallation, addInstaller, clearInstallers]);

  const SyncInstallersWithFormik = ({
    selectedInstallers,
    setFieldValue,
  }: {
    selectedInstallers: IInstaller[];
    setFieldValue: (field: string, value: string[]) => void;
  }) => {
    useEffect(() => {
      setFieldValue(
        "installersIds",
        selectedInstallers.map((i) => i.id)
      );
    }, [selectedInstallers, setFieldValue]);

    return null;
  };

  useDisableScroll(isOpen);

  if (!orderId || !isOpen || !selectedInstallation) return null;

  const initialValues: IEditInstallationFormValues = {
    startDate: selectedInstallation.startDate ?? "",
    installersIds: selectedInstallation.installers?.map((i) => i.id) ?? [],
  };

  const handleOnSubmit = async (
    values: IEditInstallationFormValues,
    { setSubmitting }: FormikHelpers<IEditInstallationFormValues>
  ) => {
    const installationId = selectedInstallation.id ?? "";

    const payload = {
      ...values,
      installersIds: selectedInstallers.map((i) => i.id),
    };

    await PersonalizedPopUp({
      color: isDark ? "#000000" : "#FAFAFA",
      withResult: false,
      titleSuccess: "Instalación actualizada",
      titleError: "Error",
      textSuccess: "Los cambios se guardaron correctamente.",
      textError: "No se pudo actualizar la instalación. Intenta nuevamente.",
      installationId,
      setEditedInstallationId,
      setSubmiting: setSubmitting,
      closeModal,
      genericFunction: () => handleUpdateInstallation(installationId, payload),
    });
  };

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
          <div className="absolute w-full h-[7px] bg-primaryColor top-0 left-0" />
          <h2 className="text-[20px] font-bold text-primaryColor mt-[7px] mb-4 px-6">
            Editar Instalación
          </h2>

          <div className="overflow-y-auto px-6 pb-6 pt-1">
            <Formik
              initialValues={initialValues}
              validationSchema={validateEditInstallation}
              onSubmit={(values, formikHelpers) => handleOnSubmit(values, formikHelpers)}
            >
              {({
                handleSubmit,
                errors,
                touched,
                isSubmitting,
                values,
                initialValues,
                setFieldValue,
              }) => {
                const noChanges =
                  values.startDate === initialValues.startDate &&
                  JSON.stringify(selectedInstallers.map((i) => i.id).sort()) ===
                    JSON.stringify(initialValues.installersIds.sort());

                const customSubmit = (e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();

                  if (noChanges) {
                    PersonalizedPopUp({
                      color: isDark ? "#000000" : "#FAFAFA",
                      withResult: false,
                      simpleModal: true,
                      icon: "info",
                      title: "Sin cambios",
                      text: "No hiciste ningún cambio para guardar.",
                    });
                    return;
                  }

                  if (selectedInstallers.length === 0) {
                    PersonalizedPopUp({
                      color: isDark ? "#000000" : "#FAFAFA",
                      withResult: false,
                      simpleModal: true,
                      icon: "warning",
                      title: "Faltan instaladores",
                      text: "Debes seleccionar al menos un instalador.",
                    });
                    return;
                  }

                  handleSubmit(e);
                };

                return (
                  <>
                    <SyncInstallersWithFormik
                      selectedInstallers={selectedInstallers}
                      setFieldValue={setFieldValue}
                    />

                    <Form onSubmit={customSubmit} className="space-y-3 text-bgColorDark/60">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeOut",
                          delay: 0.3,
                        }}
                      >
                        <label
                          htmlFor="startDate"
                          className="text-sm font-medium text-primaryColor/80 dark:text-letterColorLight/80"
                        >
                          Fecha de Inicio
                        </label>
                        <Field
                          name="startDate"
                          type="datetime-local"
                          step="900"
                          className="shadow-sm shadow-primaryColor/60 bg-transparent p-2 rounded-[4px] w-full outline-none dark:text-letterColorLight"
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
                        transition={{
                          duration: 0.3,
                          ease: "easeOut",
                          delay: 0.7,
                        }}
                      >
                        <label
                          htmlFor="selectedInstallers"
                          className="text-sm font-medium text-primaryColor/80 dark:text-letterColorLight/80"
                        >
                          Instaladores Seleccionados
                        </label>
                        <div className="flex flex-wrap gap-2 mt-2 bg-gray-100 p-3 rounded-md border border-gray-300 min-h-[50px] dark:bg-gray-100/10 dark:border-gray-300/20">
                          {selectedInstallers.length > 0 ? (
                            selectedInstallers.map((installer) => (
                              <motion.div
                                key={installer.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="flex items-center justify-center gap-2 bg-primaryColor/10 text-primaryColor px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                              >
                                <p>{installer.user.fullName}</p>
                                <button
                                  type="button"
                                  className="text-admin-inactiveColor hover:text-admin-inactiveColor/80"
                                  onClick={() => deleteInstaller(installer.id)}
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
                              No hay instaladores seleccionados
                            </motion.p>
                          )}
                        </div>

                        {errors.installersIds && touched.installersIds && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                            className="text-red-500 text-sm mt-2"
                          >
                            {errors.installersIds as string}
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
                          onClick={openInstallersModal}
                          className="w-full mt-2 border bg-primaryColor text-white p-2 rounded-md transition-all duration-200 hover:border-primaryColorHover hover:bg-white hover:text-primaryColor dark:hover:bg-bgColorDark"
                        >
                          Seleccionar instaladores
                        </button>
                      </motion.div>

                      <motion.div
                        className="flex flex-col xl:flex-row xl:justify-between"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeOut",
                          delay: 0.7,
                        }}
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
                          disabled={isSubmitting || noChanges}
                          className={`w-full mt-4 bg-primaryColor text-white p-2 rounded-md order-1 transition-all duration-200 xl:order-2 xl:w-[240px] ${
                            isSubmitting || noChanges
                              ? "opacity-50 cursor-not-allowed"
                              : "hover:bg-primaryColorHover"
                          }`}
                        >
                          {isSubmitting ? "Guardando..." : "Guardar instalación"}
                        </button>
                      </motion.div>
                    </Form>
                  </>
                );
              }}
            </Formik>
          </div>
        </motion.div>
      </div>
      <InstallersSelectModal />
    </>
  );
};

export default InstallationEditModal;
