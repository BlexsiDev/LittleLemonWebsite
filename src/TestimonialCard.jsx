import "./TestimonialCard.css"

function TestimonialCard({
    rating,
    name,
    review
}) {
    return(
        <div className="TestimonialCard">
            <p>{rating}/5</p>
            <div className="User">
                <img src="https://picsum.photos/200/200" alt="profile picture"/>
                <p>{name}</p>
            </div>
            <p>{review}</p>
        </div>
    );
}

export default TestimonialCard;