import React, { useState } from 'react';
import './Contact.css';
import { Zoom } from 'react-awesome-reveal';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.yourdomain.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setError('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to send email');
    }
  };

  return (
    <section id="contact" className="contact-section">
    <Zoom cascade damping={0.1}  delay={500}>
      <h2>Contact</h2>
      <div className="contact-container">
        {isSubmitted ? (
          <p>Thank you for your message!</p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
            {error && <p className="error-message">{error}</p>}
          </form>
        )}
      </div>
      </Zoom>
    </section>
  );
}

export default Contact;
