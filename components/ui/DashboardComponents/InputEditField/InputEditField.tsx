import React from "react";
import { IInputEditFiedProps } from "./types";
import { ErrorMessage, Field } from "formik";
import { IFormEditOptionData } from "@/data/FormEditData/types";
import clsx from "clsx";

export const InputEditField: React.FC<IInputEditFiedProps> = ({
  label,
  name,
  errors,
  isPhone,
  options,
  select,
  touched,
  type,
  color,
}: IInputEditFiedProps) => {
  return (
    <div className="flex flex-col h-[85px] relative">
      <label
        className={clsx(
          "text-xs",
          errors && touched && type === "radio"
            ? "text-error lg:text-sm dark:text-errorDark"
            : errors && touched
            ? "text-error dark:text-errorDark"
            : color === "white"
            ? "text-letterColorLight/50 dark:text-primaryColor/50"
            : "text-secondaryColor/50 dark:text-letterColorLight/50"
        )}
      >
        {label}
      </label>
      {isPhone ? (
        <div>
          <div className="flex gap-2 items-center">
            <Field
              as="select"
              name={`coverage`}
              id={`coverage`}
              className={clsx(
                "input w-20",
                color === "white"
                  ? "text-letterColorLight border-bgColor focus:border-bgColor dark:text-primaryColor dark:border-primaryColor"
                  : "text-secondaryColor border-secondaryColor focus:border-secondaryColor dark:text-letterColorLight dark:border-bgColor dark:focus:border-bgColor"
              )}
            >
              {options?.map((option: IFormEditOptionData, i: number) => (
                <option
                  key={i}
                  value={String(option.value)}
                  className="text-secondaryColor dark:bg-secondaryColor dark:text-letterColorLight"
                >
                  {option.option}
                </option>
              ))}
            </Field>
            <div className="w-[1px] h-[30px] bg-primaryColor"></div>
            <Field
              name={name}
              id={name}
              type="text"
              className={clsx(
                "input",
                errors && touched
                  ? "text-error border-error dark:text-errorDark dark:border-errorDark"
                  : color === "white"
                  ? "text-letterColorLight border-bgColor focus:border-bgColor dark:text-primaryColor dark:border-primaryColor"
                  : "text-secondaryColor border-secondaryColor focus:border-secondaryColor dark:text-letterColorLight dark:border-bgColor dark:focus:border-bgColor"
              )}
            />
          </div>
          {errors && touched && (
            <ErrorMessage className="inputError" name={name} component="p" />
          )}
        </div>
      ) : (
        <div>
          <Field
            as={select && "select"}
            name={name}
            id={name}
            type={type}
            className={clsx(
              "input",
              errors && touched
                ? "text-error border-error dark:text-errorDark dark:border-errorDark"
                : color === "white"
                ? "text-letterColorLight border-bgColor focus:border-bgColor dark:text-primaryColor dark:border-primaryColor dark:focus:border-primaryColor"
                : "text-secondaryColor border-secondaryColor focus:border-secondaryColor dark:text-letterColorLight dark:border-bgColor dark:focus:border-bgColor"
            )}
          >
            {options?.map((option: IFormEditOptionData, i: number) => (
              <option
                key={i}
                value={String(option.value)}
                className="text-secondaryColor dark:bg-secondaryColor dark:text-letterColorLight"
              >
                {option.option}
              </option>
            ))}
          </Field>
          {errors && touched && (
            <ErrorMessage className="inputError" name={name} component="p" />
          )}
        </div>
      )}
    </div>
  );
};

export default InputEditField;
