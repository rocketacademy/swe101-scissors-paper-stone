/* eslint-disable no-multi-spaces */
/* eslint-disable space-in-parens */
/* eslint-disable keyword-spacing */
/* eslint-disable space-before-function-paren */
/* eslint-disable brace-style */
/* eslint-disable no-trailing-spaces */
// Disable ESLint rule no-unused-vars on next line because this code
// is a learning tool and not a full-fledged node app.
// eslint-disable-next-line no-unused-vars

var varScissors = 'scissors';
var varPaper = 'paper';
var varStone = 'stone';

var countUserWon = 0; // State of the game that keeps track of the number of times the user has won.
var countProgramWon = 0; // Tracks the number of times the program won the game.
var countDraw = 0; // Tracks the number of times the game was a draw.
var strUserName = ''; // Variable to store the name of the user
var strMostRecentWinner = ''; // Variable to store the most recent winner.
var varSPSGameType = 0; // Variable to store the type of game.
var varGameMode = 0; // Variable to store the mode of the game. 1 == Normal SPS, 2 == Reverse mode

// Variable to store the count of winning in Korean SPS game
var countUserWinKSPS = 0;
var countProgramWinKSPS = 0;

// This function randomly chooses a value between 1 and the maximum value specified (both including)
var getRandomNumber = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

// Function that returns the game option to print
var printGameOptionMessage = function ()
{
  var varMessage = 'Please choose the type of game to play: <br/>';
  varMessage += 'Enter 1 for playing normal Scissors Paper Stone game. <br/>';
  varMessage += 'Enter 2 for playing Koren Scissors Paper Stone game (muk-jji-ppa). <br/>';
  return varMessage;
};

// Function that returns the game mode options to print
var printGameModeMessage = function ()
{
  var varMessage = 'Please choose the <b>Mode</b> of game to play: <br/>';
  varMessage += 'Enter 1 for playing Normal Scissors Paper Stone game. <br/>';
  varMessage += 'Enter 2 for playing Reversed Scissors Paper Stone game. <br/>';
  return varMessage;
};

// Function to store the user name and if still there is no user name, prompt for it again.
var validateUserName = function (userName) {
  strUserName = userName; // stores the input from user in a global variable
  strUserName.trim(); // remove the whitepaces from the ends
  
  if (strUserName.length == 0) {
    return 'Please enter your name and submit.';
  }
  var varMessage = 'Welcome ' + strUserName + '!! <br/>';
  varMessage += printGameOptionMessage();
  return varMessage;
};

// Function to validate the user input. Returns false, if the input is invalid.
// Returns true, if the input is a valid one.
var validateInput = function ( userGuess )
{
  if(( userGuess != varScissors ) && ( userGuess != varPaper ) && (userGuess != varStone ))
  {
    return false;
  }
  return true;
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
  var varDraw = ' Game is a Draw. ';
  var varUser = strUserName + ' wins the game. ';
  var varProgram = strUserName + ' lost. Program wins the game. ';

  var varGameResult = varDraw;

  // get the random draw and mapping between the random number and values are:
  // 1 ==> scissors, 2 ==> paper and 3 ==> stone
  var randomDraw = getRandomNumber(3);

  // to delete
  console.log('User guessed: ' + userGuess);
  if(randomDraw == 1 ) {
    console.log('Program guessed: scissors'); }else if(randomDraw == 2) {
    console.log('Program guessed: paper'); }else{ 
    console.log('Program guessed: stone'); }
  
  // If the user input and program output is same, the result is a "draw".
  if (((userGuess == varScissors) && (randomDraw == 1))
     || ((userGuess == varPaper) && (randomDraw == 2))
     || ((userGuess == varStone) && (randomDraw == 3))) {
    varGameResult = varDraw;
    countDraw += ( varSPSGameType == 1 ) ? 1 : 0;
  }
  // check for the cases where user wins in normal mode of play, 
  // while program wins in the reverse mode.
  else if (((userGuess == varScissors) && (randomDraw == 2)) // User has scissors, program has paper
          || ((userGuess == varPaper) && (randomDraw == 3)) // user has Paper, program has stone
          || ((userGuess == varStone) && (randomDraw == 1))) // User has Stone, program has Scissors
  {
    if(varGameMode == 1)
    {
      varGameResult = varUser;
      strMostRecentWinner = strUserName;
      countUserWon += ( varSPSGameType == 1 ) ? 1 : 0;
    }
    else
    {
      varGameResult = varProgram;
      strMostRecentWinner = 'Program';
      countProgramWon += ( varSPSGameType == 1 ) ? 1 : 0;
    }
  }
  // check for the cases where the Program wins in the normal mode of play,
  // while user wins in the reverse mode
  else if (((userGuess == varScissors) && (randomDraw == 3)) // User has scissors, program has Stone
          || ((userGuess == varPaper) && (randomDraw == 1)) // user has Paper, program has Scissors
          || ((userGuess == varStone) && (randomDraw == 2))) // User has Stone, program has Paper
  {
    if( varGameMode == 1)
    {
      varGameResult = varProgram;
      strMostRecentWinner = 'Program';
      countProgramWon += ( varSPSGameType == 1 ) ? 1 : 0;
    }
    else
    {
      varGameResult = varUser;
      strMostRecentWinner = strUserName;
      countUserWon += ( varSPSGameType == 1 ) ? 1 : 0;
    }
  }
  else {
    varGameResult = 'Inavlid Input. <br/>Please input one of the following options: "scissors", "paper" or "stone". <br />';
  }
  return varGameResult;
};

