import { useEffect, useRef } from 'react';

interface UseInfiniteCarouselOptions {
	itemsCount: number;
	isEnabled?: boolean;
	autoScrollSpeed?: number;
	pauseDelay?: number;
}

export function useInfiniteCarousel({
	itemsCount,
	isEnabled = true,
	autoScrollSpeed = 20,
	pauseDelay = 2000,
}: UseInfiniteCarouselOptions) {
	const containerRef = useRef<HTMLDivElement>(null);
	const autoScrollRef = useRef<number | null>(null);
	const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const isUserInteractingRef = useRef(false);

	useEffect(() => {
		const container = containerRef.current;
		if (!container || !isEnabled || itemsCount === 0) return;

		let isDragging = false;
		let lastX = 0;

		const startAutoScroll = () => {
			if (autoScrollRef.current) {
				cancelAnimationFrame(autoScrollRef.current);
			}

			const scroll = () => {
				if (!isUserInteractingRef.current && container) {
					container.scrollLeft += autoScrollSpeed / 60; // 60 FPS
					autoScrollRef.current = requestAnimationFrame(scroll);
				}
			};

			autoScrollRef.current = requestAnimationFrame(scroll);
		};

		const stopAutoScroll = () => {
			if (autoScrollRef.current) {
				cancelAnimationFrame(autoScrollRef.current);
				autoScrollRef.current = null;
			}
		};

		const pauseAutoScroll = () => {
			isUserInteractingRef.current = true;
			stopAutoScroll();

			if (pauseTimeoutRef.current) {
				clearTimeout(pauseTimeoutRef.current);
			}

			pauseTimeoutRef.current = setTimeout(() => {
				isUserInteractingRef.current = false;
				startAutoScroll();
			}, pauseDelay);
		};

		const handleScroll = () => {
			const currentScrollLeft = container.scrollLeft;
			const scrollWidth = container.scrollWidth;

			const singleGroupWidth = scrollWidth / 10;

			if (currentScrollLeft >= singleGroupWidth * 8) {
				container.scrollLeft = singleGroupWidth;
			} else if (currentScrollLeft <= 0) {
				container.scrollLeft = singleGroupWidth * 7;
			}
		};

		const handleMouseDown = (e: MouseEvent) => {
			isDragging = true;
			container.style.cursor = 'grabbing';
			lastX = e.clientX;
			pauseAutoScroll();
			e.preventDefault();
		};

		const handleMouseLeave = () => {
			isDragging = false;
			container.style.cursor = 'grab';
		};

		const handleMouseUp = () => {
			isDragging = false;
			container.style.cursor = 'grab';
		};

		const handleMouseMove = (e: MouseEvent) => {
			if (!isDragging) return;
			e.preventDefault();

			const deltaX = e.clientX - lastX;
			container.scrollLeft -= deltaX;
			lastX = e.clientX;
		};

		const handleTouchStart = () => {
			pauseAutoScroll();
		};

		const handleWheel = () => {
			pauseAutoScroll();
		};

		container.addEventListener('scroll', handleScroll, { passive: true });
		container.addEventListener('mousedown', handleMouseDown);
		container.addEventListener('mouseleave', handleMouseLeave);
		container.addEventListener('mouseup', handleMouseUp);
		container.addEventListener('mousemove', handleMouseMove);
		container.addEventListener('touchstart', handleTouchStart, {
			passive: true,
		});
		container.addEventListener('wheel', handleWheel, { passive: true });

		const initTimer = setTimeout(() => {
			container.scrollLeft = container.scrollWidth / 10;
			startAutoScroll();
		}, 100);

		return () => {
			clearTimeout(initTimer);
			stopAutoScroll();
			if (pauseTimeoutRef.current) {
				clearTimeout(pauseTimeoutRef.current);
			}
			container.removeEventListener('scroll', handleScroll);
			container.removeEventListener('mousedown', handleMouseDown);
			container.removeEventListener('mouseleave', handleMouseLeave);
			container.removeEventListener('mouseup', handleMouseUp);
			container.removeEventListener('mousemove', handleMouseMove);
			container.removeEventListener('touchstart', handleTouchStart);
			container.removeEventListener('wheel', handleWheel);
		};
	}, [itemsCount, isEnabled, autoScrollSpeed, pauseDelay]);

	return containerRef;
}
