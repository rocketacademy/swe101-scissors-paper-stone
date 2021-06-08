var randomChoice = function () {
  var randomDecimal = Math.random() * 3;
  var randomNumber = Math.floor(randomDecimal);
  var choiceNumber = randomNumber + 1;
  return choiceNumber;
};

var randomDiceRoll = function () {
  var randomDec = Math.random() * 6;
  var randomNum = Math.floor(randomDec);
  var randomDice = randomNum + 1;
  return randomDice;
};

var currentGameMode = "waiting for user name";

var userRecord = 0;

var programRecord = 0;

var main = function (input) {
  // input = scissors, paper or stone
  // output = user won, program won or it's a draw
  var choiceNumber = randomChoice();

  var myOutputValue;

  var inputNumber;

  var choice;

  if (currentGameMode == "waiting for user name") {
    //set user name as input
    userName = input;

    currentGameMode = "waiting for choice of game";

    return (
      "Hello " +
      userName +
      " Please type in Word Game, Dice Roll or leave blank for Scissors Paper Stone Game."
    );
  }

  if (currentGameMode == "waiting for choice of game") {
    console.log("banana");
    if (input == "Word Game") {
      myOutputValue = "Guess the secret word!";
      currentGameMode = "Secret Word";
      return myOutputValue;
    }

    if (input == "") {
      currentGameMode = "Scissors Paper Stone";
      myOutputValue = "We will proceed with the Scissors Paper Stone Game.";
      return myOutputValue;
    }

    if (input == "Dice Roll") {
      currentGameMode = "Dice Roll Game";
      myOutputValue =
        "We will proceed with Dice Roll Game. Please input your guess between 1 to 6!";
      return myOutputValue;
    }
  }
  // if Game Mode is Dice Roll Game, we will play guess the dice num
  if ((currentGameMode = "Dice Roll Game")) {
    var diceRoll = randomDiceRoll();
    myOutputValue = "Wrong! Guess again!";
    if (input == diceRoll) {
      myOutputValue = "You guessed the right number!";
    }
    return myOutputValue;
  }

  // if Game mode is Secret Word, we will play guess the secret word
  if (currentGameMode == "Secret Word") {
    myOutputValue = "Wrong! Try again";
    if (input == "banana") {
      myOutputValue = "You guessed the secret word!";
    }
    return myOutputValue;
  }

  // if Game mode is SPS, then we will play Scissors Paper Stone.
  if (currentGameMode == "Scissors Paper Stone") {
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
