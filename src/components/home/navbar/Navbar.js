import React, { useState } from 'react';
import "./navbar.css";

export default function Navbar() {
    const [active, setActive] = useState("home");

    return (
        <header className='header'>
            <nav className="nav">
                <div className="logo">ROAMEAZY</div>
                <ul>
                    <li><a href="/" className={active === "home" ? "active" : ""} onClick={() => setActive("home")}>Home</a></li>
                    <li><a href="/about" className={active === "about" ? "active" : ""} onClick={() => setActive("about")}>About Us</a></li>
                    <li><a href="/contact" className={active === "contact" ? "active" : ""} onClick={() => setActive("contact")}>Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
}
