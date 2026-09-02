import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const watchRef = useRef(null);
  const containerRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const watch = watchRef.current;
    const box = boxRef.current;
    if (!container || !watch || !box) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      // Normalize x and y to -1 .. 1
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      
      watch.style.transform = `translate(${x * 16}px, ${y * 16}px) scale(1.03) rotate(${x * 2}deg)`;

     
      box.style.transform = `
        perspective(800px)
        rotateY(${x * 15}deg)
        rotateX(${-y * 15}deg)
        translateX(${x * 30}px)
        translateY(${y * 30}px)
        scale(1.02)
      `;
    };

    const handleMouseLeave = () => {
      watch.style.transform = 'translate(0, 0) scale(1) rotate(0deg)';
      box.style.transform = 'perspective(800px) rotateY(0) rotateX(0) translateX(0) translateY(0) scale(1)';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="hero section-padding" id="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-label">Since 1847</div>
          <h1 className="hero-title">
            <span className="gold">LUXORA</span>
          </h1>
          <div className="hero-subtitle">Masters of Time</div>
          <div className="golden-line"></div>
          <p className="hero-desc">
            <span className="desc-line">Since 1847, LUXORA has crafted the world's most refined timepieces.</span>
            <span className="desc-line alt">Each watch is a testament to Swiss precision, hand‑assembled in our Le Locle atelier.</span>
          </p>
          <div className="hero-buttons">
            <a href="#collection" className="btn-gold pill">
              EXPLORE COLLECTION
            </a>
            <Link to="/story" className="btn-outline-gold pill">
              OUR LEGACY <span className="arrow">→</span>
            </Link>
          </div>
        </div>

        <div className="hero-visual" ref={containerRef}>
          <div className="watch-glow"></div>
          <div className="watch-box" ref={boxRef}>
            <img
              ref={watchRef}
              src="/images/hero-watch.png"
              alt="LUXORA Hero Watch"
              className="hero-watch"
            />
          </div>

         
          <div className="spec-box spec-top-left">
            <div className="spec-label">Movement</div>
            <div className="spec-value">Caliber AE-320</div>
          </div>
          <div className="spec-box spec-top-right">
            <div className="spec-label">Power Reserve</div>
            <div className="spec-value">72 Hours</div>
          </div>
          <div className="spec-box spec-bottom-left">
            <div className="spec-label">Frequency</div>
            <div className="spec-value">28,800 bph</div>
          </div>
          <div className="spec-box spec-bottom-right">
            <div className="spec-label">Crystal</div>
            <div className="spec-value">Double-dome Sapphire</div>
          </div>
        </div>
      </div>

     
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span className="scroll-text">Scroll to Discover</span>
      </div>
    </section>
  );
};

export default Hero;