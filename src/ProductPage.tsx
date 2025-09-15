import Header from './components/Header/Header';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Footer from './components/Footer/Footer';
import RecommendedProducts from './components/RecommendedProducts/RecommendedProducts';
import AllProducts from './components/AllProducts/AllProducts';
import productsData from './data/products.json';
import type { ProductList } from '@/types/product';

export default function ProductPage() {
	const firstProduct = (productsData as ProductList).products[0];

	return (
		<>
			<div className="bg-primary px-3 flex flex-col gap-6">
				<Header />
				<ProductDetail product={firstProduct} />
				<RecommendedProducts />
				<AllProducts />
			</div>

			<Footer />
		</>
	);
}
