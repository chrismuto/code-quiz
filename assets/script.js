//set global variables for timer, question and answers elements
var timerEl = document.querySelector("#timer");
var highScoreButtonEl = document.querySelector("#highScoreButton");
var startButtonEl = document.querySelector("#startButton");
var answerListEl = document.querySelector(".answerList");
var rightWrong = document.querySelector("#right-wrong");
var initialsPrompt = document.querySelector("#initialsPrompt");
var button = document.querySelector(".answer");
var endGame = false;

var timeLeft = 75
var timeInterval = setInterval( function() {
    if (timeLeft > 0) {
        timerEl.textContent = timeLeft;
        timeLeft--;
    }
    if else {
        //array of questions is finished
        endGame();
    }
    else {
        clearInterval(timeInterval);
        endGame();
    }
})

// function hideElement(num) {
//     num.attr("display", "none");
// }
// function testFunction(event) {
//     if (answerListEl.answer.contains(".rightAnswer")) {
//         rightWrong.textContent = "Correct!";
//         rightWrong.attr("display", "unset");
//         setTimeout (hideElement, 500);
//     }
// }
// button.addEventListener('click', testFunction);

//     displayLetterEl.addClass('letter');
  
//     // get letter from clicked letter button's `data-letter` attribute and use it for display
//     displayLetterEl.text($(event.target).attr('data-letter'));
//     displayEl.append(displayLetterEl);
//   );
//make separate arrays containing the possible answers for each question
//answer arrays must connect to the right question
//make a function to start the quiz
//check timer every second, if <=0 then end quiz
//make a function to display question and answers
//display first question
//when a question is displayed, display the matching possible answers
//to display answers, append li elements to the ul element
//use a delegate event to make answers selectable
//check if answer is correct
//if answer is correct, display correct, else display wrong and reduce timer
//once answered, remove question from element => use a function to move up 1 in an index, check chp4 lession 18 bubbling event
//display next question
//repeat answer process
//check timer after each question, if <= 0 end quiz
//if there is still time when all questions are answered end quiz
//at end of quiz ask for initials for scoreboard
//set timer value and initials as a paired value in local storage
//go to scoreboard
//scores on leaderboard should be sorted with highest score on top
//to sort scores, do they need to be in an array or object?