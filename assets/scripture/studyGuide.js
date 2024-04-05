const subjectSelect = document.querySelector('#start');
subjectSelect.addEventListener('click', loadStudyGuide);
let currentQuestionIndex = 0;
let questions = [];

document.addEventListener('DOMContentLoaded', () => {
    updateNavigationButtons();
});

function loadStudyGuide() {
    const subject = document.querySelector('#subjectSelect').value;
    console.log("Selected subject:", subject); 
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
        case 'MySQLquestions':
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
    
    console.log(questions)
    displayQuestions(questions.slice(currentQuestionIndex, currentQuestionIndex + 25));
    updateNavigationButtons();
}

function displayQuestions(questions) {
    const studyGuideContainer = document.querySelector('#study-container');
        
    studyGuideContainer.innerHTML = '';

    questions.forEach((question => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.setAttribute('id', 'questionStudy');

        const questionP = document.createElement('p');
        questionP.textContent = question.question;
        questionP.classList.add('question-text');

        const studyInfoP = document.createElement('p');
        studyInfoP.textContent = question.studyGuideInformation;
        studyInfoP.classList.add('study-info');

        const resourceP = document.createElement('p');
        resourceP.innerHTML = `Resource: <a href="${question.resources}">${question.resources}</a>`;
        resourceP.classList.add('resource');

        questionDiv.appendChild(questionP);
        questionDiv.appendChild(studyInfoP);
        questionDiv.appendChild(resourceP);

        studyGuideContainer.appendChild(questionDiv);

        })
    );
}

document.getElementById('next').addEventListener('click', nextQuestions);
document.getElementById('previous').addEventListener('click', previousQuestions);

function nextQuestions() {
    // Assuming 'questions' is accessible in this scope and contains the full list of questions for the selected subject
    if (currentQuestionIndex + 25 < questions.length) {
        currentQuestionIndex += 25;
    } else {
        // Optionally handle the scenario when there are no more questions to display
        console.log("No more questions to display.");
    }
    loadStudyGuide();
}

function previousQuestions() {
    if (currentQuestionIndex - 25 >= 0) {
        currentQuestionIndex -= 25;
    } else {
        // Optionally handle the scenario when you can't go back further
        console.log("You are at the beginning of the questions list.");
    }
    loadStudyGuide();
}

function updateNavigationButtons() {
    document.getElementById('previous').disabled = currentQuestionIndex === 0;
    document.getElementById('next').disabled = currentQuestionIndex + 25 >= questions.length;

    if (questions.length === 0) {
        document.getElementById('previous').disabled = true;
        document.getElementById('next').disabled = true;
    }
    if (document.getElementById('previous').disabled) {
        document.getElementById('previous').classList.add('hidden');
    } else {
        document.getElementById('previous').classList.remove('hidden');
    }
    if (document.getElementById('next').disabled) {
        document.getElementById('next').classList.add('hidden');
    } else {
        document.getElementById('next').classList.remove('hidden');
    }
}
