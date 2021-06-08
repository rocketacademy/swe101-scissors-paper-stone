var userWins = 0;
var compWins = 0;
var drawCount = 0;
var firstInput = 0;
var userName = "";
var totalGamesPlayed = 0;
var myOutputValue = "";
var compFinalChoice = "";
// below is the random number generator
var rollDice = function () {
  // Generate a decimal from 0 through 3, inclusive of 0 and exclusive of 3.
  var randomDecimal = Math.random() * 3;
  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 2 inclusive.
  var randomInteger = Math.floor(randomDecimal);
  // Add 1 to get valid dice rolls of 1 through 3 inclusive.
  var diceNumber = randomInteger + 1;
  console.log("this is diceNumber " + diceNumber);
  return diceNumber;
};
// below helps to change the random rolls into a number
var compChoice = function (diceNumber) {
  if (diceNumber == 1) {
    compFinalChoice = "scissors";
    return "scissors";
  } else if (diceNumber == 2) {
    compFinalChoice = "paper";
    return "paper";
  } else if (diceNumber == 3) {
    compFinalChoice = "stone";
    return "stone";
  }
};
var userGuess = "";
//below defines the function for the normal game
var normalGame = function (compChoice, input) {
  if (
    (compChoice == "scissors" && input == `scissors`) ||
    (compChoice == "paper" && input == "paper") ||
    (compChoice == `stone` && input == `stone`)
  ) {
    //below is for the normal game
    // the below determines who wins if the computer rolls a 1, i.e. scissors
    myOutputValue = "It's a draw ...";
    drawCount += 1;
  } else if (
    (compChoice == "scissors" && input == "paper") ||
    (compChoice == "paper" && input == `stone`) ||
    (compChoice == `stone` && input == `scissors`)
  ) {
    myOutputValue = "The computer wins :(";
    compWins += 1;
  } else if (
    (compChoice == "scissors" && input == `stone`) ||
    (compChoice == "paper" && input == `scissors`) ||
    (compChoice == `stone` && input == "paper")
  ) {
    myOutputValue = "You win!";
    userWins += 1;
    // the below determines who wins if the computer rolls a 2, i.e. paper
  } else {
    myOutputValue = `${userName}, you have entered something that isn't recognized! Please enter either 'scissors', 'paper', or 'stone'.`;
  }
};

var reverseGame = function (compChoice, input) {
  // if reverse game is true
  if (
    (compChoice == "scissors" && input == `reversed scissors`) ||
    (compChoice == "paper" && input == "reversed paper") ||
    (compChoice == `stone` && input == `reversed stone`)
  ) {
    //below is for the reverse game
    // the below determines who wins if the computer rolls a 1, i.e. scissors
    myOutputValue = "It's a draw ...";
    drawCount += 1;
  } else if (
    (compChoice == "scissors" && input == "reversed paper") ||
    (compChoice == "paper" && input == `reversed stone`) ||
    (compChoice == `stone` && input == `reversed scissors`)
  ) {
    myOutputValue = "You win!";
    userWins += 1;
  } else if (
    (compChoice == "scissors" && input == `reversed stone`) ||
    (compChoice == "paper" && input == `reversed scissors`) ||
    (compChoice == `stone` && input == "reversed paper")
  ) {
    myOutputValue = "The computer wins :(";
    compWins += 1;
    // the below determines who wins if the computer rolls a 2, i.e. paper
  } else {
    myOutputValue = `${userName}, you have entered something that isn't recognized! Please enter either 'scissors', 'paper', or 'stone'.`;
  }
};

var main = function (input) {
  if (userName == "") {
    userName = input;
    return `Hello ${userName}. Please enter either 'scissors', 'paper' or 'stone' to start the game!`;
  }
  var reverseGameMode;
  //below is to divert the fork for the reverse game or the normal game
  if (
    input == "reversed scissors" ||
    input == "reversed paper" ||
    input == "reversed stone"
  ) {
    reverseGameMode = true;
  } else if (input == "scissors" || input == "paper" || input == "stone") {
    reverseGameMode = false;
  } else {
    myOutputValue = "please type in either 'scissors', 'paper', or 'stone'";
  }
  if (reverseGameMode == false) {
    normalGame(compChoice(rollDice()), input);
  } else if (reverseGameMode == true) {
    reverseGame(compChoice(rollDice()), input);
    myOutputValue =
      myOutputValue +
      " Sneaky! You have played reverse scissors, paper, stone!";
    //return finalString;
  }
  totalGamesPlayed = compWins + userWins + drawCount;
  var finalString = `The computer chose ${compFinalChoice}. <br> <br> ${userName}, you chose ${input}. <br> <br> ${myOutputValue} <br> You have won ${userWins}/${totalGamesPlayed} times. <br> The computer has won ${compWins}/${totalGamesPlayed} times. <br>  There have been ${drawCount}/${totalGamesPlayed} draws. <br> Do you want to play again? Enter 'scissors', 'paper', or 'stone' to play again!`;
  return finalString;
};
/*var chooseHands = function () 
  // Generate a decimal from 0 through 3, inclusive of 0 and exclusive of 3.
  var randomDecimal = Math.random() * 2;
  // This will be an integer from 0 to 2 inclusive.
  var randomInteger = Math.floor(randomDecimal);
  //making the integer from 1 to 3 inclusive
  var finalRandomNumber = randomInteger + 1;
  if (finalRandomNumber == 1) {
    console.log("final random number is scissors");
    scissorsPaperStone = "scissors";
  } else if (finalRandomNumber == 2) {
    console.log("final random number is stone");
    scissorsPaperStone = "stone";
  } else {
    console.log("final random number is paper");
    scissorsPaperStone = "paper";
  }
  console.log(chooseHands());
  console.log("this is final random number " + finalRandomNumber);
  return finalRandomNumber;
};
*/
