import type { Product } from '@/types/product';

interface ProductDescriptionProps {
	product: Product;
}

export default function ProductDescription({
	product,
}: ProductDescriptionProps) {
	return (
		<p className="font-abc-diatype text-ceramics leading-5">
			{product.description}
		</p>
	);
}
