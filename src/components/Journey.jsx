import React from "react";
import "../styles/journey.css";

export default function Journey() {
    return (
        <section className="journeySection">
            <h2>The MKI Journey</h2>

            <p>
                Contestants undergo a transformational experience that includes:
            </p>

            <div className="journeyList">
                <p>✔ Leadership and personal development workshops</p>
                <p>✔ Faith and identity sessions</p>
                <p>✔ Community impact projects</p>
                <p>✔ Mentorship from seasoned leaders</p>
                <p>✔ Media and communication training</p>
            </div>

            <p className="journeyClosing">
                By the time the crown is placed, a leader has already been formed.
            </p>
        </section>
    );
}