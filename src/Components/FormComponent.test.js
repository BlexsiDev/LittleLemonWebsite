import { expect, describe, it } from "vitest";
import { IsDateValid, DateErrorMessage } from "./FormComponent";
import { initializeTimes, updateTimes } from "../Pages/BookingPage";
import { fetchAPI } from "../services/mockAPI";

describe("Test intialize times function and update times function from the booking page component", () => {
    it('should call the fetch API function with the current date (always will the current date) and return an array of hours', () => {
        //Current day will work as a seed for the API
        const daySeed = new Date();
        
        const expectedResult = fetchAPI(daySeed);

        const result = initializeTimes(daySeed);

        expect(result).toStrictEqual(expectedResult);
    });

    it('we feed a date to this function and it should return an array of hours' ,() => {
        const state = ['17:00', '17:30', '18:00'] //filler values, doesn't really matter as it is gonna be updated
        const action = {payload: "2026-02-26"} //serves as the selected date
        
        const expectedResult = fetchAPI(new Date(action.payload));
        const result = updateTimes(state, action);

        expect(result).toStrictEqual(expectedResult);
    });
});

describe('Test the IsDateValid and DateErrorMessage functions which validate date in the form component, all other validations are already done inline', () => {
    it('should validate if the date state is true or false inside the range of a year', () =>{
        const validDate = new Date();
        const invalidDate = ""

        const expectedValidResult = IsDateValid(validDate);
        const expectedInvalidResult = IsDateValid(invalidDate);

        expect(expectedValidResult).toBe(true);
        expect(expectedInvalidResult).toBe(false);
    })

    it('should return the correct error message for invalid date', () =>{
        const invalidDate00 = "" //Empty date string

        const invalidDate01 = new Date()
        invalidDate01.setDate(invalidDate01.getDate() - 1) //date one day in the past

        const invalidDate02 = new Date ()
        invalidDate02.setDate(invalidDate02.getDate() + 370) //Date more than a year in the future

        const expectedInvalidResult00 = DateErrorMessage(invalidDate00);
        const expectedInvalidResult01 = DateErrorMessage(invalidDate01);
        const expectedInvalidResult02 = DateErrorMessage(invalidDate02);

        expect(expectedInvalidResult00).toBe("Please select a date");
        expect(expectedInvalidResult01).toBe("Can't book a table in the past");
        expect(expectedInvalidResult02).toBe("Can't book a table more than a year in advance");
    })
});