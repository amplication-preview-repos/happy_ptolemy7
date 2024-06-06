import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type SaleWhereInput = {
  customer?: CustomerListRelationFilter;
  id?: StringFilter;
  order?: OrderListRelationFilter;
};
