"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Field, Form, Formik, FormikHelpers, useFormikContext } from "formik";
import useDisableScroll from "@/hooks/useDisableScroll";
import { useInstallationsCreateModal } from "@/store/Admin/AdminModals/CreateModals/InstallationsCreateModalStore/InstalationsCreateModalStore";
import ICreateInstallationFormValues from "@/interfaces/ICreateInstallationFormValues";
import installationSchema from "@/helpers/AdminValidations/validateCreateInstallation";
import { useInstallersSelectModal } from "@/store/Admin/AdminModals/InstallersSelectModalStore/InstallersSelectModalStore";
import InstallersSelectModal from "../../InstallersSelectModal/InstallersSelectModal";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import { useSearchParams } from "next/navigation";
import { provincesMock } from "@/utils/pronvicesMock";
import CoordinatorsSelectModal from "../../CoordinatorsSelectModal/CoordinatorsSelectModal";
import { useCoordinatorsSelectModal } from "@/store/Admin/AdminModals/CoordinatorsSelectModal/CoordinatorsSelectModal";
import PersonalizedPopUp from "@/components/ui/GeneralComponents/PersonalizedPopUp/PersonalizedPopUp";

const SyncInstallersWithFormik = () => {
  const { setFieldValue } = useFormikContext<ICreateInstallationFormValues>();
  const { selectedInstallers } = useInstallersSelectModal();

  useEffect(() => {
    const ids = selectedInstallers.map((installer) => installer.id);
    setFieldValue("installersIds", ids);
  }, [selectedInstallers, setFieldValue]);

  return null;
};

const SyncCoordinatorWithFormik = () => {
  const { setFieldValue } = useFormikContext<ICreateInstallationFormValues>();
  const { selectedCoordinators } = useCoordinatorsSelectModal();

  useEffect(() => {
    const id = selectedCoordinators[0]?.id || "";
    setFieldValue("coordinatorId", id);
  }, [selectedCoordinators, setFieldValue]);

  return null;
};

