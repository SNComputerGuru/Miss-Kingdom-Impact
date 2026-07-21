import "../styles/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footerContent">
                <h3>MISS KINGDOM IMPACT</h3>

                <p className="footerNotice">
                    By using this website, you acknowledge and agree to our{" "}
                    <a
                        href="https://www.privacypolicies.com/live/02371548-5fd7-4b4f-be15-fe60d2a6551f"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Privacy Policy
                    </a>.
                </p>

                <p className="footerCopyright">
                    © {new Date().getFullYear()} Miss Kingdom Impact. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}