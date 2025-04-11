import { ICity } from "./ICity";

export interface IAddress {
  id: string;
  street: string;
  number: string;
  postalCode: string;
  note: string;
  city: string;
  province: string;
}
export default IAddress;
