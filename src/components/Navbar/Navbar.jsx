import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);


  const handleSectionClick = (e, targetId) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname !== '/') {
      // Navigate to home with hash – no reload
      navigate('/' + targetId);
    } else {
      // Already on home – smooth scroll
      const el = document.getElementById(targetId.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    closeMenu();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="nav-brand" onClick={handleBrandClick}>
            LUXORA
          </Link>

          <ul className="nav-links">
            <li>
              <a href="#collection" onClick={(e) => handleSectionClick(e, '#collection')}>
                Collection
              </a>
            </li>
            <li>
              <a href="#story-preview" onClick={(e) => handleSectionClick(e, '#story-preview')}>
                Our Story
              </a>
            </li>
            <li>
              <a href="#craftsmanship" onClick={(e) => handleSectionClick(e, '#craftsmanship')}>
                Craftsmanship
              </a>
            </li>
            <li>
              <a href="#support" onClick={(e) => handleSectionClick(e, '#support')}>
                Support
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <a href="#order" className="btn-reserve" onClick={(e) => handleSectionClick(e, '#order')}>
              RESERVE NOW
            </a>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <button className="menu-close" onClick={closeMenu} aria-label="Close menu">✕</button>
          <ul className="mobile-links">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><a href="#collection" onClick={(e) => handleSectionClick(e, '#collection')}>Collection</a></li>
            <li><a href="#story-preview" onClick={(e) => handleSectionClick(e, '#story-preview')}>Our Story</a></li>
            <li><a href="#craftsmanship" onClick={(e) => handleSectionClick(e, '#craftsmanship')}>Craftsmanship</a></li>
            <li><a href="#support" onClick={(e) => handleSectionClick(e, '#support')}>Support</a></li>
            <li><a href="#order" className="mobile-reserve" onClick={(e) => handleSectionClick(e, '#order')}>Reserve Now</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;