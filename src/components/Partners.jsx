import React from "react";
import "../styles/partners.css";
import { Link } from "react-router-dom";

export default function Partners() {
    return (
        <section className="partnersSection">
            <h2>Why Partner with Miss Kingdom Impact?</h2>

            <p>
                When you partner with MKI, you invest in:
            </p>

            <div className="partnersList">
                <p>● Youth development</p>
                <p>● Faith-based leadership</p>
                <p>● Community transformation</p>
                <p>● Empowered women shaping society</p>
            </div>

            <p className="partnersClosing">
                We welcome churches, brands, mentors, and sponsors to collaborate with us in advancing Kingdom impact.
            </p>

            <div className="partnersButtons">
                <Link to="https://wa.link/15uxbr" className="partnersButton">Become a Sponsor</Link>
                <Link to="/volunteer" className="partnersButton">Volunteer</Link>
                <Link to="/donate" className="partnersButton">Donate</Link>
            </div>
        </section>
    );
}