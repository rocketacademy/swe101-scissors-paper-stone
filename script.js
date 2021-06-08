//trouble shoot reversed os message
var totalMatches = 0;
var timesPlayerWon = 0;
var numberOfDraws = 0;
var userName = ``;
var message;
var normal = `normal`;
var korean = `korean`;
var reversed = `reversed`;
var gameMode = normal;
var player = `player`;
var currentWinner = `${userName}`;
var myOutputValue;
var main = function (input) {
  var helpChoose = help();
  var elementfinal = elements();
  if (input == ``) {
    input = helpChoose;
  }
  if (input == normal || input == korean || input == reversed) {
    gameMode = input;
    myOutputValue = `Your gamemode has been set to ${gameMode}. Please type 'scissors', 'paper' or 'stone' to play the game`;
  }
  customKorean = function (customPhrase) {
    Message = `Thank you for playing ${userName}! The computer chose ${elementfinal} .
You chose ${input}.
<br>${customPhrase}.
<br> Type in something other than "scissors", "paper","stone" ,"normal","reversed" or "korean" to set/change your username.
<br>Now you can type "scissors" "paper" or "stone" to play another round!
<br>You can also type in "normal", "reversed" or "korean" to change your game mode.(Your current game mode is ${gameMode})
<br> If you would like the computer to play for you, leave the input box blank`;
    return Message;
  };
  console.log(gameMode);
  console.log(customKorean(`${gameMode}`));
  customMessage = function (customPhrase) {
    Message = `Thank you for playing ${userName}! The computer chose ${elementfinal} .
You chose ${input}.
<br>${customPhrase}.
<br>You've won ${timesPlayerWon}/${totalMatches} matches with ${numberOfDraws} draws.
<br> Type in something other than "scissors", "paper","stone" ,"normal","reversed" or "korean" to set/change your username.
<br>Now you can type "scissors" "paper" or "stone" to play another round!
<br>You can also type in "normal", "reversed" or "korean" to change your game mode.(Your current game mode is ${gameMode})
<br> If you would like the computer to play for you , leave the input box blank`;
    return Message;
  };
  //for username
  if (
    input != "scissors" &&
    input != "paper" &&
    input != "stone" &&
    input != "normal" &&
    input != "reversed" &&
    input != "korean"
  ) {
    userName = input;
    myOutputValue = `Your username has been set to ${userName}. <br>Please type 'normal', 'korean' or 'reversed' to play the game(the gamemode has been set to normal by default) or type 'scissors', 'paper' or stone' to start the game`;
  }
  if (input == `computer`) {
    myOutputValue = `Your username has been set to computer and the computer will now play on your behalf. <br>Please type 'normal', 'korean' or 'reversed' to play the game(the gamemode has been set to normal by default)`;
  }
  //for normal gamemode
  if (gameMode == normal) {
    if (
      (input == `scissors` && elementfinal == "stone 💎") ||
      (input == `paper` && elementfinal == "scissors ✂️") ||
      (input == `stone` && elementfinal == "paper 📃")
    ) {
      totalMatches = totalMatches + 1;
      myOutputValue = customMessage(`You lose! Bummer`);
    }
    if (
      (input == `scissors` && elementfinal == "scissors ✂️") ||
      (input == `paper` && elementfinal == "paper 📃") ||
      (input == `stone` && elementfinal == "stone 💎")
    ) {
      totalMatches = totalMatches + 1;
      numberOfDraws = numberOfDraws + 1;
      myOutputValue = customMessage(`It's a draw! Bummer`);
    }
    if (
      (input == `scissors` && elementfinal == "paper 📃") ||
      (input == `paper` && elementfinal == "stone 💎") ||
      (input == `stone` && elementfinal == "scissors ✂️")
    ) {
      totalMatches = totalMatches + 1;
      timesPlayerWon = timesPlayerWon + 1;
      myOutputValue = customMessage(`You win! Hooray`);
    }
  }
  //for reversed gamemode
  if (gameMode == `reversed`) {
    if (
      (input == `scissors` && elementfinal == "paper 📃") ||
      (input == `paper` && elementfinal == "stone 💎") ||
      (input == `stone` && elementfinal == "scissors ✂️")
    ) {
      totalMatches = totalMatches + 1;
      myOutputValue = customMessage(`You lose! Bummer`);
    }
    if (
      (input == `scissors` && elementfinal == "scissors ✂️") ||
      (input == `paper` && elementfinal == "paper 📃") ||
      (input == `stone` && elementfinal == "stone 💎")
    ) {
      totalMatches = totalMatches + 1;
      numberOfDraws = numberOfDraws + 1;
      myOutputValue = customMessage(`It's a draw! Bummer`);
    }
    if (
      (input == `scissors` && elementfinal == "stone 💎") ||
      (input == `paper` && elementfinal == "scissors ✂️") ||
      (input == `stone` && elementfinal == "paper 📃")
    ) {
      totalMatches = totalMatches + 1;
      timesPlayerWon = timesPlayerWon + 1;
      myOutputValue = customMessage(`You win! Hooray`);
    }
  }
  //for korean gamemode
  if (gameMode == korean) {
    if (
      (input == `scissors` && elementfinal == "stone 💎") ||
      (input == `paper` && elementfinal == "scissors ✂️") ||
      (input == `stone` && elementfinal == "paper 📃")
    ) {
      currentWinner = `computer`;
      myOutputValue = customKorean(
        `The most recent winner is ${currentWinner} muk-jji-ppa!`
      );
    }
    if (
      (input == `scissors` && elementfinal == "scissors ✂️") ||
      (input == `paper` && elementfinal == "paper 📃") ||
      (input == `stone` && elementfinal == "stone 💎")
    ) {
      myOutputValue = customKorean(
        `Its a draw! The most recent winner is ${currentWinner}. ${currentWinner} won! muk-jji-ppa!`
      );
    }
    if (
      (input == `scissors` && elementfinal == "paper 📃") ||
      (input == `paper` && elementfinal == "stone 💎") ||
      (input == `stone` && elementfinal == "scissors ✂️")
    ) {
      currentWinner = `${userName}`;
      myOutputValue = customKorean(
        `The most recent winner is ${currentWinner} muk-jji-ppa!`
      );
    }
  }
  return myOutputValue;
};
var elements = function () {
  var Decimal = Math.random() * 3 + 1;
  var number = Math.floor(Decimal);
  if (number == 1) {
    var element = "scissors ✂️";
  }
  if (number == 2) {
    var element = "paper 📃";
  }
  if (number == 3) {
    var element = "stone 💎";
  }
  return element;
};
var help = function () {
  var Decimal = Math.random() * 3 + 1;
  var number = Math.floor(Decimal);
  if (number == 1) {
    var helpelement = "scissors";
  }
  if (number == 2) {
    var helpelement = "paper";
  }
  if (number == 3) {
    var helpelement = "stone";
  }
  return helpelement;
};
