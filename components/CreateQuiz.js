// src/components/CreateQuiz.js
import React, { useState } from 'react';
import axios from 'axios';

const generateMockQuestions = (title) => {
    return [
        { questionText: `What is the main idea of ${title}?`, answerOptions: [] },
        { questionText: `Explain the significance of ${title}.`, answerOptions: [] },
        { questionText: `List three key points about ${title}.`, answerOptions: [] },
        { questionText: `How does ${title} apply in real life?`, answerOptions: [] },
        { questionText: `What are some challenges related to ${title}?`, answerOptions: [] },
    ];
};

const CreateQuiz = () => {
    const [material, setMaterial] = useState('');
    const [questions, setQuestions] = useState([]);
    const [quizTitle, setQuizTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleMaterialChange = (event) => setMaterial(event.target.value);
    const handleTitleChange = (event) => setQuizTitle(event.target.value);

    const generateQuestions = () => {
        setQuestions([]);
        setError(null);
        setLoading(true);

        try {
            const generatedQuestions = generateMockQuestions(quizTitle);

            if (Array.isArray(generatedQuestions) && generatedQuestions.length > 0) {
                setQuestions(generatedQuestions);
            } else {
                throw new Error('No questions generated. Please try again.');
            }
        } catch (error) {
            console.error('Error generating questions:', error);
            setError(error.message || 'An error occurred while generating questions.');
        } finally {
            setLoading(false);
        }
    };

    const saveQuiz = async () => {
      if (!quizTitle || !material || questions.length === 0) {
          alert('Please fill in all fields and generate questions before saving.');
          return;
      }
  
      try {
          const quizData = {
              title: quizTitle,
              material,
              questions,
          };
  
          console.log('Sending quiz data:', quizData); // Log the data being sent
  
          const response = await axios.post(`${process.env.REACT_APP_API_URL}/quizzes`, quizData);


          console.log('Quiz saved successfully:', response.data);
          alert('Quiz saved successfully!');
      } catch (error) {
          console.error('Error saving quiz:', error.response ? error.response.data : error.message);
          alert('Failed to save quiz. Please try again.');
      }
  };

    return (
        <div className="create-quiz-container">
            <h1>Create a Quiz from Material</h1>
            <input
                type="text"
                placeholder="Enter quiz title..."
                value={quizTitle}
                onChange={handleTitleChange}
            />
            <textarea
                rows="10"
                cols="50"
                placeholder="Enter your material here..."
                value={material}
                onChange={handleMaterialChange}
            />
            <button onClick={generateQuestions} disabled={loading}>
                {loading ? 'Generating...' : 'Generate Questions'}
            </button>
            <button onClick={saveQuiz} disabled={loading || questions.length === 0}>
                Save Quiz
            </button>

            {error && <p className="error-message">{error}</p>}

            <div className="generated-questions">
                <h2>Generated Questions</h2>
                {questions.length > 0 ? (
                    questions.map((question, index) => (
                        <div key={index} className="question-block">
                            <p>{question.questionText}</p>
                        </div>
                    ))
                ) : (
                    !loading && <p>No questions generated yet.</p>
                )}
            </div>
        </div>
    );
};

export default CreateQuiz;
