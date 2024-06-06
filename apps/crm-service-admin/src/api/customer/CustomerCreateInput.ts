import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
import { SaleWhereUniqueInput } from "../sale/SaleWhereUniqueInput";

export type CustomerCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orderType?: OrderCreateNestedManyWithoutCustomersInput;
  sales?: SaleWhereUniqueInput | null;
};
