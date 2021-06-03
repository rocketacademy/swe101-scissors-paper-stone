var randomChoice = function () {
  var randomDecimal = Math.random() * 3;
  var randomNumber = Math.floor(randomDecimal);
  var choiceNumber = randomNumber + 1;
  return choiceNumber;
};

var main = function (input) {
  // input = scissors, paper or stone
  // output = user won, program won or it's a draw
  var choiceNumber = randomChoice();

  var myOutputValue = "It's a draw!";

  var inputNumber;

  var choice;

  if (
    input != "Scissors" ||
    input != "Paper" ||
    input != "Stone" ||
    input != "Reversed Scissors" ||
    input != "Reversed Paper" ||
    input != "Reversed Stone"
  ) {
    myOutputValue =
      "Error <br> <br> Please input 'Scissors' 'Paper' 'Stone' or <br> <br> For reverse game <br> <br> Please input 'Reversed Scissors' 'Reversed Paper' 'Reversed Stone";
  }

  // Scissors = 1, Paper = 2, Stone = 3
  if (input == "Scissors") inputNumber = 1;

  if (input == "Paper") inputNumber = 2;

  if (input == "Stone") inputNumber = 3;

  if (choiceNumber == 1) choice = "Scissors";

  if (choiceNumber == 2) choice = "Paper";

  if (choiceNumber == 3) choice = "Stone";

  // scenarios when player loses to program
  if (
    (inputNumber == 1 && choiceNumber == 3) ||
    (inputNumber == 2 && choiceNumber == 1) ||
    (inputNumber == 3 && choiceNumber == 2)
  ) {
    myOutputValue =
      "Wrong! The computer chose " +
      choice +
      " <br> <br> You chose " +
      input +
      " <br> <br> You lose! Bummer. <br> <br> Now you can type 'Scissors' 'Paper' or 'Stone' to play another round!";
  }

  // scenarios when player wins program
  if (
    (inputNumber == 1 && choiceNumber == 2) ||
    (inputNumber == 2 && choiceNumber == 3) ||
    (inputNumber == 3 && choiceNumber == 1)
  ) {
    myOutputValue = "You Win!";
  }

  // Reverse Mode
  if (input == "Reversed Scissors") inputNumber = 1;

  if ((input = "Reversed Paper")) inputNumber = 2;

  if ((input = "Reversed Stone")) inputNumber = 3;

  // scenarios when player loses to program
  if (
    (inputNumber == 1 && choiceNumber == 2) ||
    (inputNumber == 2 && choiceNumber == 3) ||
    (inputNumber == 3 && choiceNumber == 1)
  ) {
    myOutputValue =
      "Wrong! The computer chose " +
      choice +
      " <br> <br> You chose " +
      input +
      " <br> <br> You lose! Bummer. <br> <br> Now you can type 'Scissors' 'Paper' or 'Stone' to play another round!";
    console.log(myOutputValue);
  }

  // scenarios when player wins program
  if (
    (inputNumber == 1 && choiceNumber == 3) ||
    (inputNumber == 2 && choiceNumber == 1) ||
    (inputNumber == 3 && choiceNumber == 2)
  ) {
    myOutputValue = "You Win!";
    console.log(myOutputValue);
  }

  console.log("Action thrown by program: " + choice);

  return myOutputValue;
};
