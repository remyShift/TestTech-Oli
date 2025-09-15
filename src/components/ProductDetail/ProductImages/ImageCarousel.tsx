import React from 'react';

interface ImageCarouselProps {
	currentImage: string;
	alt: string;
	isDragging: boolean;
	hasMultipleImages: boolean;
	carouselRef: React.RefObject<HTMLDivElement | null>;
	onMouseDown: (e: React.MouseEvent) => void;
	onMouseMove: (e: React.MouseEvent) => void;
	onMouseUp: (e: React.MouseEvent) => void;
	onTouchStart: (e: React.TouchEvent) => void;
	onTouchMove: (e: React.TouchEvent) => void;
	onTouchEnd: (e: React.TouchEvent) => void;
}

export default function ImageCarousel({
	currentImage,
	alt,
	isDragging,
	hasMultipleImages,
	carouselRef,
	onMouseDown,
	onMouseMove,
	onMouseUp,
	onTouchStart,
	onTouchMove,
	onTouchEnd,
}: ImageCarouselProps) {
	return (
		<div
			ref={carouselRef}
			className={`w-full h-full flex justify-center items-center overflow-hidden ${
				hasMultipleImages ? 'cursor-grab' : ''
			} ${isDragging ? 'cursor-grabbing' : ''}`}
			onMouseDown={onMouseDown}
			onMouseMove={onMouseMove}
			onMouseUp={onMouseUp}
			onTouchStart={onTouchStart}
			onTouchMove={onTouchMove}
			onTouchEnd={onTouchEnd}
		>
			<img
				src={`https://${currentImage}`}
				alt={alt}
				className="object-contain max-h-full max-w-full select-none"
				draggable={false}
			/>
		</div>
	);
}