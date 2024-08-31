import { useState } from "react";

function BookingPage({ availableTimes, dispatch, submitBooking }) {
    return <div>
        <h2>Book a Table</h2>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitBooking={submitBooking} />
    </div>;
}

function BookingForm({ availableTimes, dispatch, submitBooking }) {
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [guests, setGuests] = useState();
    const [occasion, setOccasion] = useState();

    return <form style={{ display: "grid", "maxWidth": "200px", gap: "20px" }} onSubmit={e => { e.preventDefault(); submitBooking(e.target.value) }} >
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={e => { setDate(e.target.value); dispatch(e.target.value); }} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time " value={time} onChange={e => setTime(e.target.value)}>
            {availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} >
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
    </form>;
}

export default BookingPage;