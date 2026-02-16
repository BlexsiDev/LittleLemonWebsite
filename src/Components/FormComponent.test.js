import { render, expect } from "@testing-library/react";
import FormComponent from './FormComponent';

test('Initialize and updateTimes to check if they return the correct values', () => {
    render(<FormComponent />);
    const initializeTimes = jest.fn();
    const updateTimes = jest.fn();

    expect(initializeTimes).toHaveBeenCalled();
    expect(updateTimes).toHaveBeenCalled();
})