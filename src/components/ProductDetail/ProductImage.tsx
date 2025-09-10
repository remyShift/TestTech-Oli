import productImage from '../../assets/images/main-product.png'


export default function ProductImage() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <img src={productImage} alt="Product Image" className="object-contain" />
        </div>
    )
}
