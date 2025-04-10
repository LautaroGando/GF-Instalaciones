export interface IInputEditFiedProps {
  label: string;
  type?: string;
  name: string;
  select?: boolean;
  options?: IUserSignUpOption[];
  isPhone?: boolean;
  errors?: string;
  touched?: boolean;
  color: string;
}
