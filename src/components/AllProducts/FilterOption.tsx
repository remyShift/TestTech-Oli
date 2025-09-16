interface FilterOptionProps {
	label: string;
	count: number;
	isSelected: boolean;
	onToggle: () => void;
}

export default function FilterOption({ 
	label, 
	count, 
	isSelected, 
	onToggle 
}: FilterOptionProps) {
	return (
		<label className="flex items-center space-x-2 cursor-pointer p-1">
			<input
				type="checkbox"
				checked={isSelected}
				onChange={onToggle}
				className="checkbox-square"
			/>
			<span className="text-sm font-space-grotesk">
				{label}
			</span>
			<span className="text-xs font-space-grotesk text-[#A5A5A5]">
				({count})
			</span>
		</label>
	);
}
