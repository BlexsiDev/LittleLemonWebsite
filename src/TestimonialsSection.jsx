import "./TestimonialsSection.css"

function TestimonialsSection({children}) {
    return(
        <section className='TestimonialsSectionContainer'>
            <h1>Testimonials</h1>
            <div className="TestimonialCardContainer">
                {children}
            </div>
        </section>
    );
}

export default TestimonialsSection;