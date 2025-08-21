// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/createquiz">Create Quiz</Link></li>
        <li><Link to="/quizdisplay">Display Quiz</Link></li>
        <li><Link to="/typeyouranswers">Type Your Answers</Link></li> {/* New link */}
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/feedbackform">Feedback Form</Link></li>
        <li><Link to="/help">Help</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
