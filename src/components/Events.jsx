import React, { useState } from "react";
import "../styles/events.css";

export default function Events() {
    const [active, setActive] = useState(null);

    const events = [
        {
            title: "Leadership Workshops",
            content: "Interactive sessions focused on personal growth, leadership development, and purpose driven living."
        },
        {
            title: "Outreach Initiatives",
            content: "Community impact projects designed to serve, uplift, and transform lives through meaningful action."
        },
        {
            title: "Pageant Information Sessions",
            content: "Learn more about the MKI journey, expectations, and how to become part of the movement."
        },
        {
            title: "Annual Coronation Event",
            content: "A prestigious event celebrating purpose, excellence, and the crowning of a leader ready to make impact."
        }
    ];

    return (
        <div className="eventsPage">
            <div className="ourEvents">
                <h2>Events</h2>

                <div className="eventsGrid">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className={`eventCard ${active === index ? "active" : ""}`}
                            onClick={() => setActive(active === index ? null : index)}
                        >
                            <h3>{event.title}</h3>

                            {active === index && (
                                <p className="eventContent">
                                    {event.content}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <p className="eventsNote">
                    Stay connected for updates.
                </p>
            </div>
        </div>
    );
}