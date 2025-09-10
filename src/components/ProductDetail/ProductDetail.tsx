import ProductInteractions from "./ProductInteractions"
import ProductImage from "./ProductImage"

export default function ProductDetail() {
    return (
        <div className="flex flex-col gap-4">
            <ProductInteractions />
            <ProductImage />
        </div>
    )
}
