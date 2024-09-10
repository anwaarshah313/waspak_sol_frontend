import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./navbar.css";

export default function Navbar() {
    const [isopen, setIsOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    const toggle = () => {
        setIsOpen(!isopen);
    };

    return (
        <header className='header'>
            <nav className="nav">
                <div className="logo"><img src='/images/logo.png'/></div>
                <div className="">
                    <ul className={isopen ? "nav-link active" : "nav-link"}>
                        <li>
                            <Link
                                to="/"
                                className={currentPath === "/" ? "active border-bottom" : ""}
                                onClick={() => {
                                    setIsOpen(false); // Close the navbar when a link is clicked
                                }}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={currentPath === "/about" ? "active border-bottom" : ""}
                                onClick={() => {
                                    setIsOpen(false); // Close the navbar when a link is clicked
                                }}
                            >
                                About Us
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                to="/contact"
                                className={currentPath === "/contact" ? "active border-bottom" : ""}
                                onClick={() => {
                                    setIsOpen(false); // Close the navbar when a link is clicked
                                }}
                            >
                                Contact Us
                            </Link>
                        </li> */}
                    </ul>
                </div>
                <button onClick={toggle} className="navbar-toggler btn">
                    {isopen ? "X" : "☰"}
                </button>
            </nav>
        </header>
    );
}
