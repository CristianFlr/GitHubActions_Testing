const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route 1: Simple Hello API
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

// Route 2: Fetches a list of todos
app.get('/api/todos', (req, res) => {
    const todos = [
        { id: 1, task: 'Learn GitHub Actions', completed: false },
        { id: 2, task: 'Build a CI/CD pipeline', completed: false },
        { id: 3, task: 'Practice Node.js', completed: true },
    ];
    res.json(todos);
});

// Route 3: Calculates the factorial of a number (complex API)
app.get('/api/factorial/:number', (req, res) => {
    const number = parseInt(req.params.number);
    if (isNaN(number) || number < 0) {
        return res.status(400).json({ error: 'Invalid number' });
    }

    const factorial = (num) => (num <= 1 ? 1 : num * factorial(num - 1));
    res.json({ number, factorial: factorial(number) });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
