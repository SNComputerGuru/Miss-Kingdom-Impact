import React from "react";
import {Link} from "react-router-dom";
import "../styles/aboutHomeSection.css";

export default function AboutHomeSection() {
    return (
        <div className="aboutHomeSection">

            <div className="homeBlock whoWeAre">
                <h2>Who We Are</h2>
                <p>
                    Miss Kingdom Impact was founded on the belief that true beauty shines brightest when paired
                    with purpose.
                </p>
                <p>
                    What began as a vision to empower young women has grown into a platform that cultivates
                    faith, leadership, and service. MKI exists to challenge cultural definitions of beauty and replace
                    them with identity rooted in Christ.
                </p>
            </div>

            <div className="homeBlock ourVision">
                <h2>Our Vision</h2>
                <p>
                    To cultivate a generation of Kingdom-minded women, rooted in faith, purpose driven, and bold in
                    influence - who will rise as transformative leaders across every sphere of society.
                </p>
            </div>

            <div className="homeBlock whatWeOffer">
                <h2>What We Offer</h2>
                <p>Through Miss Kingdom Impact, contestants receive:</p>
                <ul>
                    <li>Leadership development training</li>
                    <li>Public speaking and media coaching</li>
                    <li>Faith-based mentorship</li>
                    <li>Career guidance</li>
                    <li>Community outreach opportunities</li>
                </ul>
            </div>

            <div className="homeBlock impactInAction">
                <h2>Impact In Action</h2>

                <ul>
                    <p>We are committed to:</p>
                    <li>Mentorship initiatives</li>
                    <li>Women empowerment programs</li>
                    <li>School and community outreach</li>
                    <li>Faith-based conferences</li>
                    <li>Philanthropic partnerships</li>
                </ul>
            </div>

        </div>
    );
}