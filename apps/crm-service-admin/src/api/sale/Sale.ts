import { Customer } from "../customer/Customer";
import { Order } from "../order/Order";

export type Sale = {
  createdAt: Date;
  customer?: Array<Customer>;
  id: string;
  order?: Array<Order>;
  updatedAt: Date;
};
