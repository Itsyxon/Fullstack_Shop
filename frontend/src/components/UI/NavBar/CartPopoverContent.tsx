import { useCart, useClearCart } from '@/api/cart/useCart';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const CartPopoverContent = () => {
    const { data, isLoading } = useCart()
    const { mutate: clearCart } = useClearCart()

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <Loader2 className="w-8 h-8 text-foreground animate-spin" />
            </div>
        )
    }

    if (!data?.length) {
        return <div className='text-center mt-12'>Корзина пуста</div>
    }

    const totalAmount = data?.reduce((sum, item) => sum + item.price, 0)

    return (
        <div>
            {data?.map((item) => (
                <div key={item.id} className='flex items-center justify-between pr-5'>
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
                    <div className='text-sm truncate max-w-[200px]'>{item.name}</div>
                    <div className='font-semibold'>{item.price} ₽</div>
                </div>
            ))}
            <div className='p-5 bg-white sticky bottom-0 flex justify-between items-center'>
                <p>Итого: {totalAmount} ₽</p>
                <div className='flex gap-3 [&>*]:cursor-pointer'>
                    <button className="bg-green-700 text-white px-4 py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm">Оформить</button>
                    <button onClick={() => clearCart()} className="bg-red-700 text-white px-4 py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm">Очистить</button>
                </div>
            </div>
        </div>
    );
};

export default CartPopoverContent;