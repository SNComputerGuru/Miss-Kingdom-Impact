import React from "react";
import "../styles/aboutHomeSection.css";

export default function AboutHomeSection() {
    return (
        <section className="aboutHomeSection">
            <div className="aboutHomeWrapper">

                <div className="aboutIntro">
                    <span>Purpose. Faith. Influence.</span>
                    <h2>More Than A Pageant</h2>
                    <p>
                        Miss Kingdom Impact exists to raise women who carry beauty with substance,
                        leadership with grace, and influence rooted in Christ.
                    </p>
                </div>

                <div className="aboutEditorial">
                    <div className="editorialNumber">01</div>
                    <div>
                        <h3>Who We Are</h3>
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
                </div>

                <div className="aboutEditorial reverse">
                    <div className="editorialNumber">02</div>
                    <div>
                        <h3>Our Vision</h3>
                        <p>
                            To cultivate a generation of Kingdom minded women, rooted in faith, purpose driven, and bold in
                            influence who will rise as transformative leaders across every sphere of society.
                        </p>
                    </div>
                </div>

                <div className="offerSection">
                    <h3>What We Offer</h3>

                    <div className="offerGrid">
                        <span>Leadership development training</span>
                        <span>Public speaking and media coaching</span>
                        <span>Faith based mentorship</span>
                        <span>Career guidance</span>
                        <span>Community outreach opportunities</span>
                    </div>
                </div>

                <div className="impactStatement">
                    <h3>Impact In Action</h3>
                    <p>
                        We are committed to mentorship initiatives, women empowerment programs,
                        school and community outreach, faith based conferences, and philanthropic partnerships.
                    </p>
                </div>

            </div>
        </section>
    );
}