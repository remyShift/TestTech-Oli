import ProductCard from "../ui/card/ProductCard";

export default function RecommendedProducts() {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-abc-diatype text-lg font-bold">RECOMMENDED FOR YOU</h2>
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}
