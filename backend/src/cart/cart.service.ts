import { Injectable } from '@nestjs/common'
import { Product } from 'src/types/ProductTypes'

@Injectable()
export class CartService {
  private cartProducts: Product[] = []

  getCart() {
    return this.cartProducts
  }

  addToCart(product: Product) {
    const existingIndex = this.cartProducts.findIndex(
      (el) => el.id === product.id
    )

    if (existingIndex !== -1) {
      this.cartProducts[existingIndex].totalInCart =
        (this.cartProducts[existingIndex].totalInCart || 0) + 1
      this.cartProducts[existingIndex].price *=
        this.cartProducts[existingIndex].totalInCart
    } else {
      this.cartProducts.push({
        ...product,
        totalInCart: 1,
      })
    }
  }

  deleteCartItem(id: number) {
    const product = this.cartProducts.find((el) => el.id === id)

    if (!product) {
      return this.cartProducts
    }

    const currentCount = product.totalInCart || 1

    if (currentCount > 1) {
      product.totalInCart = currentCount - 1
    } else {
      this.cartProducts = this.cartProducts.filter((item) => item.id !== id)
    }

    return this.cartProducts
  }

  clearCart() {
    this.cartProducts = []
    return { message: 'Корзина очищена' }
  }
}
