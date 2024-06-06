import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { SaleListRelationFilter } from "../sale/SaleListRelationFilter";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  ordertyes?: ProductListRelationFilter;
  sales?: SaleListRelationFilter;
};
