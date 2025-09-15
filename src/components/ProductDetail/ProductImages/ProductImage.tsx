import { useCarousel } from '@/hooks/useCarousel';
import ImageCarousel from './ImageCarousel';
import CarouselNavigation from './CarouselNavigation';
import CarouselIndicators from './CarouselIndicators';

interface ProductImageProps {
	productImages: string[];
}

export default function ProductImage({ productImages }: ProductImageProps) {
	const images = productImages || [];

	const {
		currentIndex,
		isHovered,
		isDragging,
		hasMultipleImages,
		carouselRef,
		setIsHovered,
		goToPrevious,
		goToNext,
		goToIndex,
		handleMouseDown,
		handleMouseMove,
		handleMouseUp,
		handleTouchStart,
		handleTouchMove,
		handleTouchEnd,
	} = useCarousel({ images });

	if (!images.length) {
		return (
			<div className="w-full h-96 flex justify-center items-center bg-gray-100">
				<span className="text-gray-500">No images available</span>
			</div>
		);
	}

	return (
		<div
			className="relative w-full h-96 group"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<ImageCarousel
				currentImage={images[currentIndex]}
				alt={`${productImages[currentIndex]} - Image ${currentIndex + 1}`}
				isDragging={isDragging}
				hasMultipleImages={hasMultipleImages}
				carouselRef={carouselRef}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
			/>

			{hasMultipleImages && (
				<>
					<CarouselNavigation
						onPrevious={goToPrevious}
						onNext={goToNext}
						isHovered={isHovered}
					/>
					<CarouselIndicators
						images={images}
						currentIndex={currentIndex}
						onIndicatorClick={goToIndex}
					/>
				</>
			)}
		</div>
	);
}
