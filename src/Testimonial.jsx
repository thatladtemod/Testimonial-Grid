
export default function Testimonial(props) {

    return (
        <article className="testimonial-card">
            <div className="profile">
                <div className="pfp-container">
                    <img className="pfp" src={props.src} alt={props.alt} />
                </div>
                <div className="info">
                    <h4>{props.name}</h4>
                    <small>Verified Graduate</small>
                </div>
            </div>
            <div className="testimony">
                <h2>{props.heading}</h2>
                <p>{props.main}</p>
            </div>
        </article>
    )
}
