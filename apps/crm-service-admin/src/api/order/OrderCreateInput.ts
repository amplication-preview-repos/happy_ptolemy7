import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
import { SaleCreateNestedManyWithoutOrdersInput } from "./SaleCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  ordertyes?: ProductCreateNestedManyWithoutOrdersInput;
  sales?: SaleCreateNestedManyWithoutOrdersInput;
};
