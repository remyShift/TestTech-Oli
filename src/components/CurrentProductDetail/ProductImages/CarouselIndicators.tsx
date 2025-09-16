interface CarouselIndicatorsProps {
	images: string[];
	currentIndex: number;
	onIndicatorClick: (index: number) => void;
}

export default function CarouselIndicators({
	images,
	currentIndex,
	onIndicatorClick,
}: CarouselIndicatorsProps) {
	return (
		<div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
			{images.map((_, index) => (
				<button
					key={index}
					onClick={() => onIndicatorClick(index)}
					className={`h-2 rounded-full transition-all duration-400 ${
						index === currentIndex
							? 'bg-clay scale-125 w-6'
							: 'bg-point hover:bg-ceramics w-2 hover:cursor-pointer'
					}`}
					aria-label={`Aller à l'image ${index + 1}`}
				/>
			))}
		</div>
	);
}