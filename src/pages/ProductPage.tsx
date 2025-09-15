import ProductDetail from '@/components/ProductDetail/ProductDetail';
import productsData from '@/data/products.json';
import type { ProductList } from '@/types/product';

export default function ProductPage() {
	const firstProduct = (productsData as ProductList).products[0];

	return (
		<div className="min-h-screen bg-white">
			<ProductDetail product={firstProduct} />
		</div>
	);
}
