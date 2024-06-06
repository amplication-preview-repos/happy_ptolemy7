import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
import { SaleWhereUniqueInput } from "../sale/SaleWhereUniqueInput";

export type CustomerUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orderType?: OrderUpdateManyWithoutCustomersInput;
  sales?: SaleWhereUniqueInput | null;
};
