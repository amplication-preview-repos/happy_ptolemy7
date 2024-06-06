import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { SaleWhereUniqueInput } from "../sale/SaleWhereUniqueInput";

export type CustomerWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  orderType?: OrderListRelationFilter;
  sales?: SaleWhereUniqueInput;
};
