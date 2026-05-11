import "../styles/sponsors.css";
const shillingHoldingsLogo = "https://ik.imagekit.io/yq17ihow7e/New%20Folder/ShillingHoldingsLogo.png"
const mkoveredLogo = "https://ik.imagekit.io/yq17ihow7e/New%20Folder/MKOVERED.png";

export default function Sponsors() {
    const sponsors = [
        {
            name: "MKOVERED",
            logo: mkoveredLogo,
            description: "Founded in Johannesburg, MKovered blends faith, modesty, and elegance. Each garment is crafted to reflect inner beauty and outer grace—timeless pieces designed with prayer, quality, and love.",
            socials: {
                instagram: "https://www.instagram.com/mkovered",
                facebook: "https://www.facebook.com/profile.php?id=61573685291864",
                website: "https://www.mkovered.co.za"
            }
        },
        {
            name: "Shilling Holdings",
            logo: shillingHoldingsLogo,
            description: "Shilling Holdings is a creative media brand specializing in photography and visual storytelling" +
                ". Offering services for events, portraits, and special occasions.",
            socials: {
                instagram: "https://www.instagram.com/shillingholdings/",
                facebook: "https://www.facebook.com/shilling.ndivholisious/",
                website: "https://shillingholdings.wordpress.com/"
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