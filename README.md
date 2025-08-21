# Quizify
Quizify is a web-based application that allows users to create quizzes, take quizzes, and view their results. The app is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).
Features
Create Quizzes – Add your own questions and options to make custom quizzes.
Take Quizzes – Try out quizzes and see your score instantly.
Dashboard – View all quizzes in a simple, user-friendly layout.
Dynamic Routing – Smooth page switching with React Router.
Database Support – All quizzes and results are stored in MongoDB.

Tech Stack
Frontend: React.js, HTML5, CSS3
Backend: Node.js, Express.js
Database: MongoDB
Tools: VS Code, Git, MongoDB Compass, Babel

Getting Started
Prerequisites
Node.js
MongoDB
Git
Run locally
Clone the repo
git clone https://github.com/your-username/quizify.git
cd quizify
Install dependencies
npm install
Set up MongoDB
Start your MongoDB server.
Create a .env file in the root folder:
MONGO_URI=your_mongodb_connection_string
PORT=5000
Start the app
Run backend:
node server.js
Run frontend:
npm start
Open in browser: http://localhost:3000

Project Structure
quizify/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Dashboard.js
│   │   ├── QuizTaking.js
│   │   ├── CreateQuiz.js
│   │   ├── QuizDisplay.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
├── server.js
├── README.md
├── .env (ignored)
├── package.json
