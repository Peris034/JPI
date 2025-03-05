import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/JPI.png';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="header-wrapper align-items-center justify-content-between position-relative">
            {/* Logo */}
            <div className="brand-logo d-flex align-items-center">
                <img src={logo} alt="company-logo" className="company-logo" loading="lazy" />
            </div>

            {/* Mobile Menu Button */}
            <button
                className="menu-toggler d-sm-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>

            {/* Menu - Mobile & Desktop */}
            <div className={`header-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul className="nav">
                    <li className="nav-item"><Link to="/" className="nav-link"><i className="fa-solid fa-house"></i> Home</Link></li>
                    <li className="nav-item"><Link to="/certificates" className="nav-link"><i className="fa-solid fa-certificate"></i> Certificates</Link></li>
                    <li className="nav-item"><Link to="/downloads" className="nav-link"><i className="fa-solid fa-download"></i> Downloads</Link></li>
                    <li className="nav-item"><Link to="/payments" className="nav-link"><i className="fa-solid fa-credit-card"></i> Payments</Link></li>
                    <li className="nav-item"><Link to="/inquiry" className="nav-link"><i className="fa-solid fa-headset"></i> Inquiry</Link></li>
                    <li className="nav-item"><Link to="/contact" className="nav-link"><i className="fa-solid fa-address-card"></i> Contact Details</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
