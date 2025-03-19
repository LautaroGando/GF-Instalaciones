import * as Yup from "yup";

const validateEditInstallation = Yup.object({
  id: Yup.string().required("El ID es obligatorio"),
  startDate: Yup.date()
    .min(new Date(), "La fecha de inicio no puede ser en el pasado")
    .required("La fecha de inicio es obligatoria"),
  endDate: Yup.date()
    .nullable()
    .min(Yup.ref("startDate"), "La fecha de fin debe ser posterior a la de inicio"),
  notes: Yup.string()
    .max(500, "Las notas no pueden superar los 500 caracteres")
    .nullable(),
  status: Yup.string()
    .oneOf(
      ["Pendiente", "En proceso", "A revisar", "Pospuesta", "Finalizada", "Cancelada"],
      "Estado inválido"
    )
    .required("El estado es obligatorio"),
});

export default validateEditInstallation;
