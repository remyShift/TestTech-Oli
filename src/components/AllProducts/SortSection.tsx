import { useState } from 'react';
import type { SortOption } from '@/types/product';

interface SortSectionProps {
	selectedSort: SortOption;
	onSortChange: (sort: SortOption) => void;
}

const sortOptions = [
	{ value: 'rating-high-to-low' as SortOption, label: 'Rating (high to low)' },
	{ value: 'rating-low-to-high' as SortOption, label: 'Rating (low to high)' },
	{ value: 'price-low-to-high' as SortOption, label: 'Price (low to high)' },
	{ value: 'price-high-to-low' as SortOption, label: 'Price (high to low)' }
];

export default function SortSection({ selectedSort, onSortChange }: SortSectionProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<>
			<button
				onClick={() => setIsExpanded(!isExpanded)}
				className="flex items-center justify-between w-full py-2 text-left"
			>
				<span className="font-abc-diatype font-bold text-sm uppercase tracking-wide">
					Sort by
				</span>
				<div className="flex items-center space-x-2">
					<svg
						className="w-4 h-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
						/>
					</svg>
				</div>
			</button>
			{isExpanded && (
				<div className="mt-3 space-y-2">
					{sortOptions.map((option) => (
						<label key={option.value} className="flex items-center space-x-2 cursor-pointer p-1">
							<input
								type="checkbox"
								name="sort"
								value={option.value}
								checked={selectedSort === option.value}
								onChange={() => onSortChange(option.value)}
								className="checkbox-square"
							/>
							<span className="text-sm font-space-grotesk">
								{option.label}
							</span>
						</label>
					))}
				</div>
			)}
		</>
	);
}
