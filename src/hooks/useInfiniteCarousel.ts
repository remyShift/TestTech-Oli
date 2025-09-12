import { useEffect, useRef } from 'react';

interface UseInfiniteCarouselOptions {
    itemsCount: number;
    isEnabled?: boolean;
}

export function useInfiniteCarousel({ itemsCount, isEnabled = true }: UseInfiniteCarouselOptions) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container || !isEnabled || itemsCount === 0) return;

        let isDragging = false;
        let lastX = 0;

        const handleScroll = () => {
            const currentScrollLeft = container.scrollLeft;
            const scrollWidth = container.scrollWidth;
            const singleSetWidth = scrollWidth / 3;

            if (currentScrollLeft >= singleSetWidth * 2) {
                container.scrollLeft = singleSetWidth;
            }
            else if (currentScrollLeft <= 0) {
                container.scrollLeft = singleSetWidth;
            }
        };

        const handleMouseDown = (e: MouseEvent) => {
            isDragging = true;
            container.style.cursor = 'grabbing';
            lastX = e.clientX;
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

        container.addEventListener('scroll', handleScroll, { passive: true });
        container.addEventListener('mousedown', handleMouseDown);
        container.addEventListener('mouseleave', handleMouseLeave);
        container.addEventListener('mouseup', handleMouseUp);
        container.addEventListener('mousemove', handleMouseMove);

        const initTimer = setTimeout(() => {
            container.scrollLeft = container.scrollWidth / 3;
        }, 100);

        return () => {
            clearTimeout(initTimer);
            container.removeEventListener('scroll', handleScroll);
            container.removeEventListener('mousedown', handleMouseDown);
            container.removeEventListener('mouseleave', handleMouseLeave);
            container.removeEventListener('mouseup', handleMouseUp);
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, [itemsCount, isEnabled]);

    return containerRef;
}