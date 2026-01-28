import HeroSection from "./HeroSection";
import HighlightSection from "./HighlightSection";
import TestimonialsSection from "./TestimonialsSection";
import AboutSection from "./AboutSection";
import HighlightCard from "./HighlightCard";

function MainSection() {
    return(
      <main>
        <HeroSection/>
        <HighlightSection>
          <HighlightCard/>
          <HighlightCard/>
          <HighlightCard/>
        </HighlightSection>
        <TestimonialsSection/>
        <AboutSection/>
      </main>
    );
}

export default MainSection;