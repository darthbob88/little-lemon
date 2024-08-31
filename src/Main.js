import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import { useReducer } from "react";
import ConfirmedBooking from "./ConfirmedBooking";
function Main() {
    // Because I don't recall this course ever explaining
    // how to interact with a bare third-party script like this.
    const seededRandom = function (seed) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function (date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function (formData) {
        return true;
    };

    const navigate = useNavigate();

    const updateTimes = (availableTimes, date) => {
        console.log(date)
        return fetchAPI(new Date(date));
    };
    const initializeTimes = () => fetchAPI(new Date());
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    }

    return <main>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitBooking={submitForm} />}></Route>
            <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
        </Routes>
    </main>;
}

export default Main;