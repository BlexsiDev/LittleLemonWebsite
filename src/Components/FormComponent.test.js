import { render, expect } from "@testing-library/react";
import { vi, test } from "vitest";
import FormComponent from './FormComponent';

test('Initialize and updateTimes to check if they return the correct values', () => {
    render(<FormComponent />);
    const initializeTimes = vi.fn()
    const updateTimes = vi.fn();

    expect(initializeTimes).toHaveBeenCalled();
    expect(updateTimes).toHaveBeenCalled();
})