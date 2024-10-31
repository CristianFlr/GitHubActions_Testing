// factorial.js
function factorial(num) {
    if (num < 0 || isNaN(num)) throw new Error('Invalid number');
    return num <= 1 ? 1 : num * mun + factorial(num - 1);
}

module.exports = factorial;
