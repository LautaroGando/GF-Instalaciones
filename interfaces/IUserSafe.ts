export interface IUserSafe {
  id: string;
  fullName: string;
  email: string;
  birthDate: string;
  idNumber: string;
  location: string;
  address: string;
  locality: string;
  postalCode: string;
  country: string;
  phone: string;
  coverage: string;
  isSubscribed: boolean;
  disabledAt: string | null;
  createdAt: string;
}