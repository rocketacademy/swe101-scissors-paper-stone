//Win-Loss Record
//Add state to your program such that it keeps track of the number of times the user has won and the number of times the computer has won. Output this win-loss record in a format you like in the program output. You can also output the number of draws and/or each party's winning percentage if you'd like.

//User Name
//To make this game more personal, add a feature to collect the user's name as the first input after the page loads. We can prompt the user to enter their name first by adding to the page's HTML. Once the user submits their name, the program can return output to prompt the user to start playing Scissors Paper Stone by entering one of the 3 objects. Use the user's name to personalise win-loss record and other relevant output.

var currentGameMode = "waiting for name";
var userName = "";

var main = function (input) {
  var myOutputValue = "";
  if (currentGameMode == "waiting for name") {
    userName = input;
    // switch game mode to Scissors Paper Stone once name is given
    currentGameMode = "scissors paper stone game";
    myOutputValue =
      "hello " + input + ", you are now playing scissors paper stone!";
    return myOutputValue;
  } else if (currentGameMode == "scissors paper stone game") {
    // scissors paper stone logic added here
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

    if (
      input != "scissors" &&
      input != "paper" &&
      input != "stone" &&
      input != "reversed scissors" &&
      input != "reversed paper" &&
      input != "reversed stone"
    ) {
      return "Invalid input! Please only choose the following:<br>✂️scissors<br>🧻paper<br><b>or</b> 🪨stone";
    }

    if (
      (input == "reversed scissors" && computerRandom == "paper") ||
      (input == "reversed paper" && computerRandom == "stone") ||
      (input == "reversed stone" && computerRandom == "scissors")
    ) {
      return `You lost! 😟<br>You chose ${input} and the computer chose ${computerRandom}! Let's try again.`;
    }
    if (
      (input == "reversed scissors" && computerRandom == "stone") ||
      (input == "reversed paper" && computerRandom == "scissors") ||
      (input == "reversed stone" && computerRandom == "paper")
    ) {
      return `🎉 Congratulations! <br> You won! 🤗<br>You chose ${input} and the computer chose ${computerRandom}!`;
    }
    if (
      (input == "reversed scissors" && computerRandom == "scissors") ||
      (input == "reversed paper" && computerRandom == "paper") ||
      (input == "reversed stone" && computerRandom == "stone")
    ) {
      return `It's a tie! 🤝<br>You both chose ${input}!`;
    }
  }
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
