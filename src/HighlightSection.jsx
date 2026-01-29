import "./HighlightSection.css"

function HighlightSection({children}) {
    return(
        <section className='HighlightSectionContainer'>
            <div className="TextAndButtonContainer">
                <h1>This week's specials</h1>
                <button>Online Menu</button>
            </div>
            <div className="MultiCardContainer">
                {children}
            </div>
        </section>
    );
}

export default HighlightSection;