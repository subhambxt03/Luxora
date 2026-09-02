import React, { useEffect, useState } from 'react';
import './PageLoader.css';

const PageLoader = ({ onComplete }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 800);
    }, 3200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`page-loader ${fade ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <div className="loader-logo">LUXORA</div>
        <div className="loader-divider">
          <span className="loader-line"></span>
          <span className="loader-diamond">◆</span>
          <span className="loader-line"></span>
        </div>
        <div className="loader-sub">HORLOGERIE · LE LOCLE · SWITZERLAND</div>
        <div className="loader-progress">
          <div className="loader-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;