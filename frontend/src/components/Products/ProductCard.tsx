'use client'
import { useProduct } from '@/api/products/useProducts';
import { ChevronLeft, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import AddToCartButton from '../UI/NavBar/AddToCartButton';

const ProductCard = () => {
    const { id } = useParams()
    const { data: product, isLoading } = useProduct(String(id))
    const router = useRouter()
    if (!product) {
        return <div className="flex justify-center items-center h-64">
            <h1>Товар отсутствует</h1>
        </div>
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <Loader2 className="w-20 h-20 text-red-700 animate-spin" />
            </div>
        )
    }
    return (
        <div className='mt-3'>
            <button className='flex items-center text-red-700 font-medium cursor-pointer' onClick={() => router.back()}><ChevronLeft /> Вернуться назад</button>
            <div className='flex gap-4 mt-8'>
                {product.url && <Image src={product.url} alt={product.name}
                    className="object-contain w-1/2"
                    width={500}
                    height={500}
                />}
                <div className='flex flex-col justify-center p-4 bg-white min-w-[calc(100vw-1800px)]'>
                    <div>
                        <h1 className='text-4xl font-semibold mb-5'>{product.name}</h1>
                        <p>{product.description}</p>
                        <p className='text-gray-600'>Тут какое-то подробное описание и то, чего нет в карточке товара</p>
                    </div>
                    <div className='mt-6'>
                        <AddToCartButton product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;