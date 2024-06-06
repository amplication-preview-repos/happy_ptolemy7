import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";
import { Sale } from "../sale/Sale";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  ordertyes?: Array<Product>;
  sales?: Array<Sale>;
  updatedAt: Date;
};
