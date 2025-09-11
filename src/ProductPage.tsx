import Header from "./components/Header/Header"
import ProductDetail from "./components/ProductDetail/ProductDetail"
import Footer from "./components/Footer/Footer"
import RecommendedProducts from "./components/RecommendedProducts/RecommendedProducts"

export default function ProductPage() {
  return (
    <>
      <div className='bg-primary px-3 flex flex-col gap-6'>
        <Header />
        <ProductDetail />
        <RecommendedProducts />
      </div>

      <Footer />
    </>
  )
}
