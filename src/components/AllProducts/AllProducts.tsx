import { useState } from "react";
import type { Product } from "@/types/product";
import productsData from "@/data/products.json";
import ProductCard from "@/components/shared/card/ProductCard";

export default function AllProducts() {
    const [products] = useState<Product[]>(productsData.products);
    const [displayedProducts, setDisplayedProducts] = useState<Product[]>(products.slice(0, 5));
    const [currentPage, setCurrentPage] = useState(1);
    
    const productsPerPage = 5;
    const totalPages = Math.ceil(products.length / productsPerPage);

    const loadMoreProducts = () => {
        const nextPage = currentPage + 1;
        const startIndex = displayedProducts.length;
        const endIndex = startIndex + productsPerPage;
        const newProducts = products.slice(startIndex, endIndex);
        
        console.log('Loading more products:', {
            currentPage,
            nextPage,
            startIndex,
            endIndex,
            newProductsCount: newProducts.length,
            totalDisplayed: displayedProducts.length + newProducts.length
        });
        
        setDisplayedProducts(prev => [...prev, ...newProducts]);
        setCurrentPage(nextPage);
    };

    const hasMoreProducts = currentPage < totalPages;

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <h2 className="font-abc-diatype text-lg font-bold">ALL PRODUCTS</h2>
                <span className="text-sm text-gray-600 font-space-grotesk">{products.length} PRODUCTS</span>
            </div>
            
            <div className="flex flex-col gap-3 items-center">
                {displayedProducts.map((product) => (
                    <div key={product.id} className="w-full max-w-[195px]">
                        <ProductCard 
                            product={product}
                            showAddToBag={true}
                        />
                    </div>
                ))}
            </div>
            
            {hasMoreProducts && (
                <button 
                    onClick={loadMoreProducts}
                    className="w-full py-3 px-4 bg-black text-white font-abc-diatype font-bold rounded-lg hover:bg-gray-800 transition-colors text-sm"
                >
                    LOAD MORE
                </button>
            )}
        </div>
    );
}
