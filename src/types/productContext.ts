import type { ReactNode } from 'react';
import type { Product } from '@/types/product';

export interface ProductActions {
	selectProduct: (product: Product) => void;
	isProductSelected: (product: Product) => boolean;
}

export interface ProductState {
	currentProduct: Product | null;
}

export interface ProductContextType extends ProductState, ProductActions {}

export interface ProductProviderProps {
	children: ReactNode;
	initialProduct?: Product;
}
