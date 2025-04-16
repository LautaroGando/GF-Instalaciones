import { ICity } from "./ICity";

export interface IAddress {
  id: string;
  street: string;
  number: string;
  postalCode: string;
  note: string;
  city: ICity;
}
export default IAddress;
