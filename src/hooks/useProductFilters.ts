import { useState, useMemo } from 'react';
import type {
	Product,
	FilterState,
	FilterOptions,
	FilterCounts,
	SortOption,
} from '@/types/product';

export function useProductFilters(products: Product[]) {
	const [filterState, setFilterState] = useState<FilterState>({
		selectedBrands: [],
		selectedCategories: [],
		selectedSubcategories: [],
		selectedSkintypes: [],
		selectedConcerns: [],
		sortBy: 'rating-high-to-low',
	});

	const filterOptions: FilterOptions = useMemo(() => {
		const brands = [
			...new Set(products.map((p) => p.brand).filter(Boolean)),
		].sort();
		const categories = [
			...new Set(products.map((p) => p.category).filter(Boolean)),
		].sort();
		const subcategories = [
			...new Set(products.map((p) => p.subcategory).filter(Boolean)),
		].sort();
		const skintypes = [
			...new Set(
				products.flatMap((p) => p.skintypes.split(', ').filter(Boolean))
			),
		].sort();
		const concerns = [
			...new Set(
				products.flatMap((p) => p.concerns.split(', ').filter(Boolean))
			),
		].sort();

		return {
			brands,
			categories,
			subcategories,
			skintypes,
			concerns,
		};
	}, [products]);

	const filterCounts: FilterCounts = useMemo(() => {
		const counts: FilterCounts = {
			brands: {},
			categories: {},
			subcategories: {},
			skintypes: {},
			concerns: {},
		};

		products.forEach((product) => {
			if (product.brand) {
				counts.brands[product.brand] =
					(counts.brands[product.brand] || 0) + 1;
			}

			if (product.category) {
				counts.categories[product.category] =
					(counts.categories[product.category] || 0) + 1;
			}

			if (product.subcategory) {
				counts.subcategories[product.subcategory] =
					(counts.subcategories[product.subcategory] || 0) + 1;
			}

			product.skintypes.split(', ').forEach((skintype) => {
				if (skintype.trim()) {
					counts.skintypes[skintype] =
						(counts.skintypes[skintype] || 0) + 1;
				}
			});

			product.concerns.split(', ').forEach((concern) => {
				if (concern.trim()) {
					counts.concerns[concern] =
						(counts.concerns[concern] || 0) + 1;
				}
			});
		});

		filterOptions.brands.forEach((brand) => {
			if (!(brand in counts.brands)) counts.brands[brand] = 0;
		});
		filterOptions.categories.forEach((category) => {
			if (!(category in counts.categories))
				counts.categories[category] = 0;
		});
		filterOptions.subcategories.forEach((subcategory) => {
			if (!(subcategory in counts.subcategories))
				counts.subcategories[subcategory] = 0;
		});
		filterOptions.skintypes.forEach((skintype) => {
			if (!(skintype in counts.skintypes)) counts.skintypes[skintype] = 0;
		});
		filterOptions.concerns.forEach((concern) => {
			if (!(concern in counts.concerns)) counts.concerns[concern] = 0;
		});

		return counts;
	}, [products, filterOptions]);

	const filteredAndSortedProducts = useMemo(() => {
		const filtered = products.filter((product) => {
			if (
				filterState.selectedBrands.length > 0 &&
				!filterState.selectedBrands.includes(product.brand)
			) {
				return false;
			}

			if (
				filterState.selectedCategories.length > 0 &&
				!filterState.selectedCategories.includes(product.category)
			) {
				return false;
			}

			if (
				filterState.selectedSubcategories.length > 0 &&
				!filterState.selectedSubcategories.includes(product.subcategory)
			) {
				return false;
			}

			if (filterState.selectedSkintypes.length > 0) {
				const productSkintypes = product.skintypes
					.split(', ')
					.map((s) => s.trim());
				const hasMatchingSkintype = filterState.selectedSkintypes.some(
					(selected) => productSkintypes.includes(selected)
				);
				if (!hasMatchingSkintype) return false;
			}

			if (filterState.selectedConcerns.length > 0) {
				const productConcerns = product.concerns
					.split(', ')
					.map((c) => c.trim());
				const hasMatchingConcern = filterState.selectedConcerns.some(
					(selected) => productConcerns.includes(selected)
				);
				if (!hasMatchingConcern) return false;
			}

			return true;
		});

		filtered.sort((a, b) => {
			switch (filterState.sortBy) {
				case 'rating-high-to-low':
					return b.rating - a.rating;
				case 'rating-low-to-high':
					return a.rating - b.rating;
				case 'price-low-to-high':
					return (
						parseFloat(a.price.replace('€', '').replace(',', '.')) -
						parseFloat(b.price.replace('€', '').replace(',', '.'))
					);
				case 'price-high-to-low':
					return (
						parseFloat(b.price.replace('€', '').replace(',', '.')) -
						parseFloat(a.price.replace('€', '').replace(',', '.'))
					);
				default:
					return 0;
			}
		});

		return filtered;
	}, [products, filterState]);

	const updateFilter = (
		filterType: keyof Omit<FilterState, 'sortBy'>,
		value: string
	) => {
		setFilterState((prev) => ({
			...prev,
			[filterType]: prev[filterType].includes(value)
				? prev[filterType].filter((item) => item !== value)
				: [...prev[filterType], value],
		}));
	};

	const updateSort = (sortBy: SortOption) => {
		setFilterState((prev) => ({ ...prev, sortBy }));
	};

	const clearAllFilters = () => {
		setFilterState({
			selectedBrands: [],
			selectedCategories: [],
			selectedSubcategories: [],
			selectedSkintypes: [],
			selectedConcerns: [],
			sortBy: 'rating-high-to-low',
		});
	};

	const hasActiveFilters = useMemo(() => {
		return (
			filterState.selectedBrands.length > 0 ||
			filterState.selectedCategories.length > 0 ||
			filterState.selectedSubcategories.length > 0 ||
			filterState.selectedSkintypes.length > 0 ||
			filterState.selectedConcerns.length > 0
		);
	}, [filterState]);

	return {
		filterState,
		filterOptions,
		filterCounts,
		filteredAndSortedProducts,
		updateFilter,
		updateSort,
		clearAllFilters,
		hasActiveFilters,
	};
}
