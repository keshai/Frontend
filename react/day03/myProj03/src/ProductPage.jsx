import Header from "./Header"
import Home from "./Home"
import FilterProduct from "./FilterProduct"
import Latestproduct from "./Latestproduct"
import PageCounter from "./PageCounter"

function ProductPage() {
  return (
    <>
        <Header />
        <Home  h4="New Arrivals" h1="Sixteen Products" />
        <FilterProduct />
        <Latestproduct />
        <PageCounter />
    </>
  )
}

export default ProductPage
// rafce for component temp.