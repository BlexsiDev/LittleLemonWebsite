//Components
import HeroSection from "./HeroSection";
import HighlightSection from "./HighlightSection";
import TestimonialsSection from "./TestimonialsSection";
import AboutSection from "./AboutSection";
import HighlightCard from "./HighlightCard";
import TestimonialCard from "./TestimonialCard";
//Component from the booking page
import FormComponent from "./Components/FormComponent";

//images
import GreekSalad from "./assets/GreekSalad.png"
import Bruschetta from "./assets/Bruschetta.png"
import LemonDessert from "./assets/lemon dessert.jpg"

function MainSection() {
    return(
      <main>
        <FormComponent/>
      </main>
    );
}

export default MainSection;