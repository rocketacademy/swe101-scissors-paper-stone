var randomChoice = function () {
  var randomDecimal = Math.random() * 3;
  var randomNumber = Math.floor(randomDecimal);
  var choiceNumber = randomNumber + 1;
  return choiceNumber;
};

var currentGameMode = "waiting for user name";

var userRecord = 0;

var programRecord = 0;

var main = function (input) {
  // input = scissors, paper or stone
  // output = user won, program won or it's a draw
  var choiceNumber = randomChoice();

  var inputNumber;

  var choice;

  if (currentGameMode == "waiting for user name") {
    //set user name as input
    userName = input;

    currentGameMode = "Scissors Paper Stone";

    return "Hello " + userName;
  }

  if (
    !(
      input == "Scissors" ||
      input == "Paper" ||
      input == "Stone" ||
      input == "Reversed Scissors" ||
      input == "Reversed Paper" ||
      input == "Reversed Stone"
    )
  ) {
    console.log(input);
    return "Error <br> <br> Please input 'Scissors' 'Paper' 'Stone' or <br> <br> For reverse game <br> <br> Please input 'Reversed Scissors' 'Reversed Paper' 'Reversed Stone";
  }

  // Scissors = 1, Paper = 2, Stone = 3
  if (input == "Scissors") inputNumber = 1;

  if (input == "Paper") inputNumber = 2;

  if (input == "Stone") inputNumber = 3;

  if (input == "Reversed Scissors") inputNumber = 4;

  if (input == "Reversed Paper") inputNumber = 5;

  if (input == "Reversed Stone") inputNumber = 6;

  if (choiceNumber == 1) choice = "Scissors";

  if (choiceNumber == 2) choice = "Paper";

  if (choiceNumber == 3) choice = "Stone";

  var winner = checkWinner(inputNumber, choiceNumber);
  console.log(inputNumber, choiceNumber);

  if (winner == "Program") {
    programRecord = programRecord + 1;
    return (
      "Wrong! The computer chose " +
      choice +
      " <br> <br> You chose " +
      input +
      " <br> <br> You lose! Bummer. <br> <br> Now you can type 'Scissors' 'Paper' or 'Stone' to play another round! So far " +
      userName +
      ", program has won " +
      programRecord +
      " turns."
    );
  }

  if (winner == "Player") {
    userRecord = userRecord + 1;
    return (
      "You Win! So far " +
      userName +
      ", you have won " +
      userRecord +
      " turns. Pretty good!"
    );
  }

  if (winner == "Draw") {
    return "It's a draw!";
  }
};

var checkWinner = function (inputNumber, choiceNumber) {
  // scenarios when player loses to program
  if (
    (inputNumber == 1 && choiceNumber == 3) ||
    (inputNumber == 2 && choiceNumber == 1) ||
    (inputNumber == 3 && choiceNumber == 2) ||
    (inputNumber == 4 && choiceNumber == 2) ||
    (inputNumber == 5 && choiceNumber == 3) ||
    (inputNumber == 6 && choiceNumber == 1)
  ) {
    return "Program";
  }

  // scenarios when player wins program
  if (
    (inputNumber == 1 && choiceNumber == 2) ||
    (inputNumber == 2 && choiceNumber == 3) ||
    (inputNumber == 3 && choiceNumber == 1) ||
    (inputNumber == 4 && choiceNumber == 3) ||
    (inputNumber == 5 && choiceNumber == 1) ||
    (inputNumber == 6 && choiceNumber == 2)
  ) {
    return "Player";
  } else {
    return "Draw";
  }
};
