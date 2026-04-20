import React from "react";
import "../styles/contact.css";

export default function Contact() {
    return (
        <section className="contactSection">
            <h2>Contact</h2>
            <p>We would love to hear from you.</p>

            <div className="contactInfo">
                <p><strong>Email:</strong> info.misskingdomimpact@gmail.com</p>
                <p><strong>Social Media:</strong> @misskingdomimpact</p>
                <p><strong>Location:</strong> Johannesburg, South Africa</p>
                <p><strong>Phone Number:</strong> 067 989 8916</p>
            </div>
        </section>
    );
}