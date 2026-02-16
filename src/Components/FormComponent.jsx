import "./FormComponent.css"
import { useState } from "react";
import GBArrow from "../assets/Arrow.png"
import { Link } from "react-router-dom";

function FormComponent({availableTimes, setAvailableTimes, onSubmit}){
    //State of each of the form inputs
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numOfDinners, setNumOfDinners] = useState('');
    const [occasion, setOccasion] = useState('');

    //renders a list with all the available time options
    const availableTimesFormatted = availableTimes.map((times, index) => {
        return <option key={index}>{times}</option>
    })

    //Grabs current date and adds an extra year, so it has a max date to book a table
    const AddAYear = () =>{
        const date = new Date();
        date.setDate(date.getDate() + 365)
        return date.toISOString().split('T')[0];
    }

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        setAvailableTimes({ payload: selectedDate })
    }

    //Form submition
    function HandleSubmit(e) {
        e.preventDefault();
        onSubmit("Chocolate con leche");
    }

    return(
        <section className="FormSection">
            <div className="FormContainer">
                <header>
                    <Link to={'/'}>
                        <button><img src={GBArrow} alt="Go back arrow Icon" width={30}/></button>
                    </Link>
                    <h1>Reserve a table</h1>
                </header>

                <form onSubmit={HandleSubmit}>
                    <div>
                    <label htmlFor="Date">Date</label>
                    <br/>
                    <input
                        type="date"
                        id="Date"
                        name="Date"
                        value={date}
                        onChange={handleDateChange}
                        min={new Date().toISOString().split('T')[0]}
                        max={AddAYear()}
                        required/>
                    </div>

                    <div>
                        <label htmlFor="Time">Time</label>
                        <br/>
                        <select
                        value={time}
                        onChange={ (e) => setTime(e.target.value)}
                        required>
                            {availableTimesFormatted}
                        </select>
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
                        max={10}
                        value={numOfDinners}
                        onChange={(e) => setNumOfDinners(e.target.value)}
                        required/>
                    </div>

                    <div>
                        <label htmlFor="ocassion">Occasion</label>
                        <select
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        id="occasion">
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <button disabled={!date && !numOfDinners} id="reserve">Make your reservation</button>                
                </form>
            </div>
            
        </section>
    );
}

export default FormComponent;