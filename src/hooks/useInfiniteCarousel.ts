import { useEffect, useRef } from 'react';

interface UseInfiniteCarouselOptions {
	itemsCount: number;
	isEnabled?: boolean;
}

export function useInfiniteCarousel({
	itemsCount,
	isEnabled = true,
}: UseInfiniteCarouselOptions) {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container || !isEnabled || itemsCount === 0) return;

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

		container.addEventListener('scroll', handleScroll, { passive: true });

		const initTimer = setTimeout(() => {
			container.scrollLeft = container.scrollWidth / 10;
		}, 100);

		return () => {
			clearTimeout(initTimer);
			container.removeEventListener('scroll', handleScroll);
		};
	}, [itemsCount, isEnabled]);

	const scrollLeft = () => {
		const container = containerRef.current;
		if (!container) return;

		const cardWidth =
			container.querySelector('.recommended-product-card-responsive')
				?.clientWidth || 200;
		const gap = 12;
		const scrollAmount = cardWidth + gap;

		container.scrollBy({
			left: -scrollAmount,
			behavior: 'smooth',
		});
	};

	const scrollRight = () => {
		const container = containerRef.current;
		if (!container) return;

		const cardWidth =
			container.querySelector('.recommended-product-card-responsive')
				?.clientWidth || 200;
		const gap = 12;
		const scrollAmount = cardWidth + gap;

		container.scrollBy({
			left: scrollAmount,
			behavior: 'smooth',
		});
	};

	return {
		containerRef,
		scrollLeft,
		scrollRight,
	};
}
