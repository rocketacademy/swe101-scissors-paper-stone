var currentWin = 0;
var currentDraw = 0;
var gameCount = 0;
var currentGameMode = "Waiting for user to enter name";
var userName = "";

var main = function (input) {
  //Do this if current game mode is setting user name
  if (currentGameMode == "Waiting for user to enter name") {
    //set the name
    userName = input;
    console.log(currentGameMode);
    //once the user enters the name, game continues.
    currentGameMode = "SPR";
    return (
      "Hello " +
      userName +
      ", Please enter scissors/paper/rock intot he box above"
    );
  }
  //if user types in reverse
  if (input == "reverse") {
    currentGameMode = "reversed SPR";
    console.log(currentGameMode);
    return "Lets play ;P";
  }
  //if user types in unreverse
  if (input == "unreverse") {
    currentGameMode = "SPR";
    console.log(currentGameMode);
    return "Lets play normally ;P";
  }
  if (currentGameMode == "reversed SPR") {
    //Option is Computer Generated Result of RPS
    var assignNumberToOption = randomiser();
    console.log(assignNumberToOption);
    //Messages
    var winMessage = "You Win,";
    var drawMessage = "Draw!";
    var loseMessage = "You Lose!";
    var emptyMessage = "Please enter scissors/paper/rock into box";
    var invalidMessage = "Invalid entry!!!!";
    var winLossCountMessage =
      ", Your Win/Loss is " +
      currentWin +
      "/" +
      gameCount +
      " You have " +
      currentDraw +
      " Draws";
    //scissors lose paper
    if (input == "scissors" && assignNumberToOption == "paper") {
      gameCount = gameCount + 1;
      winLossCountMessage =
        "Your Win/Loss is " +
        currentWin +
        "/" +
        gameCount +
        " <br>You have " +
        currentDraw +
        " Draws";
      return loseMessage + "<br>" + winLossCountMessage;
    }
    //paper lose rock
    if (input == "paper" && assignNumberToOption == "rock") {
      gameCount = gameCount + 1;
      winLossCountMessage =
        "Your Win/Loss is " +
        currentWin +
        "/" +
        gameCount +
        " <br>You have " +
        currentDraw +
        " Draws";
      return loseMessage + "<br>" + winLossCountMessage;
    }
    //rock lose scissors
    if (input == "rock" && assignNumberToOption == "scissors") {
      gameCount = gameCount + 1;
      winLossCountMessage =
        "Your Win/Loss is " +
        currentWin +
        "/" +
        gameCount +
        " <br>You have " +
        currentDraw +
        " Draws";
      return loseMessage + "<br>" + winLossCountMessage;
    }
    //scissors draw
    if (input == "scissors" && assignNumberToOption == "scissors") {
      currentDraw = currentDraw + 1;
      gameCount = gameCount + 1;
      winLossCountMessage =
        "Your Win/Loss is " +
        currentWin +
        "/" +
        gameCount +
        " <br>You have " +
        currentDraw +
        " Draws";
      return drawMessage + "<br>" + winLossCountMessage;
    }
    //paper draw
    if (input == "paper" && assignNumberToOption == "paper") {
      currentDraw = currentDraw + 1;
      gameCount = gameCount + 1;
      winLossCountMessage =
        "Your Win/Loss is " +
        currentWin +
        "/" +
        gameCount +
        " <br>You have " +
        currentDraw +
        " Draws";
      return drawMessage + "<br>" + winLossCountMessage;
    }
    //rock draw
    if (input == "rock" && assignNumberToOption == "rock") {
      currentDraw = currentDraw + 1;
      gameCount = gameCount + 1;
      winLossCountMessage =
        "Your Win/Loss is " +
        currentWin +
        "/" +
        gameCount +
        " <br>You have " +
        currentDraw +
        " Draws";
      return drawMessage + "<br>" + winLossCountMessage;
    }
    //scissors win rock
    if (input == "scissors" && assignNumberToOption == "rock") {
      currentWin = currentWin + 1;
      gameCount = gameCount + 1;
      winLossCountMessage =
        "Your Win/Loss is " +
        currentWin +
        "/" +
        gameCount +
        " <br>You have " +
        currentDraw +
        " Draws";
      return winMessage + "<br>" + winLossCountMessage;
    }
    //paper lose scissors
    if (input == "paper" && assignNumberToOption == "scissors") {
      currentWin = currentWin + 1;
      gameCount = gameCount + 1;
      winLossCountMessage =
        "Your Win/Loss is " +
        currentWin +
        "/" +
        gameCount +
        " <br>You have " +
        currentDraw +
        " Draws";
      return winMessage + "<br>" + winLossCountMessage;
    }
    //rock win paper
    if (input == "rock" && assignNumberToOption == "paper") {
      currentWin = currentWin + 1;
      gameCount = gameCount + 1;
      winLossCountMessage =
        "Your Win/Loss is " +
        currentWin +
        "/" +
        gameCount +
        " <br>You have " +
        currentDraw +
        " Draws";
      return winMessage + "<br>" + winLossCountMessage;
    }
    if (input != "") {
      return invalidMessage;
    }
    return emptyMessage;
  } else if (currentGameMode == "SPR") {
    //Option is Computer Generated Result of RPS
    var assignNumberToOption = randomiser();
    console.log(assignNumberToOption);
    //Messages
    var winMessage = "You Win,";
    var drawMessage = "Draw!";
    var loseMessage = "You Lose!";
    var emptyMessage = "Please enter scissors/paper/rock into box";
    var invalidMessage = "Invalid entry!!!!";
    var winLossCountMessage =
      ", Your Win/Loss is " +
      currentWin +
      "/" +
      gameCount +
      " You have " +
      currentDraw +
      " Draws";
    //scissors win paper
    if (input == "scissors" && assignNumberToOption == "paper") {
      currentWin = currentWin + 1;
      gameCount = gameCount + 1;
      winLossCountMessage =
        "Your Win/Loss is " +
        currentWin +
        "/" +
        gameCount +
        " <br>You have " +
        currentDraw +
        " Draws";
      return winMessage + "<br>" + winLossCountMessage;
    }
    //paper win rock
    if (input == "paper" && assignNumberToOption == "rock") {
      currentWin = currentWin + 1;
      gameCount = gameCount + 1;
      winLossCountMessage =
        "Your Win/Loss is " +
        currentWin +
        "/" +
        gameCount +
        " <br>You have " +
        currentDraw +
        " Draws";
      return winMessage + "<br>" + winLossCountMessage;
    }
    //rock win scissors
    if (input == "rock" && assignNumberToOption == "scissors") {
      currentWin = currentWin + 1;
      gameCount = gameCount + 1;
      winLossCountMessage =
        "Your Win/Loss is " +
        currentWin +
        "/" +
        gameCount +
        " <br>You have " +
        currentDraw +
        " Draws";
      return winMessage + "<br>" + winLossCountMessage;
    }
    //scissors draw
    if (input == "scissors" && assignNumberToOption == "scissors") {
      currentDraw = currentDraw + 1;
      gameCount = gameCount + 1;
      winLossCountMessage =
        "Your Win/Loss is " +
        currentWin +
        "/" +
        gameCount +
        " <br>You have " +
        currentDraw +
        " Draws";
      return drawMessage + "<br>" + winLossCountMessage;
    }
    //paper draw
    if (input == "paper" && assignNumberToOption == "paper") {
      currentDraw = currentDraw + 1;
      gameCount = gameCount + 1;
      winLossCountMessage =
        "Your Win/Loss is " +
        currentWin +
        "/" +
        gameCount +
        " <br>You have " +
        currentDraw +
        " Draws";
      return drawMessage + "<br>" + winLossCountMessage;
    }
    //rock draw
    if (input == "rock" && assignNumberToOption == "rock") {
      currentDraw = currentDraw + 1;
      gameCount = gameCount + 1;
      winLossCountMessage =
        "Your Win/Loss is " +
        currentWin +
        "/" +
        gameCount +
        " <br>You have " +
        currentDraw +
        " Draws";
      return drawMessage + "<br>" + winLossCountMessage;
    }
    //scissors lose to rock
    if (input == "scissors" && assignNumberToOption == "rock") {
      gameCount = gameCount + 1;
      winLossCountMessage =
        "Your Win/Loss is " +
        currentWin +
        "/" +
        gameCount +
        " <br>You have " +
        currentDraw +
        " Draws";
      return loseMessage + "<br>" + winLossCountMessage;
    }
    //paper lose to scissors
    if (input == "paper" && assignNumberToOption == "scissors") {
      gameCount = gameCount + 1;
      winLossCountMessage =
        "Your Win/Loss is " +
        currentWin +
        "/" +
        gameCount +
        " <br>You have " +
        currentDraw +
        " Draws";
      return loseMessage + "<br>" + winLossCountMessage;
    }
    //rock lose to paper
    if (input == "rock" && assignNumberToOption == "paper") {
      gameCount = gameCount + 1;
      winLossCountMessage =
        "Your Win/Loss is " +
        currentWin +
        "/" +
        gameCount +
        " <br>You have " +
        currentDraw +
        " Draws";
      return loseMessage + "<br>" + winLossCountMessage;
    }
    if (input != "") {
      return invalidMessage;
    }
    return emptyMessage;
  }
};
//Number randomiser assigned to RPS
var randomiser = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var actualInteger = randomInteger + 1;
  if (actualInteger == 1) {
    return "scissors";
  }
  if (actualInteger == 2) {
    return "paper";
  }
  if (actualInteger == 3) {
    return "rock";
  }
};
