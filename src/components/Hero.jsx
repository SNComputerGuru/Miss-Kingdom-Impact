export default function Hero() {
    return (
        <section
            style={{
                minHeight: "100vh",
                backgroundImage: "url(/hero.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center"
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.6)"
                }}
            ></div>

            <div style={{ position: "relative", zIndex: 2, maxWidth: "700px", padding: "2rem" }}>
                <h1 style={{ color: "#d4af37", fontSize: "4rem", letterSpacing: "0.18em" }}>
                    MISS KINGDOM IMPACT
                </h1>
                <p style={{ lineHeight: "1.9", margin: "2rem 0" }}>
                    A faith rooted movement raising women who lead with purpose integrity and impact
                </p>
                <button>REGISTER NOW</button>
            </div>
        </section>
    )
}