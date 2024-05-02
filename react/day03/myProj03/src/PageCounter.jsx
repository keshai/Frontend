function PageCounter(){
  return (
    <div className="pageCounter">
        <div className="pageCounter-inner">
            <ul>
                <li> <a href="#"> 1 </a> </li>
                <li> <a id="crnt" href="#"> 2 </a> </li>
                <li> <a href="#"> 3 </a> </li>
                <li> <a href="#"> 4 </a> </li>
                <li> <a href="#"> <i class="fa-solid fa-angles-right"></i> </a> </li>
            </ul>
        </div>
    </div>
  )
}

export default PageCounter