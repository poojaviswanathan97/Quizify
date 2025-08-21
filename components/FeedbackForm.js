import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, feedback } = formData;

    // Validate form data
    if (!name || !email || !feedback) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const subject = `Feedback from ${name}`;
    const body = `
Name: ${name}
Email: ${email}

Feedback:
${feedback}
    `;

    // Show a thank-you message before redirecting
    alert("Thank you for your feedback! You will now be redirected to your email client.");

    // Construct the mailto link
    const mailtoLink = `mailto:lever-clause01@icloud.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open mailto link in a new tab
    const newTab = window.open(mailtoLink, '_blank');
    if (newTab) {
      newTab.opener = null; // Prevents referencing the original tab
    }

    // Reset the form
    setFormData({ name: '', email: '', feedback: '' });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Feedback Form</h1>
      <p style={styles.description}>
        We value your feedback! Let us know how we can improve your experience.
      </p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Feedback:
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            style={styles.textarea}
            required
          />
        </label>
        <button type="submit" style={styles.button}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

// Inline CSS Styles with Gradient Background
const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    background: 'linear-gradient(135deg, #a8c0ff, #3f69e6)', // Gradient background
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    color: '#000',
  },
  heading: {
    fontSize: '2.5em',
    color: '#000',
    textAlign: 'center',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1.1em',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '1.1em',
    color: '#333',
    marginBottom: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '1em',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginBottom: '20px',
  },
  textarea: {
    padding: '10px',
    fontSize: '1em',
    borderRadius: '4px',
    border: '1px solid #ddd',
    height: '100px',
    resize: 'vertical',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#3f69e6',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    alignSelf: 'center',
  },
};

export default FeedbackForm;
