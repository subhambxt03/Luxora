import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './WatchCard.css';

const WatchCard = ({ watch }) => {
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateY = x * 6;
    const rotateX = -y * 6;
    cardRef.current.style.transform =
      `perspective(800px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(-6px)`;
    if (imgRef.current) {
      imgRef.current.style.transform = `translate(${x * 6}px, ${y * 6}px) scale(1.04)`;
    }
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = 'perspective(800px) rotateY(0) rotateX(0) translateY(0)';
    if (imgRef.current) {
      imgRef.current.style.transform = 'translate(0, 0) scale(1)';
    }
  };

  return (
    <Link
      to={`/watch/${watch.slug}`}
      className="watch-card-link"
      style={{ textDecoration: 'none' }}
    >
      <div
        className="watch-card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-inner">
          <div className="card-tag">{watch.tag}</div>
          <div className="card-image">
            <img
              src={watch.image}
              alt={watch.alt}
              ref={imgRef}
              className="watch-img"
            />
          </div>
          <div className="card-info">
            <h3 className="card-name">{watch.name}</h3>
            <p className="card-desc">{watch.description}</p>
            <div className="card-footer">
              <span className="card-price">{watch.price}</span>
              <span className="card-discover">DISCOVER →</span>
            </div>
            <div className="card-gold-line"></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WatchCard;