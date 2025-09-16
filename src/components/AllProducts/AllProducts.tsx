import { useState, useEffect } from 'react';
import type { Product, ProductList } from '@/types/product';
import productsData from '@/data/products.json';
import ProductCard from '@/components/shared/card/ProductCard';
import ProductFilters from './ProductFilters';
import { useProductFilters } from '@/hooks/useProductFilters';

export default function AllProducts() {
	const [products] = useState<Product[]>((productsData as ProductList).products);
	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 5;

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
		filteredAndSortedProducts.slice(0, productsPerPage)
	);

	useEffect(() => {
		setDisplayedProducts(filteredAndSortedProducts.slice(0, productsPerPage));
		setCurrentPage(1);
	}, [filteredAndSortedProducts, productsPerPage]);

	const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage);

	const loadMoreProducts = () => {
		const nextPage = currentPage + 1;
		const startIndex = displayedProducts.length;
		const endIndex = startIndex + productsPerPage;
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
		<div className="flex flex-col md:flex-row gap-12">
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

			<div className="flex flex-col gap-3 items-center">
				{displayedProducts.map((product, index) => (
					<div key={`${product.name}-${index}`} className="w-full max-w-[195px]">
						<ProductCard product={product} />
					</div>
				))}

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
