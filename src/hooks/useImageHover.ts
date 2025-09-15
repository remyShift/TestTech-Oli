import { useState, useEffect, useRef } from 'react';

interface UseImageHoverOptions {
	imageCount: number;
	transitionDelay?: number;
	cycleDelay?: number;
	cycleInterval?: number;
}

export function useImageHover({
	imageCount,
	transitionDelay = 200,
	cycleDelay = 1000,
	cycleInterval = 2000
}: UseImageHoverOptions) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const [imageOpacity, setImageOpacity] = useState(1);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (!isHovered || imageCount <= 1) return;

		setImageOpacity(0);
		const immediateTransition = setTimeout(() => {
			setCurrentImageIndex(1);
			setImageOpacity(1);
		}, transitionDelay);

		const cycleTimeout = setTimeout(() => {
			intervalRef.current = setInterval(() => {
				setImageOpacity(0);
				setTimeout(() => {
					setCurrentImageIndex((prev) =>
						(prev + 1) % imageCount
					);
					setImageOpacity(1);
				}, transitionDelay);
			}, cycleInterval);
		}, cycleDelay);

		return () => {
			clearTimeout(immediateTransition);
			clearTimeout(cycleTimeout);
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
		};
	}, [isHovered, imageCount, transitionDelay, cycleDelay, cycleInterval]);

	useEffect(() => {
		if (!isHovered) {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
			setImageOpacity(0);
			setTimeout(() => {
				setCurrentImageIndex(0);
				setImageOpacity(1);
			}, transitionDelay);
		}
	}, [isHovered, transitionDelay]);

	return {
		currentImageIndex,
		imageOpacity,
		setIsHovered
	};
}