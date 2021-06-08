// PROJECT 1: Scissors Paper Stone - Part 1

// create a function to generate Scissors Paper Stone
var generateSPS = function () {
  // produces a decimal between 0 and 2
  var randomDecimal = Math.random() * 3;
  // take off the decimal to get a number 0 - 2 ... add 1
  var randomInteger = Math.floor(randomDecimal) + 1;
  // assign 1, 2, and 3 to "scissors", "paper", and "stone" respectively.
  if (randomInteger == 1) {
    var randomItem = "scissors";
  } else if (randomInteger == 2) {
    randomItem = "paper";
  } else if (randomInteger == 3) {
    randomItem = "stone";
  }
  return randomItem;
};

var main = function (input) {
  var myOutputValue = "";

  // input validation: first check if input is a string
  if (isNaN(Number(input)) == false) {
    myOutputValue = "Sorry, please enter a word.";
    return myOutputValue;
  }

  // input validation: then check if input is scissors, paper, stone, reversed scissors, reversed paper or reversed stone.
  var itemName = generateSPS();
  if (
    input !== "scissors" &&
    input !== "paper" &&
    input !== "stone" &&
    input !== "reversed scissors" &&
    input !== "reversed paper" &&
    input !== "reversed stone"
  ) {
    myOutputValue = `Sorry, there are only 6 input options available: "scissors", "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone". <br> <br> Please use lowercase letters only and try again.`;
    return myOutputValue;
  }

  //Basic Scissors Paper Stone
  // 1. scissors beats paper
  // 2. paper beats stone
  // 3. stone beats scissors
  var randomItem = generateSPS();
  var message = `Now you can type "scissors", "paper", "stone", "reversed scissors", reversed paper" or "reversed stone" to play another round!`;
  if (
    (input == "scissors" && itemName == "paper") ||
    (input == "paper" && itemName == "stone") ||
    (input == "stone" && itemName == "scissors")
  ) {
    myOutputValue = `The computer chose ${itemName}.<br> You chose ${input}. <br> <br> You win! <br> <br> ${message}`;
    return myOutputValue;
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
    myOutputValue = `The computer chose ${itemName}.<br> You chose ${input}. <br> <br> You win! <br> <br> ${message}`;
    return myOutputValue;
  }

  // 4. if both parties choose the same object, it's a draw.
  if (
    itemName == input ||
    (itemName == "scissors" && input == "reversed scissors") ||
    (itemName == "paper" && input == "reversed paper") ||
    (itemName == "stone" && input == "reversed stone")
  ) {
    myOutputValue = `The computer chose ${itemName}.<br> You chose ${input}. <br> <br> It's a draw! <br> <br> ${message}`;
    return myOutputValue;
  }

  myOutputValue = `The computer chose ${itemName}.<br> You chose ${input}. <br> <br> You lose! Bummer. <br> <br> ${message}`;
  return myOutputValue;
};
