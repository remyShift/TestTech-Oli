import type { Product } from '@/types/product';
import ProductCard from '@/components/shared/card/ProductCard';

export function createCarouselContent(items: Product[]): React.ReactElement[] {
    const content: React.ReactElement[] = [];
    
    const numberOfDuplicates = 10;
    
    for (let i = 0; i < numberOfDuplicates; i++) {
        items.forEach((product, index) => {
            content.push(
                <ProductCard 
                    product={product} 
                    key={`${product.id}-${i}-${index}`} 
                />
            );
        });
        
        if (i < numberOfDuplicates - 1) {
            content.push(
                <div key={`spacer-${i}`} className="flex-shrink-0 w-4" />
            );
        }
    }
    
    return content;
}