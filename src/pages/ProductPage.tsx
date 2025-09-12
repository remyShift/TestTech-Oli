import ProductDetail from "@/components/ProductDetail/ProductDetail"
import productsData from "@/data/products.json"

export default function ProductPage() {
    const firstProduct = productsData.products[0]

    return (
        <div className="min-h-screen bg-white">
            <ProductDetail product={firstProduct} />
        </div>
    )
}