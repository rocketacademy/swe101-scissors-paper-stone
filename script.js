//SPS: set default game mode
var REGULAR_MODE = "regular";
var REVERSE_MODE = "reverse";
//MJP: default game mode is to determine interim winner
var DEFAULT_MODE = "determine interim winner";
var ACTUAL_WINNER_MODE = "determine actual winner";
var mjpGameMode = DEFAULT_MODE;
var gameMode = "";
var modeSelectionInstructions = `Please choose the game mode: <br>
  1. ${REGULAR_MODE} <br> 2. ${REVERSE_MODE}`;

//set global variable for userName
var userName = "";

//set global variable for number of times computer won
var numComputerWins = 0;

//set global var for number of times user won
var numUserWins = 0;

//set global var for number of times user draws
var numUserDraws = 0;

var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";

var REVERSED_SCISSORS = "reversed scissors";
var REVERSED_PAPER = "reversed paper";
var REVERSED_STONE = "reversed stone";
//set global var for MJP interim winner
var interimWinner = "";
var COMPUTER = "computer";
var USER = "user";

/* ================================================================= HELPER FUNCTIONS ==============
===============================================
 */
//program to choose scissors, paper or stone randomly
var chooseSPS = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;

  if (diceNumber == 1) {
    return SCISSORS;
  }

  if (diceNumber == 2) {
    return PAPER;
  }

  if (diceNumber == 3) {
    return STONE;
  }
};

//Compare computer answer with user input
var determineRegularWinner = function (userInput, computerObject) {
  // determine draw when user's input same as computerObject
  if (userInput == computerObject) {
    return "It's a draw";
  }
  // determine if player has won using regular SPS
  if (
    (userInput == SCISSORS && computerObject == PAPER) ||
    (userInput == PAPER && computerObject == STONE) ||
    (userInput == STONE && computerObject == SCISSORS)
  ) {
    return "User wins";
  }
  return "User loses";
};

var determineReverseWinner = function (userInput, computerObject) {
  // determine draw when user's reversed input same as computerObject
  if (
    (userInput == "reversed scissors" && computerObject == SCISSORS) ||
    (userInput == "reversed paper" && computerObject == PAPER) ||
    (userInput == "reversed stone" && computerObject == STONE)
  ) {
    return "It's a draw";
  }
  // determine if player has won using reverse SPS
  if (
    (userInput == REVERSED_SCISSORS && computerObject == STONE) ||
    (userInput == REVERSED_PAPER && computerObject == SCISSORS) ||
    (userInput == REVERSED_STONE && computerObject == PAPER)
  ) {
    return "User wins";
  }
  return "User loses";
};

var getObjectIcon = function (object) {
  if (object == SCISSORS || object == REVERSED_SCISSORS) {
    return "✂";
  }
  if (object == PAPER || object == REVERSED_PAPER) {
    return "📃";
  }
  if (object == STONE || object == REVERSED_STONE) {
    return "💎";
  }
};

var getInstructions = function () {
  if (gameMode == REGULAR_MODE) {
    return "Enter scissors, paper or stone to play.";
  } else if (gameMode == REVERSE_MODE) {
    return "Enter reversed scisssors, reversed paper or reversed stone to play.";
  }
};

//determine MJP interim winner
var determineMjpInterimWinner = function (userInput, computerObject) {
  // determine draw when user's input same as computerObject
  if (userInput == computerObject) {
    return "draw";
  }
  // determine if player has won using regular SPS
  if (
    (userInput == SCISSORS && computerObject == PAPER) ||
    (userInput == PAPER && computerObject == STONE) ||
    (userInput == STONE && computerObject == SCISSORS)
  ) {
    return USER;
  }
  return COMPUTER;
};
//determine MJP actual winner
var determineMjpActualWinner = function (userInput, computerObject) {
  // determine draw when user's input same as computerObject
  if (userInput == computerObject) {
    return interimWinner;
  }
  return null;
};
/* =================================================================SPS MAIN================================================================
 */
// var main = function (input) {
//   if (userName == "") {
//     userName = input;
//     return (
//       "Welcome " +
//       userName +
//       " to the scissors paper stone game. " +
//       modeSelectionInstructions
//     );
//   }
//   //get user to choose a game mode
//   if (gameMode == "") {
//     gameMode = input;
//     var instructions = getInstructions();
//     return "You have chosen " + gameMode + ". " + instructions;
//   }

//   if (gameMode == REGULAR_MODE) {
//     // validate input
//     if (input != SCISSORS && input != PAPER && input != STONE) {
//       return "Please key in scissors, paper or stone only";
//     }
//     //set a var that holds the user's input
//     var userObject = input;

//     //get the computer's object
//     var computerObject = chooseSPS();
//     // compare objects and obtain a winner
//     var winner = determineRegularWinner(userObject, computerObject);
//     if (winner == "User wins") {
//       //count number of user wins
//       numUserWins = numUserWins + 1;
//     } else if (winner == "User loses") {
//       //count number of computer wins
//       numComputerWins = numComputerWins + 1;
//     } else {
//       //count number of draws
//       numUserDraws = numUserDraws + 1;
//     }
//     //get matching icon for user's and computer's object
//     var userObjectIcon = getObjectIcon(userObject);
//     var computerObjectIcon = getObjectIcon(computerObject);
//     //let user reselect game mode at the end of each round
//     gameMode = "";
//     // return output to user
//     return `${winner}! <br>
//   You chose ${userObject} ${userObjectIcon}. <br>
//   The computer chose ${computerObject} ${computerObjectIcon}. <br>
//   ${userName}'s wins: ${numUserWins}, Losses: ${numComputerWins}, Draws: ${numUserDraws}
//   <br> ${modeSelectionInstructions}`;
//   }

//   if (gameMode == REVERSE_MODE) {
//     // validate input
//     if (
//       input != REVERSED_SCISSORS &&
//       input != REVERSED_PAPER &&
//       input != REVERSED_STONE
//     ) {
//       return "Please key in reversed scissors, reversed paper or reversed stone only";
//     }
//     //set a var that holds the user's input
//     var userObject = input;

//     //get the computer's object
//     var computerObject = chooseSPS();
//     // compare objects and obtain a winner
//     var winner = determineReverseWinner(userObject, computerObject);
//     if (winner == "User wins") {
//       //count number of user wins
//       numUserWins = numUserWins + 1;
//     } else if (winner == "User loses") {
//       //count number of computer wins
//       numComputerWins = numComputerWins + 1;
//     } else {
//       //count number of draws
//       numUserDraws = numUserDraws + 1;
//     }
//     //get matching icon for user's and computer's object
//     var userObjectIcon = getObjectIcon(userObject);
//     var computerObjectIcon = getObjectIcon(computerObject);

//     //let user reselect game mode at the end of each round
//     gameMode = "";
//     // return output to user
//     return `${winner}! <br>
//   You chose ${userObject} ${userObjectIcon}. <br>
//   The computer chose ${computerObject} ${computerObjectIcon}. <br>
//   ${userName}'s wins: ${numUserWins}, Losses: ${numComputerWins}, Draws: ${numUserDraws}
//   <br>
//   ${modeSelectionInstructions}`;
//   }
// };

/* ===============================================================MUK JJI PPA MAIN==================================================
 */

//validate MJP input using regular SPS

var main = function (input) {
  if (input != SCISSORS && input != PAPER && input != STONE) {
    return "Please key in scissors, paper or stone only";
  }
  if (mjpGameMode == DEFAULT_MODE) {
    var mjpComputerObject = chooseSPS();
    interimWinner = determineMjpInterimWinner(input, mjpComputerObject);
    if (interimWinner == "draw") {
      return `It was a draw. Throw scissors, paper, or stone again.`;
    }
    mjpGameMode = ACTUAL_WINNER_MODE;
    return `The interim winner is ${interimWinner}. Throw scissors, paper or stone to continue.`;
  }

  if (mjpGameMode == ACTUAL_WINNER_MODE) {
    var mjpComputerObject = chooseSPS();
    var mjpActualWinner = determineMjpActualWinner(input, mjpComputerObject);

    if (mjpActualWinner == USER || mjpActualWinner == COMPUTER) {
      console.log(mjpActualWinner);
      myOutputValue = `${mjpActualWinner} has won.`;
    }

    if (mjpActualWinner == null) {
      interimWinner = determineMjpInterimWinner(input, mjpComputerObject);
      console.log(interimWinner);
      return `The interim winner is now ${interimWinner}. Throw scissors, paper or stone to continue.`;
    }
  }
  console.log("ending the function");
  return myOutputValue;
};
