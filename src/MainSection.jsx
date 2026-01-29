//Components
import HeroSection from "./HeroSection";
import HighlightSection from "./HighlightSection";
import TestimonialsSection from "./TestimonialsSection";
import AboutSection from "./AboutSection";
import HighlightCard from "./HighlightCard";
import TestimonialCard from "./TestimonialCard";
//images
import GreekSalad from "./assets/GreekSalad.png"
import Bruschetta from "./assets/Bruschetta.png"
import LemonDessert from "./assets/lemon dessert.jpg"

function MainSection() {
    return(
      <main>
        <HeroSection/>
        <HighlightSection>
          <HighlightCard
          imgSrc={GreekSalad}
          imgAlt={"Some image"}
          title={"Greek Salad"}
          price={"$12.99"}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          />
          <HighlightCard
          imgSrc={Bruschetta}
          imgAlt={"Some image"}
          title={"Bruschetta"}
          price={"$5.99"}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          />
          <HighlightCard
          imgSrc={LemonDessert}
          imgAlt={"Some image"}
          title={"Lemon dessert"}
          price={"$5.00"}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          />
        </HighlightSection>
        <TestimonialsSection>
          <TestimonialCard rating={"4.5"} name={"Geronimo"} review={"Really liked food"}/>
          <TestimonialCard rating={"4.5"} name={"Jack"} review={"Really liked food"}/>
          <TestimonialCard rating={"4.5"} name={"Louis"} review={"Really liked food"}/>
          <TestimonialCard rating={"4.5"} name={"Diane"} review={"Really liked food"}/>
        </TestimonialsSection>
        <AboutSection/>
      </main>
    );
}

export default MainSection;