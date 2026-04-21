import React from "react";
import "../styles/contact.css";

export default function Contact() {
    return (
        <section className="contactPage">
            <div className="contactWrapper">
                <h2>Contact</h2>

                <p className="contactIntro">
                    We would love to hear from you.
                </p>

                <div className="contactCard">
                    <div className="contactRow">
                        <span>Email</span>
                        <p>info.misskingdomimpact@gmail.com</p>
                    </div>

                    <div className="contactRow">
                        <span>Social Media</span>
                        <p>@misskingdomimpact</p>
                    </div>

                    <div className="contactRow">
                        <span>Location</span>
                        <p>Johannesburg, South Africa</p>
                    </div>

                    <div className="contactRow">
                        <span>Phone Number</span>
                        <p>067 989 8916</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
