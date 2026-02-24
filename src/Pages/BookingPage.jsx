import Header from '../Header'
import FormComponent from '../Components/FormComponent'
import Footer from '../Footer'

import { useReducer } from "react";
import { useNavigate } from 'react-router-dom';

//services
import { fetchAPI, submitAPI } from '../services/mockAPI';

const BookingPage = () => {
  //Put the useNavigate outside the function
  const Nav = useNavigate();

  //Receives the data and submits it to the API, 
  //if it is succesful it sends you to the confirmation page 
  //otherwise it throws an alert.
  const handleFormSubmit = (formData) => {
    const serverResponse = submitAPI(formData);
    if (serverResponse) {
      Nav('/booking/confirmation');
    } else {
      alert("An error ocurred when sending the form, please wait and try again later");
    }
  }

  //Receives a date and assigns it to a variable then sends it to the API which returns a set
  //of available hours and assigns it to the state and returns the state to the caller
  //Would have made it shorter but helps me with readability
  const updateTimes = (state, action) =>{
    const selectedDate = new Date(action.payload);
    state = fetchAPI(selectedDate);
    return state;
  }

  //Initializer that gets today's date and then returns the available
  const initializeTimes = () => {
    return fetchAPI(new Date());
  }
  
  //useReducer
  const [state, dispatch] = useReducer(updateTimes, null, initializeTimes);

  return (
    <>
      <Header/>
      <FormComponent 
      availableTimes={state}
      setAvailableTimes={dispatch}
      onSubmit={handleFormSubmit}/>
      <Footer/>
    </>
  )
}

export default BookingPage
