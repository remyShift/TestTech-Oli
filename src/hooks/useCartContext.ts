import { useContext } from 'react';
import { CartContext } from '@/contexts/CartContext';
import type { CartContextType } from '@/types/cart';

export function useCartContext(): CartContextType {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error('useCartContext must be used within a CartProvider');
	}
	return context;
}
