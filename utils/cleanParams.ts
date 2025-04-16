export const cleanParams = <T extends Record<string, any>>(params: T) =>
  Object.fromEntries(Object.entries(params).filter(([, v]) => v !== ""));
