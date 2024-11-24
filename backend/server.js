const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Most permissive CORS setup
app.use(cors());
app.use(bodyParser.json());

// Hardcoded login credentials
const LOGIN_USERNAME = 'admin';
const LOGIN_PASSWORD = 'Testing123$';

// Login route
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (username === LOGIN_USERNAME && password === LOGIN_PASSWORD) {
        res.json({ 
            success: true, 
            message: 'Login successful',
            token: 'dummy_token_for_now' 
        });
    } else {
        res.status(401).json({ 
            success: false, 
            message: 'Invalid credentials' 
        });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});