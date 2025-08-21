import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <style>
        {`
          body {
            margin: 0;
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #a8c0ff, #3f69e6); /* Gradient background */
            height: 100vh; /* Full viewport height */
          }

          .dashboard-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
            background: #ffffff; /* White background for the main content */
            border-radius: 15px; /* Rounded corners */
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Deeper shadow for depth */
            transition: transform 0.3s ease; /* Smooth transform on hover */
          }

          .dashboard-container:hover {
            transform: scale(1.02); /* Slight zoom effect on hover */
          }

          .dashboard-header {
            text-align: center;
            margin-bottom: 30px; /* Space below header */
          }

          .dashboard-header h1 {
            font-size: 3rem;
            color: #2d3e50; /* Deep blue for a calming look */
            margin-bottom: 10px; /* Space below title */
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); /* Soft shadow for title */
          }

          .dashboard-header p {
            font-size: 1.5rem;
            color: #7d8d99; /* Soft gray for muted tone */
          }

          .about-project,
          .team-credits {
            margin-top: 40px;
            padding: 20px;
            background-color: #f4f5f7; /* Light gray for sections */
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Soft shadow for neat look */
          }

          .about-project h2,
          .team-credits h2 {
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 15px;
            color: #3f69e6; /* Vibrant blue for section titles */
          }

          .about-project p,
          .team-credits p {
            font-size: 1.3rem;
            line-height: 1.6;
            text-align: center;
            color: #606f7b; /* Muted grayish-blue for readable body text */
            max-width: 800px; /* Limit width for readability */
            margin: 0 auto; /* Center align paragraphs */
          }

          .team-credits p {
            font-size: 1.2rem;
            font-weight: bold; /* Bold for emphasis */
            color: #7d8d99; /* Softer tone for credits */
          }

          .dashboard-footer {
            margin-top: 40px;
            text-align: center;
            font-size: 1.5rem;
            font-weight: bold;
            color: #2d3e50; /* Deep blue to tie the theme together */
          }

          .dashboard-footer p {
            margin-top: 20px;
            font-size: 1.4rem;
            color: #8d99ae; /* Light grayish-blue for footer */
          }

          @media screen and (max-width: 768px) {
              .dashboard-container {
                  padding: 30px; /* Adjust padding on smaller screens */
              }
              .dashboard-header h1 {
                  font-size: 2.5rem; /* Smaller title on mobile */
              }
              .about-project h2,
              .team-credits h2 {
                  font-size: 2rem; /* Smaller section titles on mobile */
              }
              .about-project p,
              .team-credits p {
                  font-size: 1rem; /* Smaller paragraph text on mobile */
              }
          }
        `}
      </style>

      <div className="dashboard-header">
        <h1>Welcome to Quizify</h1>
        <p>Your personalized quiz creation and answering platform!</p>
      </div>

      <div className="about-project">
        <h2>Quizify</h2>
        <p>
          Quizify is a web application that allows you to create custom quizzes, 
          store them, and take quizzes with ease. You can input short-answer questions, and Quizify handles the rest – storing the 
          quizzes and letting you answer them anytime!
        </p>
      </div>

      <div className="team-credits">
        <h2>Project Developers</h2>
        <p><strong>Pooja Viswanathan</strong> - Frontend, Backend Development, UI/UX Design</p>
        <p><strong>Nithya Gauri</strong> - Frontend, Backend Development, UI/UX Design</p>
      </div>

      <div className="dashboard-footer">
        <p>Get ready to create, share, and take quizzes with Quizify!</p>
      </div>
    </div>
  );
};

export default Dashboard;
