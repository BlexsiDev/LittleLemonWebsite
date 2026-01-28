import "./HighlightSection.css"

function HighlightSection({children}) {
    return(
        <section className='HighlightSectionContainer'>
            <h1>This week's specials</h1>
            <button>Online Menu</button>
            <div className="MultiCardContainer">
                {children}
            </div>
        </section>
    );
}

export default HighlightSection;