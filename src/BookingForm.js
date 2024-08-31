import { useState } from "react";
function BookingForm({ availableTimes = ["17:00", "17:30", "19:00"], dispatch, submitBooking }) {
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [guests, setGuests] = useState();
    const [occasion, setOccasion] = useState();

    const isValidBooking = (date != null) && (time != null) && (guests > 1) && (occasion != null);

    return <form style={{ display: "grid", "maxWidth": "200px", gap: "20px" }} onSubmit={e => { e.preventDefault(); submitBooking(e.target.value) }} >
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={e => { setDate(e.target.value); dispatch(e.target.value); }} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time " value={time} onChange={e => setTime(e.target.value)}>
            <option disabled>Please select a time</option>
            {availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} >
            <option disabled>Please select an occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input type="submit" disabled={!isValidBooking} value="Make Your reservation" />
    </form>;
}

export default BookingForm;