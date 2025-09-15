interface CarouselNavigationProps {
	onPrevious: () => void;
	onNext: () => void;
	isHovered: boolean;
}

export default function CarouselNavigation({
	onPrevious,
	onNext,
	isHovered,
}: CarouselNavigationProps) {
	return (
		<>
			<button
				onClick={onPrevious}
				className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 hover:cursor-pointer ${
					isHovered ? 'opacity-100' : 'opacity-0'
				} hover:scale-110`}
				aria-label="Image précédente"
			>
				<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
				</svg>
			</button>

			<button
				onClick={onNext}
				className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 hover:cursor-pointer ${
					isHovered ? 'opacity-100' : 'opacity-0'
				} hover:scale-110`}
				aria-label="Image suivante"
			>
				<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</>
	);
}