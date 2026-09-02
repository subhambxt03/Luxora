import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import PageLoader from '../../components/PageLoader/PageLoader';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Collection from '../../components/Collection/Collection';
import StoryPreview from '../../components/StoryPreview/StoryPreview';
import Craftsmanship from '../../components/Craftsmanship/Craftsmanship';
import Reservation from '../../components/Reservation/Reservation';
import Support from '../../components/Support/Support';
import Footer from '../../components/Footer/Footer';
import './Home.css';

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();
  const isFirstRender = useRef(true);   

  
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;   
    }

    if (loaded && location.hash) {
      const targetId = location.hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, [loaded, location.hash]);

  return (
    <>
      {!loaded && <PageLoader onComplete={() => setLoaded(true)} />}
      {loaded && (
        <div className="home">
          <Navbar />
          <main>
            <Hero />
            <div className="section-glow"></div>
            <Collection />
            <div className="section-glow"></div>
            <StoryPreview />
            <div className="section-glow"></div>
            <Craftsmanship />
            <div className="section-glow"></div>
            <Reservation />
            <div className="section-glow"></div>
            <Support />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;