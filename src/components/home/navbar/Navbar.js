import React, { useState } from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [active, setActive] = useState("home");

    return (
        <header className='header'>
            <nav className="nav">
                <div className="logo">ROAMEAZY</div>
                <ul>
                    <li><Link to="/" className={active === "home" ? "active" : ""} onClick={() => setActive("home")}>Home</Link></li>
                    <li><Link to="/about" className={active === "about" ? "active" : ""} onClick={() => setActive("about")}>About Us</Link></li>
                    <li><Link to="/contact" className={active === "contact" ? "active" : ""} onClick={() => setActive("contact")}>Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
}
