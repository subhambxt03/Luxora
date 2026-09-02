import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './StoryPreview.css';

const StoryPreview = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="story-preview section-padding" id="story-preview" ref={sectionRef}>   {/* ← added id */}
      <div className="container story-grid">
        <div className="story-text reveal">
          <span className="section-label">OUR STORY</span>
          <h2 className="section-title">175 Years of<br />Pure Obsession</h2>
          <p className="story-desc">
            Founded in 1847 in the Vallée de Joux, LUXORA was born from a single obsession: creating timepieces that transcend their era. Each watch is a testament to 175 years of horological mastery, hand-assembled over 1,200 hours by a single watchmaker.
          </p>
          <p className="story-desc italic">
            We do not make watches. We build heirlooms that pass from generation to generation, carrying the heartbeat of precision through time.
          </p>
          <div className="story-stats">
            <div className="stat-item">
              <span className="stat-number">1,847</span>
              <span className="stat-label">Founded</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">320</span>
              <span className="stat-label">Components</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1,200</span>
              <span className="stat-label">Hours / Piece</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">12</span>
              <span className="stat-label">Master Watchmakers</span>
            </div>
          </div>
          <Link to="/story" className="btn-outline-gold">
            READ FULL STORY <span className="arrow">→</span>
          </Link>
        </div>
        <div className="story-image reveal">
          <img src="/images/story.png" alt="LUXORA atelier" />
        </div>
      </div>
    </section>
  );
};

export default StoryPreview;