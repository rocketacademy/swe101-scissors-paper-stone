// Fucntion to for random number generator between 0 to 2
var numberGenerator = function () {
  return Math.floor(Math.random() * 3);
};

var main = function (input) {
  numGuess = numberGenerator();

  // Assign random numbers to sps
  if (numGuess == 0) {
    guess = "scissors";
  }
  if (numGuess == 1) {
    guess = "paper";
  }
  if (numGuess == 2) {
    guess = "stone";
  }

  // Default output value
  var myOutputValue = `${input} doesn't beat ${guess}. You lose!`;

  // Implement rule: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
  // Also validate user input, must be either sps.
  if (input != "scissors" || input != "paper" || input != "stone") {
    myOutputValue = `Please input either scissors, paper or stone.`;
  }
  if (input == "scissors" && guess == "paper") {
    myOutputValue = `The computer chose ${guess}. <br> You chose beats ${input}. <br> You win! <br> Now you can type "scissors", "paper" or "stone" to play another round!`;
  }
  if (input == "paper" && guess == "stone") {
    myOutputValue = `The computer chose ${guess}. <br> You chose beats ${input}. <br> You win! <br> Now you can type "scissors", "paper" or "stone" to play another round!`;
  }
  if (input == "stone" && guess == "scissors") {
    myOutputValue = `The computer chose ${guess}. <br> You chose beats ${input}. <br> You win! <br> Now you can type "scissors", "paper" or "stone" to play another round!`;
  }
  if (input == guess) {
    myOutputValue = `The computer chose ${guess}. <br> You chose beats ${input}. <br> This is a draw! <br> Now you can type "scissors", "paper" or "stone" to play another round!`;
  }

  return myOutputValue;
};
