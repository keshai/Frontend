import imgs from '../images/product_01.jpg'
function ProductCard(){
    return(
       <>
            <div className="card">
                <img src={imgs} alt="" className="cardImg" />
                <div className="detail">
                    <div className="l1">
                        <h4 className="title"></h4> 
                        <h4 className="price"></h4>
                        </div>
                    <div className="l2">
                        <div className="descri"></div>
                        </div>
                    <div className="l3">
                        <div className="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div> 
                        <div className="review"></div>
                        </div>
                </div>
            </div>
        
       </>
    )
}
export default ProductCard;