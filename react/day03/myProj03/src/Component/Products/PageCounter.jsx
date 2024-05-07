import { Link } from "react-router-dom"

function PageCounter(){
  return (
    <div className="pageCounter">
        <div className="pageCounter-inner">
            <ul>
                <li> <Link href="#"> 1 </Link> </li>
                <li id="crnt"> <Link id="a" href="#"> 2 </Link> </li>
                <li> <Link href="#"> 3 </Link> </li>
                <li> <Link href="#"> 4 </Link> </li>
                <li> <Link href="#"> <i class="fa-solid fa-angles-right"></i> </Link> </li>
            </ul>
        </div>
    </div>
  )
}

export default PageCounter