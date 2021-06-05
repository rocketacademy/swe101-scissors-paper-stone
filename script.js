var inputPaper = "paper";
var inputScissors = "scissors";
var inputStone = "stone";

var generateRandomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;
  return randomNumber;
};

var outputByProgram = function (randomNumber) {
  var programOutput = "stone";
  if (randomNumber == "1") {
    var programOutput = "scissors";
  }
  if (randomNumber == "2") {
    var programOutput = "paper";
  }
  return programOutput;
};

var normalGame = function (userInput) {
  var randomNumber = generateRandomNumber();
  var programOutput = outputByProgram(randomNumber);
  var playerToComputer = userInput + programOutput;
  if (
    playerToComputer == ["scissors" + "scissors"] ||
    playerToComputer == ["paper" + "paper"] ||
    playerToComputer == ["stone" + "stone"]
  ) {
    var myOutputValue1 = `It's a draw!`;
  }
  if (
    playerToComputer == ["scissors" + "paper"] ||
    playerToComputer == ["paper" + "stone"] ||
    playerToComputer == ["stone" + "scissors"]
  ) {
    myOutputValue1 = `You win!`;
  }
  if (
    playerToComputer == ["stone" + "paper"] ||
    playerToComputer == ["scissors" + "stone"] ||
    playerToComputer == ["paper" + "scissors"]
  ) {
    myOutputValue1 = `You lose!`;
  }
  return `The computer chose ${programOutput}.<br>You chose ${userInput}.<br><br>${myOutputValue1}<br>Now you can type "scissors" "paper" "stone" to play another round! (Or add a "reversed" infront)!`;
};

var reversedGame = function (userInput) {
  var randomNumber = generateRandomNumber();
  var programOutput = outputByProgram(randomNumber);
  var playerToComputer = userInput + programOutput;
  if (
    playerToComputer == ["reversed scissors" + "scissors"] ||
    playerToComputer == ["reversed paper" + "paper"] ||
    playerToComputer == ["reversed stone" + "stone"]
  ) {
    var myOutputValue1 = `It's a draw!`;
  }
  if (
    playerToComputer == ["reversed scissors" + "paper"] ||
    playerToComputer == ["reversed paper" + "stone"] ||
    playerToComputer == ["reversed stone" + "scissors"]
  ) {
    myOutputValue1 = `You lost!`;
  }
  if (
    playerToComputer == ["reversed stone" + "paper"] ||
    playerToComputer == ["reversed scissors" + "stone"] ||
    playerToComputer == ["reversed paper" + "scissors"]
  ) {
    myOutputValue1 = `You won!`;
  }
  return `The computer chose ${programOutput}.<br>You chose ${userInput}.<br><br>${myOutputValue1}<br>Now you can type "scissors" "paper" "stone" to play another round! (Or add a "reversed" infront)!`;
};

var main = function (input) {
  if (
    !input.includes("scissors") &&
    !input.includes("paper") &&
    !input.includes("stone") &&
    !input.includes("reversed scissors") &&
    !input.includes("reversed paper") &&
    !input.includes("reversed stone")
  ) {
    return `Please try again! Please input "scissors", "paper" or "stone".`;
  }
  var game = normalGame(input);
  if (input.includes("reversed")) {
    var game = reversedGame(input);
  }
  var myFinalOutputValue = game;

  return myFinalOutputValue;
};