const InstallationsCreateModal = () => {
  const { isOpen, closeModal } = useInstallationsCreateModal();

  const {
    selectedInstallers,
    deleteInstaller,
    clearInstallers,
    openModal: openInstallersModal,
  } = useInstallersSelectModal();

  const {
    selectedCoordinators,
    deleteCoordinator,
    clearCoordinators,
    openModal: openCoordinatorsModal,
  } = useCoordinatorsSelectModal();
  const { handleCreateInstallation } = useTrackingStore();

  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  useDisableScroll(isOpen);
  if (!isOpen) return null;

  const handleOnSubmit = async (
    values: ICreateInstallationFormValues,
    { setSubmitting }: FormikHelpers<ICreateInstallationFormValues>
  ) => {
    closeModal();
    const installersIds = selectedInstallers.map((installer) => installer.id);

    const coordinatorId =
      selectedCoordinators[0]?.userRoles.find(
        (userRole) => userRole.role.name.toLowerCase() === "coordinador"
      )?.id || "";

    const installationData: ICreateInstallationFormValues = {
      ...values,
      installersIds,
      coordinatorId,
    };

    if (orderId) {
      await PersonalizedPopUp({
        withResult: false,
        titleSuccess: "Instalación creada",
        titleError: "Error",
        textSuccess: "La instalación se creó correctamente.",
        textError: "Hubo un problema al crear la instalación.",
        setSubmiting: setSubmitting,
        genericFunction: () =>
          handleCreateInstallation(orderId, installationData),
        clearInstallers: () => clearInstallers(),
        clearCoordinators: () => clearCoordinators(),
      });
    }

    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  if (!orderId) return;

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
          className="bg-white relative rounded-lg shadow-lg pt-4 w-full max-w-[600px] max-h-[90vh] my-auto flex flex-col overflow-hidden"
        >
          <div className="absolute w-full h-[7px] bg-primaryColor top-0 left-0"></div>
          <h2 className="text-[20px] font-bold text-primaryColor mt-[7px] mb-4 px-6">
            Crear Nueva Instalación
          </h2>
          <div className="overflow-y-auto px-6 pb-6 pt-1">
            <Formik<ICreateInstallationFormValues>
              initialValues={{
                startDate: "",
                notes: "",
                address: {
                  street: "",
                  number: "",
                  note: "",
                  postalCode: "",
                  city: "",
                  province: "",
                },
                installersIds: [],
                coordinatorId: "",
              }}
              validationSchema={installationSchema}
              onSubmit={handleOnSubmit}
            >
              {({ errors, touched }) => (
                <>
                  <SyncInstallersWithFormik />
                  <SyncCoordinatorWithFormik />
                  <Form className="space-y-3 text-bgColorDark/60">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <label
                        htmlFor="address.province"
                        className="text-sm font-medium text-primaryColor/80"
                      >
                        Provincia
                      </label>
                      <Field
                        name="address.province"
                        as="select"
                        placeholder="Ingrese la provincia"
                        className="shadow-sm shadow-primaryColor/60 p-2 rounded-[4px] text-sm w-full outline-none transition-all duration-200 focus:border-primaryColor-xl focus:shadow-primaryColor/100 placeholder:text-black/50 placeholder:text-sm"
                      >
                        <option value="">Seleccionar provincia</option>
                        {provincesMock.map((province, i) => (
                          <option key={i} value={province.name}>
                            {province.name}
                          </option>
                        ))}
                      </Field>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity:
                            errors.address?.province &&
                            touched.address?.province
                              ? 1
                              : 0,
                          height:
                            errors.address?.province &&
                            touched.address?.province
                              ? "auto"
                              : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-red-500 text-sm mt-2"
                      >
                        {errors.address?.province}
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: 0.1,
                      }}
                    >
                      <label
                        htmlFor="address.city"
                        className="text-sm font-medium text-primaryColor/80"
                      >
                        Ciudad
                      </label>
                      <Field
                        name="address.city"
                        type="text"
                        placeholder="Ingrese la ciudad"
                        className="shadow-sm shadow-primaryColor/60 p-2 rounded-[4px] w-full outline-none transition-all duration-200 focus:border-primaryColor-xl focus:shadow-primaryColor/100 placeholder:text-black/50 placeholder:text-sm"
                      />
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity:
                            errors.address?.city && touched.address?.city
                              ? 1
                              : 0,
                          height:
                            errors.address?.city && touched.address?.city
                              ? "auto"
                              : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-red-500 text-sm mt-2"
                      >
                        {errors.address?.city}
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: 0.2,
                      }}
                    >
                      <label
                        htmlFor="address.street"
                        className="text-sm font-medium text-primaryColor/80"
                      >
                        Calle
                      </label>
                      <Field
                        name="address.street"
                        type="text"
                        placeholder="Ingrese la calle"
                        className="shadow-sm shadow-primaryColor/60 p-2 rounded-[4px] w-full outline-none transition-all duration-200 focus:border-primaryColor-xl focus:shadow-primaryColor/100 placeholder:text-black/50 placeholder:text-sm"
                      />
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity:
                            errors.address?.street && touched.address?.street
                              ? 1
                              : 0,
                          height:
                            errors.address?.street && touched.address?.street
                              ? "auto"
                              : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-red-500 text-sm mt-2"
                      >
                        {errors.address?.street}
                      </motion.div>
                    </motion.div>

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
                        htmlFor="address.number"
                        className="text-sm font-medium text-primaryColor/80"
                      >
                        Número de calle
                      </label>
                      <Field
                        name="address.number"
                        type="text"
                        placeholder="Ingrese el número de calle"
                        className="shadow-sm shadow-primaryColor/60 p-2 rounded-[4px] w-full outline-none transition-all duration-200 focus:border-primaryColor-xl focus:shadow-primaryColor/100 placeholder:text-black/50 placeholder:text-sm"
                      />
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity:
                            errors.address?.number && touched.address?.number
                              ? 1
                              : 0,
                          height:
                            errors.address?.number && touched.address?.number
                              ? "auto"
                              : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-red-500 text-sm mt-2"
                      >
                        {errors.address?.number}
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: 0.4,
                      }}
                    >
                      <label
                        htmlFor="address.postalCode"
                        className="text-sm font-medium text-primaryColor/80"
                      >
                        Código Postal
                      </label>
                      <Field
                        name="address.postalCode"
                        type="text"
                        placeholder="Ingrese el código postal"
                        className="shadow-sm shadow-primaryColor/60 p-2 rounded-[4px] w-full outline-none transition-all duration-200 focus:border-primaryColor-xl focus:shadow-primaryColor/100 placeholder:text-black/50 placeholder:text-sm"
                      />
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity:
                            errors.address?.postalCode &&
                            touched.address?.postalCode
                              ? 1
                              : 0,
                          height:
                            errors.address?.postalCode &&
                            touched.address?.postalCode
                              ? "auto"
                              : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-red-500 text-sm mt-2"
                      >
                        {errors.address?.postalCode}
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: 0.5,
                      }}
                    >
                      <label
                        htmlFor="address.note"
                        className="text-sm font-medium text-primaryColor/80"
                      >
                        Nota adicional
                      </label>
                      <Field
                        name="address.note"
                        type="text"
                        placeholder="Ingrese una nota (opcional)"
                        className="shadow-sm shadow-primaryColor/60 p-2 rounded-[4px] w-full outline-none transition-all duration-200 focus:border-primaryColor-xl focus:shadow-primaryColor/100 placeholder:text-black/50 placeholder:text-sm"
                      />
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity:
                            errors.address?.note && touched.address?.note
                              ? 1
                              : 0,
                          height:
                            errors.address?.note && touched.address?.note
                              ? "auto"
                              : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-red-500 text-sm mt-2"
                      >
                        {errors.address?.note}
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: 0.6,
                      }}
                    >
                      <label
                        htmlFor="startDate"
                        className="text-sm font-medium text-primaryColor/80"
                      >
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
                          opacity:
                            errors.startDate && touched.startDate ? 1 : 0,
                          height:
                            errors.startDate && touched.startDate ? "auto" : 0,
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
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: 0.7,
                      }}
                    >
                      <label
                        htmlFor="selectedInstallers"
                        className="text-sm font-medium text-primaryColor/80"
                      >
                        Instaladores Seleccionados
                      </label>
                      <div className="flex flex-wrap gap-2 mt-2 bg-gray-100 p-3 rounded-md border border-gray-300 min-h-[50px]">
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
                        className="w-full mt-2 border border-primaryColor text-primaryColor p-2 rounded-md transition-all duration-200 hover:bg-primaryColorHover hover:text-white"
                      >
                        Seleccionar instaladores
                      </button>
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
                        htmlFor="selectedCoordinators"
                        className="text-sm font-medium text-primaryColor/80"
                      >
                        Coordinador Seleccionado
                      </label>
                      <div className="flex flex-wrap gap-2 mt-2 bg-gray-100 p-3 rounded-md border border-gray-300 min-h-[50px]">
                        {selectedCoordinators.length > 0 ? (
                          selectedCoordinators.map((coordinator) => (
                            <motion.div
                              key={coordinator.id}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="flex items-center justify-center gap-2 bg-primaryColor/10 text-primaryColor px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                            >
                              <p>{coordinator.fullName}</p>
                              <button
                                type="button"
                                className="text-admin-inactiveColor hover:text-admin-inactiveColor/80"
                                onClick={() =>
                                  deleteCoordinator(coordinator.id)
                                }
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
                            No hay coordinadores seleccionados
                          </motion.p>
                        )}
                      </div>

                      {errors.coordinatorId && touched.coordinatorId && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="text-red-500 text-sm mt-2"
                        >
                          {errors.coordinatorId as string}
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
                        onClick={openCoordinatorsModal}
                        className="w-full mt-2 border border-primaryColor text-primaryColor p-2 rounded-md transition-all duration-200 hover:bg-primaryColorHover hover:text-white"
                      >
                        Seleccionar coordinador
                      </button>
                    </motion.div>

                    <motion.div
                      className="flex flex-col xl:flex-row xl:justify-between"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: 0.9,
                      }}
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
                </>
              )}
            </Formik>
          </div>
        </motion.div>
      </div>
      <InstallersSelectModal />
      <CoordinatorsSelectModal />
    </>
  );
};

export default InstallationsCreateModal;
