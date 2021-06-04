var main = function (input) {
  var computerRandom = generateRandomOutcome();
  var myOutputValue = `You chose ${input},<br>the computer chose ${computerRandom}`;
  console.log("Computer Chose: " + computerRandom);
  console.log(`User Chose: ${input}`);
  if (
    (input == "scissors" && computerRandom == "paper") ||
    (input == "paper" && computerRandom == "stone") ||
    (input == "stone" && computerRandom == "scissors")
  ) {
    return `🎉 Congratulations! <br> You won! 🤗<br>You chose ${input} and the computer chose ${computerRandom}!`;
  }
  if (
    (input == "scissors" && computerRandom == "stone") ||
    (input == "paper" && computerRandom == "scissors") ||
    (input == "stone" && computerRandom == "paper")
  ) {
    return `You lost! 😟<br>You chose ${input} and the computer chose ${computerRandom}! Let's try again.`;
  }
  if (
    (input == "scissors" && computerRandom == "scissors") ||
    (input == "paper" && computerRandom == "paper") ||
    (input == "stone" && computerRandom == "stone")
  ) {
    return `It's a tie! 🤝<br>You both chose ${input}!`;
  }

  if (input != "scissors" || input != "paper" || input != "stone") {
    return "Invalid input! Please only choose the following:<br>✂️scissors<br>🧻paper<br><b>or</b> 🪨stone";
  }
  return myOutputValue;
};

// var scissors = 'scissors';
// var paper = 'paper';
// var stone = 'stone';

//generate a random outcome

var generateRandomInteger = function (scissorspaperstone) {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

//computer needs to generate a random outcome
var generateRandomOutcome = function () {
  var totalNumOutcome = 3;
  var randomOutcome = generateRandomInteger(totalNumOutcome);
  if (randomOutcome == 1) {
    return "scissors";
  }
  if (randomOutcome == 2) {
    return "paper";
  }
  if (randomOutcome == 3) {
    return "stone";
  }
};
