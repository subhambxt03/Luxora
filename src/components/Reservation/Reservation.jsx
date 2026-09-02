import React, { useState, useEffect, useRef } from 'react';
import './Reservation.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    model: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.model) {
      alert('Please fill in all required fields.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="reservation section-padding" id="order" ref={sectionRef}>
      <div className="container">
        <div className={`reservation-content reveal ${isVisible ? 'visible' : ''}`}>
          <div className="reservation-box">
            {/* moved inside the box */}
            <span className="section-label">BESPOKE EXPERIENCE</span>
            <h2 className="section-title">Reserve Your Timepiece</h2>
            <p className="reservation-desc">
              Each LUXORA is built to order. Reserve yours today and our concierge
              will contact you within 24 hours to begin your bespoke journey.
            </p>
            {submitted ? (
              <div className="reservation-success">
                <p>Thank you! Your reservation request has been received.</p>
                <p>Our concierge will reach out shortly.</p>
              </div>
            ) : (
              <form className="reservation-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="model">Select Your Model *</label>
                  <select
                    id="model"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose a model</option>
                    <option value="LUXORA ÉLITE">LUXORA ÉLITE</option>
                    <option value="LUXORA NOIR">LUXORA NOIR</option>
                    <option value="LUXORA IMPÉRIALE">LUXORA IMPÉRIALE</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn-gold">
                  RESERVE YOUR TIMEPIECE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;