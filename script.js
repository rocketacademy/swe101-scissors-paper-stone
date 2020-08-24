// Disable ESLint rule no-unused-vars on next line because this code
// is a learning tool and not a full-fledged node app.
// eslint-disable-next-line no-unused-vars

// State of the game that keeps track of the number of times the user has won.
var countUserWon = 0;
// Tracks the number of times the program won the game.
var countProgramWon = 0;
// Tracks the number of times the game was a draw.
var countDraw = 0;

// This function randomly chooses a value between 1 and the maximum value specified (both including)
var getRandomNumber = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

// This function decides on the result of the game by comparing the user inuput and the
// random value chosen by program
// Rule: scissors beats paper, paper beats stone, and stone beats scissors.
//       If both parties choose the same object, it's a draw
var getGameResult = function (userGuess) {
  var varScissors = 'scissors';
  var varPaper = 'paper';
  var varStone = 'stone';
  var varDraw = ' Game is a Draw. ';
  var varUser = 'User wins the game. ';
  var varProgram = 'Program wins the game. ';

  var varGameResult = varDraw;

  // get the random draw and mapping between the random number and values are:
  // 1 ==> scissors, 2 ==> paper and 3 ==> stone
  var randomDraw = getRandomNumber();
  // If the user input and program output is same, the result is a "draw".
  if (((userGuess == varScissors) && (randomDraw == 1))
     || ((userGuess == varPaper) && (randomDraw == 2))
     || ((userGuess == varStone) && (randomDraw == 3))) {
    varGameResult = varDraw;
    countDraw += 1;
  }
  // check for the cases where user wins.
  else if (((userGuess == varScissors) && (randomDraw == 2)) // User has scissors, program has paper
          || ((userGuess == varPaper) && (randomDraw == 3)) // user has Paper, program has stone
          || ((userGuess == varStone) && (randomDraw == 1))) // User has Stone, program has Scissors
  {
    varGameResult = varUser;
    countUserWon += 1;
  }
  // check for the cases where the Program wins
  else if (((userGuess == varScissors) && (randomDraw == 3)) // User has scissors, program has Stone
          || ((userGuess == varPaper) && (randomDraw == 1)) // user has Paper, program has Scissors
          || ((userGuess == varStone) && (randomDraw == 2))) // User has Stone, program has Paper
  {
    varGameResult = varProgram;
    countProgramWon += 1;
  } else {
    varGameResult = 'Failed to validate the game result. ';
  }
  return varGameResult;
};

var main = function (userGuess) {
  // Function that gets the game result after analysing the user input and program draw
  var varResult = getGameResult(userGuess);
  // Total number of games played, including the current one.
  var numTotalGames = countDraw + countUserWon + countProgramWon;

  return varResult;
};

