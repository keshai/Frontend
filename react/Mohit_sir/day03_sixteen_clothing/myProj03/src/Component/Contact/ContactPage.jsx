import Home from "../Home/Home.jsx"
import Location from "./Location.jsx"

const ContactPage = () => {
  return (
    <>
        <Home h4="Contact Us" h1="let's get in touch" />
        <div className="Location-main-div">
        <Location />
    </div>
    </>
  )
}

export default ContactPage