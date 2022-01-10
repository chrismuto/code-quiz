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
var scoreList = document.querySelector("#scoreList");
var isWin = false;
var timeLeft = 75;
var i = 0;
var timeInterval;
var highScores = [];

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
    event.preventDefault();
    highScores = JSON.parse(localStorage.getItem("highscores"));
    if (highScores === null) {
        highScores = [];
    }
    hideElement(initialsPrompt);
    var initials = document.querySelector("#initials").value.trim();
    newScore = {initials, timeLeft};
    highScores.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(highScores));
    showElement(scoreboard);
    loadScoreboard();
})
// set high scores as an array of objects
// localStorage.setItem("highscores", JSON.stringify(highscores))
// highscores = JSON.parse(localStorage.getItem("highscores"))
// highscores ---> [{23: "DD"}, {61: "ST"}]

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

//reveals the target element
function showElement(num) {
    num.style.display = "unset";
}

//hides the target element
function hideElement(num) {
    num.style.display = "none";

}

//On end of game, clears visible elements and stops timer, then shows initials prompt
function endGame () {
    hideElement(quizBody);
    hideElement(rightWrong);
    clearInterval(timeInterval);
    showElement(initialsPrompt);
}

//clears the entire body of the quiz and reveals the scoreboard
function loadScoreboard() {
    quizBody.style.display = "none";
    scoreboard.style.display = "unset";
    initialsPrompt.style.display = "none";
    highScores= JSON.parse(localStorage.getItem("highscores"));
    console.log(typeof(highScores));
    // for (i = 0, i < highScores.length; i++;) {
    // var newLi = document.createElement("li");
    // newLi.textContent = highScores[i];
    // scoreList.appendChild(newLi);
    // }
    for (var [initials, time] of highScores.entries(highScores[0])) {
        var newLi = document.createElement("li");
        newLi.textContent = (initials, time);
        scoreList.appendChild(newLi);
      }
}