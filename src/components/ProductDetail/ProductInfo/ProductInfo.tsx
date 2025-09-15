import ProductSizePrice from './ProductSizePrice';
import ProductDescription from './ProductDescription';
import Spacer from '@/components/ProductDetail/Spacer';
import ProductRating from './ProductRating';
import ProductAccordion from '@/components/ProductDetail/ProductAccordion/ProductAccordion';
import { createProductAccordionData } from '@/components/ProductDetail/ProductAccordion/ProductAccordionDataFactory';
import AddToBagButton from '@/components/ProductDetail/AddToBagButton';
import type { Product } from '@/types/product';

interface ProductInfoProps {
	product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
	return (
		<div className="flex flex-col gap-3">
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
			<ProductSizePrice product={product} />
			<ProductDescription product={product} />
			<Spacer />
			<ProductRating product={product} />
			<Spacer />
			<ProductAccordion
				items={createProductAccordionData(product)}
				product={product}
			/>
			<AddToBagButton product={product} />
		</div>
	);
}
