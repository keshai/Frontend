import QuickLinks from "../About/QuickLinks"

const Location = () => {
  return (
    <div className="location-div">
        <p className="heading">Our Location on Maps</p>
        <div className="location-inner-div">
            <div className="map">
                {/* map link */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16821.12197912234!2d75.77294648583529!3d26.849898418522766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5debf22fa8f%3A0x79ea81d0af2764a3!2sCityPark%20Jaipur!5e0!3m2!1sen!2sin!4v1714980450517!5m2!1sen!2sin" allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                {/* map link */}
            </div>
            <div className="details">
                <p className="title">About our Office</p>
                <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur nobis ipsa obcaecati illum accusamus quam mollitia assumenda placeat sed sapiente? Nulla quibusdam ab excepturi, veniam magni nam rem aliquid eos rerum voluptas! Molestiae commodi rerum exercitationem incidunt neque similique, corrupti minus itaque consequuntur impedit quisquam optio iure eaque iusto sunt?</p>
                <QuickLinks />

            </div>
        </div>
    </div>
  )
}

export default Location