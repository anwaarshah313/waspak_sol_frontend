import React from 'react';
import { Link as MuiLink } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h1 className='footer-heading ff'>Cyber City</h1>
                    <address className='footer-address'>
                        <p> ©2024 Cyber City. All rights reserved.<br />
                            Located in Rex City Computer Market,<br />
                            Faisalabad. For inquiries, contact us at [email].<br />
                            Follow us on our social media for updates and special offers.
                            Terms and conditions apply.</p>
                    </address>
                    <div className="social-icons">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://wa.me/yourwhatsappphonenumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                        <a href="mailto:your-email@example.com" aria-label="Gmail">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </div>

                <div className="footer-column gg">
                    <span className='footer-subheading'>  <b>Quick Links</b> </span>
                    <ul className='footer-links'>
                        <li><MuiLink href="/" underline="none">Home</MuiLink></li>
                        <li><MuiLink href="/shop" underline="none">Shop</MuiLink></li>
                        <li><MuiLink href="/about" underline="none">About</MuiLink></li>
                        <li><MuiLink href="/contact" underline="none">Contact</MuiLink></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <span className='footer-subheading'> <b>Contact</b> </span>
                    <p className='footer-phone bb'>+92 303 0222392</p>
                    <address className='footer-address nn '>
                        <p>Cyber City, 70 Ground Floor<br />
                            1st Gallery Rex City Saraiya<br />
                            Road, Faisalabad, Pakistan<br />
                            30000
                        </p>          </address>
                </div>
            </div>

            <div className="footer-bottom">
                <p>©2024 Cyber City All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
