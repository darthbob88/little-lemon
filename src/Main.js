import { Route, Routes } from "react-router";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
function Main() {
    return <main>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
    </main>;
}

export default Main;