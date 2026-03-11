import { useState, useRef, useEffect } from "react"
import "../styles/header.css"

export default function Header() {
    const [open, setOpen] = useState(false)
    const [pageantOpen, setPageantOpen] = useState(false)

    const dropdownRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setPageantOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <>
            {open && <div className="backdrop" onClick={() => setOpen(false)}></div>}

            <header className="header">
                <div className="logo">MISS KINGDOM IMPACT</div>

                <nav className={`nav ${open ? "open" : ""}`}>
                    <a href="/" onClick={() => setOpen(false)}>HOME</a>
                    <a href="/about" onClick={() => setOpen(false)}>ABOUT</a>

                    <div className="dropdown" ref={dropdownRef}>
                        <button
                            className="dropdownToggle"
                            onClick={() => setPageantOpen(!pageantOpen)}
                        >
                            PAGEANT <span className={`arrow ${pageantOpen ? "open" : ""}`}>▾</span>
                        </button>
                        {pageantOpen && (
                            <div className="dropdownMenu">
                                <a href="/queens" onClick={() => setOpen(false)}>QUEENS</a>
                                <a href="/miss-philanthropy" onClick={() => setOpen(false)}>MISS PHILANTHROPY</a>
                                <a href="/nigeria" onClick={() => setOpen(false)}>NIGERIA</a>
                                <a href="/registration" onClick={() => setOpen(false)}>REGISTRATION</a>
                                <a href="/vote" onClick={() => setOpen(false)}>VOTE</a>
                            </div>
                        )}
                    </div>

                    <a href="/sponsors" onClick={() => setOpen(false)}>SPONSORS</a>
                    <a href="/gallery" onClick={() => setOpen(false)}>GALLERY</a>
                    <a href="/blog" onClick={() => setOpen(false)}>BLOG</a>
                    <a href="/contact" onClick={() => setOpen(false)}>CONTACT</a>
                </nav>

                <button className="menuButton" onClick={() => setOpen(!open)}>
                    MENU
                </button>
            </header>
        </>
    )
}