import img from './images/team_03.jpg'

const MemberCart = () => {
  return (
    <div className="member-cart">
        <div className="mem-img">
        <img src={img} alt="" className="cardImg" />
        </div>
        <div className="detail">
          <p className="name">Keshav</p>
          <p className="post">Co-founder</p>
          <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, et.</p>
        </div>
        
    </div>
  )
}

export default MemberCart