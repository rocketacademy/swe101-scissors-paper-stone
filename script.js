// PROJECT 1: Scissors Paper Stone - Part 1
// The user inputs one of "scissors", "paper", or "stone"
// The program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.
// Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

var randomNumber = function () {
  // produces a decimal between 0 and 2
  var randomDecimal = Math.random() * 2;

  // take off the decimal to get a number 0 - 2 ... add 1
  var randomInteger = Math.floor(randomDecimal) + 1;

  return randomInteger;
};

var main = function (input) {
  var itemNumber = randomNumber();

  // assigning 1, 2, and 3 to "scissors", "paper", and "stone" respectively.
  if (itemNumber == 1) {
    var itemName = "scissors";
  }

  if (itemNumber == 2) {
    itemName = "paper";
  }

  if (itemNumber == 3) {
    itemName = "stone";
  }

  // the default output is user loses. Using "More Comfortable" Formatting.
  var myOutputValue = `The computer chose ${itemName}.<br> You chose ${input}. <br> <br> You lose! Bummer. <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;

  //Basic Scissors Paper Stone
  // 1. scissors beats paper
  // 2. paper beats stone
  // 3. stone beats scissors
  if (
    (input == "scissors" && itemName == "paper") ||
    (input == "paper" && itemName == "stone") ||
    (input == "stone" && itemName == "scissors")
  ) {
    myOutputValue = `The computer chose ${itemName}.<br> You chose ${input}. <br> <br> You win! <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  }

  // Reverse Scissors Paper Stone where the rules are reversed:
  // 1. scissors beats stone
  // 2. stone beats paper
  // 3. paper beats scissors
  if (
    (input == "reversed scissors" && itemName == "stone") ||
    (input == "reversed stone" && itemName == "paper") ||
    (input == "reversed paper" && itemName == "scissors")
  ) {
    myOutputValue = `The computer chose ${itemName}.<br> You chose ${input}. <br> <br> You win! <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  }

  // 4. if both parties choose the same object, it's a draw.
  if (
    itemName == input ||
    (itemName == "scissors" && input == "reversed scissors") ||
    (itemName == "paper" && input == "reversed paper") ||
    (itemName == "stone" && input == "reversed stone")
  ) {
    myOutputValue = `The computer chose ${itemName}.<br> You chose ${input}. <br> <br> It's a draw! <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  }

  // Input Validation
  // Sometimes the user types bad and types something other than "scissors", "paper", or "stone" during gameplay. Add input validation to kindly let the user know that there are only 3 input options, and ask them to try again.
  // Also add input validation for the reverse game
  // The user can choose to try their luck at reversed mode by adding the word "reversed" to their choice. For example: "reversed stone".
  if (
    input !== "scissors" &&
    input !== "paper" &&
    input !== "stone" &&
    input !== "reversed scissors" &&
    input !== "reversed paper" &&
    input !== "reversed stone"
  ) {
    myOutputValue = `There are only 3 input options available: scissors, paper or stone. <br> <br> Please use lowercase letters only and try again.`;
  }

  return myOutputValue;
};
