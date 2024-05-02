function FilterProduct(){
  return (
    <div className="filterProduct">
        <div className="filterProduct-inner">
        <ul>
            <li><a id="crnt" href="#">All Products</a></li>
            <li><a href="#">Featured</a></li>
            <li><a href="#">Flash Deals</a></li>
            <li><a href="#">Last Minute</a></li>
        </ul>
        </div>
    </div>
  )
}

export default FilterProduct