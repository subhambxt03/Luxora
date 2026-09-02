import React, { useEffect } from 'react';
import { watches } from '../../data/watches';
import WatchCard from '../WatchCard/WatchCard';
import './Collection.css';

const Collection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const cards = document.querySelectorAll('.watch-card');
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="collection section-padding" id="collection">
      <div className="container">
        <div className="collection-header reveal visible">
          <span className="section-label">THE COLLECTION</span>
          <h2 className="section-title">Timeless Masterpieces</h2>
          <div className="collection-golden-line"></div>
          <p className="section-subtitle">
            Each LUXORA is a statement of enduring elegance, crafted for those
            who value the art of time.
          </p>
        </div>
        <div className="collection-grid">
          {watches.map((watch) => (
            <WatchCard key={watch.id} watch={watch} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;