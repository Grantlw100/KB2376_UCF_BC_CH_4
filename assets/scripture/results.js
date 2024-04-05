document.addEventListener('DOMContentLoaded', () => {
    displayResults();
});

function displayResults() {
    const resultsContainer = document.getElementById('resultsContainer');
    const quizResults = JSON.parse(localStorage.getItem('quizAttempts')) || [];

    quizResults.forEach((attempt, index) => {
        const resultElement = document.createElement('div');
        resultElement.innerHTML = `
            <h2>Attempt ${index + 1}</h2>
            <p>Subject: ${attempt.subject}</p>
            <p>Score: ${attempt.score.correct} Correct, ${attempt.score.incorrect} Incorrect</p>
            <p>Questions Answered: ${attempt.questionsAnswered}</p>
            <p>Time Taken: ${attempt.timeTaken} seconds</p>
        `;
        resultsContainer.appendChild(resultElement);
    });
}

document.getElementById('clearResults').addEventListener('click', event => {
    localStorage.removeItem('quizAttempts');
    document.getElementById('resultsContainer').innerHTML = '';
})