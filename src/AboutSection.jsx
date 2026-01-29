import "./AboutSection.css"
import MAA from "./assets/Mario and Adrian A.jpg"
import RCB from "./assets/restaurant chef B.jpg"

function AboutSection() {
    return(
        <section className='AboutSectionContainer'>
            <div className="AboutTextContainer">
                <h1>Little Lemon</h1>
                <p>Chicago</p>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="ImgContainer">
                <img id="BottomImage" src={RCB} alt="" width={280} height={350}/>
                <img id="TopImage" src={MAA} alt="" width={280} height={350}/>
            </div>
        </section>
    );
}

export default AboutSection;