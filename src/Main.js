import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import { useReducer } from "react";
function Main() {
    const defaultTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    const updateTimes = (date) => defaultTimes;
    const initializeTimes = () => defaultTimes;
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return <main>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}></Route>
        </Routes>
    </main>;
}

export default Main;