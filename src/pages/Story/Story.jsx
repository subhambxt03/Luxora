import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Story.css';

const Story = () => {
  const statsRef = useRef(null);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const targetStats = [1847, 175, 12, 1200];
  const labels = ['Founded', 'Years of Heritage', 'Master Watchmakers', 'Hours Per Timepiece'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNumbers();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    const duration = 2000;
    const steps = 60;
    const increment = targetStats.map((t) => t / steps);
    let current = [0, 0, 0, 0];
    let step = 0;
    const interval = setInterval(() => {
      step++;
      current = current.map((c, i) => Math.min(c + increment[i], targetStats[i]));
      setCounts(current.map(Math.round));
      if (step >= steps) {
        clearInterval(interval);
        setCounts(targetStats);
      }
    }, duration / steps);
  };

  const timelineData = [
    { year: '1847', title: 'FOUNDATION', desc: 'Henri Etienne LUXORA establishes his first workshop in Le Locle with three craftsmen.' },
    { year: '1889', title: 'GRAND PRIX, PARIS', desc: 'LUXORA wins the Grand Prix at the Paris Universal Exposition, defeating 140 Swiss rivals.' },
    { year: '1923', title: 'FIRST TOURBILLON', desc: 'LUXORA creates its first in-house tourbillon movement — only the fourth Swiss house to do so.' },
    { year: '1967', title: 'SAPPHIRE CRYSTAL INNOVATION', desc: 'LUXORA pioneers the first double-dome sapphire crystal with anti-reflective treatment.' },
    { year: '2009', title: 'GRAND COMPLICATION', desc: 'After 16 years of development, the Grand Complication is unveiled — seven complications in one case.' },
    { year: 'TODAY', title: '175 YEARS STRONG', desc: 'LUXORA continues to operate from the same Le Locle address, still family-owned, still obsessed.' }
  ];

  return (
    <>
      <Navbar />
      <main className="story-page">
        <section className="story-hero section-padding">
          <div className="container">
            <div className="story-hero-content reveal">
              <span className="section-label">LE LOCLE, SWITZERLAND</span>
              <h1 className="story-main-title">175 Years of Pure Obsession</h1>
              <p className="story-main-desc">
                LUXORA was not founded to make watches. It was founded to defy time itself.
              </p>
            </div>
          </div>
        </section>

        <section className="story-stats section-padding" ref={statsRef}>
          <div className="container stats-grid">
            {counts.map((val, i) => (
              <div className="stat-box reveal" key={i}>
                <div className="stat-number">{val.toLocaleString()}</div>
                <div className="stat-label">{labels[i]}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="story-beginning section-padding">
          <div className="container beginning-grid">
            <div className="beginning-image reveal">
              <img src="/images/atelier.png" alt="LUXORA atelier 1847" />
            </div>
            <div className="beginning-text reveal">
              <span className="section-label">1847 — THE BEGINNING</span>
              <h2 className="section-title">Born from Obsession</h2>
              <p>
                In the harsh winters of the Vallée de Joux, where farmers first turned to
                watchmaking to survive the frozen months, Henri Etienne LUXORA set up a
                small workbench in a stone farmhouse.
              </p>
              <p>
                With just three employees and a single lamp to work by, he produced his
                first movement — a pocket watch of such extraordinary precision that it
                was rumored to have been purchased by a European royal.
              </p>
              <p className="quote">
                "A man may not know the exact day of his death, but his LUXORA will tell
                him the exact second."
              </p>
            </div>
          </div>
        </section>

        <section className="story-timeline section-padding">
          <div className="container">
            <div className="timeline-header reveal">
              <span className="section-label">THE JOURNEY</span>
              <h2 className="section-title">Milestones of Mastery</h2>
            </div>
            <div className="timeline-wrapper">
              {timelineData.map((item, idx) => (
                <div
                  className={`timeline-item ${idx % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'} reveal`}
                  key={idx}
                >
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="story-atelier section-padding">
          <div className="container atelier-grid">
            <div className="atelier-text reveal">
              <span className="section-label">THE ATELIER TODAY</span>
              <h2 className="section-title">One Address, 175 Years</h2>
              <p>
                LUXORA remains headquartered in the same stone building that Henri Etienne
                rented for 4 Swiss francs per month in 1847. The building has been expanded
                three times, but the spirit has never changed.
              </p>
              <p>
                Just twelve master watchmakers work there today. Each takes seven years to
                train. Each will spend their entire career building fewer than 500 watches.
                Each watch leaves made by a single pair of hands.
              </p>
              <Link to="/#collection" className="btn-gold">
                DISCOVER THE COLLECTION →
              </Link>
            </div>
            <div className="atelier-image reveal">
              <img src="/images/atelier2.png" alt="LUXORA atelier today" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Story;