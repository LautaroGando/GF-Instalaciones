export interface IInputFieldProps<T> {
  name: keyof T;
  type: string;
  placeholder: string;
  as?: "textarea";
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  values: T;
}
