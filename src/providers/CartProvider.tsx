import type { ReactNode } from 'react';
import { CartContext } from '@/contexts/CartContext';
import { useCart } from '@/hooks/useCart';

interface CartProviderProps {
	children: ReactNode;
}

export default function CartProvider({ children }: CartProviderProps) {
	const cartValue = useCart();

	return (
		<CartContext.Provider value={cartValue}>
			{children}
		</CartContext.Provider>
	);
}
