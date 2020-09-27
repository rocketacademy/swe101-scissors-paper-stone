var player = prompt("Please enter your name", "Your name");
if (player != null) {
  document.getElementById("output").innerHTML =
    "Hello " + player + "! let's play";
}
var wonTimes = 0;
var loseTimes = 0;
var totalGame = 0;

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
  if (input == "scissors" && computerChoose == "paper") {
    wonTimes += 1;
    totalGame += 1;
    myOutputValue = `You win! ${space} you chose scissors ${space} computer chose paper ${space} You've been winning ${wonTimes}/${totalGame} turns`;
  } else if (input == "scissors" && computerChoose == "stone") {
    loseTimes += 1;
    totalGame += 1;
    myOutputValue = `You lose! ${space} you chose scissors ${space} computer chose stone ${space} You've been winning ${wonTimes}/${totalGame} turns`;
  } else if (input == "paper" && computerChoose == "stone") {
    wonTimes += 1;
    totalGame += 1;
    myOutputValue = `You win! ${space} you chose paper ${space} computer chose stone ${space} You've been winning ${wonTimes}/${totalGame} turns`;
  } else if (input == "paper" && computerChoose == "scissors") {
    loseTimes += 1;
    totalGame += 1;
    myOutputValue = `You lose! ${space} you chose paper ${space} computer chose scissors ${space} You've been winning ${wonTimes}/${totalGame} turns`;
  } else if (input == "stone" && computerChoose == "scissors") {
    wonTimes += 1;
    totalGame += 1;

    myOutputValue = `You win! ${space} you chose stone ${space} computer chose scissors ${space} You've been winning ${wonTimes}/${totalGame} turns`;
  } else if (input == "stone" && computerChoose == "paper") {
    loseTimes += 1;
    totalGame += 1;
    myOutputValue = `You lose! ${space} you chose stone ${space} computer chose paper ${space} You've been winning ${wonTimes}/${totalGame} turns`;
  } else {
    myOutputValue = "Please choose scissors, paper or stone.";
  }
  return myOutputValue;
};
