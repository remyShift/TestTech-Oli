import { useContext } from 'react';
import { ProductContext } from '@/contexts/ProductContext';
import type { ProductContextType } from '@/types/productContext';

export function useProductContext(): ProductContextType {
	const context = useContext(ProductContext);
	if (context === undefined) {
		throw new Error(
			'useProductContext must be used within a ProductProvider'
		);
	}
	return context;
}
