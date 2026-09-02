import React, { useEffect, useRef } from 'react';
import './Craftsmanship.css';

const crafts = [
  {
    id: 1,
    number: '01',
    title: 'HAND-FINISHED MOVEMENTS',
    desc: 'Every movement is carefully finished and inspected by hand.'
  },
  {
    id: 2,
    number: '02',
    title: 'SWISS PRECISION',
    desc: 'Precision engineering refined through generations of watchmaking.'
  },
  {
    id: 3,
    number: '03',
    title: 'EXCEPTIONAL MATERIALS',
    desc: 'Only carefully selected materials are used for every LUXORA.'
  },
  {
    id: 4,
    number: '04',
    title: 'ONE WATCHMAKER',
    desc: 'Each timepiece receives the attention of a dedicated master watchmaker.'
  },
  {
    id: 5,
    number: '05',
    title: '100m WATER RESISTANCE',
    desc: 'Helium escape valve and triple-sealed crown for aquatic performance.'
  },
  {
    id: 6,
    number: '06',
    title: 'COSC CERTIFIED',
    desc: 'Official chronometer certification from the Contrôle Officiel Suisse des Chronomètres.'
  }
];

const Craftsmanship = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.craft-card').forEach((card, i) => {
              setTimeout(() => card.classList.add('visible'), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="craftsmanship section-padding" id="craftsmanship" ref={sectionRef}>
      <div className="container">
        <div className="craft-header reveal visible">
          <span className="section-label">CRAFTSMANSHIP</span>
          <h2 className="section-title">The Art Behind Every Timepiece</h2>
          <p className="section-subtitle">
            Each LUXORA is a union of tradition, precision, and artistry.
          </p>
        </div>
        <div className="craft-grid">
          {crafts.map((item) => (
            <div className="craft-card reveal" key={item.id}>
              <div className="craft-number">{item.number}</div>
              <div className="craft-icon">✦</div>
              <h3 className="craft-title">{item.title}</h3>
              <p className="craft-desc">{item.desc}</p>
              <div className="craft-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;