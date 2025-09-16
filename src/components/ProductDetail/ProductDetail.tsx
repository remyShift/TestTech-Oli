import ProductInteractions from './ProductInteractions';
import ProductImage from './ProductImages/ProductImage';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductRating from './ProductInfo/ProductRating';
import ProductAccordion from '@/components/ProductDetail/ProductAccordion/ProductAccordion';
import { createProductAccordionData } from '@/components/ProductDetail/ProductAccordion/ProductAccordionDataFactory';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import type { Product } from '@/types/product';

interface ProductDetailProps {
	product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
	const isLg = useBreakpoint('lg');
	return (
		<div className="flex flex-col gap-4 lg:grid lg:grid-cols-12 lg:gap-8">
			{!isLg && (
				<div className="flex justify-end">
					<ProductInteractions />
				</div>
			)}

			{isLg && (
				<div className="lg:col-span-3 flex flex-col gap-4">
					<ProductRating productRating={product.rating} />
					<ProductAccordion
						items={createProductAccordionData({
							whyOliLovesIt: product.whyOliLovesIt,
							howToUse: product.howToUse,
							ingredients: product.ingredients,
							concerns: product.concerns,
						})}
					/>
				</div>
			)}

			<div className="lg:col-span-6">
				<ProductImage productImages={product.images} />
			</div>

			<div className="lg:col-span-3 flex flex-col gap-4">
				{isLg && (
					<div className="flex justify-end">
						<ProductInteractions />
					</div>
				)}
				<ProductInfo product={product} />
			</div>
		</div>
	);
}
