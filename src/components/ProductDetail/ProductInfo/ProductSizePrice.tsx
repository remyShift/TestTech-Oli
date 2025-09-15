interface ProductSizePriceProps {
	productPrice: string;
}

export default function ProductSizePrice({ productPrice }: ProductSizePriceProps) {
	return (
		<div className="flex items-center gap-2">
			<div className="flex items-center gap-2">
				<p className="font-space-grotesk text-sm font-bold">
					{productPrice}
				</p>
				<div className="w-1 h-1 bg-point rounded-full" />
			</div>
			<p className="font-space-grotesk text-sm text-ceramics">
				{'50ml'}
			</p>
		</div>
	);
}
