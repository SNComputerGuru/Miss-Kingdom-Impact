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
                textAlign: "center",
                overflowX: "hidden"
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.6)"
                }}
            ></div>

            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                    maxWidth: "100%",
                    padding: "2rem 1rem",
                    boxSizing: "border-box"
                }}
            >
                <h1
                    style={{
                        color: "#d4af37",
                        fontSize: "clamp(2rem, 8vw, 4rem)",
                        letterSpacing: "0.05em",
                        wordWrap: "break-word"
                    }}
                >
                    MISS KINGDOM IMPACT
                </h1>
                <p
                    style={{
                        lineHeight: 1.9,
                        margin: "2rem 0",
                        fontSize: "clamp(1rem, 4vw, 1.25rem)"
                    }}
                >
                    A faith rooted movement raising women who lead with purpose integrity and impact.
                </p>
                <button>REGISTER NOW</button>
            </div>
        </section>
    )
}