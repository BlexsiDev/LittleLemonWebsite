import "./HeroSection.css"
import { Link } from "react-router-dom";
import ChefPlate from "./assets/ChefHoldingPlate.png"

function HeroSection() {
    return(
        <section className='HeroSectionContainer'>
            <div className="DescriptionContainer">
                <div className="LogoAndSublogo">
                    <h1>Little Lemon</h1>
                    <p>Chicago</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link to={'/booking'}> <button>Reserve a table</button> </Link>
            </div>
            <img src={ChefPlate} width={400} height={450} alt="Photo of one of the restaurant owners holding a plate with 4 different types of bruschetta" />
        </section>
    );
}

export default HeroSection;