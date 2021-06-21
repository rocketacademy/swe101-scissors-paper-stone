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
  var computerChoice = getRandomChoice();
  if (playerChoice == "rock" && computerChoice == "scissors") {
    return `You win! You chose ${playerChoice} and the computer chose ${computerChoice}`;
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    return `You win! You chose ${playerChoice} and the computer chose ${computerChoice}`;
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    return `You win! You chose ${playerChoice} and the computer chose ${computerChoice}`;
  } else if (playerChoice == computerChoice) {
    return `It's a draw! You chose ${playerChoice} and the computer chose ${computerChoice}`;
  } else {
    return `You lose! You chose ${playerChoice} and the computer chose ${computerChoice}`;
  }
};
var doPaperRockScissors = function (input) {
  if (validateInput(input)) return getWinner(input);
  else return "Please input either paper, rock, scissors only. Try again :)";
};
var main = function (input) {
  return doPaperRockScissors(input);
};
