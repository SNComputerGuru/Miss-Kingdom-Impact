import React from "react";
import "../styles/outreaches.css";

export default function Outreaches() {

    const events = [
        // {
        //     title: "Leadership Workshops",
        //     content: "Interactive sessions focused on personal growth, leadership development, and purpose driven living."
        // },
        // {
        //     title: "Outreach Initiatives",
        //     content: "Community impact projects designed to serve, uplift, and transform lives through meaningful action."
        // },
        // // {
        // //     title: "Pageant Information Sessions",
        // //     content: "Learn more about the MKI journey, expectations, and how to become part of the movement."
        // // },
        // {
        //     title: "Annual Coronation Event",
        //     content: "A prestigious event celebrating purpose, excellence, and the crowning of a leader ready to make impact."
        // }
    ];

    return (
        <div className="eventsPage">
            <div className="ourEvents">
                <h2>Outreaches</h2>
                <p className="eventsNote">
                    Click card to read more...
                </p>
                <div className="eventsGrid">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="eventCard"
                        >
                            <h3>{event.title}</h3>
                            <p className="eventContent">{event.content}</p>
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