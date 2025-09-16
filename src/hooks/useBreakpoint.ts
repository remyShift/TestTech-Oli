import { useEffect, useState } from 'react';

type BreakpointKey = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const breakpointToQuery: Record<BreakpointKey, string> = {
	sm: '(min-width: 640px)',
	md: '(min-width: 768px)',
	lg: '(min-width: 1024px)',
	xl: '(min-width: 1280px)',
	'2xl': '(min-width: 1536px)',
};

export function useBreakpoint(target: BreakpointKey): boolean {
	const query = breakpointToQuery[target];
	const [matches, setMatches] = useState<boolean>(() => {
		if (typeof window === 'undefined' || !window.matchMedia) {
			return false;
		}
		return window.matchMedia(query).matches;
	});

	useEffect(() => {
		if (typeof window === 'undefined' || !window.matchMedia) {
			return;
		}
		const media = window.matchMedia(query);
		const onChange = () => setMatches(media.matches);
		media.addEventListener('change', onChange);
		setMatches(media.matches);
		return () => media.removeEventListener('change', onChange);
	}, [query]);

	return matches;
}
