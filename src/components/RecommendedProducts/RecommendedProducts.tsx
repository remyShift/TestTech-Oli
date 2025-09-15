import { useState, useEffect } from 'react';
import type { Product, RawProductList } from '@/types/product';
import { useInfiniteCarousel } from '@/hooks/useInfiniteCarousel';
import recommendedProductIds from '@/data/recommendedProducts.json';
import productsData from '@/data/products.json';
import '@/styles/scrollbar.css';
import { createCarouselContent } from '@/utils/carouselUtils';

export default function RecommendedProducts() {
	const [recommendedProducts, setRecommendedProducts] = useState<Product[]>(
		[]
	);

	const scrollContainerRef = useInfiniteCarousel({
		itemsCount: recommendedProducts.length,
		isEnabled: true,
	});

	useEffect(() => {
		const raw = productsData as RawProductList;
		const adapted: Product[] = raw.products.map((p, index) => {
			const images = Array.isArray(p.images) ? p.images : [];
			return {
				id: String(index + 1),
				brand: p.brand ?? '',
				name: p.name ?? '',
				category: p.category ?? '',
				subcategory: p.subcategory ?? '',
				price: typeof p.price === 'string' ? Number(p.price) || 0 : p.price ?? 0,
				volume: p.volume ?? '',
				oliRating: 0,
				skinType: p.skintypes ?? '',
				description: p.description ?? '',
				imageUrl: images[0] ?? '',
				whyOliLovesIt: '',
				howToUse: '',
				ingredientsList: (p.ingredients?.split(',') ?? []).map((s) => s.trim()).filter(Boolean),
				skinRecommendation: p.concerns ?? '',
				isInStock: true,
			};
		});
		const filtered = adapted.filter((product) =>
			recommendedProductIds.recommendedProductIds.includes(product.id)
		);
		setRecommendedProducts(filtered);
	}, []);

	if (recommendedProducts.length === 0) {
		return null;
	}

	return (
		<div className="flex flex-col gap-4">
			<h2 className="font-abc-diatype text-lg font-bold">
				RECOMMENDED FOR YOU
			</h2>

			<div
				ref={scrollContainerRef}
				className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
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
	);
}
