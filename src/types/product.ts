export interface Product {
	brand: string;
	name: string;
	ingredients: string;
	images: string[];
	category: string;
	subcategory: string;
	skintypes: string;
	concerns: string;
	description: string;
	rating: number;
	price: string;
	howToUse: string;
	whyOliLovesIt: string;
}

export interface ProductList {
	recommendedProducts: Product[];
	products: Product[];
}

export type SortOption =
	| 'rating-high-to-low'
	| 'rating-low-to-high'
	| 'price-low-to-high'
	| 'price-high-to-low';

export interface FilterOptions {
	brands: string[];
	categories: string[];
	subcategories: string[];
	skintypes: string[];
	concerns: string[];
}

export interface FilterCounts {
	brands: Record<string, number>;
	categories: Record<string, number>;
	subcategories: Record<string, number>;
	skintypes: Record<string, number>;
	concerns: Record<string, number>;
}

export interface FilterState {
	selectedBrands: string[];
	selectedCategories: string[];
	selectedSubcategories: string[];
	selectedSkintypes: string[];
	selectedConcerns: string[];
	sortBy: SortOption;
}
