var generateOutcome = function () {
  var randomInt = Math.floor(Math.random() * 3);
  var map = { 0: "scissors", 1: "paper", 2: "stone" };
  var outcome = map[randomInt];
  return outcome;
};

// Create global variables
var gameState = "NameInput";
var playerName = "Player";
var wins = 0;
var loss = 0;
var games = 0;
var previousWinner = "no one";

// create outcome variables
var win = "Congratulations, you win! Want a rematch?";
var lose = "Bummer, you lost. Try again next time!";
var tie = "Its a draw. We'll have to go again";
var invalid = `This is a game of scissors paper stone. Accepted input values are "scissors", "paper", "stone" or "random".`;

var main = function (input) {
  if (gameState == "NameInput") {
    // Start getting user input
    playerName = input;
    var myOutputValue = `Welcome to play the game ${playerName}. <br> Please select the following game modes: "Normal", "Reversed" or "Korean".`;
    gameState = "GameSelect";
    return myOutputValue;
  } else if (gameState == "GameSelect") {
    // Reset counters for existing game mode.
    wins = 0;
    loss = 0;
    games = 0;
    var gameSelect = input;
    if (
      gameSelect == "Normal" ||
      gameSelect == "Reversed" ||
      gameSelect == "Korean"
    ) {
      gameState = gameSelect;
      myOutputValue = `Good choice ${playerName}! We will now proceed to play ${gameSelect} version of scissors, paper, stone! Best of Luck!`;
    } else {
      myOutputValue = `Sorry ${playerName}, this is an invalid entry. <br> Please select the following game modes: "Normal", "Reversed" or "Korean".`;
    }
    return myOutputValue;
  } else if (gameState == "Normal") {
    // check user and computer inputs
    if (input == "random") {
      var userChoice = generateOutcome();
    } else {
      var userChoice = input;
    }

    var computerOutcome = generateOutcome();
    console.log("Input: " + userChoice);
    console.log("Generated: " + computerOutcome);

    // the default outcome of all games shall be invalid
    var outcome = invalid;

    // If else logic for normal mode
    if (
      (userChoice == "scissors" && computerOutcome == "stone") ||
      (userChoice == "paper" && computerOutcome == "scissors") ||
      (userChoice == "stone" && computerOutcome == "paper")
    ) {
      outcome = lose;
      loss = loss + 1;
      games = games + 1;
    } else if (userChoice == computerOutcome) {
      outcome = tie;
      games = games + 1;
    } else if (
      (userChoice == "scissors" && computerOutcome == "paper") ||
      (userChoice == "paper" && computerOutcome == "stone") ||
      (userChoice == "stone" && computerOutcome == "scissors")
    ) {
      outcome = win;
      wins = wins + 1;
      games = games + 1;
    } else {
      outcome = invalid;
    }
  } else if (gameState == "Reversed") {
    // check user and computer inputs
    if (input == "random") {
      var userChoice = generateOutcome();
    } else {
      var userChoice = input;
    }
    var computerOutcome = generateOutcome();
    console.log("Input: " + userChoice);
    console.log("Generated: " + computerOutcome);

    // the default outcome of all games shall be invalid
    var outcome = invalid;

    if (
      (userChoice == "scissors" && computerOutcome == "stone") ||
      (userChoice == "paper" && computerOutcome == "scissors") ||
      (userChoice == "stone" && computerOutcome == "paper")
    ) {
      outcome = win;
      wins = wins + 1;
      games = games + 1;
    } else if (userChoice == computerOutcome) {
      outcome = tie;
      games = games + 1;
    } else if (
      (userChoice == "scissors" && computerOutcome == "paper") ||
      (userChoice == "paper" && computerOutcome == "stone") ||
      (userChoice == "stone" && computerOutcome == "scissors")
    ) {
      outcome = lose;
      loss = loss + 1;
      games = games + 1;
    } else {
      outcome = invalid;
    }
  } else if (gameState == "Korean") {
    // check user and computer inputs
    if (input == "random") {
      var userChoice = generateOutcome();
    } else {
      var userChoice = input;
    }
    var computerOutcome = generateOutcome();
    console.log("Input: " + userChoice);
    console.log("Generated: " + computerOutcome);

    // the default outcome of all games shall be invalid
    var outcome = invalid;

    // If else logic for korean mode
    if (
      (userChoice == "scissors" && computerOutcome == "stone") ||
      (userChoice == "paper" && computerOutcome == "scissors") ||
      (userChoice == "stone" && computerOutcome == "paper")
    ) {
      previousWinner = "computer";
      outcome =
        "A draw in the next round would see the computer win this version of scissors, paper, stone.";
    } else if (userChoice == computerOutcome) {
      if (previousWinner == "computer") {
        outcome = lose;
        games = games + 1;
        loss = loss + 1;
        previousWinner = "No one";
      } else if (previousWinner == playerName) {
        outcome = win;
        games = games + 1;
        wins = wins + 1;
        previousWinner = "No one";
      } else {
        outcome = tie;
      }
    } else if (
      (userChoice == "scissors" && computerOutcome == "paper") ||
      (userChoice == "paper" && computerOutcome == "stone") ||
      (userChoice == "stone" && computerOutcome == "scissors")
    ) {
      previousWinner = playerName;
      outcome =
        "A draw in the next round allow you to win this version of scissors, paper, stone.";
    } else {
      outcome = invalid;
    }
    console.log("PreviousWinner:", previousWinner);
    console.log("Player Name:" + playerName);
    console.log("Boolean Check: " + previousWinner == playerName);
  }

  // Check current performance
  var performance = wins / games;
  if (performance >= 0.75) {
    var evaluation = "Very impressive!";
  } else if (performance <= 0.25) {
    var evaluation = "Try harder!";
  } else {
    var evaluation = "Keep going!";
  }

  // Print output of game outcome
  myOutputValue =
    `You chose ${userChoice}. <br>The computer generated ${computerOutcome}<br><br>` +
    outcome +
    `<br><br>So far ${playerName}, your record is as follows. ${evaluation}<br>
    Games: ${games}<br>
    Wins: ${wins}<br>
    Loss: ${loss}<br>
    Draw: ${games - wins - loss}<br><br>
    Now you can type "scissors", "paper", or "stone" to play another round!`;
  return myOutputValue;
};
