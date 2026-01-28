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
            <img src="https://picsum.photos/300/200" alt="random pic" />
            <div className="TitlePriceContainer">
                <p>Card dish title</p>
                <p id="Price">price</p>
            </div>
            <p id="DescriptionP">This is the card description of the dishes</p>
            <button>Order a delivery</button>
        </div>
    );
}

export default HighlightCard;