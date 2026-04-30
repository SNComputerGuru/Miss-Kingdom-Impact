import "../styles/sponsors.css";

export default function Sponsors() {
    const sponsors = [
        {
            name: "Sponsor One",
            logo: "/sponsors/sponsor-one.png",
            description: "Short description of what Sponsor One does.",
            socials: {
                instagram: "https://instagram.com/",
                facebook: "https://facebook.com/",
                website: "https://example.com"
            }
        },
        {
            name: "Sponsor Two",
            logo: "/sponsors/sponsor-two.png",
            description: "Short description of what Sponsor Two does.",
            socials: {
                instagram: "https://instagram.com/",
                facebook: "https://facebook.com/",
                website: "https://example.com"
            }
        },
        {
            name: "Sponsor Three",
            logo: "/sponsors/sponsor-three.png",
            description: "Short description of what Sponsor Three does.",
            socials: {
                instagram: "https://instagram.com/",
                facebook: "https://facebook.com/",
                website: "https://example.com"
            }
        }
    ];

    return (
        <section className="sponsorsPage">
            <div className="sponsorsWrapper">
                <h2>Our Sponsors</h2>

                <div className="sponsorDetails">
                    {sponsors.map((sponsor, index) => (
                        <div key={index} className="sponsorCard">
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="sponsorLogo"
                            />

                            <div>
                                <h3>{sponsor.name}</h3>
                                <p>{sponsor.description}</p>

                                <div className="sponsorLinks">
                                    <a href={sponsor.socials.instagram}>Instagram</a>
                                    <a href={sponsor.socials.facebook}>Facebook</a>
                                    <a href={sponsor.socials.website}>Website</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}