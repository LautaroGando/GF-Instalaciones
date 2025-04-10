export interface IFormEditOptionData {
  value: string;
  option: string;
}

export interface IFormEditData {
  label: string;
  name: string;
  type?: string;
  select?: boolean;
  options?: IFormEditOptionData[];
  isPhone?: boolean;
}
