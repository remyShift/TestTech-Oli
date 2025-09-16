import { useState, useEffect } from 'react';
import ProductInteractions from './ProductInteractions';
import ProductImage from './ProductImages/ProductImage';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductAccordion from './ProductAccordion/ProductAccordion';
import { createProductAccordionData } from './ProductAccordion/ProductAccordionDataFactory';
import ProductRating from './ProductInfo/ProductRating';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { useProductContext } from '@/hooks/useProductContext';
import type { Product } from '@/types/product';

export default function CurrentProductDetail() {
	const { currentProduct } = useProductContext();
	const isLg = useBreakpoint('lg');
	const [displayedProduct, setDisplayedProduct] = useState<Product | null>(currentProduct);
	const [isTransitioning, setIsTransitioning] = useState(false);

	useEffect(() => {
		if (currentProduct && currentProduct !== displayedProduct) {
			setIsTransitioning(true);
			
			const timer = setTimeout(() => {
				setDisplayedProduct(currentProduct);
				setIsTransitioning(false);
			}, 250);

			return () => clearTimeout(timer);
		}
	}, [currentProduct, displayedProduct]);

	if (!currentProduct) {
		return (
			<div className="flex justify-center items-center h-96 w-full">
				<p className="text-ceramics font-space-grotesk text-center">Select a product to see the details</p>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-4">
			<ProductInteractions />
			<div 
				className={`flex flex-col gap-4 lg:flex-row lg:items-center transition-opacity duration-300 ${
					isTransitioning ? 'opacity-0' : 'opacity-100'
				}`}
			>
				{isLg && (
					<div className="lg:w-1/3">
						<ProductRating productRating={displayedProduct!.rating} />
						<ProductAccordion items={createProductAccordionData({
							whyOliLovesIt: displayedProduct!.whyOliLovesIt,
							howToUse: displayedProduct!.howToUse,
							ingredients: displayedProduct!.ingredients,
							concerns: displayedProduct!.concerns,
						})} />
					</div>	
				)}
				<ProductImage productImages={displayedProduct!.images} />
				<ProductInfo product={displayedProduct!} />
			</div>
		</div>
	);
}
