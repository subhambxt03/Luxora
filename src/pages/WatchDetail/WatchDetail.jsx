import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { watches } from '../../data/watches';
import './WatchDetail.css';

const WatchDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const watch = watches.find(w => w.slug === slug);

  if (!watch) {
    return (
      <>
        <Navbar />
        <div className="watch-detail-not-found">
          <h2>Watch not found</h2>
          <button className="btn-gold" onClick={() => navigate('/#collection')}>
            Back to Collection
          </button>
        </div>
        <Footer />
      </>
    );
  }

  const { details } = watch;
  const nameParts = watch.name.split(' ');
  const brand = nameParts[0];
  const model = nameParts.slice(1).join(' ');

  // Split movement name
  const movementParts = details.movement.split(' ');
  const firstPart = movementParts.slice(0, 2).join(' ');
  const secondPart = movementParts.slice(2).join(' ');

  // Complication split
  const compParts = details.complication.split(' ');
  const compFirst = compParts.slice(0, 2).join(' ');
  const compSecond = compParts.slice(2).join(' ');

  // Use custom images or fallback
  const heroBg = watch.heroBg || '/images/hero-watch.png';
  const movementImg = watch.movementImage || watch.image;
  const complicationsImg = watch.complicationsImage || watch.image;

  // Navigation helpers – no page reload
  const goToCollection = () => navigate('/#collection');
  const goToOrder = () => navigate('/#order');

  return (
    <>
      <Navbar />
      <main className="watch-detail-page">
        {/* ===== HERO ===== */}
        <section className="watch-hero" style={{ backgroundImage: `url(${heroBg})` }}>
          <div className="watch-hero-overlay"></div>
          <div className="container watch-hero-content">
            <div className="watch-hero-tag">{watch.tag} · {watch.price}</div>
            <h1 className="watch-hero-name">
              <span className="brand">{brand}</span>
              <span className="model">{model}</span>
            </h1>
            <p className="watch-hero-desc">{watch.description}</p>
            <div className="watch-hero-buttons">
              <button className="btn-gold reserve-btn-hero" onClick={goToOrder}>
                RESERVE THIS PIECE
              </button>
              <button className="btn-dark back-btn-hero" onClick={goToCollection}>
                ← BACK TO COLLECTION
              </button>
            </div>
          </div>
        </section>

        {/* ===== THE MOVEMENT ===== */}
        <section className="watch-section movement-section">
          <div className="container watch-section-grid">
            <div className="watch-section-image">
              <img src={movementImg} alt={`${watch.name} movement`} />
            </div>
            <div className="watch-section-content">
              <div className="watch-section-label">The Movement</div>
              <h2 className="watch-section-movement-name">
                <span className="movement-first">{firstPart}</span>
                <span className="movement-second">{secondPart}</span>
              </h2>
              <p className="watch-section-desc">{details.descriptionLong}</p>
              <p className="watch-section-desc second-para">
                Every component is hand‑finished to Geneva standards: polished bevels,
                perlage on the base, and Côtes de Genève stripes on the main plate.
              </p>
              <div className="watch-specs-table">
                <div className="spec-row">
                  <span className="spec-label">Movement</span>
                  <span className="spec-value">{details.movement}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Frequency</span>
                  <span className="spec-value">{details.frequency}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Power Reserve</span>
                  <span className="spec-value">{details.powerReserve}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Components</span>
                  <span className="spec-value">{details.components}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Jewels</span>
                  <span className="spec-value">{details.jewels}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">COSC Certified</span>
                  <span className="spec-value">{details.cosc}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== THE COMPLICATIONS ===== */}
        <section className="watch-section complications-section">
          <div className="container watch-section-grid">
            <div className="watch-section-content">
              <div className="watch-section-label">The Complications</div>
              <h2 className="watch-section-complication-name">
                <span className="comp-first">{compFirst}</span>
                <span className="comp-second">{compSecond}</span>
              </h2>
              <p className="watch-section-desc">{details.complicationDesc}</p>
              <p className="watch-section-desc second-para">
                The astronomical moon phase display is accurate to one day every 122 years,
                tracked through a differential gear mechanism of extraordinary delicacy.
              </p>
              <div className="watch-specs-table extended">
                <div className="spec-row">
                  <span className="spec-label">Complication</span>
                  <span className="spec-value">{details.complication}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Moon Phase</span>
                  <span className="spec-value">{details.moonPhase}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Case Material</span>
                  <span className="spec-value">{details.caseMaterial}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Case Diameter</span>
                  <span className="spec-value">{details.caseDiameter}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Crystal</span>
                  <span className="spec-value">{details.crystal}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Water Resistance</span>
                  <span className="spec-value">{details.waterResistance}</span>
                </div>
              </div>
            </div>
            <div className="watch-section-image">
              <img src={complicationsImg} alt={`${watch.name} complications`} />
            </div>
          </div>
        </section>

        {/* ===== LIMITED + RESERVE ===== */}
        <section className="watch-final" id="order">
          <div className="container watch-final-content">
            {details.limited && (
              <div className="limited-text">{details.limited}</div>
            )}
            <div className="reserve-block">
              <h2 className="reserve-heading">
                <span className="begin">Begin Your</span>
                <span className="journey">Bespoke Journey</span>
              </h2>
              <p className="reserve-desc">
                Each {watch.name} is hand-assembled to order. Our concierge
                will contact you within 24 hours.
              </p>
              <button className="btn-gold reserve-btn-final" onClick={goToOrder}>
                Reserve — {watch.price}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WatchDetail;