import { useState, useEffect } from 'react';
import type { Product, ProductList } from '@/types/product';
import productsData from '@/data/products.json';
import ProductCard from '@/components/shared/card/ProductCard';
import ProductFilters from './ProductFilters';
import { useProductFilters } from '@/hooks/useProductFilters';
import { useBreakpoint } from '@/hooks/useBreakpoint';

export default function AllProducts() {
	const [products] = useState<Product[]>((productsData as ProductList).products);
	const [currentPage, setCurrentPage] = useState(1);
	const isLg = useBreakpoint('lg');

	const productsPerChunk = isLg ? 20 : 5;


	const {
		filterState,
		filterOptions,
		filterCounts,
		filteredAndSortedProducts,
		updateFilter,
		updateSort,
		clearAllFilters,
		hasActiveFilters
	} = useProductFilters(products);

	const [displayedProducts, setDisplayedProducts] = useState<Product[]>(
		filteredAndSortedProducts.slice(0, productsPerChunk)
	);

	useEffect(() => {
		setDisplayedProducts(filteredAndSortedProducts.slice(0, productsPerChunk));
		setCurrentPage(1);
	}, [filteredAndSortedProducts, productsPerChunk]);

	const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerChunk);

	const loadMoreProducts = () => {
		const nextPage = currentPage + 1;
		const startIndex = displayedProducts.length;
		const endIndex = startIndex + productsPerChunk;
		const newProducts = filteredAndSortedProducts.slice(startIndex, endIndex);

		console.log('Loading more products:', {
			currentPage,
			nextPage,
			startIndex,
			endIndex,
			newProductsCount: newProducts.length,
			totalDisplayed: displayedProducts.length + newProducts.length,
		});

		setDisplayedProducts((prev) => [...prev, ...newProducts]);
		setCurrentPage(nextPage);
	};

	const hasMoreProducts = currentPage < totalPages;

	return (
		<div className="flex flex-col md:flex-row gap-12 pb-32">
			<ProductFilters
				filterState={filterState}
				filterOptions={filterOptions}
				filterCounts={filterCounts}
				onFilterChange={updateFilter}
				onSortChange={updateSort}
				onClearFilters={clearAllFilters}
				hasActiveFilters={hasActiveFilters}
				filteredProductsCount={filteredAndSortedProducts.length}
			/>

			<div className="flex flex-col gap-12">
				<div className="flex flex-col gap-3 items-center md:flex-row md:flex-wrap md:justify-start">
					{displayedProducts.map((product, index) => (
						<ProductCard 
							key={`${product.name}-${index}`}
							product={product} 
							className="product-card-responsive" 
						/>
					))}
				</div>
				{hasMoreProducts && (
					<button
						onClick={loadMoreProducts}
						className="w-full font-space-grotesk underline"
					>
						load more
					</button>
				)}
			</div>

		</div>
	);
}
