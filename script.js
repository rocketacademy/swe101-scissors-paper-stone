var currentGameMode = "waiting for user name";
var userName = "";
var main = function (input) {
  var myOutputValue = "";
  var computerChosenSecretWord = chooseSecretWord();
  // if the user didn't enter a name
  if (isNaN(Number(input)) == true) {
    myOutputValue = "sorry please enter a name";
  } else {
    //otherwise play the game
    userName = input;
    currentGameMode = "scissors paper stone game";
    myOutputValue = `Hello ${input}!`;
  }
  if (currentGameMode == "scissors paper stone game") {
    // code for random computer word
    // if the input is outside scissors, paper or stone
    if (input != "scissors" || input != "paper" || input != "stone") {
      return `sorry please key in either scissors, paper or stone;`;
    }
    // if win
  }
  if (
    (input == "scissors" && computerChosenSecretWord == "paper") ||
    (input == "paper" && computerChosenSecretWord == "stone") ||
    (input == "stone" && computerChosenSecretWord == "scissors")
  ) {
    myOutputValue = `win`;
  }
  // if lose
  if (
    (input == "scissors" && computerChosenSecretWord == "stone") ||
    (input == "paper" && computerChosenSecretWord == "scissors") ||
    (input == "stone" && computerChosenSecretWord == "paper")
  ) {
    myOutputValue = `lose`;
  }
  // if draw
  if (
    (input == "scissors" && computerChosenSecretWord == "scissors") ||
    (input == "paper" && computerChosenSecretWord == "paper") ||
    (input == "stone" && computerChosenSecretWord == "stone")
  ) {
    myOutputValue = `draw`;
  }
  console.log("sps", "input");
  return `you guessed ${input}, the computer chose ${computerChosenSecretWord}, you ${myOutputValue}!`;
};
function chooseSecretWord() {
  //chose one way of presenting either line 26 or 40
  var computerChosenSecretWord;
  var randomIntegerToDecideWord = getRandomInteger();
  if (randomIntegerToDecideWord == 1) {
    computerChosenSecretWord == "scissors";
  }
  if (randomIntegerToDecideWord == 2) {
    computerChosenSecretWord == "paper";
  }
  if (randomIntegerToDecideWord == 3) {
    computerChosenSecretWord == "stone";
  }
  return computerChosenSecretWord;
}
getRandomInteger = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var computerInteger = randomInteger + 1;
  return computerInteger;
};
