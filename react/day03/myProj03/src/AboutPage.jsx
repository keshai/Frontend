import Header from "./Header"
import Home from "./Home"
import AboutSection from "./AboutSection"
import QuickLinks from "./QuickLinks";
import OurTeam from "./OurTeam";

const AboutPage = () => {
  return (
    <>
        <Header />
        <Home h4="ABOUT US" h1="OUR COMPANY" />
      <div className="about-page">
        <AboutSection heading="Our Background" title="Who we are & What we do?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit." link={<QuickLinks />} />
        <OurTeam /> 
    </div>
    </>
  )
}

export default AboutPage