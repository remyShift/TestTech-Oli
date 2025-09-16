import type { Product } from '@/types/product';

export interface CartItem {
	product: Product;
	quantity: number;
}

export interface CartState {
	items: CartItem[];
	totalItems: number;
}

export interface CartActions {
	addToCart: (product: Product) => void;
	removeFromCart: (productId: string) => void;
	updateQuantity: (productId: string, quantity: number) => void;
	clearCart: () => void;
	getItemQuantity: (productId: string) => number;
	isInCart: (productId: string) => boolean;
}

export interface CartContextType extends CartState, CartActions {}
