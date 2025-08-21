import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.description}>
        Welcome to Quizify! Our application is built using the MERN stack, a powerful and flexible stack that allows us to create a modern, full-stack application for all quiz enthusiasts.
      </p>

      <div style={styles.section}>
        <h2 style={styles.subheading}>MERN Stack Overview</h2>
        <p style={styles.infoItem}>
          MERN stands for <strong>MongoDB</strong>, <strong>Express</strong>, <strong>React</strong>, and <strong>Node.js</strong>. Each component of the stack has a specific role in building a seamless web application experience:
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>MongoDB</h2>
        <p style={styles.infoItem}>
          MongoDB is our database, a NoSQL solution that stores data in a flexible, JSON-like format. This is ideal for handling the dynamic structure of quizzes, user data, and other resources in our application.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Express</h2>
        <p style={styles.infoItem}>
          Express is a backend framework that sits on top of Node.js, enabling us to build robust APIs. In Quizify, we use Express to create RESTful routes that allow for smooth communication between the frontend and MongoDB.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>React</h2>
        <p style={styles.infoItem}>
          React is our front-end library, used to build dynamic and interactive user interfaces. It enables us to create reusable components for various pages, like the quiz display, quiz creation, and more, making our application fast and responsive.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Node.js</h2>
        <p style={styles.infoItem}>
          Node.js is the runtime environment for running JavaScript on the server side. It enables us to handle multiple client requests efficiently, making Quizify a scalable and performant application.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Why We Chose This Project</h2>
        <p style={styles.text}>
          This project was chosen as part of our Web Technologies assignment, and it was the perfect opportunity to
          apply the skills we’ve learned in our studies. As a team, Pooja Viswanathan and Nithya Gauri wanted to
          build a practical, real-world web application that utilizes modern web development tools and frameworks.
          We chose to work with the MERN stack (MongoDB, Express.js, React.js, and Node.js) because of its
          efficiency, flexibility, and popularity in the industry. We aimed to create an application that would
          help students and instructors in a meaningful way, while also challenging ourselves to learn more about full-stack development.
        </p>
      </div>

      <p style={styles.conclusion}>
        Together, these technologies form the MERN stack, a fully JavaScript-based solution that powers our application, ensuring a smooth, efficient, and responsive experience for users.
      </p>
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
  text: {
    fontSize: '1.1em',
    color: '#333',
    marginTop: '10px',
  },
  conclusion: {
    fontSize: '1.1em',
    color: '#333',
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default AboutUs;
