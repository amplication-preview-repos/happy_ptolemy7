import { CustomerCreateNestedManyWithoutSalesInput } from "./CustomerCreateNestedManyWithoutSalesInput";
import { OrderCreateNestedManyWithoutSalesInput } from "./OrderCreateNestedManyWithoutSalesInput";

export type SaleCreateInput = {
  customer?: CustomerCreateNestedManyWithoutSalesInput;
  order?: OrderCreateNestedManyWithoutSalesInput;
};
