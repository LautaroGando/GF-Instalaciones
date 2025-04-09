export interface ICity {
  id: string;
  name: string;
  province: {
    id: string;
    name: string;
  };
}