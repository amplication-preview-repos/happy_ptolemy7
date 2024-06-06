import { Order } from "../order/Order";
import { Sale } from "../sale/Sale";

export type Customer = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orderType?: Array<Order>;
  sales?: Sale | null;
  updatedAt: Date;
};
