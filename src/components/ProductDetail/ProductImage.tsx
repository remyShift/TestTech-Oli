import { useState, useRef, useEffect } from 'react';
import type { Product } from '@/types/product';

interface ProductImageProps {
	product: Product;
}

export default function ProductImage({ product }: ProductImageProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const carouselRef = useRef<HTMLDivElement>(null);

	const images = product.images || [];
	const hasMultipleImages = images.length > 1;

	const goToPrevious = () => {
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const goToNext = () => {
		setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	const goToIndex = (index: number) => {
		setCurrentIndex(index);
	};

	const handleMouseDown = (e: React.MouseEvent) => {
		if (!hasMultipleImages) return;
		setIsDragging(true);
		setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging || !hasMultipleImages) return;
		e.preventDefault();
		const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
		const walk = (x - startX) * 2;
		const threshold = 50;

		if (walk > threshold && currentIndex > 0) {
			goToPrevious();
			setIsDragging(false);
		} else if (walk < -threshold && currentIndex < images.length - 1) {
			goToNext();
			setIsDragging(false);
		}
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		if (!hasMultipleImages) return;
		setIsDragging(true);
		setStartX(e.touches[0].pageX);
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		if (!isDragging || !hasMultipleImages) return;
		const x = e.touches[0].pageX;
		const walk = (x - startX) * 2;
		const threshold = 50;

		if (walk > threshold && currentIndex > 0) {
			goToPrevious();
			setIsDragging(false);
		} else if (walk < -threshold && currentIndex < images.length - 1) {
			goToNext();
			setIsDragging(false);
		}
	};

	const handleTouchEnd = () => {
		setIsDragging(false);
	};

	useEffect(() => {
		const handleMouseUp = () => setIsDragging(false);
		document.addEventListener('mouseup', handleMouseUp);
		return () => document.removeEventListener('mouseup', handleMouseUp);
	}, []);

	if (!images.length) {
		return (
			<div className="w-full h-96 flex justify-center items-center bg-gray-100">
				<span className="text-gray-500">Aucune image disponible</span>
			</div>
		);
	}

	return (
		<div
			className="relative w-full h-96 group"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div
				ref={carouselRef}
				className={`w-full h-full flex justify-center items-center overflow-hidden ${
					hasMultipleImages ? 'cursor-grab' : ''
				} ${isDragging ? 'cursor-grabbing' : ''}`}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
			>
				<img
					src={`https://${images[currentIndex]}`}
					alt={`${product.name} - Image ${currentIndex + 1}`}
					className="object-contain max-h-full max-w-full select-none"
					draggable={false}
				/>
			</div>

			{hasMultipleImages && (
				<>
					<button
						onClick={goToPrevious}
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
						onClick={goToNext}
						className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 hover:cursor-pointer ${
							isHovered ? 'opacity-100' : 'opacity-0'
						} hover:scale-110`}
						aria-label="Image suivante"
					>
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</button>

					<div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
						{images.map((_, index) => (
							<button
								key={index}
								onClick={() => goToIndex(index)}
								className={`h-2 rounded-full transition-all duration-400 ${
									index === currentIndex
										? 'bg-clay scale-125 w-6'
										: 'bg-point hover:bg-ceramics w-2 hover:cursor-pointer'
								}`}
								aria-label={`Aller à l'image ${index + 1}`}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
}
