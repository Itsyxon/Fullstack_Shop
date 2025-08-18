import { useAddToCart } from '@/api/cart/useCart';
import { Product } from '@/types/Products';
import React, { useState } from 'react';

const AddToCartButton = ({ product }: { product: Product }) => {
    const { mutate: addToCart, isPending } = useAddToCart()
    const [added, setAdded] = useState<boolean>(false)
    return (
        <button
            onClick={() => {
                addToCart(product)
                setAdded(true)
            }}
            disabled={isPending || added}
            className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
            {isPending ? 'Добавление...' : added ? 'Добавлено в корзину' : 'В корзину'}
        </button>
    );
};

export default AddToCartButton;