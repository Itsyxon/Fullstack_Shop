import { Module } from '@nestjs/common'
import { ProductsModule } from './products/products.module'
import { ProductsController } from './products/products.controller'
import { ProductsService } from './products/products.service'
import { CartModule } from './cart/cart.module'

@Module({
  imports: [ProductsModule, CartModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
