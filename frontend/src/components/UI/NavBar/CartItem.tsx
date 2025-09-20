import { useAddToCart, useRemoveFromCart } from '@/api/cart/useCart';
import { Product } from '@/types/Products';
import { CircleMinus, CirclePlus } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const CartItem = ({ item }: { item: Product }) => {
    const { mutate: addToCart } = useAddToCart()
    const { mutate: removeFromCart } = useRemoveFromCart()
    const totalPrice = item.price * (item.totalInCart || 1);
    return (
        <div className='flex items-center justify-between pr-5'>
            {item.url && (
                <div className="relative h-20 w-20">
                    <Image
                        src={item.url}
                        alt={item.name}
                        fill
                        className="object-contain w-20 h-20"
                        sizes="(max-width: 200px) 100vw, (max-width: 100px) 50vw, 33vw"
                    />
                </div>
            )}
            <div className='text-sm w-[160px]'>{item.name}</div>
            <div className='flex items-center gap-3 flex-1 mx-3'>
                <CircleMinus onClick={() => removeFromCart(item.id)} className='cursor-pointer' />
                <div>{item.totalInCart}</div>
                <CirclePlus onClick={() => addToCart(item)} className='cursor-pointer' />
            </div>
            <div className='font-semibold whitespace-nowrap flex-1'>{totalPrice} ₽</div>
        </div>
    );
};

export default CartItem;