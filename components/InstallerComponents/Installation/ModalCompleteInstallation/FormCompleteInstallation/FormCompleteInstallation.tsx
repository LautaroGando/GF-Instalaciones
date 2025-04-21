import { validateCompleteJob } from "@/helpers/validateCompleteJob";
import { ICompleteJob } from "@/interfaces/IJob";
import { completeInstallation } from "@/services/orders";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import React, { useState } from "react";
import { IFormCompleteInstallationProps } from "./types";
import { motion } from "motion/react";
import PersonalizedPopUp from "@/components/ui/GeneralComponents/PersonalizedPopUp/PersonalizedPopUp";

export const FormCompleteInstallation: React.FC<
  IFormCompleteInstallationProps
> = ({ id }: IFormCompleteInstallationProps) => {
  const { handleCloseModal, handleFetchInstallationsNotPagination } =
    useTrackingStore();
  const [localFiles, setLocalFiles] = useState<File[]>([]);

  return (
    <Formik<ICompleteJob>
      initialValues={{ files: [], commentary: "" }}
      validate={validateCompleteJob}
      onSubmit={async (values) => {
        PersonalizedPopUp({
          withResult: false,
          titleSuccess: "Instalación finalizada",
          titleError: "Error",
          textSuccess: "La instalación ha sido finalizada correctamente.",
          textError:
            "Hubo un problema al finalizar la orden. Inténtalo de nuevo.",
          genericFunction: async () => {
            await completeInstallation(id, values);
            handleFetchInstallationsNotPagination();
          },
          closeModal: () => handleCloseModal(),
        });
      }}
    >
      {({ setFieldValue }: FormikProps<ICompleteJob>) => (
        <Form className="py-3 px-5 bg-bgColor fixed top-1/2 left-1/2 -translate-x-1/2 justify-between -translate-y-1/2 flex flex-col gap-10 w-[330px] border-t-[10px] border-primaryColor rounded-[4px] dark:bg-secondaryColor sm:w-[600px]">
          <h2 className="text-primaryColor text-sm text-center font-medium sm:text-lg">
            INFORMACIÓN DE LA INSTALACIÓN
          </h2>
          <div className="flex flex-col gap-5 text-secondaryColor dark:text-letterColorLight">
            <Field
              className="input min-h-[80px] border-b border-primaryColor"
              name="commentary"
              as="textarea"
              placeholder="Comentarios: (opcional)"
            />
            <label className="w-full h-[40px] border-2 border-primaryColor transition-all duration-300 text-primaryColor rounded-[2px] flex items-center relative justify-center cursor-pointer hover:bg-primaryColor hover:text-letterColorLight">
              Seleccionar imagenes
              <input
                className="hidden"
                type="file"
                name="files"
                multiple
                onChange={(event) => {
                  const files = Array.from(event.currentTarget.files || []);
                  setFieldValue("files", files);
                  setLocalFiles(files);
                }}
              />
              <ErrorMessage
                className="inputError absolute -bottom-5 left-0"
                name="files"
                component="p"
              />
            </label>
          </div>
          {localFiles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: "0px" }}
              animate={{ opacity: 1, height: "60px" }}
              transition={{ duration: 0.3 }}
              className="w-full overflow-auto text-sm text-secondaryColor"
            >
              {localFiles.map((file: File, i: number) => (
                <span key={i}>
                  {file.name}
                  {i === localFiles.length - 1 ? "." : ", "}
                </span>
              ))}
            </motion.div>
          )}
          <div className="flex gap-5 justify-between">
            <button
              onClick={handleCloseModal}
              type="button"
              className="w-[150px] h-[40px] bg-gray-400 text-letterColorLight transition-all duration-300 rounded-[4px] hover:bg-gray-500"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="w-[150px] h-[40px] bg-primaryColor text-letterColorLight transition-all duration-300 rounded-[4px] hover:bg-primaryColorHover"
            >
              Finalizar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormCompleteInstallation;
