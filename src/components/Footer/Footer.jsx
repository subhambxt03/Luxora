import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">LUXORA</span>
          <span className="footer-tagline">HORLOGERIE · LE LOCLE · SWITZERLAND</span>
        </div>
        <div className="footer-links">
          <Link to="/#collection">Collection</Link>
          <Link to="/story">Our Story</Link>
          <Link to="/support">Support</Link>
          <Link to="/#order">Reserve</Link>
        </div>
        <div className="footer-meta">
          <p>© 2026 LUXORA Horlogerie SA. All rights reserved.</p>
          <p className="footer-credit">Designed by Shubahm Bisht</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;