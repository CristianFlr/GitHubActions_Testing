// tests/unit/factorial.test.js
const factorial = require('../../factorial');

describe('Unit Tests for factorial function', () => {
    test('Calculates factorial of 5 correctly', () => {
        expect(factorial(5)).toBe(120);
    });

    test('Returns 1 for factorial of 0', () => {
        expect(factorial(0)).toBe(1);
    });

    test('Throws error for negative numbers', () => {
        expect(() => factorial(-1)).toThrow('Invalid number');
    });

    test('Throws error for non-numeric values', () => {
        expect(() => factorial('abc')).toThrow('Invalid number');
    });
});
