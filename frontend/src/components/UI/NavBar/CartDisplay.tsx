'use client'
import { useCart } from '@/api/cart/useCart';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ShoppingCart } from 'lucide-react';
import React from 'react';
import CartPopoverContent from './CartPopoverContent';

const CartDisplay = () => {
    const { data } = useCart()
    const amountOfItems = data?.reduce((sum, item) => sum += item.totalInCart || 0, 0)
    return (
        <Popover className='relative inline-block'>
            <PopoverButton className='cursor-pointer'>
                <ShoppingCart />
                <span className='absolute -top-2 -right-2 w-5 h-5 bg-red-700 rounded-full text-white text-xs flex items-center justify-center'>
                    {amountOfItems}
                </span>
            </PopoverButton>
            <PopoverPanel className='absolute left-0 top-full bg-white rounded-md shadow h-[350px] w-[470px] z-10 overflow-y-auto'>
                <CartPopoverContent />
            </PopoverPanel>
        </Popover>
    );
};

export default CartDisplay;