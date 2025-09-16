import FilterSection from './FilterSection';
import FilterOption from './FilterOption';
import SortSection from './SortSection';
import type { FilterState, FilterOptions, FilterCounts } from '@/types/product';

interface ProductFiltersProps {
	filterState: FilterState;
	filterOptions: FilterOptions;
	filterCounts: FilterCounts;
	onFilterChange: (filterType: keyof Omit<FilterState, 'sortBy'>, value: string) => void;
	onSortChange: (sort: FilterState['sortBy']) => void;
	filteredProductsCount: number;
}

export default function ProductFilters({
	filterState,
	filterOptions,
	filterCounts,
	onFilterChange,
	onSortChange,
	filteredProductsCount
}: ProductFiltersProps) {
	return (
		<div>
			<div className="flex flex-col mb-6">
				<span className="font-abc-diatype font-bold lg:text-lg">ALL PRODUCTS</span>
				<span className="font-abc-diatype text-xs">{filteredProductsCount} PRODUCTS</span>
			</div>


			<div className='flex flex-col gap-2'>
				<SortSection
					selectedSort={filterState.sortBy}
					onSortChange={onSortChange}
				/>

				<FilterSection title="Categories">
					{filterOptions.categories.map((category) => (
						<FilterOption
							key={category}
							label={category}
							count={filterCounts.categories[category] || 0}
							isSelected={filterState.selectedCategories.includes(category)}
							onToggle={() => onFilterChange('selectedCategories', category)}
						/>
					))}
				</FilterSection>

				<FilterSection title="Brands">
					{filterOptions.brands.map((brand) => (
						<FilterOption
							key={brand}
							label={brand}
							count={filterCounts.brands[brand] || 0}
							isSelected={filterState.selectedBrands.includes(brand)}
							onToggle={() => onFilterChange('selectedBrands', brand)}
						/>
					))}
				</FilterSection>

				<FilterSection title="Skin Types">
					{filterOptions.skintypes.map((skintype) => (
						<FilterOption
							key={skintype}
							label={skintype}
							count={filterCounts.skintypes[skintype] || 0}
							isSelected={filterState.selectedSkintypes.includes(skintype)}
							onToggle={() => onFilterChange('selectedSkintypes', skintype)}
						/>
					))}
				</FilterSection>

				<FilterSection title="Concerns">
					{filterOptions.concerns.map((concern) => (
						<FilterOption
							key={concern}
							label={concern}
							count={filterCounts.concerns[concern] || 0}
							isSelected={filterState.selectedConcerns.includes(concern)}
							onToggle={() => onFilterChange('selectedConcerns', concern)}
						/>
					))}
				</FilterSection>

			</div>

		</div>
	);
}
