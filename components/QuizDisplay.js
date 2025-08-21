// src/components/QuizDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const QuizDisplay = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/quizzes');
        setQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
        setError('Failed to fetch quizzes.');
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

  if (loading) return <p>Loading quizzes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="quiz-display-container">
      <h1>Available Quizzes</h1>
      {quizzes.length > 0 ? (
        <ul>
          {quizzes.map((quiz) => (
            <li key={quiz._id}>
              <h2>{quiz.title}</h2>
              <p>{quiz.material}</p>
              <Link to={`/type-answers/${quiz._id}`}>Take Quiz</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No quizzes available.</p>
      )}
    </div>
  );
};

export default QuizDisplay;
