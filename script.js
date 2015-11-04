var score = 0
var correctAnswer = [];
var wrongAnswer = [];

function answerFunction() {
  if (question === answer) {
    score++
    alert("CORRECT! your score is " + score);
    correctAnswer.push(question);
  
  } else {
    alert("WRONG!!");
    wrongAnswer.push(question);
  }
};

alert("Hello this is the ultimate quiz, there are 5 questions to follow....lets see how you do!");

//QUESTION 1
var question = "What is the capital of France?";
prompt(question);
var answer = "Paris";
answerFunction();

//QUESTION 2
var question = "How many days in a year?";
prompt(question);
var answer = "365";
answerFunction();

//QUESTION 3
var question = "What is 2+2?";
prompt(question);
var answer = "4";
answerFunction();

//QUESTION 4
var question = "How many days in a week?";
prompt(question);
var answer = "7";
answerFunction();

//QUESTION 5
var question = "What is the ocean between America and the UK?";
prompt(question);
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

function print(message) {
  document.write(message);
}

print( "These are all the questions you got right" + correctAnswer.toString() );
print( "These are all the questions you got wrong" + wrongAnswer.toString() );

