import ProductCard from './ProductCard'


function Latestproduct(){
    return(
        <div className="latestproduct">
            <h2 className="headingH2">Latest Products</h2>
            <div className="cards" >
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}
export default Latestproduct; 