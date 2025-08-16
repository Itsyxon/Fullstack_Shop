import { Injectable } from '@nestjs/common'
import { Product } from 'src/types/ProductTypes'

@Injectable()
export class CartService {
  private cartProducts: Product[] = []

  getCart() {
    return this.cartProducts
  }

  addToCart(product: Product) {
    this.cartProducts.push(product)
    return this.cartProducts
  }

  deleteCartItem(id: number) {
    this.cartProducts.filter((product) => product.id != id)
    return this.cartProducts
  }

  clearCart() {
    this.cartProducts = []
    return { message: 'Корзина очищена' }
  }
}
