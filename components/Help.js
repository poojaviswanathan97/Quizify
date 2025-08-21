import React from 'react';

const Help = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Help</h1>
      <p style={styles.description}>
        Welcome to the Quizify Help Page! Here, you will find step-by-step instructions on how to use our app efficiently and navigate through the various features.
      </p>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Getting Started</h2>
        <p style={styles.infoItem}>
          To get started, be ready with the <strong>Material and Title</strong> u want to generate the quiz for. 
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Creating a Quiz</h2>
        <p style={styles.infoItem}>
          Once ready, navigate to the <strong>Create Quiz</strong> section. Here, you can input multiple-choice questions, provide answer choices, and submit the quiz to save it to the database.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Taking a Quiz</h2>
        <p style={styles.infoItem}>
          To take a quiz, visit the <strong>Quiz Display</strong> page. Select a quiz you want to take, answer the questions, and submit your answers to see your score.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Viewing Your Results</h2>
        <p style={styles.infoItem}>
          After completing a quiz, you can view your score and review the questions you answered incorrectly. This helps you track your progress and improve your knowledge.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Need More Help?</h2>
        <p style={styles.infoItem}>
          If you still have questions or need further assistance, feel free to contact us via email at <strong>support@quizify.com</strong>.
        </p>
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
    background: 'linear-gradient(135deg, #a8c0ff, #3f69e6)', // Gradient background
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    color: '#000', // Black text color for readability
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
  section: {
    marginBottom: '20px',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  subheading: {
    fontSize: '1.5em',
    color: '#000',
    marginBottom: '10px',
  },
  infoItem: {
    fontSize: '1.1em',
    color: '#333',
    margin: '5px 0',
  },
};

export default Help;
