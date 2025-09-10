import ProductInteractions from "./ProductInteractions"
import ProductImage from "./ProductImage"
import ProductInfo from "./ProductInfo/ProductInfo"

export default function ProductDetail() {
    return (
        <div className="flex flex-col gap-4">
            <ProductInteractions />
            <ProductImage />
            <ProductInfo />
        </div>
    )
}
