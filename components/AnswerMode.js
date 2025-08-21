// \src\components\AnswerMode.js
const mongoose = require('mongoose');

// Define the schema for storing answers
const answerSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  userAnswers: [
    {
      questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
      answer: { type: String, required: true }
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
