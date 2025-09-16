import { useState, useCallback, useMemo } from 'react';
import type { Product } from '@/types/product';
import type { CartItem, CartState, CartActions } from '@/types/cart';

interface UseCartReturn extends CartState, CartActions {}

export function useCart(): UseCartReturn {
	const [items, setItems] = useState<CartItem[]>([]);

	const totalItems = useMemo(() => {
		return items.reduce((total, item) => total + item.quantity, 0);
	}, [items]);

	const addToCart = useCallback((product: Product) => {
		setItems((prevItems) => {
			const existingItem = prevItems.find(
				(item) =>
					item.product.name === product.name &&
					item.product.brand === product.brand
			);

			if (existingItem) {
				return prevItems.map((item) =>
					item.product.name === product.name &&
					item.product.brand === product.brand
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			} else {
				return [...prevItems, { product, quantity: 1 }];
			}
		});
	}, []);

	const removeFromCart = useCallback((productId: string) => {
		setItems((prevItems) =>
			prevItems.filter(
				(item) =>
					`${item.product.brand}-${item.product.name}` !== productId
			)
		);
	}, []);

	const updateQuantity = useCallback(
		(productId: string, quantity: number) => {
			if (quantity <= 0) {
				removeFromCart(productId);
				return;
			}

			setItems((prevItems) =>
				prevItems.map((item) =>
					`${item.product.brand}-${item.product.name}` === productId
						? { ...item, quantity }
						: item
				)
			);
		},
		[removeFromCart]
	);

	const clearCart = useCallback(() => {
		setItems([]);
	}, []);

	const getItemQuantity = useCallback(
		(productId: string) => {
			const item = items.find(
				(item) =>
					`${item.product.brand}-${item.product.name}` === productId
			);
			return item ? item.quantity : 0;
		},
		[items]
	);

	const isInCart = useCallback(
		(productId: string) => {
			return items.some(
				(item) =>
					`${item.product.brand}-${item.product.name}` === productId
			);
		},
		[items]
	);

	return {
		items,
		totalItems,
		addToCart,
		removeFromCart,
		updateQuantity,
		clearCart,
		getItemQuantity,
		isInCart,
	};
}
