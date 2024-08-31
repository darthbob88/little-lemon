import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const dateElement = screen.getByText("Choose date");
    expect(dateElement).toBeInTheDocument();
})