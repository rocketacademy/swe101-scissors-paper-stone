var userWins = 0;
var compWins = 0;
var drawCount = 0;
var firstInput = 0;
var userName = "";

var main = function (input) {
  if (userName == "") {
    userName = input;
    return `Hello ${userName}. Please enter either 'scissors', 'paper' or 'stone' to start the game!`;
  }

  //var compChoice = 1;
  var reverseGame;
  var compChoice = rollDice();
  var myOutputValue = "please type in either 'scissors', 'paper', or 'stone'";
  //below is to divert the fork for the reverse game or the normal game
  if (
    input == "reversed scissors" ||
    input == "reversed paper" ||
    input == "reversed stone"
  ) {
    reverseGame = true;
  } else {
    reverseGame = false;
  }
  if (reverseGame == false) {
    if (compChoice == 1 && input == `scissors`) {
      //below is for the normal game
      // the below determines who wins if the computer rolls a 1, i.e. scissors
      myOutputValue = "It's a draw ...";
      drawCount += 1;
      console.log("this is the scissors draw");
    } else if (compChoice == 1 && input == "paper") {
      myOutputValue = "The computer wins :(";
      compWins += 1;
      console.log("c = scissors, u = paper");
    } else if (compChoice == 1 && input == `stone`) {
      myOutputValue = "You win!";
      userWins += 1;
      console.log("c = scissors, u = stone");
      // the below determines who wins if the computer rolls a 2, i.e. paper
    } else if (compChoice == 2 && input == `scissors`) {
      myOutputValue = "You win!";
      userWins += 1;
      console.log("c = paper, u = scissors");
    } else if (compChoice == 2 && input == "paper") {
      myOutputValue = "It's a draw ...";
      drawCount += 1;
      console.log("this is the paper draw");
    } else if (compChoice == 2 && input == `stone`) {
      myOutputValue = "The computer wins :(";
      compWins += 1;
      console.log("c = paper, u = stone");
      // the below determines who wins if the computer rolls a 3, i.e. stone
    } else if (compChoice == 3 && input == `scissors`) {
      myOutputValue = "The computer wins :(";
      compWins += 1;
      console.log("c = stone, u = scissors");
    } else if (compChoice == 3 && input == "paper") {
      myOutputValue = "You win!";
      userWins += 1;
      console.log("c = stone, u = paper");
    } else if (compChoice == 3 && input == `stone`) {
      myOutputValue = "It's a draw ...";
      drawCount += 1;
      console.log("this is the stone draw");
    } else {
      myOutputValue = `${userName}, you have entered something that isn't recognized! Please enter either 'scissors', 'paper', or 'stone'.`;
    }
  }
  // if reverse game is true
  else {
    if (compChoice == 1 && input == `reversed scissors`) {
      //below is for the reverse game
      // the below determines who wins if the computer rolls a 1, i.e. scissors
      myOutputValue = "It's a draw ...";
      drawCount += 1;
      console.log("this is the scissors draw");
    } else if (compChoice == 1 && input == "reversed paper") {
      myOutputValue = "You win!";
      userWins += 1;
      console.log("c = scissors, u = paper");
    } else if (compChoice == 1 && input == `reversed stone`) {
      myOutputValue = "The computer wins :(";
      compWins += 1;
      console.log("c = scissors, u = stone");
      // the below determines who wins if the computer rolls a 2, i.e. paper
    } else if (compChoice == 2 && input == `reversed scissors`) {
      myOutputValue = "The computer wins :(";
      compWins += 1;
      console.log("c = paper, u = scissors");
    } else if (compChoice == 2 && input == "reversed paper") {
      myOutputValue = "It's a draw ...";
      drawCount += 1;
      console.log("this is the paper draw");
    } else if (compChoice == 2 && input == `reversed stone`) {
      myOutputValue = "You win!";
      userWins += 1;
      console.log("c = paper, u = stone");
      // the below determines who wins if the computer rolls a 3, i.e. stone
    } else if (compChoice == 3 && input == `reversed scissors`) {
      myOutputValue = "You win!";
      userWins += 1;
      console.log("c = stone, u = scissors");
    } else if (compChoice == 3 && input == "reversed paper") {
      myOutputValue = "The computer wins :(";
      compWins += 1;
      console.log("c = stone, u = paper");
    } else if (compChoice == 3 && input == `reversed stone`) {
      myOutputValue = "It's a draw ...";
      drawCount += 1;
      console.log("this is the stone draw");
    } else {
      myOutputValue = `${userName}, you have entered something that isn't recognized! Please enter either 'scissors', 'paper', or 'stone'.`;
    }
  }
  console.log("this is compChoice1 " + compChoice);
  if (compChoice == 1) {
    compChoice = "scissors";
  } else if (compChoice == 2) {
    compChoice = "paper";
  } else if (compChoice == 3) {
    compChoice = "stone";
  }
  console.log("this is compChoice2 " + compChoice);

  console.log(reverseGame);
  if (reverseGame == true) {
    myOutputValue = "Sneaky! You have played reverse scissors, paper, stone!";
    console.log("a");
    console.log(myOutputValue + " this is myoutputvalue");
    //return finalString;
  } else if (input != "scissors" && input != "paper" && input != "stone") {
    console.log("b");
    //return myOutputValue;
  } else {
    //return finalString;
  }
  var finalString = `The computer chose ${compChoice}. <br> <br> ${userName}, you chose ${input}. <br> <br> ${myOutputValue} <br> You have won ${userWins} times. <br> The computer has won ${compWins} times. <br> Do you want to play again? Enter 'scissors', 'paper', or 'stone' to play again!`;
  return finalString;
};

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

/*var chooseHands = function () {
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
