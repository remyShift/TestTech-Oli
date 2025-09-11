import Header from "./components/Header/Header"
import ProductDetail from "./components/ProductDetail/ProductDetail"
import AddToBagButton from "./components/ProductDetail/AddToBagButton"
import Footer from "./components/Footer/Footer"

export default function ProductPage() {
  return (
    <>
      <div className='bg-primary px-3 flex flex-col gap-6'>
        <Header />
        <ProductDetail />
        <AddToBagButton isFixed={true} />
      </div>

      <Footer />
    </>
  )
}
