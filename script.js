var generateOutcome = function () {
  var randomInt = Math.floor(Math.random() * 3);
  var map = { 0: "scissors", 1: "paper", 2: "stone" };
  var outcome = map[randomInt];
  return outcome;
};

var main = function (input) {
  // create outcome variables
  var win = "Congratulations, you win! Want a rematch?";
  var lose = "Bummer, you lost. Try again next time!";
  var tie = "Its a draw. We'll have to go again";
  var invalid = `This is a game of scissors paper stone. Accepted input values are "scissors", "paper" or "stone".`;

  // check input and outputs
  var computerOutcome = generateOutcome();
  console.log("Input: " + input);
  console.log("Generated: " + computerOutcome);

  // check for reversed in two string word
  var wordsInput = input.split(" ");
  var inputLength = wordsInput.length;
  var outcome = invalid;
  if (inputLength == 2 && wordsInput[0] == "reversed") {
    // play reversed scissors paper stone
    var userChoice = wordsInput[1];
    if (
      (userChoice == "scissors" && computerOutcome == "stone") ||
      (userChoice == "paper" && computerOutcome == "scissors") ||
      (userChoice == "stone" && computerOutcome == "paper")
    ) {
      outcome = win;
    } else if (userChoice == computerOutcome) {
      outcome = tie;
    } else if (
      (userChoice == "scissors" && computerOutcome == "paper") ||
      (userChoice == "paper" && computerOutcome == "stone") ||
      (userChoice == "stone" && computerOutcome == "scissors")
    ) {
      outcome = lose;
    } else {
      outcome = invalid;
    }
  } else {
    // standard game
    userChoice = input;
    if (
      (userChoice == "scissors" && computerOutcome == "stone") ||
      (userChoice == "paper" && computerOutcome == "scissors") ||
      (userChoice == "stone" && computerOutcome == "paper")
    ) {
      outcome = lose;
    } else if (userChoice == computerOutcome) {
      outcome = tie;
    } else if (
      (userChoice == "scissors" && computerOutcome == "paper") ||
      (userChoice == "paper" && computerOutcome == "stone") ||
      (userChoice == "stone" && computerOutcome == "scissors")
    ) {
      outcome = win;
    } else {
      outcome = invalid;
    }
  }
  myOutputValue =
    `You chose ${input}. <br>The computer generated ${computerOutcome}<br><br>` +
    outcome +
    `<br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  return myOutputValue;
};
