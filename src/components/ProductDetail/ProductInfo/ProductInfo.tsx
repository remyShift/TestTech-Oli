export default function ProductInfo() {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <p className="font-space-grotesk text-sm text-secondary">skincare</p>
                <div className="w-1 h-1 bg-point rounded-full" />
                <p className="font-space-grotesk text-sm text-secondary">bundles</p>
            </div>
            <h3 className="font-abc-diatype text-sm font-bold">WOODS COPENHAGEN</h3>
            <h1 className="font-space-grotesk text-2xl">Glow Serum Propolis + Niacinamide Facial Serum</h1>
            <div className="flex items-center gap-2">
                <p className="font-space-grotesk text-sm text-secondary">28ml</p>
                <div className="w-1 h-1 bg-point rounded-full" />
                <p className="font-space-grotesk text-sm font-bold">$24.99</p>
            </div>
        </div>
    )
}
