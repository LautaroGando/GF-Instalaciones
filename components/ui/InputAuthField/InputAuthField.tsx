import React, { useState } from "react";
import { IInputAuthFieldProps } from "./types";
import { ErrorMessage, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import clsx from "clsx";
import { IUserSignUpOption } from "@/interfaces/IAuth";

export const InputAuthField: React.FC<IInputAuthFieldProps> = ({
  label,
  type,
  name,
  icon,
  color,
  select,
  textarea,
  options,
  isPhone,
  errors,
  touched,
}: IInputAuthFieldProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleToggleVisibilityPassword = () => setIsVisible(!isVisible);

  return (
    <div
      className={clsx(
        "flex flex-col h-[85px] relative",
        type === "radio" &&
          "sm:flex-row sm:items-center sm:justify-between sm:h-[40px]"
      )}
    >
      <label
        className={clsx(
          "text-xs",
          type === "radio"
            ? "text-secondaryColor text-center lg:text-sm"
            : color === "white"
            ? "text-letterColorLight/50"
            : "text-secondaryColor/50"
        )}
        htmlFor={name}
      >
        {label}
      </label>
      {type === "radio" ? (
        <div className="flex justify-center gap-10 mt-5 sm:mt-0 md:gap-3">
          {options?.map((option, i) => (
            <label key={i} className="flex gap-3 items-center">
              <span
                className={clsx(
                  option.option === "Sí"
                    ? "text-primaryColor"
                    : "text-secondaryColor"
                )}
              >
                {option.option}
              </span>
              <Field
                type="radio"
                name={name}
                value={option.value}
                className="hidden peer"
              />
              <span
                className={clsx(
                  "w-4 h-4 border rounded-full relative flex items-center justify-center",
                  option.option === "Sí"
                    ? "border-primaryColor/50 peer-checked:after:content-[''] peer-checked:after:absolute peer-checked:after:w-3 peer-checked:after:h-3 peer-checked:after:bg-primaryColor peer-checked:after:rounded-full"
                    : "border-secondaryColor/50 peer-checked:after:content-[''] peer-checked:after:absolute peer-checked:after:w-3 peer-checked:after:h-3 peer-checked:after:bg-secondaryColor peer-checked:after:rounded-full"
                )}
              ></span>
            </label>
          ))}
        </div>
      ) : isPhone ? (
        <div className="flex gap-2 items-center">
          <Field
            as="select"
            name={`coverage`}
            id={`coverage`}
            className={clsx(
              "input w-20",
              color === "white"
                ? "text-letterColorLight border-bgColor focus:border-bgColor"
                : "text-secondaryColor border-secondaryColor focus:border-secondaryColor"
            )}
          >
            {options?.map((option: IUserSignUpOption, i: number) => (
              <option key={i} value={String(option.value)}>
                {option.option}
              </option>
            ))}
          </Field>
          <div className="w-[1px] h-2/3 bg-primaryColor"></div>
          <Field
            name={name}
            id={`${name}-input`}
            type="text"
            className={clsx(
              "input",
              color === "white"
                ? "text-letterColorLight border-bgColor focus:border-bgColor"
                : "text-secondaryColor border-secondaryColor focus:border-secondaryColor"
            )}
          />
        </div>
      ) : (
        <div>
          <Field
            as={(select && "select") || (textarea && "textarea")}
            name={name}
            id={name}
            type={type === "password" && isVisible ? "text" : type}
            className={clsx(
              "input",
              textarea && "pt-2 h-full",
              color === "white"
                ? "text-letterColorLight border-bgColor focus:border-bgColor"
                : "text-secondaryColor border-secondaryColor focus:border-secondaryColor"
            )}
          >
            {options?.map((option: IUserSignUpOption, i: number) => (
              <option key={i} value={String(option.value)}>
                {option.option}
              </option>
            ))}
          </Field>
          {errors && touched && <ErrorMessage className="inputError" name={name} component="p" />}
        </div>
      )}
      {icon && type === "password" && (
        <motion.button
          key={isVisible ? "visible" : "hidden"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          onClick={handleToggleVisibilityPassword}
          className={clsx(
            "absolute right-3 bottom-10 w-[20px]",
            color === "white" ? "text-letterColorLight" : "text-primaryColor"
          )}
        >
          {isVisible ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </motion.button>
      )}
    </div>
  );
};

export default InputAuthField;
