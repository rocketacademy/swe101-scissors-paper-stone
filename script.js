//Base Done

var currentGameMode = "waiting for name";
var userName = "";
var totalGamesPlayed = 0;
var totalGamesWon = 0;

var main = function (input) {
  var myOutputValue = "";
  if (currentGameMode == "waiting for name") {
    userName = input;
    // switch game mode to Scissors Paper Stone once name is given
    currentGameMode = "scissors paper stone game";
    myOutputValue =
      "hello " +
      input +
      ", you are now playing scissors paper stone! Please only choose the following:<br>✂️scissors<br>🧻paper<br><b>or</b> 🪨stone";
    return myOutputValue;
  } else if (currentGameMode == "scissors paper stone game") {
    // scissors paper stone logic added here
    var computerRandom = generateRandomOutcome();
    var myOutputValue = `${userName}, you chose ${input},<br>the computer chose ${computerRandom}`;
    console.log("Computer Chose: " + computerRandom);
    console.log(`User Chose: ${input}`);
    if (
      (input == "scissors" && computerRandom == "paper") ||
      (input == "paper" && computerRandom == "stone") ||
      (input == "stone" && computerRandom == "scissors")
    ) {
      totalGamesPlayed = totalGamesPlayed + 1;
      totalGamesWon = totalGamesWon + 1;
      if (totalGamesWon / totalGamesPlayed >= 0.5) {
        return `🎉 Congratulations! <br> ${userName}, you won! 🤗<br>You chose ${input} and the computer chose ${computerRandom}! <br> You have been winning ${totalGamesWon} out of ${totalGamesPlayed} rounds! It's looking good!`;
      } else {
        return `🎉 Congratulations! <br> ${userName}, you won! 🤗<br>You chose ${input} and the computer chose ${computerRandom}! <br> You have been winning ${totalGamesWon} out of ${totalGamesPlayed} rounds! Try harder!`;
      }
    }
    if (
      (input == "scissors" && computerRandom == "stone") ||
      (input == "paper" && computerRandom == "scissors") ||
      (input == "stone" && computerRandom == "paper")
    ) {
      totalGamesPlayed = totalGamesPlayed + 1;
      if (totalGamesWon / totalGamesPlayed >= 0.5) {
        return `${userName}, you lost! 😟<br>You chose ${input} and the computer chose ${computerRandom}! Let's try again. <br> You have been winning ${totalGamesWon} out of ${totalGamesPlayed} rounds! It's looking good!`;
      } else {
        return `${userName}, you lost! 😟<br>You chose ${input} and the computer chose ${computerRandom}! Let's try again. <br> You have been winning ${totalGamesWon} out of ${totalGamesPlayed} rounds! Try harder!`;
      }
    }
    if (
      (input == "scissors" && computerRandom == "scissors") ||
      (input == "paper" && computerRandom == "paper") ||
      (input == "stone" && computerRandom == "stone")
    ) {
      totalGamesPlayed = totalGamesPlayed + 1;
      if (totalGamesWon / totalGamesPlayed >= 0.5) {
        return `It's a tie! 🤝<br>${userName} and the computer both chose ${input}! <br> You have been winning ${totalGamesWon} out of ${totalGamesPlayed} rounds! It's looking good!`;
      } else {
        return `It's a tie! 🤝<br>${userName} and the computer both chose ${input}! <br> You have been winning ${totalGamesWon} out of ${totalGamesPlayed} rounds! Try harder!`;
      }
    }

    if (
      input != "scissors" &&
      input != "paper" &&
      input != "stone" &&
      input != "reversed scissors" &&
      input != "reversed paper" &&
      input != "reversed stone"
    ) {
      return `Invalid input, ${userName},! Please only choose the following:<br>✂️scissors<br>🧻paper<br><b>or</b> 🪨stone`;
    }

    if (
      (input == "reversed scissors" && computerRandom == "paper") ||
      (input == "reversed paper" && computerRandom == "stone") ||
      (input == "reversed stone" && computerRandom == "scissors")
    ) {
      totalGamesPlayed = totalGamesPlayed + 1;
      if (totalGamesWon / totalGamesPlayed >= 0.5) {
        return `${userName}, you lost! 😟<br>You chose ${input} and the computer chose ${computerRandom}! Let's try again. <br> You have been winning ${totalGamesWon} out of ${totalGamesPlayed} rounds! It's looking good!`;
      } else {
        return `${userName}, you lost! 😟<br>You chose ${input} and the computer chose ${computerRandom}! Let's try again. <br> You have been winning ${totalGamesWon} out of ${totalGamesPlayed} rounds! Try harder!`;
      }
    }

    if (
      (input == "reversed scissors" && computerRandom == "stone") ||
      (input == "reversed paper" && computerRandom == "scissors") ||
      (input == "reversed stone" && computerRandom == "paper")
    ) {
      totalGamesPlayed = totalGamesPlayed + 1;
      totalGamesWon = totalGamesWon + 1;
      if (totalGamesWon / totalGamesPlayed >= 0.5) {
        return `🎉 Congratulations! <br> ${userName}, you won! 🤗<br>You chose ${input} and the computer chose ${computerRandom}!<br> You have been winning ${totalGamesWon} out of ${totalGamesPlayed} rounds! It's looking good!`;
      } else {
        return `🎉 Congratulations! <br> ${userName}, you won! 🤗<br>You chose ${input} and the computer chose ${computerRandom}! <br> You have been winning ${totalGamesWon} out of ${totalGamesPlayed} rounds! Try harder!`;
      }
    }
    if (
      (input == "reversed scissors" && computerRandom == "scissors") ||
      (input == "reversed paper" && computerRandom == "paper") ||
      (input == "reversed stone" && computerRandom == "stone")
    ) {
      totalGamesPlayed = totalGamesPlayed + 1;
      if (totalGamesWon / totalGamesPlayed >= 0.5) {
        return `It's a tie! 🤝<br>${userName} and the computer both chose ${input}! <br> You have been winning ${totalGamesWon} out of ${totalGamesPlayed} rounds! It's looking good!`;
      } else {
        return `It's a tie! 🤝<br>${userName} and the computer both chose ${input}! <br> You have been winning ${totalGamesWon} out of ${totalGamesPlayed} rounds! Try harder!`;
      }
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
