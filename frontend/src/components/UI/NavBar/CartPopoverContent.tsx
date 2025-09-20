import { useCart, useClearCart } from '@/api/cart/useCart';
import { Loader2 } from 'lucide-react';
import React from 'react';
import CartItem from './CartItem';

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
        <div className='flex flex-col h-full justify-between overflow-y-hidden'>
            <div className='overflow-y-auto'>
                {data?.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <div className='p-5 bg-white sticky bottom-0 flex justify-between items-center border-t'>
                <p>Итого: {totalAmount} ₽</p>
                <div className='flex gap-3 [&>*]:cursor-pointer'>
                    <button onClick={() => clearCart()} className="bg-red-700 text-white px-4 py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm">Очистить</button>
                    <button className="bg-green-700 text-white px-4 py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm">Оформить</button>
                </div>
            </div>
        </div>
    );
};

export default CartPopoverContent;