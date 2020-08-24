// Disable ESLint rule no-unused-vars on next line because this code
// is a learning tool and not a full-fledged node app.
// eslint-disable-next-line no-unused-vars

var countUserWon = 0; // State of the game that keeps track of the number of times the user has won.
var countProgramWon = 0; // Tracks the number of times the program won the game.
var countDraw = 0; // Tracks the number of times the game was a draw.
var strUserName = ''; // Variable to store the name of the user

// This function randomly chooses a value between 1 and the maximum value specified (both including)
var getRandomNumber = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

// Function to calculate the percentage given the total value and
// the value of which percentage to be calculated.
var calculatePercentage = function (totalValue, partialValue) {
  if (totalValue == 0) {
    return 0; // To prevent division by 0
  }
  return ((partialValue / totalValue) * 100).toFixed(3);
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
  var varUser = strUserName + ' wins the game. ';
  var varProgram = strUserName + ' lost. Program wins the game. ';

  var varGameResult = varDraw;

  // get the random draw and mapping between the random number and values are:
  // 1 ==> scissors, 2 ==> paper and 3 ==> stone
  var randomDraw = getRandomNumber(3);
  // eslint-disable-next-line no-trailing-spaces
  
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
  }
  else {
    varGameResult = 'Inavlid Input. <br/>Please input one of the following options: "scissors", "paper" or "stone". <br />';
  }
  return varGameResult;
};

// Function to calculate win-loss record of each player and to format the output.
var findWinLossRecord = function () {
  // Total number of games played, including the current one.
  var numTotalGames = countDraw + countUserWon + countProgramWon;
  var userWinPercentage = calculatePercentage(numTotalGames, countUserWon);
  var programWinPercentage = calculatePercentage(numTotalGames, countProgramWon);
  // Formatting the output string
  var returnResult = '<br/>Total number of games played: ' + numTotalGames;
  returnResult += '<br/>Number of draws: ' + countDraw;
  returnResult += '<br/>' + strUserName + ' won: ' + userWinPercentage + '%';
  returnResult += '<br/>Program won: ' + programWinPercentage + '%';
  return returnResult;
};

// Function to store the user name and if still there is no user name, prompt for it again.
var validateUserName = function (userName) {
  strUserName = userName; // stores the input from user in a global variable
  strUserName.trim(); // remove the whitepaces from the ends
  if (strUserName.length == 0) {
    return 'Please enter your name and submit.';
  }
  return ('Welcome ' + strUserName + '!! Start playing the game by entering one of the options: "scissors", "paper" or "stone". ');
};

var main = function (userInput) {
  if (strUserName.length == 0) {
    return validateUserName(userInput);
  }
  // Function that gets the game result after analysing the user input and program draw
  var varResult = getGameResult(userInput);
  varResult += '<br />' + findWinLossRecord();
  return varResult;
};
