'use client'
import { useProducts } from '@/api/products/useProducts'
import { Loader2 } from 'lucide-react'
import React from 'react'
import ProductItem from './ProductItem'

const ProductsList = () => {
    const { data: products, isLoading, isError } = useProducts()

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <Loader2 className="w-20 h-20 text-red-700 animate-spin" />
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
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductsList