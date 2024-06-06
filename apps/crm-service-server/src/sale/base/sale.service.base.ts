/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Sale as PrismaSale,
  Customer as PrismaCustomer,
  Order as PrismaOrder,
} from "@prisma/client";

export class SaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SaleCountArgs, "select">): Promise<number> {
    return this.prisma.sale.count(args);
  }

  async sales<T extends Prisma.SaleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SaleFindManyArgs>
  ): Promise<PrismaSale[]> {
    return this.prisma.sale.findMany<Prisma.SaleFindManyArgs>(args);
  }
  async sale<T extends Prisma.SaleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SaleFindUniqueArgs>
  ): Promise<PrismaSale | null> {
    return this.prisma.sale.findUnique(args);
  }
  async createSale<T extends Prisma.SaleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SaleCreateArgs>
  ): Promise<PrismaSale> {
    return this.prisma.sale.create<T>(args);
  }
  async updateSale<T extends Prisma.SaleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SaleUpdateArgs>
  ): Promise<PrismaSale> {
    return this.prisma.sale.update<T>(args);
  }
  async deleteSale<T extends Prisma.SaleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SaleDeleteArgs>
  ): Promise<PrismaSale> {
    return this.prisma.sale.delete(args);
  }

  async findCustomer(
    parentId: string,
    args: Prisma.CustomerFindManyArgs
  ): Promise<PrismaCustomer[]> {
    return this.prisma.sale
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .customer(args);
  }

  async findOrder(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<PrismaOrder[]> {
    return this.prisma.sale
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .order(args);
  }
}
