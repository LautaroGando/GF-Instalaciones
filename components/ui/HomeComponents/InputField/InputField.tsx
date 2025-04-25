import React from "react";
import clsx from "clsx";
import { ErrorMessage, Field } from "formik";
import { IInputFieldProps } from "./types";

export const InputField = <T,>({
  name,
  type,
  placeholder,
  as,
  errors,
  touched,
  values,
}: IInputFieldProps<T>) => (
  <div className={clsx("h-[85px]", as === "textarea" && "h-[184px]")}>
    <Field
      className={clsx(
        "input",
        errors[name] && touched[name]
          ? "border-error placeholder:text-error dark:border-errorDark dark:placeholder:text-errorDark"
          : !values[name]
          ? "border-secondaryColor dark:border-bgColor"
          : "border-primaryColor",
        as === "textarea" && "h-20"
      )}
      type={type}
      name={name as string}
      as={as}
      placeholder={clsx(
        errors[name] && touched[name] ? `${placeholder} *` : placeholder
      )}
    />
    {errors[name] && touched[name] && (
      <ErrorMessage
        className="inputError"
        name={name as string}
        component="p"
      />
    )}
  </div>
);

export default InputField;
