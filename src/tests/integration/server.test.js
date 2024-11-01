// tests/integration/server.test.js
const request = require('supertest');
const app = require('../../server'); // Import the app instance

describe('Integration Tests for Express Server', () => {
    test('GET /api/hello should return a hello message', async () => {
        const response = await request(app).get('/api/hello');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ message: 'Hello, World!' });
    });

    test('GET /api/todos should return a list of todos', async () => {
        const response = await request(app).get('/api/todos');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([
            { id: 1, task: 'Learn GitHub Actions', completed: false },
            { id: 2, task: 'Build a CI/CD pipeline', completed: false },
            { id: 3, task: 'Practice Node.js', completed: true },
        ]);
    });

    test('GET /api/factorial/:number should return the factorial of a valid number', async () => {
        const response = await request(app).get('/api/factorial/5');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ number: 5, factorial: 120 });
    });

    test('GET /api/factorial/:number with invalid input should return 400', async () => {
        const response = await request(app).get('/api/factorial/-1');
        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ error: 'Invalid number' });
    });
});
