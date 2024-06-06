import { CustomerUpdateManyWithoutSalesInput } from "./CustomerUpdateManyWithoutSalesInput";
import { OrderUpdateManyWithoutSalesInput } from "./OrderUpdateManyWithoutSalesInput";

export type SaleUpdateInput = {
  customer?: CustomerUpdateManyWithoutSalesInput;
  order?: OrderUpdateManyWithoutSalesInput;
};
