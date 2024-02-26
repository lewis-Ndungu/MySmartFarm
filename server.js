const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/signup', (req, res) => {
    // Retrieve signup data from request body
    const { name, email, password } = req.body;

    // Validate signup data (you can add more validation as needed)
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    // Perform password validation or any other necessary checks here
    // For simplicity, let's assume the password is correct

    // Assuming signup is successful, redirect to another website
    res.status(200).json({ redirectUrl: '../html/index.html', message: 'Signup successful.' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
