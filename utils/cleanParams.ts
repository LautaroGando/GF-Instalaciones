/**
 * EXPLICACION DE CHATGPT PARA ESTA FORMULA (Es muy util):
 * 
 * Elimina del objeto todas las propiedades cuyo valor sea una string vacía ("").
 * Útil para limpiar los parámetros antes de enviarlos como query params en una petición.
 *
 * Ejemplo:
 * { status: "pendiente", province: "" } => { status: "pendiente" }
 */

export const cleanParams = <T extends Record<string, any>>(params: T) =>
  Object.fromEntries(Object.entries(params).filter(([, v]) => v !== ""));
