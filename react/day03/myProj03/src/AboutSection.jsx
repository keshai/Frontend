

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
                        <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                        <li><a href="#">Consectetur an adipisicing elit</a></li>
                        <li><a href="#">It aquecorporis nulla aspernatur</a></li>
                        <li><a href="#">Corporis, omnis doloremque</a></li>
                        <li><a href="#">Non cum id reprehenderit</a></li>
                    </ul>
                    <button>{link}</button>
                    
                    </div>
                <div className="ab-right"></div>
            </div>
        </div>
    )
}
export default AboutSection;