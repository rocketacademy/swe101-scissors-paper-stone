var main = function (input) {
  var randomObject = GenerateRandomHand();
  var myOutputValue = "Kindly input only scissors, paper, or stone.";
  var scissors = "scissors";
  var paper = "paper";
  var stone = "stone";

  if (input != paper && input != stone && input != scissors) {
    return myOutputValue;
  }

  if (randomObject == 0) {
    console.log(scissors);
    console.log("scissors runs");
    if (userVComputer(input, "✂️")) {
      return (
        "You win! <br> You guessed: " +
        input +
        " <br> While the computer guessed: ✂️ <br> Now you can type scissors, paper or stone to play another round"
      );
    }
    if (input == "scissors") {
      return (
        "It's a draw! <br> You guessed: " +
        input +
        "<br> While the computer guessed: ✂️ <br> Now you can type scissors, paper or stone to play another round!"
      );
    }
    return (
      "You lose! <br> You guessed: " +
      input +
      "<br> While the computer guessed: ✂️ <br> Now you can type scissors, paper or stone to play another round!"
    );
  }

  if (randomObject == 1) {
    console.log(paper);
    console.log("paper runs");
    if (userVComputer(input, "🗒")) {
      return (
        "You win! <br> You guessed: " +
        input +
        " <br> While the computer guessed: 🗒 <br> Now you can type scissors, paper or stone to play another round"
      );
    }

    if (input == "paper") {
      return (
        "It's a draw! <br> You guessed: " +
        input +
        "<br> While the computer guessed: 🗒 <br> Now you can type scissors, paper or stone to play another round!"
      );
    }

    return (
      "You lose! <br> You guessed: " +
      input +
      "<br> While the computer guessed: 🗒 <br> Now you can type scissors, paper or stone to play another round!"
    );
  }
  if (randomObject != 0 || randomObject != 1) {
    console.log(stone);
    console.log("stone runs");
    if (userVComputer(input, "stone")) {
      return (
        "You win! <br> You guessed: " +
        input +
        " <br> While the computer guessed: stone <br> Now you can type scissors, paper or stone to play another round"
      );
    }

    if (input == "stone") {
      return (
        "It's a draw! <br> You guessed: " +
        input +
        "<br> While the computer guessed: stone <br> Now you can type scissors, paper or stone to play another round!"
      );
    }

    return (
      "You lose! <br> You guessed: " +
      input +
      "<br> While the computer guessed: stone <br> Now you can type scissors, paper or stone to play another round!"
    );
  }
};

var userVComputer = function (input, ComputerHand) {
  return (
    (input == "scissors" && ComputerHand == "paper") ||
    (input == "paper" && ComputerHand == "stone") ||
    (input == "stone" && ComputerHand == "scissors")
  );
};

var GenerateRandomHand = function () {
  var randomNumber = Math.random() * 3;
  var randomHand = Math.floor(randomNumber);
  return randomHand;
};

//if user inputs 'scissors' or 'paper' or 'stone', computer randomly chooses 'scissors' or 'paper' or 'stone'.
//and the computer outputs whether the user won, the computer won, or a draw.
//Rule: scissors beat paper, paper beats stone, stone beats scissors. If both parties choose same, draw.
//Input Validation----Sometimes the user types bad and types something other than "scissors", "paper", or "stone" during gameplay. Add input validation to kindly let the user know that there are only 3 input options, and ask them to try again.
