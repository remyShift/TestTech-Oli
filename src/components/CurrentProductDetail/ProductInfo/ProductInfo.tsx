import ProductSizePrice from './ProductSizePrice';
import ProductDescription from './ProductDescription';
import Spacer from '@/components/CurrentProductDetail/Spacer';
import ProductRating from './ProductRating';
import ProductAccordion from '@/components/CurrentProductDetail/ProductAccordion/ProductAccordion';
import { createProductAccordionData } from '@/components/CurrentProductDetail/ProductAccordion/ProductAccordionDataFactory';
import AddToBagButton from '@/components/CurrentProductDetail/AddToBagButton';
import type { Product } from '@/types/product';
import { useBreakpoint } from '@/hooks/useBreakpoint';

interface ProductInfoProps {
	product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
	const isLg = useBreakpoint('lg');

	return (
		<div className="flex flex-col gap-3 lg:w-1/3">
			<div className="flex items-center gap-2">
				<p className="font-space-grotesk text-sm text-clay tracking-tighter">
					{product.category}
				</p>
				<div className="w-1 h-1 bg-point rounded-full" />
				<p className="font-space-grotesk text-sm text-clay tracking-tighter">
					{product.subcategory}
				</p>
			</div>

			<h3 className="font-abc-diatype text-sm font-bold">
				{product.brand}
			</h3>

			<h1 className="font-space-grotesk text-2xl">{product.name}</h1>

			<ProductSizePrice productPrice={product.price} />
			<ProductDescription productDescription={product.description} />

			{!isLg && <Spacer />}
			{!isLg && <ProductRating productRating={product.rating} />}
			{!isLg && <Spacer />}
			{!isLg && (
				<ProductAccordion
					items={createProductAccordionData({
						whyOliLovesIt: product.whyOliLovesIt,
						howToUse: product.howToUse,
						ingredients: product.ingredients,
						concerns: product.concerns,
					})}
				/>
			)}

			<AddToBagButton product={product} />
		</div>
	);
}
