'use client'
import { useAddToCart } from '@/api/cart/useCart'
import { useProducts } from '@/api/products/useProducts'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ProductsList = () => {
    const { data: products, isLoading, isError } = useProducts()
    const { mutate: addToCart, isPending } = useAddToCart()

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <Loader2 className="w-20 h-20 text-foreground animate-spin" />
            </div>
        )
    }

    if (isError) {
        return <div className="text-center text-red-500 mt-8">Ошибка загрузки товаров</div>
    }

    if (!products?.length) {
        return <h1 className="text-3xl text-center mt-8">Товары не найдены</h1>
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col"
                >
                    {product.url && (
                        <div className="relative h-64 w-full">
                            <Image
                                src={product.url}
                                alt={product.name}
                                fill
                                className="object-contain"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>
                    )}

                    <div className="mt-4 flex-grow">
                        <h3 className="text-xl font-semibold line-clamp-2">{product.name}</h3>
                        <p className="text-gray-500 text-sm mt-2 line-clamp-3">{product.description}</p>
                    </div>

                    <div className="flex justify-between items-center mt-4 pt-4 border-t">
                        <div className="text-2xl font-medium">{product.price} ₽</div>
                        <button
                            onClick={() => addToCart(product)}
                            disabled={isPending}
                            className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isPending ? 'Добавление...' : 'В корзину'}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsList