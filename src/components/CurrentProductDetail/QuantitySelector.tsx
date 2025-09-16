import { useCartContext } from '@/hooks/useCartContext';
import type { Product } from '@/types/product';

interface QuantitySelectorProps {
	product: Product;
	isCard?: boolean;
}

export default function QuantitySelector({ product, isCard = false }: QuantitySelectorProps) {
	const { getItemQuantity, updateQuantity } = useCartContext();
	
	const productId = `${product.brand}-${product.name}`;
	const quantity = getItemQuantity(productId);

	const handleDecrease = () => {
		updateQuantity(productId, quantity - 1);
	};

	const handleIncrease = () => {
		updateQuantity(productId, quantity + 1);
	};

	return (
		<div className={`flex items-center bg-black w-full justify-between px-4 ${isCard ? 'rounded-b-xl py-2' : 'rounded-full py-3'}`}>
			<button
				onClick={handleDecrease}
				className={`text-white font-abc-diatype font-bold hover:opacity-70 transition-opacity ${isCard ? 'text-xs' : 'text-base'}`}
				disabled={quantity <= 0}
			>
				-
			</button>
			<span className={`text-white font-abc-diatype font-bold mx-6 min-w-[20px] text-center ${isCard ? 'text-xs' : 'text-base'}`}>
				{quantity}
			</span>
			<button
				onClick={handleIncrease}
				className={`text-white font-abc-diatype font-bold hover:opacity-70 transition-opacity ${isCard ? 'text-xs' : 'text-base'}`}
			>
				+
			</button>
		</div>
	);
}
