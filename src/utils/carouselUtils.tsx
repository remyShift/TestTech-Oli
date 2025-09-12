import type { Product } from '../types/product';
import ProductCard from '../components/shared/card/ProductCard';

export function createCarouselContent(items: Product[]): React.ReactElement[] {
    const content: React.ReactElement[] = [];
    
    items.forEach((product) => {
        content.push(
            <ProductCard product={product} key={`${product.id}-set1`} />
        );
    });
    
    content.push(
        <div key="spacer-1" className="flex-shrink-0 w-8" />
    );
    
    items.forEach((product) => {
        content.push(
            <ProductCard product={product} key={`${product.id}-set2`} />
        );
    });
    
    content.push(
        <div key="spacer-2" className="flex-shrink-0 w-8" />
    );
    
    items.forEach((product) => {
        content.push(
            <ProductCard product={product} key={`${product.id}-set3`} />
        );
    });
    
    return content;
}