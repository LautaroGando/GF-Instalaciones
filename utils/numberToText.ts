import writtenNumber from "written-number";

export const numberToText = (value: number, lang: string = "es") => {
  return writtenNumber(value, { lang });
};
