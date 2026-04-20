import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [pageantOpen, setPageantOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setPageantOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            {open && <div className="backdrop" onClick={() => setOpen(false)}></div>}

            <header className="header">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <div className="logo">MISS KINGDOM IMPACT</div>
                </Link>

                <nav className={`nav ${open ? "open" : ""}`}>
                    <Link to="/" onClick={() => setOpen(false)}>HOME</Link>

                    <div className="dropdown" ref={dropdownRef}>
                        <button
                            className="dropdownToggle"
                            onClick={() => setPageantOpen(!pageantOpen)}
                        >
                            PAGEANT <span className={`arrow ${pageantOpen ? "open" : ""}`}>▾</span>
                        </button>
                        {pageantOpen && (
                            <div className="dropdownMenu">
                                <Link to="/journey" onClick={() => setOpen(false)}>THE MKI JOURNEY</Link>
                                <Link to="/queens" onClick={() => setOpen(false)}>QUEENS</Link>
                                <Link to="/vote" onClick={() => setOpen(false)}>VOTE</Link>
                            </div>
                        )}
                    </div>

                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSeF-tJ41V94o7BK5_NrVfJ5IA_PfKTYxGVEpElrrxMyBOlOWQ/viewform?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnCePa8Q_O2BD315GrSa8WGhT-G4qxEijkoCZPBLVFCkQGPQ0OXyH11HYMA2c_aem_tB2KwJXfXu6tKRZ3a3ZOuw" onClick={() => setOpen(false)}>REGISTRATION</Link>
                    <Link to="/events" onClick={() => setOpen(false)}>OUTREACHES</Link>
                    <Link to="/sponsors" onClick={() => setOpen(false)}>SPONSORS</Link>
                    <Link to="/blog" onClick={() => setOpen(false)}>BLOG</Link>
                    <Link to="/about" onClick={() => setOpen(false)}>ABOUT</Link>
                    <Link to="/contact" onClick={() => setOpen(false)}>CONTACT</Link>

                </nav>

                <button className="menuButton" onClick={() => setOpen(!open)}>
                    MENU
                </button>
            </header>
        </>
    );
}