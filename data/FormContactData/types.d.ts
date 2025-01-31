import { IContact } from "@/interfaces/IContact";

export interface IFormContactData {
  type: string;
  as?: "textarea";
  name: keyof IContact;
  placeholder: string;
}
