import { useState, useEffect } from "react";
import type { Product } from "@/types/product";
import { useInfiniteCarousel } from "@/hooks/useInfiniteCarousel";
import recommendedProductIds from "@/data/recommendedProducts.json";
import productsData from "@/data/products.json";
import "@/styles/scrollbar.css";
import { createCarouselContent } from "@/utils/carouselUtils";

export default function RecommendedProducts() {
    const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
    
    const scrollContainerRef = useInfiniteCarousel({
        itemsCount: recommendedProducts.length,
        isEnabled: true
    });

    useEffect(() => {
        const products = productsData.products.filter(product => 
            recommendedProductIds.recommendedProductIds.includes(product.id)
        );
        setRecommendedProducts(products);
    }, []);

    if (recommendedProducts.length === 0) {
        return null;
    }


    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-abc-diatype text-lg font-bold">RECOMMENDED FOR YOU</h2>
            
            <div 
                ref={scrollContainerRef}
                className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
                style={{ 
                    scrollBehavior: 'auto',
                    touchAction: 'pan-x'
                }}
            >
                <div className="flex gap-10 w-fit">
                    {createCarouselContent(recommendedProducts)}
                </div>
            </div>
        </div>
    )
}
