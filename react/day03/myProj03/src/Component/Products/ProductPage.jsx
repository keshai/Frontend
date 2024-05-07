import Header from '../Header/Header'
import Home from "../Home/Home"
import FilterProduct from "./FilterProduct"
import Latestproduct from "../Home/Latestproduct"
import PageCounter from "./PageCounter"

function ProductPage() {
  return (
    <>
        <Home  h4="New Arrivals" h1="Sixteen Products" />
        <FilterProduct />
        <Latestproduct />
        <PageCounter />
    </>
  )
}

export default ProductPage
// rafce for component temp.