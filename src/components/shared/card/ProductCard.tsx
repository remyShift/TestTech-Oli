import ProductSizePrice from "@/components/ProductDetail/ProductInfo/ProductSizePrice";
import type { Product } from "@/types/product";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="flex flex-col bg-card rounded-xl overflow-hidden product-card-responsive relative">
            <div className="flex justify-end p-3 pb-0">
                <span className="font-abc-diatype font-bold text-xs">{String(product.oliRating).padStart(3, '0')}/100</span>
            </div>

            <div className="flex-1 px-3">
                <img 
                    src={product.imageUrl} 
                    alt={product.name}
                    className="object-contain w-full h-full"
                />
            </div>

            <div className="px-2 py-2">
                <p className="font-abc-diatype uppercase font-bold text-sm">
                    {product.brand}
                </p>
                <p className="font-space-grotesk text-sm">
                    {product.name}
                </p>
                <ProductSizePrice product={product} />
            </div>

            <button
                onClick={() => {}}
                className="w-full bg-black text-white text-xs font-abc-diatype font-bold rounded-b-xl hover:bg-gray-800 transition-colors py-2"
            >
                ADD TO BAG
            </button>
        </div>
    );
}

