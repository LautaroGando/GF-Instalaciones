export interface ICreateInstallationFormValues {
  startDate: string;
  notes?: string;
  address: {
    street: string;
    number: string;
    note: string;
    postalCode: string;
    city: string;
    province: string;
  };
  installersIds: string[];
  coordinatorsIds: string[];
}

export default ICreateInstallationFormValues;
