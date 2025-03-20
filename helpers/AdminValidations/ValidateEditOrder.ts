import * as Yup from "yup";

const validateEditOrder = Yup.object().shape({
  orderNumber: Yup.string().required("El ID de la orden es obligatorio"),
  title: Yup.string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(50, "El nombre no puede exceder los 50 caracteres")
    .required("El nombre de la orden es obligatorio"),
  description: Yup.string()
    .min(10, "La descripción debe tener al menos 10 caracteres")
    .max(500, "La descripción no puede exceder los 500 caracteres")
    .required("La descripción es obligatoria"),
});

export default validateEditOrder;
