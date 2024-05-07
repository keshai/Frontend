import { Link } from "react-router-dom"
function FilterProduct(){
  return (
    <div className="filterProduct">
        <div className="filterProduct-inner">
        <ul>
            <li><Link to="#" id="crnt" >All Products  </Link></li>
            <li><Link to="#">Featured                 </Link></li>
            <li><Link to="#">Flash Deals              </Link></li>
            <li><Link to="#">Last Minute              </Link></li>
        </ul>
        </div>
    </div>
  )
}

export default FilterProduct