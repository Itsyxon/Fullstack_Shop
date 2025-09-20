import { Product } from '@/types/Products';
import Image from 'next/image';
import React from 'react';

const CartItem = ({ item }: { item: Product }) => {
    return (
        <div className='flex items-center justify-between pr-5'>
            {item.url && (
                <div className="relative h-20 w-20">
                    <Image
                        src={item.url}
                        alt={item.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 200px) 100vw, (max-width: 100px) 50vw, 33vw"
                    />
                </div>
            )}
            <div className='text-sm truncate w-[200px]'>{item.name}</div>
            <div className='flex-1 mx-3'>{item.totalInCart}</div>
            <div className='font-semibold whitespace-nowrap flex-1'>{item.price} ₽</div>
        </div>
    );
};

export default CartItem;