var score = 0

function answerFunction() {
  if (question === answer) {
    score++
    alert("CORRECT! your score is " + score);
  
  } else {
    alert("WRONG!!");
  }
};

alert("Hello this is the ultimate quiz, there are 5 questions to follow....lets see how you do!");

//QUESTION 1
var question = prompt("What is the capital of France?");
var answer = "Paris";
answerFunction();

//QUESTION 2
var question = prompt("How many days in a year?");
var answer = "365";
answerFunction();

//QUESTION 3
var question = prompt("What is 2+2?");
var answer = "4";
answerFunction();

//QUESTION 4
var question = prompt("How many days in a week?");
var answer = "7";
answerFunction();

//QUESTION 5
var question = prompt("What is the ocean between America and the UK?");
var answer = "Atlantic Ocean";
answerFunction();

function finalMessage() {
alert("Well done! you answered " + score + " questions correctly.  You have won the " + crownColour + " crown.");
}

if (score === 5) {
  var crownColour = "Gold";
  finalMessage();
} else if (score < 5 && score > 3) {
  var crownColour = "Silver";
  finalMessage();
} else if (score < 3 && score > 1) {
  var crownColour = "Bronze";
  finalMessage();
} else {
  alert("The quiz is over you answered " + score + " questions correctly. This was not good enough to win any crowns");
};

