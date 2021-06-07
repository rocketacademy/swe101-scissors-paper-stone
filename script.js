//input -- text of 'scissors' 'paper' 'stone'
// if input = random == its a draw
// if input is not within the 3 texts, let them know its wrong & provide the options
// system generates random option
//output -- wins if SPS logic makes sense + tells user if they won/lost/draw

// build code for the 3 options
var getRandomChoice = function () {
  var choiceCount = 3;
  var getRandomSelection = getRandomNumber(choiceCount);
  console.log("random number chosen");
  //this will generate random number based on the no. of choices

  if (getRandomSelection == 1) {
    return "Scissors";
  }

  if (getRandomSelection == 2) {
    return "Paper";
  }

  if (getRandomSelection == 3) {
    return "Stone";
  }

  return "Oops, please enter a valid selection - Scissors, Paper or Stone. (caps sensitive)";
};

// build code to generate random number selection, number would be from 1 to 3, 3 inclusive
var getRandomNumber = function () {
  var getDecimal = Math.random() * 3;
  var getInteger = Math.floor(getDecimal);
  var randomNumber = getInteger + 1;
  console.log("random number generated");
  return randomNumber;
};

// adding state to track no of times user wins
var winTracker = 0;
var numberOfTries = 0;
var userName = "";
var currentGameMode = "waiting for player";

var main = function (input) {
  var myOutputValue = compareInputWithRandom(input);
  console.log("checking of compareInputWithRandom");

  // To set code for Username input first before Dice game starts
  if (currentGameMode == "waiting for player") {
    userName = input;
    currentGameMode = "game start";
    myOutputValue =
      "Welcome " +
      userName +
      ", the game starts now. Please input Scissors, Paper or Stone to play.";
  }

  return myOutputValue;
};

// here we merge both random number & respective choice + compare it against input to produce outcome
var compareInputWithRandom = function (inputGuess) {
  var randomThrow = getRandomChoice(inputGuess);
  var standardOutput = userName + ", your guess was " + inputGuess + ".";

  if (inputGuess == randomThrow) {
    console.log("returns a draw");
    numberOfTries = numberOfTries + 1;
    return (
      standardOutput +
      " The system generated " +
      randomThrow +
      ". It is a Draw." +
      " Current win count is " +
      winTracker +
      ". Total no. of tries: " +
      numberOfTries
    );
  }

  if (inputGuess == "Scissors" && randomThrow == "Paper") {
    console.log("Sci vs P = win");
    numberOfTries = numberOfTries + 1;
    winTracker = winTracker + 1;
    return (
      standardOutput +
      " The system generated " +
      randomThrow +
      "🧻. You Won." +
      " Current win count is " +
      winTracker +
      ". Total no. of tries: " +
      numberOfTries
    );
  }

  if (inputGuess == "Scissors" && randomThrow == "Stone") {
    console.log("Sci vs St = lose");
    numberOfTries = numberOfTries + 1;
    return (
      standardOutput +
      " The system generated " +
      "💎. You Lost." +
      " Current win count is " +
      winTracker +
      ". Total no. of tries: " +
      numberOfTries
    );
  }

  if (inputGuess == "Paper" && randomThrow == "Scissors") {
    console.log("P vs Sci = lose");
    numberOfTries = numberOfTries + 1;
    return (
      standardOutput +
      " The system generated " +
      randomThrow +
      "✂️. You Lost." +
      " Current win count is " +
      winTracker +
      ". Total no. of tries: " +
      numberOfTries
    );
  }

  if (inputGuess == "Paper" && randomThrow == "Stone") {
    console.log("P vs St = win");
    numberOfTries = numberOfTries + 1;
    winTracker = winTracker + 1;
    return (
      standardOutput +
      " The system generated " +
      "💎. You Won." +
      " Current win count is " +
      winTracker +
      ". Total no. of tries: " +
      numberOfTries
    );
  }

  if (inputGuess == "Stone" && randomThrow == "Scissors") {
    console.log("St vs Sci = win");
    numberOfTries = numberOfTries + 1;
    winTracker = winTracker + 1;
    return (
      standardOutput +
      " The system generated " +
      randomThrow +
      "✂️. You Won." +
      " Current win count is " +
      winTracker +
      ". Total no. of tries: " +
      numberOfTries
    );
  }

  if (inputGuess == "Stone" && randomThrow == "Paper") {
    console.log("St vs P = lose");
    numberOfTries = numberOfTries + 1;
    return (
      standardOutput +
      " The system generated " +
      randomThrow +
      "🧻. You Lost." +
      " Current win count is " +
      winTracker +
      ". Total no. of tries: " +
      numberOfTries
    );
  }

  return "Oops, please enter a valid selection - Scissors, Paper or Stone. (caps sensitive)";
};
