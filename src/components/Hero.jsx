import "../styles/hero.css";
import heroImage from "../assets/hero.png";

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