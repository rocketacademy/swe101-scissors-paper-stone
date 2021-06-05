// define function for programme randomly choosing SPS
// no input: if no user input -> empty input message
// input validation: if user chooses NOT SPS -> text output
// if user chooses scissors AND programme chooses paper -> user wins
// if user chooses paper AND programme chooses stone -> user wins
// if user chooses stone AND programme chooses scissors -> user wins
// if user AND programme chooses same -> draw

// define function for programme randomly choosing SPS
var generateSystemNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomSystemNumber = randomInteger + 1;
  return randomSystemNumber;
};

var generateSystemChoice = function () {
  var systemNumber = generateSystemNumber();
  if (systemNumber == 1) {
    return "scissors";
  }
  if (systemNumber == 2) {
    return "paper";
  }
  if (systemNumber == 3) {
    return "stone";
  }
};

var main = function (input) {
  var systemChoice = generateSystemChoice();

  // condition debugging
  console.log("user choice");
  console.log(input);
  console.log("system choice");
  console.log(systemChoice);
  console.log("user scissors system paper is win");
  console.log(input == "scissors" && systemChoice == "paper");
  console.log("user paper system stone is win");
  console.log(input == "paper" && systemChoice == "stone");
  console.log("user stone system scissors is win");
  console.log(input == "stone" && systemChoice == "scissors");
  console.log("user and system chose same");
  console.log(input == systemChoice);

  console.log("user reverse scissors system stone is win");
  console.log(input == "reverse scissors" && systemChoice == "stone");
  console.log("user reverse stone system paper is win");
  console.log(input == "reverse stone" && systemChoice == "paper");
  console.log("user reverse paper system scissors is win");
  console.log(input == "reverse paper" && systemChoice == "scissors");

  //no input: if no input -> empty input message
  if (input == "") {
    return "Invalid entry!";
  }
  //input invalidation: if it's not banana, chisel or faucet -> invalid input message.
  if (
    input != "scissors" &&
    input != "paper" &&
    input != "stone" &&
    input != "reverse scissors" &&
    input != "reverse paper" &&
    input != "reverse stone"
  ) {
    return "Please enter scissors/paper/stone into box.";
  }

  // if user chooses scissors AND programme chooses paper -> user wins
  // if user chooses paper AND programme chooses stone -> user wins
  // if user chooses stone AND programme chooses scissors -> user wins
  if (
    (input == "scissors" && systemChoice == "paper") ||
    (input == "paper" && systemChoice == "stone") ||
    (input == "stone" && systemChoice == "scissors")
  ) {
    console.log("win!");
    return "You win! <br><br> The system chose " + systemChoice + ".";
  }
  // if user and programme choose same -> draw
  if (input == systemChoice) {
    console.log("draw!");
    return "You drew! <br><br> The system chose " + systemChoice + ".";
  }
  // reverse game: win scenario
  // if user chooses reverse scissors AND programme chooses stone -> user wins
  // if user chooses reverse stone AND programme chooses paper -> user wins
  // if user chooses reverse paper AND programme chooses scissors -> user wins
  if (
    (input == "reverse scissors" && systemChoice == "stone") ||
    (input == "reverse stone" && systemChoice == "paper") ||
    (input == "reverse paper" && systemChoice == "scissors")
  ) {
    console.log("winning reverse game!");
    return (
      "You win at the reverse game! <br><br> The system chose " +
      systemChoice +
      "."
    );
  }
  // reverse game: draw scenario
  // if user chooses reverse scissors AND programme chooses scissors -> user wins
  // if user chooses reverse stone AND programme chooses stone -> user wins
  // if user chooses reverse paper AND programme chooses paper -> user wins
  if (
    (input == "reverse scissors" && systemChoice == "scissors") ||
    (input == "reverse stone" && systemChoice == "stone") ||
    (input == "reverse paper" && systemChoice == "paper")
  ) {
    console.log("drawing reverse game!");
    return (
      "You drew at the reverse game! <br><br> The system chose " +
      systemChoice +
      "."
    );
  }

  // if it is any other combination -> user loses
  return "You lose! <br><br> The system chose " + systemChoice + ".";
};
