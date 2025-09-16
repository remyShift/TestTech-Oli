import { useCartContext } from '@/hooks/useCartContext';

export default function ItemCounter() {
	const { totalItems } = useCartContext();

	return (
		<div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
			<span className="text-white font-abc-diatype text-xs font-bold">
				{totalItems}
			</span>
		</div>
	);
}
