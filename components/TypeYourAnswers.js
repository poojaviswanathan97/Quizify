//TypeYourAnswers.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./TypeYourAnswers.css"; // Import the new CSS file for styling

function TypeYourAnswers() {
  const { id } = useParams(); // Get the quiz ID from the URL
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/quizzes/${id}`);
        setQuiz(response.data);
        setAnswers(
          response.data.questions.map((q) => ({ questionId: q._id, answer: "" }))
        );
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };

    fetchQuiz();
  }, [id]);

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index].answer = value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to send to the backend
    const answerData = {
      quizId: id,
      userAnswers: answers
    };

    try {
      const response = await axios.post('http://localhost:5000/api/submit-answers', answerData);
      console.log('Answers saved:', response.data);
    } catch (error) {
      console.error('Error saving answers:', error);
    }
  };

  if (!quiz) return <p>Loading quiz...</p>;

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">{quiz.title}</h1>
      <form onSubmit={handleSubmit} className="quiz-form">
        {quiz.questions.map((q, index) => (
          <div key={q._id} className="question-container">
            <label className="question-text">{q.questionText}</label>
            <textarea
              className="answer-textarea"
              value={answers[index].answer}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              rows="4"
            />
          </div>
        ))}
        <button type="submit" className="submit-button">Submit Answers</button>
      </form>
    </div>
  );
}

export default TypeYourAnswers;
