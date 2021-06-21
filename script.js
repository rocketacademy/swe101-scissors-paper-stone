var winCount = 0;
var gameCount = 0;
var draw = 0;

var gamemode = "input";

var getRandomChoice = function () {
  var randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice == 0) return "paper";
  else if (randomChoice == 1) return "rock";
  else if (randomChoice == 2) return "scissors";
};

var validateInput = function (input) {
  if (input == "paper" || input == "rock" || input == "scissors") return 1;
  else return 0;
};
var getWinner = function (playerChoice) {
  gameCount += 1;
  var computerChoice = getRandomChoice();
  var outputMessage = "";
  if (playerChoice == "rock" && computerChoice == "scissors") {
    outputMessage = `You win! You chose ${playerChoice} and the computer chose ${computerChoice}`;
    winCount += 1;
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    outputMessage = `You win! You chose ${playerChoice} and the computer chose ${computerChoice}`;
    winCount += 1;
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    outputMessage = `You win! You chose ${playerChoice} and the computer chose ${computerChoice}`;
    winCount += 1;
  } else if (playerChoice == computerChoice) {
    outputMessage = `It's a draw! You chose ${playerChoice} and the computer chose ${computerChoice}`;
    winCount += 1;
  } else {
    outputMessage = `You lose! You chose ${playerChoice} and the computer chose ${computerChoice}`;
  }
  outputMessage += `<br><br>You have won ${winCount} out of ${gameCount} games.<br>Try playing again by typing 'scissors', 'rock', or 'paper'. Good luck!`;
  return outputMessage;
};

var doPaperRockScissors = function (input) {
  if (validateInput(input)) return getWinner(input);
  else return "Please input either paper, rock, scissors only. Try again :)";
};
var main = function (input) {
  return doPaperRockScissors(input);
};
