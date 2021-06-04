var win = 0;
var loss = 0;
var currentMode = "Waiting for username";
var username = "";
var lastroundWinner = "";
var main = function (input) {
  var myOutputValue = "";
  if (currentMode == "Waiting for username") {
    username = input;
    currentMode = "gameSelection";
    return `Welcome to the game, ${username}. Please enter either 'RPS' to play normal Rock Paper Scissors, or enter 'Korean RPS' to play muk-jji-ppa. You can add 'Robot' in front of either choice to play AI vs AI versions.`;
  }
  if (currentMode == "gameSelection") {
    if (input == "Korean RPS") {
      currentMode = "koreanRPS";
      return `You have selected Korean RPS - muk-jji-ppa, ${username}.`;
    }
    if (input == "RPS") {
      currentMode = "normalRPS";
      return `You have selected normal RPS, ${username}.`;
    }
    if (input == "Robot Korean RPS") {
      currentMode = "compkoreanRPS";
      return `You have selected Robot Korean RPS - muk-jji-ppa, ${username}.`;
    }
    if (input == "Robot RPS") {
      currentMode = "compnormalRPS";
      return `You have selected Robot normal RPS, ${username}.`;
    }
  }
  var compChoice = RandRoll();
  console.log(compChoice);
  var outcome =
    `You picked ${input}.` + "<br>" + `The computer chose ${compChoice}`;
  var winOutcome =
    outcome + "<br>" + `You won this round, ${username}! Play again?`;
  var loseOutcome =
    outcome + "<br>" + `You lost this round, ${username}! Play again?`;
  var drawOutcome = outcome + "<br>" + `You drew, ${username}! Play again?`;
  if (currentMode == "normalRPS") {
    if (
      (input == "scissors" && compChoice == "paper") ||
      (input == "paper" && compChoice == "rock") ||
      (input == "rock" && compChoice == "scissors") ||
      (input == "reverse scissors" && compChoice == "rock") ||
      (input == "reverse paper" && compChoice == "scissors") ||
      (input == "reverse rock" && compChoice == "paper")
    ) {
      win = win + 1;
      var winrate = `Your current winrate is ${(win / (win + loss)) * 100}%`;
      myOutputValue = winOutcome + "<br>" + winrate;
    } else if (
      (input == "scissors" && compChoice == "rock") ||
      (input == "paper" && compChoice == "scissors") ||
      (input == "rock" && compChoice == "paper") ||
      (input == "reverse scissors" && compChoice == "paper") ||
      (input == "reverse paper" && compChoice == "rock") ||
      (input == "reverse rock" && compChoice == "scissors")
    ) {
      loss = loss + 1;
      var winrate = `Your current winrate is ${(win / (win + loss)) * 100}%`;
      myOutputValue = loseOutcome + "<br>" + winrate;
    } else if (
      input == compChoice ||
      (input == "reverse scissors" && compChoice == "scissors") ||
      (input == "reverse paper" && compChoice == "paper") ||
      (input == "reverse rock" && compChoice == "rock")
    ) {
      var winrate = `Your current winrate is ${(win / (win + loss)) * 100}%`;
      myOutputValue = drawOutcome + "<br>" + winrate;
    } else {
      myOutputValue =
        "Invalid input! Please only enter either rock, paper or scissors(small caps). To play reverse mode, you can type reverse in front of your choice.";
    }
  }
  if (currentMode == "compnormalRPS") {
    var playercompChoice = RandRoll();
    var outcome =
      `You picked ${playercompChoice}.` +
      "<br>" +
      `The computer chose ${compChoice}`;
    var winOutcome =
      outcome + "<br>" + `You won this round, ${username}! Play again?`;
    var loseOutcome =
      outcome + "<br>" + `You lost this round, ${username}! Play again?`;
    var drawOutcome = outcome + "<br>" + `You drew, ${username}! Play again?`;
    if (
      (playercompChoice == "scissors" && compChoice == "paper") ||
      (playercompChoice == "paper" && compChoice == "rock") ||
      (playercompChoice == "rock" && compChoice == "scissors")
    ) {
      win = win + 1;
      var winrate = `Your current winrate is ${(win / (win + loss)) * 100}%`;
      myOutputValue = winOutcome + "<br>" + winrate;
    } else if (
      (playercompChoice == "scissors" && compChoice == "rock") ||
      (playercompChoice == "paper" && compChoice == "scissors") ||
      (playercompChoice == "rock" && compChoice == "paper")
    ) {
      loss = loss + 1;
      var winrate = `Your current winrate is ${(win / (win + loss)) * 100}%`;
      myOutputValue = loseOutcome + "<br>" + winrate;
    } else if (playercompChoice == compChoice) {
      var winrate = `Your current winrate is ${(win / (win + loss)) * 100}%`;
      myOutputValue = drawOutcome + "<br>" + winrate;
    }
  }
  if (currentMode == "koreanRPS") {
    if (
      (input == "scissors" && compChoice == "paper") ||
      (input == "paper" && compChoice == "rock") ||
      (input == "rock" && compChoice == "scissors")
    ) {
      lastroundWinner = "player";
      myOutputValue =
        winOutcome +
        "<br>" +
        "You need to draw the next round in order to be declared the winner of muk-jji-ppa!";
    } else if (
      (input == "scissors" && compChoice == "rock") ||
      (input == "paper" && compChoice == "scissors") ||
      (input == "rock" && compChoice == "paper")
    ) {
      lastroundWinner = "comp";
      myOutputValue =
        loseOutcome +
        "<br>" +
        "The computer will muk-jji-ppa if it is a draw next round!";
    } else if (input == compChoice) {
      if (lastroundWinner == "player") {
        lastroundWinner = "";
        myOutputValue =
          drawOutcome +
          "<br>" +
          "You won the last round and therefore you win muk-jji-ppa!";
      } else if (lastroundWinner == "comp") {
        myOutputValue =
          drawOutcome +
          "<br>" +
          "You lost the last round and therefore you have lost muk-jji-ppa.";
      } else {
        myOutputValue =
          drawOutcome +
          "<br>" +
          "No one won the previous round, so no one is declared the winner.";
      }
    } else {
      myOutputValue =
        "Invalid input! Please only enter either rock, paper or scissors(small caps).";
    }
  }
  if (currentMode == "compkoreanRPS") {
    var playercompChoice = RandRoll();
    var outcome =
      `You picked ${playercompChoice}.` +
      "<br>" +
      `The computer chose ${compChoice}`;
    var winOutcome =
      outcome + "<br>" + `You won this round, ${username}! Play again?`;
    var loseOutcome =
      outcome + "<br>" + `You lost this round, ${username}! Play again?`;
    var drawOutcome = outcome + "<br>" + `You drew, ${username}! Play again?`;
    if (
      (playercompChoice == "scissors" && compChoice == "paper") ||
      (playercompChoice == "paper" && compChoice == "rock") ||
      (playercompChoice == "rock" && compChoice == "scissors")
    ) {
      lastroundWinner = "player";
      myOutputValue =
        winOutcome +
        "<br>" +
        "You need to draw the next round in order to be declared the winner of muk-jji-ppa!";
    } else if (
      (playercompChoice == "scissors" && compChoice == "rock") ||
      (playercompChoice == "paper" && compChoice == "scissors") ||
      (playercompChoice == "rock" && compChoice == "paper")
    ) {
      lastroundWinner = "comp";
      myOutputValue =
        loseOutcome +
        "<br>" +
        "The computer will muk-jji-ppa if it is a draw next round!";
    } else if (playercompChoice == compChoice) {
      if (lastroundWinner == "player") {
        lastroundWinner = "";
        myOutputValue =
          drawOutcome +
          "<br>" +
          "You won the last round and therefore you win muk-jji-ppa!";
      } else if (lastroundWinner == "comp") {
        myOutputValue =
          drawOutcome +
          "<br>" +
          "You lost the last round and therefore you have lost muk-jji-ppa.";
      } else {
        myOutputValue =
          drawOutcome +
          "<br>" +
          "No one won the previous round, so no one is declared the winner.";
      }
    }
  }
  return myOutputValue;
};

var RandRoll = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var RandNumber = randomInteger + 1;
  console.log(RandNumber);
  //1 is paper, 2 is rock, and 3 is scissors
  if (RandNumber == 1) {
    return "paper";
  } else if (RandNumber == 2) {
    return "rock";
  } else {
    return "scissors";
  }
};
