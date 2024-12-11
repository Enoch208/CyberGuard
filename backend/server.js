const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();

// Enable CORS for all origins
app.use(cors());

// Parse JSON bodies 
app.use(bodyParser.json());

// Connect to MongoDB using environment variable
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// User model
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

// Middleware to verify JWT token
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

// Verify token endpoint
app.get('/api/verify-token', verifyToken, (req, res) => {
    res.json({ success: true, message: 'Token is valid' });
});

// Login route
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
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Signup route
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
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Get progress route - Protected by JWT verification
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

// Update progress route - Protected by JWT verification
app.post('/api/progress', verifyToken, async (req, res) => {
    try {
        const updates = req.body;
        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        
        // Update only valid progress fields
        Object.keys(updates).forEach(key => {
            if (key.startsWith('progress') && typeof updates[key] === 'number') {
                user[key] = Math.max(user[key], updates[key]); // Only update if new progress is higher
            }
        });
        
        await user.save();
        res.json({ success: true, message: 'Progress updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});