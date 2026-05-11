import "../styles/hero.css";

export default function Hero({ heroImage }) {
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