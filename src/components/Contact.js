import React from 'react';

function Contact() {
  return (
    <section id="contact" style={{ padding: '2rem', backgroundColor: '#f4f4f4', textAlign: 'center' }}>
      <h2>Contact Us</h2>
      <p>Visit our local store or get in touch:</p>
      <p>Address: 123 Electronics Street, Tech City</p>
      <p>Phone: (123) 456-7890</p>
      <p>Email: info@capybaraelectronics.com</p>
      <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Store Front" style={{ width: '100%', maxWidth: '600px', marginTop: '1rem' }} />
    </section>
  );
}

export default Contact;