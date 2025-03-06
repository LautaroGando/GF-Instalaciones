export interface IOrder {
  order_id: string;
  order_name: string;
  order_description: string;
  province: string;
  client_id: string;
  start_date: string;
  end_date: string;
  status: string;
  installation_id: string;
  installations: {
    startDate: string;
    address: {
      street: string;
      number: string;
      note: string;
      postalCode: string;
      city: string;
      province: string;
    };
    notes: string;
  }[];
}

export default IOrder;
