import Header from "../Header/Header"
import Home from "../Home/Home"
import AboutSection from "../Home/AboutSection"
import QuickLinks from "./QuickLinks";
import OurTeam from "./OurTeam";
import ServiceCard from "./ServiceCard"
import Partner from "./Partner";
const AboutPage = () => {
  return (
    <>
        <Home h4="ABOUT US" h1="OUR COMPANY" />
      <div className="about-page">
        <AboutSection heading="Our Background" title="Who we are & What we do?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit." link={<QuickLinks />} />
        <OurTeam /> 
    </div>

    <div className="Service-div">     
            <ServiceCard title="title" desc="discription" btn="read more" />
            <ServiceCard title="title" desc="discription" btn="read more" />
            <ServiceCard title="title" desc="discription" btn="read more" />
        </div>
    </>
  )
}

export default AboutPage