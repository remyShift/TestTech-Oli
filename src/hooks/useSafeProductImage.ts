import { useEffect, useMemo, useState } from 'react';

export function toHttpUrl(candidate?: string): string {
	if (!candidate) return '';
	if (/^https?:\/\//i.test(candidate)) return candidate;
	return `https://${candidate}`;
}

function preload(url: string): Promise<boolean> {
	return new Promise((resolve) => {
		if (!/^https?:\/\//i.test(url)) {
			resolve(false);
			return;
		}
		const img = new Image();
		img.onload = () => resolve(true);
		img.onerror = () => resolve(false);
		img.src = url;
	});
}

export async function preloadValidUrls(urls: string[]): Promise<string[]> {
	const checks = urls.map((u) => preload(u).then((ok) => (ok ? u : '')));
	return Promise.all(checks).then((results) => results.filter((u) => u));
}

export function useSafeProductImage(
	images: string[],
	currentImageIndex: number
) {
	const baseUrl = useMemo(() => toHttpUrl(images[0]), [images]);
	const currentUrl = useMemo(
		() => toHttpUrl(images[currentImageIndex]),
		[images, currentImageIndex]
	);
	const secondUrl = useMemo(() => toHttpUrl(images[1]), [images]);

	const [isBaseValid, setIsBaseValid] = useState(true);
	const [isCurrentValid, setIsCurrentValid] = useState(true);
	const [canHoverCycle, setCanHoverCycle] = useState(false);

	useEffect(() => {
		preload(baseUrl).then((ok) => setIsBaseValid(ok));
	}, [baseUrl]);

	useEffect(() => {
		preload(currentUrl).then((ok) => setIsCurrentValid(ok));
	}, [currentUrl]);

	useEffect(() => {
		preload(secondUrl).then((ok) => setCanHoverCycle(ok));
	}, [secondUrl]);

	const imageUrlToRender =
		isCurrentValid && currentUrl ? currentUrl : isBaseValid ? baseUrl : '';

	return {
		imageUrlToRender,
		canHoverCycle,
	};
}
