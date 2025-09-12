export interface Product {
    id: string;
    brand: string;
    name: string;
    category: string;
    subcategory: string;
    price: number;
    volume: string;
    oliRating: number;
    skinType: string;
    
    description: string;
    imageUrl: string;
    
    whyOliLovesIt: string;
    howToUse: string;
    ingredientsList: string[];
    skinRecommendation: string;
    
    isInStock: boolean;
    sku?: string;
    tags?: string[];
}

export interface ProductList {
    products: Product[];
}