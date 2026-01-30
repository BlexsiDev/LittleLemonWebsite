import "./FormComponent.css"
import { useState } from "react";
import GBArrow from "../assets/Arrow.png"
import BGimage from "../assets/restaurant chef B.jpg"

function FormComponent(){
    const [date, setDate] = useState('');
    

    function HandleSubmit(e) {
        e.preventDefault();
        console.log("Submitted!")
    }

    return(
        <section className="FormSection">
            <div className="FormContainer">
                <header>
                    <button><img src={GBArrow} alt="Go back arrow Icon" width={30}/></button>
                    <h1>Reserve a table</h1>
                </header>

                <form onSubmit={HandleSubmit}>
                    <div>
                        <label htmlFor="FullName">Full name</label>
                        <br/>
                        <input
                        type="text"
                        id="FullName"
                        name="FullName"
                        placeholder="Enter your full name"
                        min={3}
                        max={30}
                        required/>
                    </div>
                    
                    <div>
                        <label htmlFor="NumOfDin">Number of dinners</label>
                        <br/>
                        <input
                        type="number"
                        id="NumOfDin"
                        name="NumOfDin"
                        placeholder="Select a number"
                        min={1}
                        max={15}
                        required/>
                    </div>

                    <div>
                    <label htmlFor="Date">Date</label>
                    <br/>
                    <input
                        type="date"
                        id="Date"
                        name="Date"
                        value={date}
                        onChange={ (e) => setDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        required/>
                    </div>

                    <div>
                        <label htmlFor="Hour">Hour</label>
                        <br/>
                        <input
                        type="time"
                        id="Hour"
                        name="Hour"
                        min="09:00"
                        max="17:00"
                        required/>
                    </div>

                    <div>
                        <label htmlFor="Email">Email</label>
                        <br/>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required/>
                    </div>

                    <div>
                        <label htmlFor="Phone">Phone Number</label>
                        <br/>
                        <input
                        type="tel"
                        id="Phone"
                        name="Phone"
                        placeholder="123-45-678"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required/>
                    </div>

                    <div>
                        <label htmlFor="Notes">Notes</label>
                        <br/>
                        <textarea
                        type="text"
                        id="Notes"
                        name="Notes"
                        placeholder="e.g. alergies"
                        max={300}/>
                    </div>

                    <button id="reserve">Reserve</button>
                </form>
            </div>
            
        </section>
    );
}

export default FormComponent;