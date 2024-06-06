import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";
import { SaleUpdateManyWithoutOrdersInput } from "./SaleUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  ordertyes?: ProductUpdateManyWithoutOrdersInput;
  sales?: SaleUpdateManyWithoutOrdersInput;
};
