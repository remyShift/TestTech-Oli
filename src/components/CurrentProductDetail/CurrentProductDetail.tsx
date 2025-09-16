import ProductInteractions from './ProductInteractions';
import ProductImage from './ProductImages/ProductImage';
import ProductInfo from './ProductInfo/ProductInfo';
import type { Product } from '@/types/product';
import ProductAccordion from './ProductAccordion/ProductAccordion';
import { createProductAccordionData } from './ProductAccordion/ProductAccordionDataFactory';
import ProductRating from './ProductInfo/ProductRating';
import { useBreakpoint } from '@/hooks/useBreakpoint';

interface ProductDetailProps {
	product: Product;
}

export default function CurrentProductDetail({ product }: ProductDetailProps) {
	const isLg = useBreakpoint('lg');

	return (
		<div className="flex flex-col gap-4">
			<ProductInteractions />
			<div className="flex flex-col gap-4 lg:flex-row lg:items-center">
				{isLg && (
					<div className="lg:w-1/3">
						<ProductRating productRating={product.rating} />
						<ProductAccordion items={createProductAccordionData({
							whyOliLovesIt: product.whyOliLovesIt,
							howToUse: product.howToUse,
							ingredients: product.ingredients,
							concerns: product.concerns,
						})} />
					</div>	
				)}
				<ProductImage productImages={product.images} />
				<ProductInfo product={product} />
			</div>
		</div>
	);
}
