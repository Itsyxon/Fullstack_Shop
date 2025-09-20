import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AddToCartButton from '../UI/NavBar/AddToCartButton';
import { Product } from '@/types/Products';

const ProductItem = ({ product }: { product: Product }) => {
    return (
        <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col'>
            <Link href={`/${product.id}/`}
                key={product.id}
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

            </Link>
            <div className="flex justify-between items-center mt-4 pt-4 border-t">
                <div className="text-2xl font-medium">{product.price} ₽</div>
                <AddToCartButton product={product} />
            </div>
        </div>
    );
};

export default ProductItem;