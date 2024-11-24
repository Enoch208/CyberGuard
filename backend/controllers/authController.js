const config = require('config');

const login = (req, res) => {
    const { username, password } = req.body;
    const defaultUsername = config.get('defaultUsername');
    const defaultPassword = config.get('defaultPassword');

    if (username === defaultUsername && password === defaultPassword) {
        res.status(200).json({ success: true, message: 'Login successful!' });
    } else {
        res.status(401).json({ success: false, message: 'Wrong password, please request passcode from devs.' });
    }
};

module.exports = { login };
