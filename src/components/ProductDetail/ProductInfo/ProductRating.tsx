interface ProductRatingProps {
	productRating: number;
}

export default function ProductRating({ productRating }: ProductRatingProps) {
	const formattedRating = String(productRating).padStart(3, '0');

	return (
		<div className="flex items-center justify-between">
			<p className="font-abc-diatype text-lg font-bold tracking-tight">
				OLI'S LAB RATING
			</p>
			<div className="flex flex-col items-end">
				<p className="font-abc-diatype text-lg font-bold tracking-tight">
					{formattedRating}/100
				</p>
				<a
					href="#"
					className="font-space-grotesk text-xs text-ceramics underline"
				>
					what does it mean?
				</a>
			</div>
		</div>
	);
}
