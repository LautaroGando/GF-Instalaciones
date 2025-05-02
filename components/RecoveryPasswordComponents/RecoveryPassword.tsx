"use client";
import { recoveryData } from "@/data/RecoveryPasswordComponents/RecoveryData/recovery-data";
import { IRecoveryData } from "@/data/RecoveryPasswordComponents/RecoveryData/types";
import { validateRecoveryPassword } from "@/helpers/validateRecoveryPassword";
import { IUserRecoveryPassword } from "@/interfaces/IAuth";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import React, { useState } from "react";

export const RecoveryPassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState<
    Record<keyof IUserRecoveryPassword, boolean>
  >({
    newPassword: false,
    repeatPassword: false,
  });

  return (
    <Formik
      initialValues={{ newPassword: "", repeatPassword: "" }}
      validate={validateRecoveryPassword}
      onSubmit={() => {}}
    >
      {({ errors, touched }: FormikProps<IUserRecoveryPassword>) => (
        <Form className="w-full h-[500px] max-w-[600px] mx-auto border-t-[10px] border-primaryColor rounded-[8px] shadow-lg shadow-secondaryColor/10 flex flex-col gap-5 items-center justify-between py-5 px-3 dark:shadow-bgColor/10">
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-2xl font-semibold text-primaryColor sm:text-[32px]">
              Cambia tu contraseña
            </h2>
            <p className="text-gray-500 text-xs max-w-[250px] text-center sm:text-base">
              Por seguridad, por favor elegí una contraseña nueva que no uses en
              otros sitios.
            </p>
            <div className="flex flex-col gap-12 sm:gap-8">
              {recoveryData.map((data: IRecoveryData) => (
                <div key={data.id} className="relative w-full max-w-[360px]">
                  <label
                    className={clsx(
                      "text-sm",
                      errors[data.name as keyof IUserRecoveryPassword] &&
                        touched[data.name as keyof IUserRecoveryPassword] &&
                        "text-error dark:text-errorDark"
                    )}
                    htmlFor={data.id}
                  >
                    {data.label}
                  </label>
                  <Field
                    className={clsx(
                      "input",
                      errors[data.name as keyof IUserRecoveryPassword] &&
                        touched[data.name as keyof IUserRecoveryPassword] &&
                        "border-b-error dark:border-b-errorDark placeholder:text-error dark:placeholder:text-errorDark"
                    )}
                    type={
                      showPassword[data.name as keyof IUserRecoveryPassword]
                        ? "text"
                        : "password"
                    }
                    name={data.name}
                    id={data.id}
                    placeholder={data.placeholder}
                  />
                  <FontAwesomeIcon
                    onClick={() =>
                      setShowPassword((prev) => ({
                        ...prev,
                        [data.name as keyof IUserRecoveryPassword]:
                          !prev[data.name as keyof IUserRecoveryPassword],
                      }))
                    }
                    className="w-[20px] text-[20px] absolute right-2 bottom-3 text-primaryColor cursor-pointer"
                    icon={
                      showPassword[data.name as keyof IUserRecoveryPassword]
                        ? faEyeSlash
                        : faEye
                    }
                    width={20}
                  />
                  <ErrorMessage
                    className={clsx(
                      "absolute left-0 inputError",
                      data.name === "newPassword"
                        ? "-bottom-12 sm:-bottom-8"
                        : "-bottom-4"
                    )}
                    name={data.name}
                    component="span"
                  />
                </div>
              ))}
            </div>
          </div>
          <button className="w-[200px] h-[40px] bg-primaryColor rounded-[4px] text-letterColorLight transition-all duration-300 hover:bg-primaryColorHover">
            Actualizar contraseña
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RecoveryPassword;
