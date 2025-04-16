import * as Yup from "yup";

const validateEditInstallation = Yup.object({
  startDate: Yup.date().required("La fecha de inicio es obligatoria"),
});

export default validateEditInstallation;
