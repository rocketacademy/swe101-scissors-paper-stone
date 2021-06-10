var main = function (input) {
  var output = randomSPS();
  console.log("Random Guess");
  console.log(output);
  var myOutputValue =
    "You lost! You guessed: " + input + "Random Guess " + output;

  // If both parties choose the same object, it's a draw.
  if (input == output) {
    return "Tie! Try again!";
  }

  // if scissors beats paper, paper beats stone, and stone beats scissors.

  if (
    (input == "Scissors" && output == "Paper") ||
    (input == "Paper" && output == "Stone") ||
    (input == "Stone" && output == "Scissors")
  ) {
    return "You Win!" + "The random guess is " + output + "You chose " + input;
  }

  // if paper lose scissors, stone lose paper, scissors lose stone.

  if (
    (input == "Paper" && output == "Scissors") ||
    (input == "Stone" && output == "Paper") ||
    (input == "Scissors" && output == "Stone")
  ) {
    return (
      "The random guess is " +
      output +
      "You lose as you choose " +
      input +
      ". Try again"
    );
  }

  if (
    input != "Scissors" &&
    input != "Paper" &&
    input != "Stone" &&
    input != "Reversed Scissors" &&
    input != "Reversed Paper" &&
    input != "Reversed Stone"
  ) {
    return "Please only put Scissors, Paper, or Stone.";
  }

  // inverse game

  //Reversed Scissors lose paper, Reversed Paper lose Stone, Reversed Stone lose Scissors

  if (
    (input == "Reversed Scissors" && output == "Paper") ||
    (input == "Reversed Paper" && output == "Stone") ||
    (input == "Reversed Stone" && output == "Scissors")
  ) {
    return (
      "The random guess is " +
      output +
      " You lose as you choose " +
      input +
      ". Try again"
    );
  }

  // Reversed Scissors win Stone, Reversed Paper win Scissors, Reversed Stone win Paper

  if (
    (input == "Reversed Scissors" && output == "Stone") ||
    (input == "Reversed Paper" && output == "Scissors") ||
    (input == "Reversed Stone" && output == "Paper")
  ) {
    return "You Win!" + "The random guess is " + output + "You chose " + input;
  }

  // If tie

  if (
    (input == "Reversed Scissors" && output == "Scissors") ||
    (input == "Reversed Paper" && output == "Paper") ||
    (input == "Reversed Stone" && output == "Stone")
  ) {
    return "Tie! Try again!";
  }

  return output;
};

var randomSPS = function () {
  var randomGuess = Math.random() * 3;
  var randomGuess = Math.floor(randomGuess);
  if (randomGuess == 0) {
    return "Scissors";
  }
  if (randomGuess == 1) {
    return "Paper";
  }
  if (randomGuess == 2) {
    return "Stone";
  }
};
