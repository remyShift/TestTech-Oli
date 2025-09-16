import Header from './components/Header/Header';
import CurrentProductDetail from './components/CurrentProductDetail/CurrentProductDetail';
import Footer from './components/Footer/Footer';
import RecommendedProducts from './components/RecommendedProducts/RecommendedProducts';
import AllProducts from './components/AllProducts/AllProducts';
import ProductProvider from './providers/ProductProvider';
import productsData from './data/products.json';
import type { ProductList } from '@/types/product';

export default function ProductPage() {
	const firstProduct = (productsData as ProductList).products[0];

	return (
		<ProductProvider initialProduct={firstProduct}>
			<div className="bg-primary px-3 flex flex-col gap-6">
				<Header />
				<div className="flex flex-col gap-24">
					<CurrentProductDetail />
					<RecommendedProducts />
					<AllProducts />
				</div>
			</div>
			<Footer />
		</ProductProvider>
	);
}
