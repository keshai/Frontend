import { Link } from "react-router-dom";

function Header(){
    

    return(
        <div className="header">
            <div className="logo">SIXTEEN CLOTHING</div>
            <div className="nav">
                <Link to="/" className="navBtn">Home</Link>
                <Link to="/products" className="navBtn">Our Products</Link>
                <Link to="/about" className="navBtn">About Us</Link>
                <Link to="/contact" className="navBtn">Contact Us</Link>
            </div>
        </div>
    )
}
export default Header;