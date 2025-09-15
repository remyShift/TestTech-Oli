import ProductInteractions from './ProductInteractions';
import ProductImage from './ProductImages/ProductImage';
import ProductInfo from './ProductInfo/ProductInfo';
import type { Product } from '@/types/product';

interface ProductDetailProps {
	product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
	return (
		<div className="flex flex-col gap-4">
			<ProductInteractions />
			<ProductImage productImages={product.images} />
			<ProductInfo product={product} />
		</div>
	);
}
