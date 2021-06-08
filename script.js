var currentGameMode = "waiting for user name";
var userName = "";
var main = function (input) {
  var myOutputValue = "";
// if the user didn't enter a name
if (isNaN (Number (input)) == true){
myOutputValue = 'sorry please enter a name'}

//otherwise play the game

  else(currentGameMode == "waiting for user name") {
    userName = input;
    currentGameMode = "scissors paper stone game";
    myOutputValue = `Hello ${input}!`;
  }
  if (currentGameMode == "scissors paper stone") {
    // code for random computer word

    getRandomInteger = function () {
      var randomDecimal = Math.random() * 3;
      var randomInteger = Math.ceil(randomDecimal);
      var computerInteger = randomInteger + 1;
      return computerInteger;
    };

    function chooseSecretWord() {
      var computerChosenSecretWord;
      var randomIntegerToDecideWord = getRandomInterger123();
      if (randomIntegerToDecideWord == 1) {
        computerChosenSecretWord == scissors;
      }
      if (randomIntegerToDecideWord == 2) {
        computerChosenSecretWord == paper;
      }
      if (randomIntegerToDecideWord == 3) {
        computerChosenSecretWord == stone;
      }
    }
    // if the input is outside scissors, paper or stone
    if (input != scissors) || (input != paper) || (input!= stone) {
myOutputValue = `sorry please key in either scissors, paper or stone;`
    }


    // if win
    var main = function (input) {
      if (
        (input == "scissors" && computerChosenSecretWord == paper) ||
        (input == "paper" && computerChosenSecretWord == stone) ||
        (input == "stone" && computerChosenSecretWord == scissors)
      );
      {
        myOutputValue`win`;
      }
      // if lose
      if (
        (input == "scissors" && computerChosenSecretWord == stone) ||
        (input == "paper" && computerChosenSecretWord == scissors) ||
        (input == "stone" && computerChosenSecretWord == paper)
      );
      {
        myOutputValue`lose`;
      }
      // if draw
      if (
        (input == "scissors" && computerChosenSecretWord == scissors) ||
        (input == "paper" && computerChosenSecretWord == paper) ||
        (input == "stone" && computerChosenSecretWord == stone)
      );
      {
        myOutputValue`draw`;
      }
      return `you guessed ${input}, the computer chose ${computerChosenSecretWord}, you S${myOutputValue}!`;
      console.log("sps", "input");
    };
  }
};
