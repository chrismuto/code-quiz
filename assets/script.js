//set global variables for timer, question and answers elements
var timerEl = document.querySelector("#timer");
var highScoreButtonEl = document.querySelector("#highScoreButton");
var startButtonEl = document.querySelector("#startButton");
var returnButtonEl = document.querySelector("#return");
var answerListEl = document.querySelector(".answerList");
var answerListEl2 = document.querySelector("#answers2");
var answerListEl3 = document.querySelector("#answers3");
var answerListEl4 = document.querySelector("#answers4");
var rightWrong = document.querySelector("#right-wrong");
var initialsPrompt = document.querySelector("#initialsPrompt");
var answerButton = document.querySelector(".answer");
var rightAnswer = document.querySelector(".rightAnswer");
var wrongAnswer = document.querySelector(".wrongAnswer");
var quizBody = document.querySelector("#quizBody");
var scoreboard = document.querySelector("#scoreboard");
var isWin = false;
var timeLeft = 75;
var i = 0;
var timeInterval;

//set each question div in the HTML as a variable
var question1 = document.querySelector("#question1");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");
var question4 = document.querySelector("#question4");

//put all question variables in an array to be run through
var questionIndex = [question1, question2, question3, question4];

//displays high score board
highScoreButtonEl.addEventListener("click", function(event) {
    loadScoreboard();
    showElement(returnButtonEl);
})

//returns from scoreboard to main page
returnButtonEl.addEventListener("click", function(event) {
document.getElementById("quizBody").style.display = "unset";
})

//starts quiz and timer
startButtonEl.addEventListener("click", function(event) {
    hideElement(startButtonEl);
    timeInterval = setInterval( function() {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.textContent = timeLeft;
        }
        if (timeLeft <= 0) {
        endGame();
        }
        else if (i > questionIndex.length) {
        endGame();
        }
        }, 500)
        nextQuestion();
})

//event listener for first set of answers
answerListEl.addEventListener("click", function(event) {
    if (event.target.matches(".rightAnswer")) {
    }
    showElement(rightWrong);
    rightWrong.textContent = "Right!";
    if (event.target.matches(".wrongAnswer")) {
        timeLeft = timeLeft -10;
        showElement(rightWrong);
        rightWrong.textContent = "Wrong!";
    }
    nextQuestion();
})

//event listener for second set of answers
answerListEl2.addEventListener("click", function(event) {
    if (event.target.matches(".rightAnswer")) {
    }
    showElement(rightWrong);
    rightWrong.textContent = "Right!";
    if (event.target.matches(".wrongAnswer")) {
        timeLeft = timeLeft -10;
        showElement(rightWrong);
        rightWrong.textContent = "Wrong!";
    }
    nextQuestion();
})

//event listener for third set of answers
answerListEl3.addEventListener("click", function(event) {
    if (event.target.matches(".rightAnswer")) {
    }
    showElement(rightWrong);
    rightWrong.textContent = "Right!";
    if (event.target.matches(".wrongAnswer")) {
        timeLeft = timeLeft -10;
        showElement(rightWrong);
        rightWrong.textContent = "Wrong!";
    }
    nextQuestion();
})

//event listener for fourth set of answers
answerListEl4.addEventListener("click", function(event) {
    if (event.target.matches(".rightAnswer")) {
    }
    showElement(rightWrong);
    rightWrong.textContent = "Right!";
    if (event.target.matches(".wrongAnswer")) {
        timeLeft = timeLeft -10;
        showElement(rightWrong);
        rightWrong.textContent = "Wrong!";
    }
    nextQuestion();
})

//listener for the submission of initials, stores scores on local storage and makes new <li> for each score
initialsPrompt.addEventListener("submit", function(event) {
    hideElement(promptInitials);
    var initials = form.querySelector("button.submit");
    localStorage.setItem(timeLeft, initials);
    showElement(scoreboard);
    event.preventDefault();
})

//on activating function this hides the current question and makes the next question visible
function nextQuestion() {
    var index = questionIndex;
    if (i === 0) {
        showElement(index[i]);
    }
    if (0 < i && i < index.length) {
        hideElement(index[i-1]);
        showElement(index[i]);
    }
    i++;
}

function showElement(num) {
    num.style.display = "unset";
}

function hideElement(num) {
    num.style.display = "none";

}

function endGame () {
    hideElement(quizBody);
    hideElement(rightWrong);
    clearInterval(timeInterval);
    showElement(initialsPrompt);
}

function loadScoreboard() {
    quizBody.style.display = "none";
    scoreboard.style.display = "unset";
}