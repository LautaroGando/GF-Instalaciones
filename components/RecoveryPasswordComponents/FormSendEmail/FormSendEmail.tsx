"use client";
import { useRecoveryPasswordStore } from "@/store/RecoveryPasswordStore/recoveryPasswordStore";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { AnimatePresence } from "motion/react";
import React from "react";
import { motion } from "motion/react";
import { validateSendEmail } from "@/helpers/validateSendEmail";
import { sendMailRecoveryPassword } from "@/services/auth";
import { useThemeStore } from "@/store/ThemeStore/themeStore";

export const FormSendEmail: React.FC = () => {
  const { modal, handleCloseModal } = useRecoveryPasswordStore();
  const { isDark } = useThemeStore();

  return (
    <AnimatePresence mode="wait">
      {modal && (
        <motion.div
          onClick={handleCloseModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-[100vh] bg-secondaryColor/80 fixed top-0 left-0 z-50 flex items-center justify-center"
        >
          <Formik
            initialValues={{ email: "" }}
            validate={validateSendEmail}
            onSubmit={async (values, { resetForm }) => {
              await sendMailRecoveryPassword(
                values,
                isDark ? "#000000" : "#FAFAFA"
              );
              resetForm();
              handleCloseModal();
            }}
          >
            <Form
              onClick={(e) => e.stopPropagation()}
              className="max-w-[500px] bg-bgColor p-5 flex flex-col gap-5 rounded-lg border-t-[10px] border-primaryColor items-center dark:bg-bgColorDark"
            >
              <h2 className="text-primaryColor text-xl w-full font-semibold">
                Verificar correo electrónico:
              </h2>
              <div className="w-full">
                <Field
                  className="input"
                  name="email"
                  type="email"
                  placeholder="Correo electrónico:"
                />
                <ErrorMessage
                  className="inputError"
                  name="email"
                  component="p"
                />
              </div>
              <div className="flex flex-col items-center w-full gap-2 xl:flex-row xl:justify-between">
                <button
                  className="bg-gray-400 text-letterColorLight w-full h-[40px] mt-4 px-3 py-2 rounded-md transition-all duration-300 hover:bg-gray-500 xl:w-[240px]"
                  onClick={() => handleCloseModal()}
                  type="button"
                >
                  Cancelar
                </button>
                <button
                  className="bg-primaryColor text-letterColorLight w-full h-[40px] mt-4 px-3 py-2 rounded-md transition-all duration-300 hover:bg-primaryColorHover xl:w-[240px]"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </Form>
          </Formik>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormSendEmail;
