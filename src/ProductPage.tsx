import Header from "./components/header/Header"
import ProductDetail from "./components/ProductDetail/ProductDetail"

export default function ProductPage() {
  return (
    <div className='w-[100vw] h-[100vh] bg-primary px-4'>
      <Header />
      <ProductDetail />
    </div>
  )
}
