import { useState } from "react";
import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch, submitBooking }) {
    return <div>
        <h2>Book a Table</h2>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitBooking={submitBooking} />
    </div>;
}

export default BookingPage;