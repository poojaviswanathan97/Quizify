// \components\answerRoutes.js
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Define Answer schema and model outside of the route
const answerSchema = new mongoose.Schema({
    quizId: { type: String, required: true },
    userAnswers: { type: Array, required: true },
    submittedAt: { type: Date, default: Date.now },
});

const Answer = mongoose.model('Answer', answerSchema);

// Define the route to submit answers
router.post('/submit-answers', async (req, res) => {
    try {
        const { quizId, userAnswers } = req.body;

        // Validate input
        if (!quizId || !Array.isArray(userAnswers)) {
            return res.status(400).json({ error: 'quizId and userAnswers are required' });
        }

        // Logic to save the answers in the 'type_ur_ans' collection
        const newAnswer = {
            quizId,
            userAnswers,
            submittedAt: new Date(),
        };

        // Save to 'type_ur_ans' collection
        const savedAnswer = await new Answer(newAnswer).save();
        res.status(200).json(savedAnswer);
    } catch (error) {
        console.error('Error saving answers:', error.message); // Log detailed error message
        res.status(500).json({ error: 'Failed to save answers' });
    }
});

module.exports = router;
