import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './SupportPage.css';

const SupportPage = () => {
  const [faqOpen, setFaqOpen] = useState(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Reveal animation
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

  const faqs = [
    {
      q: 'How long does it take to build my watch?',
      a: 'Each LUXORA is handcrafted to order. The typical lead time is 4 to 6 months, depending on the complexity of the movement and any personalisation requests.'
    },
    {
      q: 'What does "lifetime service" include?',
      a: 'Our lifetime service covers all mechanical maintenance and repairs performed by the master watchmaker who assembled your piece. It includes cleaning, oiling, and adjustment every 5–7 years, as well as any required part replacements due to normal wear.'
    },
    {
      q: 'Can I personalise my timepiece?',
      a: 'Yes. We offer a range of bespoke options including custom dial colours, engraving, and choice of strap materials. Our concierge will guide you through the personalisation process.'
    },
    {
      q: 'Is there a resale or buy‑back programme?',
      a: 'LUXORA does not offer a buy‑back programme, but we provide authentication and valuation services. We also maintain a curated pre‑owned collection for clients.'
    }
  ];

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const handleContact = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => setContactSubmitted(false), 5000);
  };

  // Scroll to contact form
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />
      <main className="support-page">
        {/* Hero */}
        <section className="support-hero section-padding">
          <div className="container">
            <div className="reveal">
              <span className="section-label">WHITE-GLOVE SERVICE</span>
              <h1 className="support-hero-title">We Are At Your Service</h1>
              <p className="support-hero-desc">
                Lifetime support. A dedicated concierge. Available 24 hours a day,
                in 16 languages, anywhere in the world.
              </p>
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="support-commitment section-padding" id="concierge">
          <div className="container">
            <div className="commitment-header reveal">
              <span className="section-label">OUR COMMITMENT</span>
              <h2 className="section-title">Lifetime Partnership</h2>
            </div>
            <div className="commitment-grid">
              <div className="commitment-card reveal" id="concierge">
                <div className="commitment-icon">📞</div>
                <h3>PRIVATE CONCIERGE</h3>
                <p>
                  Each LUXORA client is assigned a personal watchmaking concierge
                  who speaks your language and is available 24/7 via telephone,
                  email, or secure messenger.
                </p>
                <span className="commitment-contact">+41 21 900 1847</span>
              </div>
              <div className="commitment-card reveal" id="service">
                <div className="commitment-icon">🛡️</div>
                <h3>LIFETIME SERVICING</h3>
                <p>
                  Every LUXORA is covered by a lifetime service guarantee. We
                  recommend a service every 5–7 years, performed exclusively by
                  the master watchmaker who originally assembled your piece.
                </p>
                <span className="commitment-contact">service@LUXORA.ch</span>
              </div>
              <div className="commitment-card reveal" id="delivery">
                <div className="commitment-icon">📦</div>
                <h3>BESPOKE DELIVERY</h3>
                <p>
                  Your timepiece is hand-delivered anywhere in the world by a
                  vetted LUXORA courier in a bespoke mahogany presentation case
                  with white‑linen lining.
                </p>
                <button className="btn-dark" onClick={scrollToContact}>
                  REQUEST DELIVERY
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="support-faq section-padding">
          <div className="container">
            <div className="faq-header reveal">
              <span className="section-label">FREQUENT QUESTIONS</span>
              <h2 className="section-title">FAQs</h2>
            </div>
            <div className="faq-list">
              {faqs.map((item, idx) => (
                <div className={`faq-item ${faqOpen === idx ? 'open' : ''} reveal`} key={idx}>
                  <button className="faq-question" onClick={() => toggleFaq(idx)}>
                    <span>{item.q}</span>
                    <span className="faq-icon">{faqOpen === idx ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact – with ID and box */}
        <section className="support-contact section-padding" id="contact">
          <div className="container">
            <div className="contact-header reveal">
              <span className="section-label">GET IN TOUCH</span>
              <h2 className="section-title">Contact Us</h2>
              <p className="contact-desc">
                Your concierge will respond within 2 hours during business hours
                (Geneva time).
              </p>
            </div>
            <div className="contact-box"> {/* new wrapper box */}
              {contactSubmitted ? (
                <div className="contact-success reveal">
                  <p>Thank you! Your message has been sent.</p>
                </div>
              ) : (
                <form className="contact-form reveal" onSubmit={handleContact}>
                  <div className="form-group">
                    <label htmlFor="topic">Select Topic</label>
                    <select id="topic" name="topic">
                      <option value="">Select Topic</option>
                      <option>Reservation &amp; Ordering</option>
                      <option>Watch Servicing</option>
                      <option>Bespoke Personalisation</option>
                      <option>Delivery Enquiry</option>
                      <option>Authentication &amp; Resale</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-name">Name</label>
                    <input type="text" id="contact-name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email</label>
                    <input type="email" id="contact-email" required />
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" rows="4" required></textarea>
                  </div>
                  <button type="submit" className="btn-gold">SEND MESSAGE</button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SupportPage;