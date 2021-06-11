//first game is user name
var currentGameMode = "waiting for user name";
var userName = "";

//track record of player and computer wins
var playerWin = 0;
var computerWin = 0;

//generate a random number to be assigned to Rock, Paper or Scissors
var generateRandomInterger = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInterger = Math.floor(randomDecimal) + 1;
  return randomInterger;
};
//assigning RandomInterger generated to Rock, Paper or Scissors
var generateSPS = function () {
  var possibleSPS = 3;
  var randomSPS = generateRandomInterger(possibleSPS);
  if (randomSPS == 1) {
    return "Rock";
  }
  if (randomSPS == 2) {
    return "Paper";
  }
  if (randomSPS == 3) {
    return "Scissors";
  }
};

//accept input and compare against generated number to check who wins
var main = function (input) {
  if (currentGameMode == "waiting for user name") {
    userName = input;
    currentGameMode = "SPS";
    myOutputValue = "Hello " + userName;
  } else if (currentGameMode == "SPS") {
    var computerSPS = generateSPS();
    console.log(computerSPS);
    var genericOutput =
      "The computer chose " +
      computerSPS +
      ".<br> You chose " +
      input +
      ".<br>";
    var myOutputValue = genericOutput;
    //draw conditions
    if (input == computerSPS) {
      myOutputValue = genericOutput + "It's a draw!";
    }
    //winning conditions
    if (input == "Rock" && computerSPS == "Scissors") {
      playerWin += 1;
      myOutputValue = genericOutput + "You win!";
    }
    if (input == "Paper" && computerSPS == "Rock") {
      playerWin += 1;
      myOutputValue = genericOutput + "You win!";
    }
    if (input == "Scissors" && computerSPS == "Paper") {
      playerWin += 1;
      myOutputValue = genericOutput + "You win!";
    }

    //losing conditions
    if (input == "Rock" && computerSPS == "Paper") {
      computerWin += 1;
      myOutputValue = genericOutput + "You lose, bummer!";
    }
    if (input == "Paper" && computerSPS == "Scissors") {
      computerWin += 1;
      myOutputValue = genericOutput + "You lose, bummer!";
    }
    if (input == "Scissors" && computerSPS == "Rock") {
      computerWin += 1;
      myOutputValue = genericOutput + "You lose, bummer!";
    }
    return (
      myOutputValue +
      "<br><br>Now you can type 'Scissors' 'Paper' or 'Stone' to play another round!<br>" +
      userName +
      ", you won " +
      playerWin +
      " times." +
      "<br> The computer won " +
      computerWin +
      " times"
    );
  }
  return myOutputValue;
};
//reject answers that are not Rock, Paper, Scissors
//var acceptableEntry = function (accept) {
//if (input != "Rock" || input != "Paper" || input != "Scissors") {
//return "Invalid entry, try Rock, Paper or Scissors";
//}
//};
