import { Controller, Get, Param } from "@nestjs/common";
import products, { Product } from "../../products";

@Controller('products')
export class ProductsController {
  constructor() {}

  @Get()
  async index(): Promise<Product[]> {
    return products;
  }

  @Get(':id')
  async show(@Param('id') id: number): Promise<Product> {
    return products.find(product => product.id === +id);
  }
}
