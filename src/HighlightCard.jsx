import "./HighlightCard.css"

function HighlightCard({
    imgSrc,
    imgAlt,
    title,
    price,
    description
}) {
    return(
        <div className="CardContainer">
            {imgSrc && <img src={imgSrc} alt={imgAlt} />}
            <div className="TitlePriceContainer">
                <p>{title}</p>
                <p id="Price">{price}</p>
            </div>
            <p id="DescriptionP">{description}</p>
            <button>Order a delivery</button>
        </div>
    );
}

export default HighlightCard;