require('dotenv').config();  // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const answerRoutes = require('./src/components/answerRoutes'); // Ensure the path is correct

// Middleware to handle cross-origin requests
app.use(cors());
app.use(express.json());  // Built-in JSON parser for request bodies

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('MongoDB connection error:', error));

// Define the Quiz Schema
const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  material: String,
  questions: [{
    questionText: { type: String, required: true },
    answerOptions: [{
      answerText: String,
      isCorrect: Boolean,
    }],
  }],
});

// Define the Quiz Model
const Quiz = mongoose.model('Quiz', quizSchema);

// Route to get all quizzes
app.get('/quizzes', async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    res.status(500).json({ error: 'Failed to fetch quizzes' });
  }
});

// Route to get a single quiz by its ID
app.get('/quizzes/:id', async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    res.json(quiz);
  } catch (error) {
    console.error('Error fetching quiz:', error);
    res.status(500).json({ error: 'Failed to fetch quiz' });
  }
});

// Route to create a new quiz
app.post('/quizzes', async (req, res) => {
  console.log('Request body:', req.body);
  try {
    const newQuiz = new Quiz(req.body);
    const savedQuiz = await newQuiz.save();
    console.log('Quiz saved:', savedQuiz);
    res.status(201).json(savedQuiz);
  } catch (error) {
    console.error('Error creating quiz:', error);
    res.status(500).json({ error: 'Failed to create quiz' });
  }
});

// Route to update an existing quiz
app.put('/quizzes/:id', async (req, res) => {
  try {
    const updatedQuiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedQuiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    res.status(200).json(updatedQuiz);
  } catch (error) {
    console.error('Error updating quiz:', error);
    res.status(500).json({ error: 'Failed to update quiz' });
  }
});

// Route to delete a quiz
app.delete('/quizzes/:id', async (req, res) => {
  try {
    const deletedQuiz = await Quiz.findByIdAndDelete(req.params.id);
    if (!deletedQuiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    res.status(200).json({ message: 'Quiz deleted successfully' });
  } catch (error) {
    console.error('Error deleting quiz:', error);
    res.status(500).json({ error: 'Failed to delete quiz' });
  }
});

// Use the new answer routes
app.use('/api', answerRoutes); // This will enable all routes defined in answerRoutes under /api

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
