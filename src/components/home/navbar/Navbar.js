import React, { useState } from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [active, setActive] = useState("home");
    const [isopen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isopen);
    };

    return (
        <header className='header'>
            <nav className="nav">
                <div className="logo">ROAMEAZY</div>
                <div className="">
                    <ul className={isopen ? "nav-link active" : "nav-link"}>
                        <li>
                            <Link
                                to="/"
                                className={active === "home" ? "active" : ""}
                                onClick={() => {
                                    setActive("home");
                                    setIsOpen(false); // Close the navbar when a link is clicked
                                }}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={active === "about" ? "active" : ""}
                                onClick={() => {
                                    setActive("about");
                                    setIsOpen(false); // Close the navbar when a link is clicked
                                }}
                            >
                             About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className={active === "contact" ? "active" : ""}
                                onClick={() => {
                                    setActive("contact");
                                    setIsOpen(false); // Close the navbar when a link is clicked
                                }}
                            >
                            Contact  Us
                            </Link>
                        </li>
                       
                    </ul>
                </div>
                <button onClick={toggle} className="navbar-toggler btn">
                    {isopen ? "X" :  "☰"}
                   
                </button>
              
            </nav>
        </header>
    );
}




// Navbar.js


// import React, { useState } from 'react';
// import './navbar.css';
//  import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="navbar">
//       <div className="logo">ROAMEAZY</div>
//       <button className="menu-toggle" onClick={toggleMenu}>
//         {isOpen ? 'Close' : 'Menu'}
//       </button>
//       <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
//       <li>
//         <Link to="/" className={active === "home" ? "active" : ""} onClick={() => setActive("home")}>Home</Link></li>
//         <li><Link to="/about" className={active === "about" ? "active" : ""} onClick={() => setActive("about")}>About Us</Link></li>
//         <li><Link to="/contact" className={active === "contact" ? "active" : ""} onClick={() => setActive("contact")}>Contact Us</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;








// // .navbar {
// //     display: flex;
// //     justify-content: space-between;
// //     align-items: center;
// //     padding: 1rem;
// //     background: #333;
// //     color: white;
// //   }
  
// //   .navbar .logo {
// //     font-size: 1.5rem;
// //   }
  
// //   .menu-toggle {
// //     display: none;
// //     background: none;
// //     border: none;
// //     color: white;
// //     font-size: 1.2rem;
// //   }
  
// //   .nav-links {
// //     display: flex;
// //     list-style: none;
// //     gap: 1rem;
// //   }
  
// //   .nav-links li a {
// //     color: white;
// //     text-decoration: none;
// //   }
  
// //   .nav-links.open {
// //     display: block;
// //   }
  
// //   @media (max-width: 768px) {
// //     .menu-toggle {
// //       display: block;
// //     }
// //     .nav-links {
// //       display: none;
// //       flex-direction: column;
// //     }
// //   }
  