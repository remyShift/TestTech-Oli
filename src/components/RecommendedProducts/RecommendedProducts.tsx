import { useState, useEffect } from 'react';
import type { Product, ProductList } from '@/types/product';
import { useInfiniteCarousel } from '@/hooks/useInfiniteCarousel';
import recommendedProductsData from '@/data/recommendedProducts.json';
import '@/styles/scrollbar.css';
import { createCarouselContent } from '@/utils/carouselUtils';

export default function RecommendedProducts() {
	const [recommendedProducts, setRecommendedProducts] = useState<Product[]>(
		[]
	);

	const { containerRef: scrollContainerRef, scrollLeft, scrollRight } = useInfiniteCarousel({
		itemsCount: recommendedProducts.length,
		isEnabled: true,
	});

	useEffect(() => {
		const list = (recommendedProductsData as ProductList).recommendedProducts;
		setRecommendedProducts(list);
	}, []);

	if (recommendedProducts.length === 0) {
		return null;
	}

	return (
		<div className="flex flex-col gap-4">
			<h2 className="font-abc-diatype text-lg font-bold">
				RECOMMENDED FOR YOU
			</h2>

			<div className="relative">
				<button
					onClick={scrollLeft}
					className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
					aria-label="Scroll left"
				>
					<svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</button>

				<button
					onClick={scrollRight}
					className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
					aria-label="Scroll right"
				>
					<svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</button>

				<div
					ref={scrollContainerRef}
					className="overflow-x-auto scrollbar-hide"
					style={{
						scrollBehavior: 'auto',
						touchAction: 'pan-x',
					}}
				>
					<div className="flex gap-3 w-fit">
						{createCarouselContent(recommendedProducts)}
					</div>
				</div>
			</div>
		</div>
	);
}
