import { Link } from "react-router-dom";

function AboutSection({heading, title, desc, link }) {
    return (
        <div className="about">
            <h1 className="heading">{heading}</h1>
            <hr />
            <div className="about-section">
                <div className="ab-left">
                    <div className="title">{title}</div>
                    <div className="desc">{desc}</div>
                    <ul>
                        <li><Link to="#">Lorem ipsum dolor sit amet </Link></li>
                        <li><Link to="#">Consectetur an adipisicing elit </Link></li>
                        <li><Link to="#">It aquecorporis nulla aspernatur </Link></li>
                        <li><Link to="#">Corporis, omnis doloremque </Link></li>
                        <li><Link to="#">Non cum id reprehenderit </Link></li>
                    </ul>
                    <button>{link}</button>
                    
                    </div>
                <div className="ab-right"></div>
            </div>
        </div>
    )
}
export default AboutSection;