import React from "react";
import restaurant from "./icons_assets/restaurant.jpg"

function HomePage() {
    return <React.Fragment>
        <div className="hero">
            <div>
                <h2>Little Lemon</h2>
                <h5>Chicago</h5>
                <div>
                    Bacon ipsum dolor amet meatloaf pig prosciutto, tri-tip landjaeger sausage shank pancetta. Sirloin jerky tail beef, spare ribs tenderloin strip steak shoulder short ribs pastrami flank chicken cupim hamburger prosciutto. Chislic capicola pork belly prosciutto filet mignon ham hock pork beef ribs tenderloin jowl short ribs shoulder kevin. Sirloin flank alcatra rump.
                </div>
                <a href="/booking" className="button">Reserve a Table</a>
            </div>
            <img src={restaurant} alt="The restaurant's interior" />
        </div>

    </React.Fragment>;
}

export default HomePage;