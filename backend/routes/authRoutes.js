const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');  // Corrected import

router.post('/login', login);  // Use the correct function name

module.exports = router;