import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { CartService } from './cart.service'
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import type { Product } from 'src/types/ProductTypes'

@ApiTags('Корзина')
@Controller('/api/cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Get()
  @ApiOperation({ summary: 'Получить товары в корзине' })
  @ApiResponse({ status: 200, description: 'Получены товары в корзине' })
  getCartProducts() {
    return this.cartService.getCart()
  }

  @Post()
  @ApiOperation({ summary: 'Добавить товар в корзину' })
  @ApiBody({ type: Object })
  @ApiResponse({
    status: 201,
    description: 'Товар добавлен в корзину',
  })
  addToCart(@Body() product: Product) {
    return this.cartService.addToCart(product)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удаление товара из корзины' })
  @ApiResponse({ status: 200, description: 'Товар удален из корзины' })
  deleteCartItem(@Param('id') id: string) {
    return this.cartService.deleteCartItem(+id)
  }

  @Delete()
  @ApiOperation({ summary: 'Очистить корзину' })
  @ApiResponse({ status: 200, description: 'Корзина очищена' })
  clearCart() {
    return this.cartService.clearCart()
  }
}
