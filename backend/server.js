const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const fs = require('fs');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    progress1: { type: Number, min: 0, max: 1, default: 0 },
    progress2: { type: Number, min: 0, max: 1, default: 0 },
    progress3: { type: Number, min: 0, max: 1, default: 0 },
    progress4: { type: Number, min: 0, max: 1, default: 0 },
    progress5: { type: Number, min: 0, max: 1, default: 0 },
    progress6: { type: Number, min: 0, max: 1, default: 0 }
});
const User = mongoose.model('User', userSchema);

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ success: false, message: 'No token provided' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (err) {
        return res.status(401).json({ 
            success: false, 
            message: 'Invalid token',
            details: err.message
        });
    }
};

app.get('/api/verify-token', verifyToken, (req, res) => {
    res.json({ success: true, message: 'Token is valid' });
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '15m' });
        res.json({ success: true, message: 'Login successful', token, username: user.username });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Unable to connect to server, please check your internet connection and try again.' });
    }
});

app.post('/api/signup', async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }
        const newUser = new User({
            username,
            password: await bcrypt.hash(password, 10),
            email
        });
        await newUser.save();
        res.json({ success: true, message: 'User registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Unable to connect, check your internet connection and try again.' });
    }
});

app.get('/api/progress', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.json({
            progress1: user.progress1,
            progress2: user.progress2,
            progress3: user.progress3,
            progress4: user.progress4,
            progress5: user.progress5,
            progress6: user.progress6
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.post('/api/progress', verifyToken, async (req, res) => {
    try {
        const updates = req.body;
        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        
        Object.keys(updates).forEach(key => {
            if (key.startsWith('progress') && typeof updates[key] === 'number') {
                user[key] = Math.max(user[key], updates[key]);
            }
        });
        
        await user.save();
        res.json({ success: true, message: 'Progress updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.get('/api/quiz/:lessonId', async (req, res) => {
    try {
        const quizFilePath = path.join(__dirname, 'data', 'quiz.json');
        const quizData = JSON.parse(fs.readFileSync(quizFilePath, 'utf8'));
        const { lessonId } = req.params;
        
        const lessonKey = `lesson${lessonId}`;
        if (!quizData[lessonKey]) {
            return res.status(404).json({ 
                success: false, 
                message: `Quiz not found for lesson ${lessonId}` 
            });
        }

  //just to format...
        const formattedQuiz = {
            success: true,
            quiz: {
                id: quizData[lessonKey].id,
                title: quizData[lessonKey].title,
                questions: quizData[lessonKey].questions.map(q => ({
                    question: q.question,
                    options: q.options,
                    answer: q.answer
                }))
            }
        };

        res.json(formattedQuiz);
    } catch (err) {
        console.error(err);
        res.status(500).json({ 
            success: false, 
            message: 'Server error while fetching quiz data',
            details: err.message
        });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});