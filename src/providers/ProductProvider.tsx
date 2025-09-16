import { ProductContext } from '@/contexts/ProductContext';
import type { ProductProviderProps } from '@/types/productContext';
import { useProductSelection } from '@/hooks/useProductSelection';

export default function ProductProvider({ children, initialProduct }: ProductProviderProps) {
	const { currentProduct, selectProduct, isProductSelected } = useProductSelection(initialProduct);

	const contextValue = {
		currentProduct,
		selectProduct,
		isProductSelected,
	};

	return (
		<ProductContext.Provider value={contextValue}>
			{children}
		</ProductContext.Provider>
	);
}
