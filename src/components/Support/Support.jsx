import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Support.css';

const supportItems = [
  {
    id: 'concierge',
    icon: '📞',
    title: 'Private Concierge',
    desc: 'A dedicated advisor available 24/7 for our clients worldwide.',
    link: '/support#concierge',
    label: 'Contact Concierge'
  },
  {
    id: 'service',
    icon: '🛡️',
    title: 'Lifetime Service',
    desc: 'Every LUXORA comes with lifetime in-house servicing at our Le Locle atelier.',
    link: '/support#service',
    label: 'Learn More'
  },
  {
    id: 'delivery',
    icon: '📦',
    title: 'Bespoke Delivery',
    desc: 'Hand-delivered by our courier in a bespoke mahogany presentation case.',
    link: '/support#delivery',
    label: 'Request Info'
  }
];

const Support = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.support-card').forEach((card, i) => {
              setTimeout(() => card.classList.add('visible'), i * 200);
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
    <section className="support-home section-padding" id="support" ref={sectionRef}>
      <div className="container">
        <div className="support-header reveal visible">  {/* already visible on load */}
          <span className="section-label">SUPPORT</span>
          <h2 className="section-title">White‑Glove Service</h2>
          <p className="section-subtitle">
            Every LUXORA comes with lifetime support and a dedicated concierge.
          </p>
        </div>
        <div className="support-grid">
          {supportItems.map((item) => (
            <div className="support-card reveal" key={item.id}>  {/* added reveal */}
              <div className="support-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link to={item.link} className="btn-dark">
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;