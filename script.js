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
    return (
      "The computer chose " +
      output +
      ". You chose " +
      input +
      ". You lose! Bummer. Now you can type 'Scissors', 'Paper', or 'Stone' to play another round!"
    );
  }

  if (
    (input == "Scissors" && output == "Paper") ||
    (input == "Rock" && output == "Scissors") ||
    (input == "Paper" && output == "Rock")
  ) {
    return (
      "The computer chose " +
      output +
      ". You chose " +
      input +
      ". You win! Great! Now you can type 'Scissors', 'Paper', or 'Stone' to play another round!"
    );
  }

  if (
    input != "Scissors" &&
    input != "Rock" &&
    input != "Paper" &&
    input != "Reversed scissors" &&
    input != "Reversed rock" &&
    input != "Reversed paper"
  ) {
    return "Please only input Scissors, Paper, or Rock. Try again!";
  }

  // Reverse game starts here

  if (
    (input == "Reversed scissors" && output == "Paper") ||
    (input == "Reversed rock" && output == "Scissors") ||
    (input == "Reversed paper" && output == "Rock")
  ) {
    return (
      "The computer chose " + output + ". You chose " + input + ". You lose."
    );
  }

  if (
    (input == "Reversed scissors" && output == "Rock") ||
    (input == "Reversed rock" && output == "Paper") ||
    (input == "Reversed paper" && output == "Scissors")
  ) {
    return (
      "The computer chose " +
      output +
      ". You chose " +
      input +
      ". You win! Great! Now you can type 'Scissors', 'Paper', or 'Stone' to play another round!"
    );
  }

  if (input == "Reversed scissors" && output == "Scissors") {
    return "It's a tie!";
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
