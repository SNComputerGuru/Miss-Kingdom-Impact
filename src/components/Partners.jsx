import React from "react";
import "../styles/partners.css";
// import BankingDetails from "../components/BankingDetails";

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
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfTaEuqY18ii_7m7UPrXqFyav-tcJrThri1V_trCWmuSwj4cw/viewform" className="partnersButton">Volunteer</Link>
                <Link to="/bankingdetails" className="partnersButton">Donate</Link>
            </div>
        </section>
    );
}