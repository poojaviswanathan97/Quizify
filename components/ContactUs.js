//ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.description}>
        Have any questions, feedback, or need support? Reach out to us!
      </p>
      
      <div style={styles.contactInfo}>
        <h2 style={styles.subheading}>Phone Numbers</h2>
        <p style={styles.infoItem}>Support: +91-8005550123</p>
        <p style={styles.infoItem}>Sales: +91-8005550456</p>
      </div>
      
      <div style={styles.contactInfo}>
        <h2 style={styles.subheading}>Email Us</h2>
        <p style={styles.infoItem}>General Inquiries: <a href="mailto:lever-clause01@icloud.com" style={styles.link}>lever-clause01@icloud.com</a></p>
        <p style={styles.infoItem}>Support: <a href="mailto:support@quizify.com" style={styles.link}>support@quizify.com</a></p>
      </div>
      
      <div style={styles.contactInfo}>
        <h2 style={styles.subheading}>Our Address</h2>
        <p style={styles.infoItem}>VM67+HVP, Hosur Rd, Konappana Agrahara,</p>
        <p style={styles.infoItem}>Electronic City, Bengaluru, Karnataka 560100</p>
      </div>
    </div>
  );
};

// Inline CSS Styles with Gradient Background
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    background: 'linear-gradient(135deg, #a8c0ff, #3f69e6)',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    color: '#000', // Set default font color to black
  },
  heading: {
    fontSize: '2.5em',
    color: '#000', // Black color for heading
    textAlign: 'center',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1.1em',
    color: '#333', // Dark gray for description
    textAlign: 'center',
    marginBottom: '20px',
  },
  contactInfo: {
    marginBottom: '20px',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  subheading: {
    fontSize: '1.5em',
    color: '#000', // Black color for subheading
    marginBottom: '10px',
  },
  infoItem: {
    fontSize: '1.1em',
    color: '#333', // Dark gray for contact details
    margin: '5px 0',
  },
  link: {
    color: '#000', // Black color for links
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default ContactUs;
