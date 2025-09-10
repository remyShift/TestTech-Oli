import Header from "./components/header/Header"
import ProductDetail from "./components/ProductDetail/ProductDetail"

export default function ProductPage() {
  return (
    <div className='w-[100vw] bg-primary px-3 flex flex-col gap-6'>
      <Header />
      <ProductDetail />
    </div>
  )
}
