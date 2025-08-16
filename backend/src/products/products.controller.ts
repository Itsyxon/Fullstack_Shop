import { Controller, Get, Param } from '@nestjs/common'
import { ProductsService } from './products.service'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('Продукты')
@Controller('/api/products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'Получить список товаров магазина' })
  @ApiResponse({ status: 200, description: 'Получен список товаров' })
  getProducts() {
    return this.productService.getProducts()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить товар по id' })
  @ApiResponse({ status: 200, description: 'Получен товар с указанным id' })
  getProductById(@Param('id') id: string) {
    return this.productService.getProductById(+id)
  }
}
