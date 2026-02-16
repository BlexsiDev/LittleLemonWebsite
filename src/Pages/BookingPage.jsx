import React from 'react'
import Header from '../Header'
import FormComponent from '../Components/FormComponent'
import Footer from '../Footer'
import { useReducer, useEffect } from "react";

//services
import { fetchAPI } from '../services/mockAPI';

const BookingPage = () => {

  const updateTimes = (state, action) =>{
    const selectedDate = new Date(action.payload);
    state = fetchAPI(selectedDate);
    return state;
  }

  const initializeTimes = () => {
    return fetchAPI(new Date());
  }

  const [state, dispatch] = useReducer(updateTimes, null, initializeTimes);

  return (
    <>
      <Header/>
      <FormComponent 
      availableTimes={state}
      setAvailableTimes={dispatch}/>
      <Footer/>
    </>
  )
}

export default BookingPage
