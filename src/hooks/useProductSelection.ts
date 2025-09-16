import { useState, useCallback } from 'react';
import type { Product } from '@/types/product';

interface UseProductSelectionReturn {
	currentProduct: Product | null;
	selectProduct: (product: Product) => void;
	isProductSelected: (product: Product) => boolean;
}

export function useProductSelection(
	initialProduct?: Product
): UseProductSelectionReturn {
	const [currentProduct, setCurrentProduct] = useState<Product | null>(
		initialProduct || null
	);

	const selectProduct = useCallback((product: Product) => {
		setCurrentProduct(product);
	}, []);

	const isProductSelected = useCallback(
		(product: Product) => {
			return (
				currentProduct?.name === product.name &&
				currentProduct?.brand === product.brand
			);
		},
		[currentProduct]
	);

	return {
		currentProduct,
		selectProduct,
		isProductSelected,
	};
}
