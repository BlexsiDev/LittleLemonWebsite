import HeroSection from "./HeroSection";
import HighlightSection from "./HighlightSection";
import TestimonialsSection from "./TestimonialsSection";
import AboutSection from "./AboutSection";
import HighlightCard from "./HighlightCard";
import TestimonialCard from "./TestimonialCard";

function MainSection() {
    return(
      <main>
        <HeroSection/>
        <HighlightSection>
          <HighlightCard
          imgSrc={"https://picsum.photos/300/200"}
          imgAlt={"Some image"}
          title={"Greek Salad"}
          price={"$12.99"}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          />
          <HighlightCard
          imgSrc={"https://picsum.photos/300/200"}
          imgAlt={"Some image"}
          title={"Bruschetta"}
          price={"$5.99"}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          />
          <HighlightCard
          imgSrc={"https://picsum.photos/300/200"}
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