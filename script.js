var main = function (userChoice) {
  var output = "lost👻";
  var computerChoice = ComputerChoice();
  var isValid = 0;
  if (
    !(
      userChoice == "scissors" ||
      userChoice == "paper" ||
      userChoice == "stone" ||
      userChoice == "reversed scissors" ||
      userChoice == "reversed paper" ||
      userChoice == "reversed stone"
    )
  ) {
    return "this is not a valid input ";
  }

  if (computerChoice == userChoice) {
    output = "draw😱";
  } else if (computerChoice == "scissors" && userChoice == "stone") {
    output = "win👾";
  } else if (computerChoice == "stone" && userChoice == "paper") {
    output = "win👾";
  } else if (computerChoice == "paper" && userChoice == "scissors") {
    output = "win👾";
  }
  //reversed modes
  else if (computerChoice == "scissors" && userChoice == "reversed paper") {
    output = "win🙃";
  } else if (computerChoice == "stone" && userChoice == "reversed scissors") {
    output = "win🙃";
  } else if (computerChoice == "paper" && userChoice == "reversed stone") {
    output = "win🙃";
  }

  return `You ${output}<br> with ${userChoice}<br> against ${computerChoice}`;
};

var ComputerChoice = function () {
  var output = "scissors";
  var randomNum = Math.random() * 3;
  var randomInt = Math.floor(randomNum) + 1;

  if (randomInt == 2) {
    output = "paper";
  } else if (randomInt == 3) {
    output = "stone";
  }
  return output;
};