// Function to calculate win-loss record of each player and to format the output.
var findWinLossRecord = function () {
  var returnResult = '<br/>';
  var numTotalGames = 0;
  var userWinPercentage = 0;
  var programWinPercentage = 0;
  if( varSPSGameType == 1)
  {
    // Total number of games played, including the current one.
    numTotalGames = countDraw + countUserWon + countProgramWon;
    userWinPercentage = calculatePercentage(numTotalGames, countUserWon);
    programWinPercentage = calculatePercentage(numTotalGames, countProgramWon);
    // Formatting the output string
    returnResult = 'Total number of games played: ' + numTotalGames;
    returnResult += '<br/>Number of draws: ' + countDraw;
  }
  else
  {
    numTotalGames = countUserWinKSPS + countProgramWinKSPS; 
    userWinPercentage = calculatePercentage(numTotalGames, countUserWinKSPS);
    programWinPercentage = calculatePercentage(numTotalGames, countProgramWinKSPS);
    returnResult = 'Total number of games played: ' + numTotalGames;
  }
  returnResult += '<br/>' + strUserName + ' won: ' + userWinPercentage + '%';
  returnResult += '<br/>Program won: ' + programWinPercentage + '%';
  return returnResult;
};

// Function that plays the korean version of SPS.
// It will check the game result and will be replayed until the game is a draw.
// It will declare the last recent winner as the winner of the game.
var playKoreanSPS = function( userGuess )
{
  var varGameResult = getGameResult( userGuess );
  while( !varGameResult.includes( 'Draw' ) )
  {
    varGameResult = getGameResult( userGuess );
  }
  if( strMostRecentWinner == strUserName )
  {
    countUserWinKSPS += 1;
  }
  else
  {
    countProgramWinKSPS += 1;
  }
  return 'Winner is: ' + strMostRecentWinner;
};

// eslint-disable-next-line no-unused-vars
var main = function (userInput) {
  // Validate the user name is already passed or not by the user. If not, prompt for that again.
  if (strUserName.length == 0) {
    return validateUserName(userInput);
  }

  if(( varSPSGameType == 0 ) && ((userInput <= 0 || userInput > 2) || isNaN(Number( userInput ))))
  {
    varSPSGameType = 0;
    return printGameOptionMessage();
  }
  if( varSPSGameType == 0 )
  {
    varSPSGameType = Number( userInput );
    return printGameModeMessage();
  }

  if(( varGameMode == 0 ) && ((userInput <= 0 || userInput > 2) || isNaN(Number( userInput ))))
  {
    varGameMode = 0;
    return printGameModeMessage();
  }
  if( varGameMode == 0 )
  {
    varGameMode = Number( userInput );
    return ('Start playing the game by entering one of the options: "scissors", "paper" or "stone". ');
  }

  // to delete:
  if(varSPSGameType == 1) {
    console.log('Normal SPS game is selected'); } else  {
    console.log( 'Korean SPS is selected' );  }
  if( varGameMode == 1)  {
    console.log( 'Normal mode of play is selected' );  }  else{
    console.log( 'Reverse mode of play is selected' );  }

  // Validate the input specified by user for playing the game
  if(!validateInput(userInput))
  {    
    return ( 'Inavlid Input. <br/>Please input one of the following options: "scissors", "paper" or "stone". <br />');
  }
  // Function that gets the game result after analysing the user input and program draw
  var varResult = ( varSPSGameType == 1) ? getGameResult(userInput) : playKoreanSPS( userInput);
  varResult += '<br />' + findWinLossRecord(); // find the percentage of win and lose
  return varResult;
};
