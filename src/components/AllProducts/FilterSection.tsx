import { useState } from 'react';

interface FilterSectionProps {
	title: string;
	children: React.ReactNode;
	isExpanded?: boolean;
	onToggle?: () => void;
}

export default function FilterSection({ 
	title, 
	children, 
	isExpanded = false, 
	onToggle 
}: FilterSectionProps) {
	const [isOpen, setIsOpen] = useState(isExpanded);

	const handleToggle = () => {
		setIsOpen(!isOpen);
		onToggle?.();
	};

	return (
		<>
			<button
				onClick={handleToggle}
				className="flex items-center justify-between w-full py-2 text-left"
			>
				<span className="font-abc-diatype font-bold text-sm uppercase tracking-wide">
					{title}
				</span>
				<svg
					className={`w-4 h-4 transition-transform duration-200 ${
						isOpen ? 'rotate-180' : ''
					}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>
			{isOpen && (
				<div className="space-y-2">
					{children}
				</div>
			)}
		</>
	);
}
