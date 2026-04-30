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
                        <span>Location</span>
                        <p>Johannesburg, South Africa</p>
                    </div>

                    <div className="contactRow">
                        <span>Phone & Whatsapp Number</span>
                        <p>067 989 8916</p>
                    </div>

                    <div className="contactRow social">
                        <span>Social Media Links:</span>
                            <a href="https://www.instagram.com/miss_kingdom_impact" target="_blank"
                               rel="noreferrer">Instagram</a>
                            <a href="https://www.tiktok.com/@miss_kingdom_impact" target="_blank"
                               rel="noreferrer">TikTok</a>
                            <a href="https://www.facebook.com/profile.php?id=61578982331067" target="_blank"
                           rel="noreferrer">Facebook</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
