
let currentQuestionIndex = 0;
let questions = []; // This array will be filled with questions based on the selected subject.
let subject
// Event listener for the "Start Studying" button.
document.getElementById("start").addEventListener("click", () => {
    subject = document.getElementById("subjectSelect").value;
loadStudyGuide(subject)
});

// Event listeners for navigating through the questions.
document.getElementById("next").addEventListener("click", () => changeQuestion(1));
document.getElementById("previous").addEventListener("click", () => changeQuestion(-1));


// Loads and shuffles questions based on the selected subject, then displays the first question.



function loadStudyGuide(subject) {
    // Assuming jsQuestions is an array containing your questions. You may need to adjust this
    // based on the actual variable name or method used to fetch or select questions.
    switch (subject) {
        case 'WEBAPI':
            questions = WEBAPI;
            break;
        case 'thirdPartyAPIs':
            questions = thirdPartyAPIs;
            break;
        case 'serverSideAPIs':
            questions = serverSideAPIs;
            break;
        case 'mySQLquestions':
            questions = MySQLquestions;
            break;
        case 'nodeQuestions':
            questions = nodeQuestions;
            break;
        case 'HTMLquestions':
            questions = HTMLquestions;
            break;
        case 'CSSquestions':
            questions = CSSquestions;
            break;
        case 'jsQuestions':
            questions = jsQuestions;
            break;
    }
    console.log(subject)
    shuffleQuestions(questions);
    displayQuestion(currentQuestionIndex);
}

// Changes the question displayed, looping around if reaching the end or beginning of the array.
function changeQuestion(step) {
    currentQuestionIndex += step;
    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0; // Loop back to the first question
    } else if (currentQuestionIndex < 0) {
        currentQuestionIndex = questions.length - 1; // Loop to the last question
    }
    displayQuestion(currentQuestionIndex);
}

// Displays the current question and hides the answers until the card is clicked.
function displayQuestion(index) {
    const question = questions[index];
    const flashCardContainer = document.querySelector('#card-container');
    flashCardContainer.innerHTML = ''; // Clear the container

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="card-body" id="cardBody">
            <h5 class="card-title">${question.question}</h5>
            <p class="card-text" style="display: none;">${question.correctAnswer}</p>
            <p class="card-text" style="display: none;">${question.studyGuideInformation}</p>
            <a href="${question.resources}" class="btn btn-primary" style="display: none;" target="_blank">Learn More</a>
        </div>
    `;
    flashCardContainer.appendChild(card);

    // Add event listener to the card to reveal hidden elements upon click.
    card.addEventListener("click", function() {
        this.querySelectorAll(".card-text, .btn").forEach(element => {
            if (element.style.display === "none") {
                element.style.display = ""; // Reveal the elements
            }
            else {
                element.style.display = "none"; // Hide the elements
            }
        });
    });
}

// Shuffles the questions array to randomize the order.
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}
