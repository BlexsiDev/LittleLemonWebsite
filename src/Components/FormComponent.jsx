import "./FormComponent.css"
import { useState } from "react";
import GBArrow from "../assets/Arrow.png"
import { Link } from "react-router-dom";

function FormComponent({availableTimes, setAvailableTimes, onSubmit}){
    //State of each of the form inputs
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [numOfDinners, setNumOfDinners] = useState('');
    const [occasion, setOccasion] = useState('');

    const [blur, setBlur] = useState({
        numBlur: false,
        occBlur: false,
        dateBlur: false,
    });

    //renders a list with all the available time options
    const availableTimesFormatted = availableTimes.map((times, index) => {
        return <option key={index}>{times}</option>;
    })

    //Grabs current date and adds an extra year, so it has a max date to book a table
    const AddAYear = () =>{
        const newDate = new Date();
        newDate.setDate(newDate.getDate() + 365)
        return newDate.toISOString().split('T')[0];
    }

    //Assigns the data to the date state and sends the data to the parent component to display the available times
    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        setAvailableTimes({ payload: selectedDate })
    }

    //checks if the date that you input is in the valid range (Not in the past, not more than a year from now)
    //returns true if in the valid range or false if not
    function IsDateValid(){
        if (!date) return false;
        
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const maxDate = new Date();
        maxDate.setDate(maxDate.getDate() + 365)

        if (selectedDate < today || selectedDate > maxDate) return false;
        else return true; 
    }

    function DateErrorMessage() {
        if (!date) return "Please select a date";

        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const maxDate = new Date();
        maxDate.setDate(maxDate.getDate() + 365);

        if (selectedDate < today) return "Can't book a table in the past";
        else if (selectedDate > maxDate) return "Can't book a table more than a year in advance";
    }

    //Form submition
    function HandleSubmit(e) {
        e.preventDefault();
        onSubmit({date, time, occasion, numOfDinners});
    }

    //These are variables containing different expressions so I don't have to re type them everytime
    const NoDCheck = numOfDinners >= 1 && numOfDinners <= 10;

    return(
        <section className="FormSection">
            <div className="FormContainer">
                <header>
                    <Link to={'/'}>
                        <button><img src={GBArrow} alt="Go back arrow Icon for the go back button" width={30}/></button>
                    </Link>
                    <h1>Reserve a table</h1>
                </header>

                <form onSubmit={HandleSubmit}>
                    <span style={{color: "black", textAlign: "left"}}>All fields with the symbol * are mandatory</span>
                    <div>
                    <label htmlFor="Date">Date*</label>
                    <br/>
                    <input
                        type="date"
                        id="Date"
                        name="Date"
                        value={date}
                        onChange={handleDateChange}
                        onBlur={() => setBlur({...blur, dateBlur: true})}
                        min={new Date().toISOString().split('T')[0]}
                        max={AddAYear()}
                        required/>
                        {blur.dateBlur && IsDateValid && <span>{DateErrorMessage()}</span>}
                    </div>

                    <div>
                        <label htmlFor="Time">Time*</label>
                        <br/>
                        <select
                        value={time}
                        onChange={ (e) => setTime(e.target.value)}
                        required>
                            {availableTimesFormatted}
                        </select>
                        {!time && <span>Please select a time</span>}
                    </div>

                    <div>
                        <label htmlFor="NumOfDin">Number of dinners*</label>
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
                        onBlur={() => setBlur({...blur, numBlur: true})}
                        required/>
                        {blur.numBlur && !NoDCheck && <span>Must be a number between 1 and 10</span>}
                    </div>

                    <div>
                        <label htmlFor="ocassion">Occasion*</label>
                        <select
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        onBlur={() => setBlur({...blur, occBlur: true})}
                        id="occasion">
                            <option value="">Select an option</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Other">Other</option>
                        </select>
                        {blur.occBlur && !occasion && <span>Please select an option</span>}
                    </div>

                    <button disabled={!IsDateValid() || !NoDCheck || !occasion || !numOfDinners} id="reserve">
                        Make your reservation
                    </button>                
                </form>
            </div>
        </section>
    );
}

export default FormComponent;

//duped functions for testing

export function IsDateValid(date){
    if (!date) return false;

    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 365)

    if (selectedDate < today || selectedDate > maxDate) return false;
    else return true;
}

export function DateErrorMessage(date) {
    if (!date) return "Please select a date";

    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 365);

    if (selectedDate < today) return "Can't book a table in the past";
    else if (selectedDate > maxDate) return "Can't book a table more than a year in advance";
}