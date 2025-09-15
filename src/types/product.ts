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
}

export interface ProductList {
	recommendedProducts: Product[];
}
