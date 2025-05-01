import { ICompleteJob } from "@/interfaces/IJob";
import { TFormErrors } from "@/types/TFormErrors";

export const validateCompleteJob = (input: ICompleteJob) => {
  const errors: TFormErrors<ICompleteJob> = {};

  if (input.files.length < 3) {
    errors.files = "Debes subir al menos 3 imágenes";
  }

  return errors;
};
