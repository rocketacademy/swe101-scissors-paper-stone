/**
 * scissors-paper-stone
 */

//The program internally randomly chooses 'scissors', 'paper', or 'stone'.
//define function for generating a random integer
var generateRandomInteger = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;
  console.log(randomNumber);
  return randomNumber;
};

//assign the three objects to the randomly generated integers ranging from 1-3.
var programObject = function () {
  var totalObjects = 3;
  var randomObjectNum = generateRandomInteger(totalObjects);

  if (randomObjectNum == 1) {
    console.log("paper");
    return "paper";
  }

  if (randomObjectNum == 2) {
    console.log("stone");
    return "stone";
  }

  console.log("scissors");
  return "scissors";
};

//user inputs one of 'scissors', 'paper', or 'stone'.

//the program outputs whether the user won, the program won, or it's a draw.

//rules: scissors beats paper, paper beats stone, stone beats scissors, draw if both parties choose the same object.

//rules for reversed SPS: reversed stone beats paper, reversed scissors beats stone, reversed paper beats scissors, draw if both parties choose the same object.

var main = function (input) {
  var program = programObject();

  //format the input object name
  var inputObjectFormatted = function (input) {
    if (input == "scissors") {
      return "scissors✂️";
    }
    if (input == "paper") {
      return "paper🗒";
    }
    if (input == "stone") {
      return "stone 🥌";
    }
    if (input == "reversed scissors") {
      return "reversed scissors ✂️";
    }
    if (input == "reversed paper") {
      return "reversed paper 🗒";
    }
    if (input == "reversed stone") {
      return "reversed stone 🥌";
      return input;
    }
  };

  var inputObject = inputObjectFormatted(input);

  // format program output object name
  var outputObjectFormatted = function (program) {
    if (program == "scissors") {
      return "scissors✂️";
    }
    if (program == "paper") {
      return "paper🗒";
    }
    if (program == "stone") {
      return "stone 🥌";
    }
    if (program == "reversed scissors") {
      return "reversed scissors ✂️";
    }
    if (program == "reversed paper") {
      return "reversed paper 🗒";
    }
    if (program == "reversed stone") {
      return "reversed stone 🥌";
    }
    return program;
  };

  var outputObject = outputObjectFormatted(program);

  if (
    (input == "scissors" && program == "paper") ||
    (input == "paper" && program == "stone") ||
    (input == "stone" && program == "scissors") ||
    (input == "reversed stone" && program == "paper") ||
    (input == "reversed scissors" && program == "stone") ||
    (input == "reversed paper" && program == "scissors")
  ) {
    return `You chose ${inputObject} <br> The computer chose ${outputObject}. <br>You win!`;
  }

  if (
    (input == "paper" && program == "scissors") ||
    (input == "stone" && program == "paper") ||
    (input == "scissors" && program == "stone") ||
    (input == "reversed paper" && program == "stone") ||
    (input == "reversed stone" && program == "scissors") ||
    (input == "reversed scissors" && program == "paper")
  ) {
    return `You chose ${inputObject} <br> The computer chose ${outputObject}. <br>You lose!`;
  }

  if (
    (input == "paper" && program == "paper") ||
    (input == "stone" && program == "stone") ||
    (input == "scissors" && program == "scissors") ||
    (input == "reversed paper" && program == "paper") ||
    (input == "reversed stone" && program == "stone") ||
    (input == "reversed scissors" && program == "scissors")
  ) {
    return `You chose ${inputObject} <br> The computer chose ${outputObject}. <br>It's a draw!`;
  }

  //input validation: if user doees not input any of three valid options, system should advise on correct input options.

  var myOutputValue = `Our program does not recognise your input "${input}". <br> Please try again by entering one of the following: scissors, paper, or stone.`;

  return myOutputValue;
};
