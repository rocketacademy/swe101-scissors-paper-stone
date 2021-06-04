var main = function (input) {
  var output = computerChoice();
  console.log("computerChoice");
  console.log(output);

  if (input == output) {
    return "It's a tie!";
  }
  if (
    (input == "Scissors" && output == "Rock") ||
    (input == "Rock" && output == "Paper") ||
    (input == "Paper" && output == "Scissors")
  ) {
    return "You lose";
  }

  if (
    (input == "Scissors" && output == "Paper") ||
    (input == "Rock" && output == "Scissors") ||
    (input == "Paper" && output == "Rock")
  ) {
    return "You win!";
  }

  if (input != "Scissors" && input != "Rock" && input != "Paper") {
    return "Please only input Scissors, Paper, or Rock. Try again!";
  }
  return output;
};

var computerChoice = function () {
  var randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice == 0) {
    return "Scissors";
  }
  if (randomChoice == 1) {
    return "Paper";
  }
  if (randomChoice == 2) {
    return "Rock";
  }
  return randomChoice;
};
