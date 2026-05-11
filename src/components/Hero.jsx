import "../styles/hero.css";
const heroImage = "https://ik.imagekit.io/yq17ihow7e/New%20Folder/_MG_2432.png";

export default function Hero() {
    return (
        <section className="hero">

            <div className="heroOverlay"></div>

            <img
                src={heroImage}
                alt="Miss Kingdom Impact"
                className="heroImage"
            />

            <div className="heroContent">
                <h1>MISS KINGDOM IMPACT</h1>
            </div>

        </section>
    );
}