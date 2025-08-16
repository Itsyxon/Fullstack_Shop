import { Injectable } from '@nestjs/common'
import { Product } from 'src/types/ProductTypes'

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Смартфон iPhone 15 Pro',
      description: '6.1" OLED, 128GB, титановый корпус, камера 48MP',
      price: 99900,
      category: 'Электроника',
      url: 'https://micro-line.ru/images/thumbnails/2001/2000/detailed/9123/8U2N6Q4j_1737615601.jpg',
    },
    {
      id: 2,
      name: 'Ноутбук MacBook Air M2',
      description: '13.6" Retina, 8-core CPU, 8GB RAM, 256GB SSD',
      price: 109900,
      category: 'Электроника',
      url: 'https://avatars.mds.yandex.net/get-mpic/12552957/2a00000194bd3246891720b48c7b7d6b05c7/orig',
    },
    {
      id: 3,
      name: 'Беспроводные наушники Sony WH-1000XM5',
      description: 'Активное шумоподавление, 30 часов работы',
      price: 32990,
      category: 'Аксессуары',
      url: 'https://krd.store123.ru/upload/iblock/cbc/s6zo9fg8mn1ivd92q1fsdg415fwf1qgm.jpeg',
    },
    {
      id: 4,
      name: 'Умные часы Apple Watch Series 9',
      description: '45mm, GPS, экран Always-On, мониторинг здоровья',
      price: 41990,
      category: 'Гаджеты',
      url: 'https://avatars.mds.yandex.net/get-mpic/14360956/2a000001969a7c41800c6a398697cc9c1223/orig',
    },
    {
      id: 5,
      name: 'Электронная книга Kindle Paperwhite',
      description: '6.8" 300ppi, водонепроницаемость, 32GB',
      price: 14990,
      category: 'Электроника',
      url: 'https://n.cdn.cdek.shopping/images/shopping/088a9f0e70274c01ae9f5c726c9d89b8.jpg?v=1',
    },
    {
      id: 6,
      name: 'Игровая консоль PlayStation 5',
      description: '825GB SSD, 4K UHD, беспроводной контроллер DualSense',
      price: 64990,
      category: 'Игры',
      url: 'https://avatars.mds.yandex.net/get-mpic/12527500/2a00000191bdba3cd4f37f60001a6d3f4755/orig',
    },
    {
      id: 7,
      name: 'Фитнес-браслет Xiaomi Mi Band 8',
      description: 'AMOLED-экран, 150+ режимов тренировок',
      price: 4990,
      category: 'Гаджеты',
      url: 'https://cdn1.ozone.ru/s3/multimedia-z/6842182175.jpg',
    },
  ] // Моки для товаров магазина. Потом можно подключить базу

  getProducts() {
    return this.products
  }

  getProductById(id: number) {
    return this.products.find((product) => product.id == id)
  }
}
