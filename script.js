var player = prompt("Please enter your name", "Your name");
if (player != null) {
  document.getElementById("output").innerHTML =
    "Hello " + player + "! let's play";
}
var mode = prompt(
  "Please choose game mode, 'n' = normal or 'k' = korean",
  "Choose a mode"
);

var wonTimes = 0;
var loseTimes = 0;
var totalGame = 0;
var koreanWon = 0;
var koreanCompWon = 0;
var winner = "";

var randomWords = function () {
  var randWord = "";
  var randNum = Math.floor(Math.random() * 3) + 1;
  if (randNum == 1) {
    randWord = "scissors";
  } else if (randNum == 2) {
    randWord = "paper";
  } else if (randNum == 3) {
    randWord = "stone";
  }
  return randWord;
};

var main = function (input) {
  var space = "<br>";
  var myOutputValue = "Please choose scissors, paper or stone.";
  var computerChoose = randomWords();
  // normal mode
  if (mode == "n") {
    if (input == "scissors" && computerChoose == "paper") {
      wonTimes += 1;
      totalGame += 1;
      myOutputValue = `You win! ${space} you chose scissors ${space} computer chose paper ${space} ${player}, You've been winning ${wonTimes}/${totalGame} turns`;
    } else if (input == "scissors" && computerChoose == "stone") {
      loseTimes += 1;
      totalGame += 1;
      myOutputValue = `You lose! ${space} you chose scissors ${space} computer chose stone ${space} ${player}, You've been winning ${wonTimes}/${totalGame} turns`;
    } else if (input == "paper" && computerChoose == "stone") {
      wonTimes += 1;
      totalGame += 1;
      myOutputValue = `You win! ${space} you chose paper ${space} computer chose stone ${space} ${player}, You've been winning ${wonTimes}/${totalGame} turns`;
    } else if (input == "paper" && computerChoose == "scissors") {
      loseTimes += 1;
      totalGame += 1;
      myOutputValue = `You lose! ${space} you chose paper ${space} computer chose scissors ${space} ${player}, You've been winning ${wonTimes}/${totalGame} turns`;
    } else if (input == "stone" && computerChoose == "scissors") {
      wonTimes += 1;
      totalGame += 1;

      myOutputValue = `You win! ${space} you chose stone ${space} computer chose scissors ${space} ${player}, You've been winning ${wonTimes}/${totalGame} turns`;
    } else if (input == "stone" && computerChoose == "paper") {
      loseTimes += 1;
      totalGame += 1;
      myOutputValue = `You lose! ${space} you chose stone ${space} computer chose paper ${space} ${player}, You've been winning ${wonTimes}/${totalGame} turns`;
    } else if (input == "scissors" && computerChoose == "scissors") {
      myOutputValue = "It's tie!";
    } else if (input == "paper" && computerChoose == "paper") {
      myOutputValue = "It's tie!";
    } else if (input == "stone" && computerChoose == "stone") {
      myOutputValue = "It's tie!";
    } else {
      myOutputValue = "Please choose scissors, paper or stone.";
    }
    //korean mode
  } else {
    if (input == "scissors" && computerChoose == "paper") {
      koreanWon += 1;
      winner = "user";
      myOutputValue = `You win! ${space} you chose scissors ${space} computer chose paper ${space} Muk-jji-ppa! ${space} You win ${koreanWon} times ${space} Comp win ${koreanCompWon} times`;
    } else if (input == "scissors" && computerChoose == "stone") {
      koreanCompWon += 1;
      winner = "comp";
      myOutputValue = `You lose! ${space} you chose scissors ${space} computer chose stone ${space} You win ${koreanWon} times ${space} Comp win ${koreanCompWon} times`;
    } else if (input == "paper" && computerChoose == "stone") {
      koreanWon += 1;
      winner = "user";
      myOutputValue = `You win! ${space} you chose paper ${space} computer chose stone ${space} Muk-jji-ppa! ${space} You win ${koreanWon} times ${space} Comp win ${koreanCompWon} times`;
    } else if (input == "paper" && computerChoose == "scissors") {
      koreanCompWon += 1;
      winner = "comp";
      myOutputValue = `You lose! ${space} you chose paper ${space} computer chose scissors ${space} You win ${koreanWon} times ${space} Comp win ${koreanCompWon} times`;
    } else if (input == "stone" && computerChoose == "scissors") {
      koreanWon += 1;
      winner = "user";
      myOutputValue = `You win! ${space} you chose stone ${space} computer chose scissors ${space} Muk-jji-ppa! ${space} You win ${koreanWon} times ${space} Comp win ${koreanCompWon} times`;
    } else if (input == "stone" && computerChoose == "paper") {
      koreanCompWon += 1;
      winner = "comp";
      myOutputValue = `You lose! ${space} you chose stone ${space} computer chose paper ${space} You win ${koreanWon} times ${space} Comp win ${koreanCompWon} times`;
    } else if (
      input == "scissors" &&
      computerChoose == "scissors" &&
      koreanWon < 2 &&
      koreanCompWon < 2
    ) {
      myOutputValue = "It's tie";
    } else if (
      input == "paper" &&
      computerChoose == "paper" &&
      koreanWon < 2 &&
      koreanCompWon < 2
    ) {
      myOutputValue = "It's tie";
    } else if (
      input == "stone" &&
      computerChoose == "stone" &&
      koreanWon < 2 &&
      koreanCompWon < 2
    ) {
      myOutputValue = "It's tie";
    } else if (
      input == "scissors" &&
      computerChoose == "scissors" &&
      koreanWon > 1 &&
      winner == "user"
    ) {
      myOutputValue = "You win this game!";
    } else if (
      input == "paper" &&
      computerChoose == "paper" &&
      koreanWon > 1 &&
      winner == "user"
    ) {
      myOutputValue = "You win this game!";
    } else if (
      input == "stone" &&
      computerChoose == "stone" &&
      koreanWon > 1 &&
      winner == "user"
    ) {
      myOutputValue = "You win this game!";
    } else if (
      input == "scissors" &&
      computerChoose == "scissors" &&
      koreanCompWon > 1 &&
      winner == "comp"
    ) {
      myOutputValue = "You lose, comp win";
    } else if (
      input == "paper" &&
      computerChoose == "paper" &&
      koreanCompWon > 1 &&
      winner == "comp"
    ) {
      myOutputValue = "You lose, comp win";
    } else if (
      input == "stone" &&
      computerChoose == "stone" &&
      koreanCompWon > 1 &&
      winner == "comp"
    ) {
      myOutputValue = "You lose, comp win";
    } else {
      myOutputValue = "Please choose scissors, paper or stone.";
    }
  }

  return myOutputValue;
  return winner;
};
