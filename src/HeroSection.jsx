import "./HeroSection.css"
import ChefPlate from "./assets/ChefHoldingPlate.png"

function HeroSection() {
    return(
        <section className='HeroSectionContainer'>
            <div className="DescriptionContainer">
                <h1>Little Lemon</h1>
                <p>Chicago</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil id reiciendis officiis sapiente. Eaque eveniet iusto nemo, eos error, quos nostrum obcaecati ex quae, officiis aut sequi ducimus sint!</p>
                <button>Reserve a table</button>
            </div>
            <img src={ChefPlate} width={400} height={450} alt="Photo of one of the restaurant owners holding a plate with 4 different types of bruschetta" />
        </section>
    );
}

export default HeroSection;