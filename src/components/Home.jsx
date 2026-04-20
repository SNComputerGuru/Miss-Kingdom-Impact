import React from "react";
import "../styles/home.css";
import {Link} from "react-router-dom";


export default function Home() {
    return (
        <section className="homeSection">
            <div className="homeContent">
                <h1>Arise and shine, for your light has come.</h1>
                <p>
                    Miss Kingdom Impact is a faith-based empowerment platform raising women who are rooted in faith, purpose-driven, and empowered for influence and impact.
                </p>
                <Link to="/partners">
                    <button className="homeButton">Become a Partner</button>
                </Link>
            </div>

        </section>
    );
}