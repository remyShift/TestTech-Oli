import type { Product } from "@/types/product"

interface ProductSizePriceProps {
    product: Product;
}

export default function ProductSizePrice({ product }: ProductSizePriceProps) {
    return (
        <div className="flex items-center gap-2">
            <p className="font-space-grotesk text-sm text-ceramics">{product.volume}</p>
            <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-point rounded-full" />
                <p className="font-space-grotesk text-sm font-bold">${product.price}</p>
            </div>
        </div>
    )
}
