import { useState } from "react"
import "../styles/header.css"

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <>
            {open && <div className="backdrop" onClick={() => setOpen(false)}></div>}

            <header className="header">
                <div className="logo">MISS KINGDOM IMPACT</div>

                <nav className={`nav ${open ? "open" : ""}`}>
                    <a href="/" onClick={() => setOpen(false)}>HOME</a>
                    <a href="/about" onClick={() => setOpen(false)}>ABOUT</a>
                    <a href="/pageant" onClick={() => setOpen(false)}>PAGEANT</a>
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