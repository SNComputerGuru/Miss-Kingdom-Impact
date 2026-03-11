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
                <div className="logo">MISS KINGDOM IMPACT</div>

                <nav className={`nav ${open ? "open" : ""}`}>
                    <Link to="/" onClick={() => setOpen(false)}>HOME</Link>
                    <Link to="/about" onClick={() => setOpen(false)}>ABOUT</Link>

                    <div className="dropdown" ref={dropdownRef}>
                        <button
                            className="dropdownToggle"
                            onClick={() => setPageantOpen(!pageantOpen)}
                        >
                            PAGEANT <span className={`arrow ${pageantOpen ? "open" : ""}`}>▾</span>
                        </button>
                        {pageantOpen && (
                            <div className="dropdownMenu">
                                <Link to="/queens" onClick={() => setOpen(false)}>QUEENS</Link>
                                <Link to="/miss-philanthropy" onClick={() => setOpen(false)}>MISS KINGDOM IMPACT</Link>
                                <Link to="/nigeria" onClick={() => setOpen(false)}>SOUTH AFRICA</Link>
                                <Link to="/registration" onClick={() => setOpen(false)}>REGISTRATION</Link>
                                <Link to="/vote" onClick={() => setOpen(false)}>VOTE</Link>
                            </div>
                        )}
                    </div>

                    <Link to="/sponsors" onClick={() => setOpen(false)}>SPONSORS</Link>
                    <Link to="/gallery" onClick={() => setOpen(false)}>GALLERY</Link>
                    <Link to="/blog" onClick={() => setOpen(false)}>BLOG</Link>
                    <Link to="/contact" onClick={() => setOpen(false)}>CONTACT</Link>
                </nav>

                <button className="menuButton" onClick={() => setOpen(!open)}>
                    MENU
                </button>
            </header>
        </>
    );
}