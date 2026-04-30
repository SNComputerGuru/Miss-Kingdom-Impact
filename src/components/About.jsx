import "../styles/about.css";

export default function About() {
    const aboutCards = [
        {
            title: "Our Story",
            content: (
                <>
                    <p>
                        Miss Kingdom Impact is more than a beauty pageant; it is an NPO that celebrates purpose,
                        leadership, and service. <br />
                        Founded on the belief that true beauty shines brightest when paired
                        with purpose, the pageant empowers young women to become confident leaders,
                        compassionate changemakers, and ambassadors for positive transformation in their
                        communities.
                    </p>

                    <p>
                        We believe every woman carries the potential to influence the world around her. Miss Kingdom
                        Impact provides a platform where grace meets purpose, equipping contestants with life skills,
                        mentorship, and opportunities to engage in philanthropic initiatives that uplift lives and
                        advance social good.
                    </p>
                </>
            )
        },
        {
            title: "Our Vision",
            content: (
                <p>
                    To cultivate a generation of Kingdom minded women, rooted in faith, purpose driven, and bold in
                    influence who will rise as transformative leaders across every sphere of society.
                </p>
            )
        },
        {
            title: "Our Mission",
            content: (
                <p>
                    To empower young women to discover their identity in Christ Jesus, walk boldly in their
                    God given purpose and lead change with excellence and compassion.
                </p>
            )
        },
        {
            title: "Our Core Values",
            content: (
                <div className="aboutValues">
                    <p>Faith</p>
                    <p>Integrity</p>
                    <p>Excellence</p>
                    <p>Service</p>
                    <p>Leadership</p>
                    <p>Purpose</p>
                </div>
            )
        },
        {
            title: "Founder's Message",
            content: (
                <div className="foundersMessageBlock">
                    <p className="emailIntro">
                        <strong>From the Founder</strong>
                    </p>

                    <p>
                        Miss Kingdom Impact was birthed from a deep conviction that women are not called to shrink,
                        but to be the light, with substance.
                    </p>

                    <p>
                        In a world that often measures beauty externally, MKI redefines it through character, purpose,
                        and Christ centered leadership
                    </p>

                    <p>
                        This platform is not about crowns for display, but hearts surrendered in Christ and doing His
                        will. It is about raising women who understand that influence is stewardship and that true
                        impact begins within.
                    </p>

                    <p>
                        My prayer is that every woman who walks through MKI leaves empowered, equipped, and anchored in
                        her identity in Christ.
                    </p>

                    <p>
                        This is more than a pageant. It is a movement of purpose.
                    </p>

                    <p className="signature">
                        <strong>
                            Halatedzi Netshirembe
                            <br />
                            Founder, Miss Kingdom Impact
                        </strong>
                    </p>
                </div>
            )
        }
    ];

    return (
        <section className="aboutPage">
            <div className="aboutWrapper">
                <h2 className="aboutMissKingdomImpact">
                    About Miss Kingdom Impact
                </h2>

                <div className="aboutStack">
                    {aboutCards.map((card, index) => (
                        <div
                            key={index}
                            className={
                                card.title === "Founder's Message"
                                    ? "founderLetterCard"
                                    : "aboutCard"
                            }
                        >
                            <h3>{card.title}</h3>

                            <div className="aboutContent">
                                {card.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}