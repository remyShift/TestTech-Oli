import { useState, useRef, useEffect } from 'react';

interface UseCarouselProps {
	images: string[];
	enabled?: boolean;
}

export function useCarousel({ images, enabled = true }: UseCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const carouselRef = useRef<HTMLDivElement>(null);

	const hasMultipleImages = images.length > 1 && enabled;

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

	return {
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
	};
}