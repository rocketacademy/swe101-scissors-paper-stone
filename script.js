var main = function (input) {
  var computerHand = randomSPS();

  var myOutputValue = `You chose ${input}, the computer chose ${computerHand}. It's a tie!`;

  if (
    (input == "scissors" && computerHand == "stone") ||
    (input == "paper" && computerHand == "scissors") ||
    (input == "stone" && computerHand == "paper")
  ) {
    myOutputValue = `You chose ${input}, the computer chose ${computerHand}. You lose!`;
  }

  if (
    (input == "scissors" && computerHand == "paper") ||
    (input == "paper" && computerHand == "stone") ||
    (input == "stone" && computerHand == "scissors")
  ) {
    myOutputValue = `You chose ${input}, the computer chose ${computerHand}. You win!`;
  }

  if (
    !(
      input == "scissors" ||
      input == "paper" ||
      input == "stone" ||
      input == "reversed scissors" ||
      input == "reversed paper" ||
      input == "reversed stone"
    )
  ) {
    myOutputValue =
      "Please select between scissors, reversed scissors, paper, reversed paper, stone, or reversed stone.";
  }

  if (
    (input == "reversed scissors" && computerHand == "paper") ||
    (input == "reversed paper" && computerHand == "stone") ||
    (input == "reversed stone" && computerHand == "scissors")
  ) {
    myOutputValue = `You chose ${input}, the computer chose ${computerHand}. You lose!`;
  }

  if (
    (input == "reversed scissors" && computerHand == "stone") ||
    (input == "reversed paper" && computerHand == "scissors") ||
    (input == "reversed stone" && computerHand == "paper")
  ) {
    myOutputValue = `You chose ${input}, the computer chose ${computerHand}. You win!`;
  }

  return myOutputValue;
};

var randomSPS = function () {
  var randomFloat = Math.random() * 3;
  var resultInteger = Math.floor(randomFloat);

  if (resultInteger == 1) {
    return "scissors";
  }
  if (resultInteger == 2) {
    return "paper";
  }
  return "stone";
};
