'use client'
import { useProducts } from '@/api/products/useProducts'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AddToCartButton from '../UI/NavBar/AddToCartButton'

const ProductsList = () => {
    const { data: products, isLoading, isError } = useProducts()

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
                <Link href={`/${product.id}/`}
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
                        <AddToCartButton product={product} />
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProductsList