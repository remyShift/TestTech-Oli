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
	cycleInterval = 2000,
}: UseImageHoverOptions) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const [imageOpacity, setImageOpacity] = useState(1);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const immediateTransitionRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (!isHovered || imageCount <= 1) return;

		setImageOpacity(0);
		immediateTransitionRef.current = setTimeout(() => {
			setCurrentImageIndex(1);
			setImageOpacity(1);
		}, transitionDelay);

		const cycleTimeout = setTimeout(() => {
			intervalRef.current = setInterval(() => {
				setImageOpacity(0);
				setTimeout(() => {
					setCurrentImageIndex((prev) => (prev + 1) % imageCount);
					setImageOpacity(1);
				}, transitionDelay);
			}, cycleInterval);
		}, cycleDelay);

		return () => {
			if (immediateTransitionRef.current) {
				clearTimeout(immediateTransitionRef.current);
				immediateTransitionRef.current = null;
			}
			clearTimeout(cycleTimeout);
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
		};
	}, [isHovered, imageCount, transitionDelay, cycleDelay, cycleInterval]);

	useEffect(() => {
		if (!isHovered) {
			if (immediateTransitionRef.current) {
				clearTimeout(immediateTransitionRef.current);
				immediateTransitionRef.current = null;
			}
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}

			if (currentImageIndex !== 0) {
				setImageOpacity(0);
				setTimeout(() => {
					setCurrentImageIndex(0);
					setImageOpacity(1);
				}, transitionDelay);
			} else {
				setImageOpacity(1);
			}
		}
	}, [isHovered, transitionDelay, currentImageIndex]);

	return {
		currentImageIndex,
		imageOpacity,
		setIsHovered,
	};
}
