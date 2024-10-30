// index.js
import createStarField from "./stars.js";

// Create and style the main content dynamically
document.addEventListener("DOMContentLoaded", () => {

    createStarField();

    // Create main elements
    const heading = document.createElement("h1");
    heading.textContent = "Express API Server";
    document.body.appendChild(heading);

    const description = document.createElement("p");
    description.textContent = "Explore the available API endpoints by clicking the buttons below:";
    document.body.appendChild(description);

    // API buttons
    const buttonContainer = document.createElement("div");
    const helloButton = createButton("Get Hello Message", fetchHello);
    const todosButton = createButton("Get Todo List", fetchTodos);

    buttonContainer.appendChild(helloButton);
    buttonContainer.appendChild(todosButton);
    document.body.appendChild(buttonContainer);

    // Factorial input and button
    const factorialContainer = document.createElement("div");
    const factorialInput = document.createElement("input");
    factorialInput.type = "number";
    factorialInput.placeholder = "Enter a number";
    factorialInput.min = "0";
    factorialInput.id = "factorial-input";

    const factorialButton = createButton("Get Factorial", fetchFactorial);
    factorialContainer.appendChild(factorialInput);
    factorialContainer.appendChild(factorialButton);
    document.body.appendChild(factorialContainer);

    // Result display
    const resultDiv = document.createElement("div");
    resultDiv.id = "result";
    resultDiv.textContent = "Results will appear here...";
    document.body.appendChild(resultDiv);
});

// Helper function to create a button with a label and an event listener
function createButton(label, onClick) {
    const button = document.createElement("button");
    button.className = "api-button";
    button.textContent = label;
    button.addEventListener("click", onClick);
    return button;
}

// Function to display results in the result div
function displayResult(data) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = JSON.stringify(data, null, 2);
}

// API request functions
function fetchHello() {
    fetch('/api/hello')
        .then(response => response.json())
        .then(data => displayResult(data))
        .catch(error => console.error('Error:', error));
}

function fetchTodos() {
    fetch('/api/todos')
        .then(response => response.json())
        .then(data => displayResult(data))
        .catch(error => console.error('Error:', error));
}

function fetchFactorial() {
    const number = document.getElementById('factorial-input').value;
    if (number === '') {
        displayResult({ error: "Please enter a number!" });
        return;
    }

    fetch(`/api/factorial/${number}`)
        .then(response => response.json())
        .then(data => displayResult(data))
        .catch(error => console.error('Error:', error));
}
