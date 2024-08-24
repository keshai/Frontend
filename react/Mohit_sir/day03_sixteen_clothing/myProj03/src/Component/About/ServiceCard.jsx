import img from "../images/more-info.jpg"
const ServiceCard = ({title,desc,btn}) => {
  return (
    <div className="service-card">
        <img src={img} alt="" className="service-img" />
        <div className="details">
            <p className="service-title">{title}</p>
            <p className="service-desc">{desc}</p>
            <button className="service-btn">{btn}</button>
        </div>

    </div>
  )
}

export default ServiceCard