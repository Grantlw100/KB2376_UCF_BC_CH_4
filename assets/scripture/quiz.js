let currentQuestionIndex = 0;
let questions = []; // This will be filled dynamically based on the selected subject.
let score = { correct: 0, incorrect: 0 };
let timer;
let selectedSubject;
let totalTime;
let intervalId = null; // Track the timer interval ID for clearing
let isQuizStarted = false;
let questionAmount;

document.getElementById("start").addEventListener("click", function() {
    if (!isQuizStarted) {
        // Quiz has not started yet
        startQuiz();
    } else {
        // Quiz has started, end the quiz early
        endQuiz();
    }
});

function startQuiz() {
    selectedSubject = document.querySelector('#subjectSelect').value;
    // Retrieve the value as a number
    questionAmount = parseInt(document.getElementById("questionAmount").value, 10);

    // Debugging to check the value
    console.log("Question Amount (Number):", questionAmount);

    if (!isNaN(questionAmount) && questionAmount >= 5 && questionAmount <= 50) {
        questions = fetchQuestions(selectedSubject);
        shuffleQuestions(questions);
        questions = questions.slice(0, questionAmount); // Adjust questions array size
        totalTime = questionAmount * 10;
        timer = totalTime;
        currentQuestionIndex = 0;
        score = { correct: 0, incorrect: 0 };
        displayQuestion();
        startTimer();
        document.getElementById("start").disabled = true;
        isQuizStarted = true;
        document.getElementById("start").textContent = "End Quiz";
        document.getElementById("questionAmount").disabled = true// Clear the input field
        document.getElementById("subjectSelect").disabled = true;
    } else {
        alert("Please enter a valid number of questions.");
    }
}


function fetchQuestions(subject) {
    const questionMapping = {
        WEBAPI: WEBAPI,
        HTMLquestions: HTMLquestions,
        CSSquestions: CSSquestions,
        jsQuestions: jsQuestions,
        nodeQuestions: nodeQuestions,
        MySQLquestions: MySQLquestions,
        thirdPartyAPIs: thirdPartyAPIs,
        serverSideAPIs: serverSideAPIs
    };
    return questionMapping[subject] || [];
}

function displayQuestion() {
    // End the quiz when the current question index equals the chosen question amount
    console.log(currentQuestionIndex, questionAmount);
    if (currentQuestionIndex >= questionAmount) {
        endQuiz();
        return;
    }

    const question = questions[currentQuestionIndex];
    const quizCardContainer = document.querySelector('#quiz-container');
    quizCardContainer.innerHTML = '';

    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerText = question.question;
    quizCardContainer.appendChild(questionElement);

    const allAnswers = [question.correctAnswer, ...question.incorrectAnswers];
    shuffleQuestions(allAnswers);

    allAnswers.forEach(answer => {
        const answerLi = document.createElement('li');
        answerLi.innerText = answer;
        answerLi.addEventListener('click', function() { 
            checkAnswer(answer, question.correctAnswer);
        });
        quizCardContainer.appendChild(answerLi);
    });
}


function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        score.correct++;
    } else {
        score.incorrect++;
        timer -= 5; // Optional penalty for incorrect answers
    }
    updateScore();
    currentQuestionIndex++;
    
    // Check if all questions have been answered
    if (currentQuestionIndex >= questions.length) {
        // Correctly calculate time taken before ending the quiz
        endQuiz(); // Pass timeTaken to endQuiz if needed
        timer = 0; // Then set timer to 0
        updateTimer(); // And finally update the timer display
    } else {
        displayQuestion(); // Display next question
    }
}


function updateScore() {
    document.getElementById("score").innerText = `Correct: ${score.correct} | Incorrect: ${score.incorrect}`;
}

function startTimer() {
    clearInterval(intervalId); // Clear existing timer to avoid duplicates
    intervalId = setInterval(() => {
        timer--;
        updateTimer();
        if (timer <= 0) {
            clearInterval(intervalId); // Ensure the timer stops
            endQuiz(); // End the quiz when timer runs out
        }
    }, 1000);
}

function updateTimer() {
    document.getElementById("time").innerText = timer.toString();
}

function endQuiz() {
    clearInterval(intervalId); // Ensure the countdown stops
    const timeTaken = totalTime - timer;
    saveQuizAttempt(timeTaken); // Assume saveQuizAttempt can now accept timeTaken as a parameter
    alert("Quiz over! See your results.");
    isQuizStarted = false;
    document.getElementById("start").textContent = "Start Quiz";
    document.getElementById("subjectSelect").disabled = false;
    document.getElementById("questionAmount").disabled = false;
}

function saveQuizAttempt(timeTaken) {
    const quizAttempts = JSON.parse(localStorage.getItem('quizAttempts') || '[]');
    console.log(timeTaken, currentQuestionIndex)
    const attempt = {
        subject: selectedSubject,
        score: score,
        questionsAnswered: currentQuestionIndex,
        timeTaken: timeTaken
    };
    quizAttempts.push(attempt);
    localStorage.setItem('quizAttempts', JSON.stringify(quizAttempts));
}

function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
