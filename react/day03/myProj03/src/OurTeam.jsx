import MemberCart from "./MemberCart"
const OurTeam = () => {
  return (

    <div className="ourTeam">
        <h1 className="heading">Our Team Members</h1>
           <div className="member-section">
                {/* Member cart call () */}
                <MemberCart name="Keshav" post="CEO" />
                <MemberCart name="Mohit" post="MLA" />
                <MemberCart name="Pranjal" post="Senoir Dev." />
                <MemberCart />
                <MemberCart />
                <MemberCart />
                
           </div>
    </div>
  )
}

export default OurTeam