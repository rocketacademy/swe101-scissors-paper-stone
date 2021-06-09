//input -- text of 'scissors' 'paper' 'stone'
// if input = random == its a draw
// if input is not within the 3 texts, let them know its wrong & provide the options
// system generates random option
//output -- wins if SPS logic makes sense + tells user if they won/lost/draw

// build code to generate random number selection, number would be from 1 to 3, 3 inclusive
var generateSystemNumber = function () {
  var systemNumber = Math.floor(Math.random() * 3) + 1;
  console.log("random number generated" + systemNumber); // random number will be generated from 1 to 3
  return systemNumber;
};

// build code for the 3 options
var generateSystemChoice = function () {
  var choiceCount = 3;
  var systemChoice = generateSystemNumber(choiceCount);
  console.log("random number chosen" + systemChoice); //this will generate random number based on the no. of choices
  if (systemChoice == 1) {
    return "Scissors ✂️";
  }
  if (systemChoice == 2) {
    return "Paper 🧻";
  }
  if (systemChoice == 3) {
    return "Stone 💎";
  }
  return systemChoice;
};

// adding state to track no of times user wins
var winTracker = 0;
var numberOfTries = 0;
var userName = "";
var currentGameMode = "waiting for player";

var main = function (input) {
  var myOutputValue = generateOutcome(input);
  console.log("generate outcome - username");

  // To set code for Username input first before Dice game starts
  if (currentGameMode == "waiting for player") {
    userName = input;
    currentGameMode = "game start";
    myOutputValue =
      "Welcome " +
      userName +
      ", the game starts now! <br><br> Please input Scissors ✂️, Paper 🧻 or Stone 💎 to play.";
  }
  return myOutputValue;
};

// here we merge both random number & respective choice + compare it against input to produce outcome
var generateOutcome = function (inputGuess) {
  var systemOutcome = generateSystemChoice(inputGuess);
  var standardOutput =
    userName + ", your guess was " + inputGuess + ". <br><br> System guessed ";
  console.log("problem" + systemOutcome);

  // Draw outcomes
  if (
    (inputGuess == "Scissors" && systemOutcome == "Scissors ✂️") ||
    (inputGuess == "Paper" && systemOutcome == "Paper 🧻") ||
    (inputGuess == "Stone" && systemOutcome == "Stone 💎")
  ) {
    console.log("returns a draw");
    numberOfTries = numberOfTries + 1;
    winTracker = winTracker;
    standardOutput =
      standardOutput +
      systemOutcome +
      "<br><br> It is a draw! <br><br> Current win count: " +
      winTracker +
      "<br><br>Total number of tries: " +
      numberOfTries;
    return standardOutput;
  }

  // Win outcomes
  if (
    (inputGuess == "Scissors" && systemOutcome == "Paper 🧻") ||
    (inputGuess == "Paper" && systemOutcome == "Stone 💎") ||
    (inputGuess == "Stone" && systemOutcome == "Scissors ✂️")
  ) {
    console.log("win outcomes generated");
    numberOfTries = numberOfTries + 1;
    winTracker = winTracker + 1;
    standardOutput =
      standardOutput +
      systemOutcome +
      "<br><br> You won! <br><br> Current win count: " +
      winTracker +
      "<br><br>Total number of tries: " +
      numberOfTries;
    return standardOutput;
  }

  // Lose outcome
  if (
    (inputGuess == "Scissors" && systemOutcome == "Stone 💎") ||
    (inputGuess == "Paper" && systemOutcome == "Scissors ✂️") ||
    (inputGuess == "Stone" && systemOutcome == "Paper 🧻")
  ) {
    console.log("lose outcomes generated");
    numberOfTries = numberOfTries + 1;
    winTracker = winTracker;
    standardOutput =
      standardOutput +
      systemOutcome +
      "<br><br> You lost! <br><br> Current win count: " +
      winTracker +
      "<br><br>Total number of tries: " +
      numberOfTries;
    return standardOutput;
  }
  return "Oops, please enter a valid selection - Scissors, Paper or Stone. (caps sensitive)";
};
