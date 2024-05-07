import img from '../images/team_03.jpg'

const MemberCart = ({name,post}) => {
  return (
    <div className="member-cart">
        <div className="mem-img">
        <img src={img} alt="" className="cardImg" />
        </div>
        <div className="detail">
          <p className="name">{name}</p>
          <p className="post">{post}</p>
          <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, et.</p>
        </div>
        
    </div>
  )
}

export default MemberCart