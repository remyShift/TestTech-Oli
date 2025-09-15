import type { Product } from '@/types/product';

interface ProductImageProps {
	product: Product;
}

export default function ProductImage({ product }: ProductImageProps) {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<img
				src={product.images[0]}
				alt={product.name}
				className="object-contain"
			/>
		</div>
	);
}
