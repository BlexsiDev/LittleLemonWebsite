import React from 'react'
import Header from '../Header'
import FormComponent from '../Components/FormComponent'
import Footer from '../Footer'

import { useReducer } from "react";

const BookingPage = () => {

  const updateTimes = (state, action) =>{
    return state;
  }

  const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
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
