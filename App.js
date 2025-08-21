// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CreateQuiz from "./components/CreateQuiz";
import QuizDisplay from "./components/QuizDisplay";
import TypeYourAnswers from "./components/TypeYourAnswers"; // Import the TypeYourAnswers component
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import FeedbackForm from './components/FeedbackForm';
import Help from './components/Help';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/createquiz" element={<CreateQuiz />} />
        <Route path="/quizdisplay" element={<QuizDisplay />} />
        <Route path="/type-answers/:id" element={<TypeYourAnswers />} /> {/* Add route for quiz answers */}
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/feedbackform" element={<FeedbackForm />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;
