// create a counter that keeps track of the no of times user has won as well as computer has won
var userCounter = 0;
var computerCounter = 0;

var diceRoll = function () {
  // produces a decimal between 0 and 3
  var randomDecimal = Math.random() * 3;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's anumber from 0 - 2 ... add 1
  var diceNumber = randomInteger + 1;
  console.log('roll');
  console.log(diceNumber);
  return diceNumber;
};

var scissorsOrPaperOrStone = function () {
  // if diceroll lands on 1, scissors will be generated
  var scissorsPaperStone = diceRoll();
  if (scissorsPaperStone == 1) {
    scissorsPaperStone = 'scissors';
  }
  // if diceroll lands on 2, paper will be generated
  if (scissorsPaperStone == 2) {
    scissorsPaperStone = 'paper';
  }
  // if diceroll lands on 3,stone will be generated
  if (scissorsPaperStone == 3) {
    scissorsPaperStone = 'stone';
  }

  return scissorsPaperStone;
};
// Diceroll to generate scissors, paper or stone and make sure a win/lose/draw output will happen depending on the results
var main = function (input) {
  // Computer generates scissors, paper or stone
  var answer = scissorsOrPaperOrStone();
  console.log(answer);
  console.log('answer');
  // Compare the user's input against the computer generated SPS
  // Implement rules of SPS: Scissors beats paper, paper beats stone and stone beats scissors
  var myOutputValue = '';
  if ((input == 'scissors' && answer == 'scissors') || (input == 'stone' && answer == 'stone') || (input == 'paper' && answer == 'paper')) {
    myOutputValue = 'you draw';
    console.log(myOutputValue);
  }
  if ((input == 'scissors' && answer == 'stone') || (input == 'stone' && answer == 'paper') || (input == 'paper' && answer == 'scissors')) {
    myOutputValue = 'you lose';
    // when user wins usercounterwins increases
    computerCounter = computerCounter + 1;

    console.log(myOutputValue);
  }

  if ((input == 'scissors' && answer == 'paper') || (input == 'stone' && answer == 'scissors') || (input == 'paper' && answer == 'stone')) {
    myOutputValue = 'you win' + ;
    // when user wins usercounterwins increases
    userCounter = userCounter + 1;

    console.log(myOutputValue);
  }
  // Make sure that output indicates results of win/lose/draw
  console.log(computerCounter);
  console.log('computerCounter');
  console.log(userCounter);
  console.log('userCounter');
  return myOutputValue;
};

// when user wins usercounterwins increases

// when computer wins computercounterwins increases

// Computer generates scissors, paper or stone
// Compare the user's input against the computer generated SPS
// Implement rules of SPS: Scissors beats paper, paper beats stone and stone beats scissors
// Make sure that output indicates results of win/lose/draw

// // In production code, it's often helpful to store string constants
// // in variables so that it's easier for a program to detect misspellings.
// // E.g. if we used "scissors" everywhere and accidentally misspelled it
// // in 1 place, our program may not detect that error until runtime,
// // if at all. If we used the variable SCISSORS everywhere and misspelled
// // it in 1 place, ESLint would help us detect that error before runtime.
// // String constant variable names are usually all uppercase by convention.
// var SCISSORS = 'scissors';
// var PAPER = 'paper';
// var STONE = 'stone';

// // Keep track of user's name to personalise the game.
// var userName = '';

// // Initialise the number of player wins, computer wins, and draws to 0.
// var numPlayerWins = 0;
// var numComputerWins = 0;
// var numDraws = 0;

// /**
//  * Return "scissors", "paper", or "stone" based on a random number
//  */
// var getRandomObject = function () {
//   var randomNum = Math.floor(Math.random() * 3);
//   if (randomNum == 0) {
//     return SCISSORS;
//   }
//   // No need "else if" because if the previous if conditional were true,
//   // the function would have returned and would not reach here.
//   if (randomNum == 1) {
//     return PAPER;
//   }
//   // If randomNum is neither 0 nor 1, return STONE.
//   return STONE;
// };

// /**
//  * Return whether player beats computer at SPS
//  * @param {string} playerObject
//  * @param {string} computerObject
//  */
// var doesPlayerBeatComputer = function (playerObject, computerObject) {
//   return (playerObject == SCISSORS && computerObject == PAPER)
//     || (playerObject == PAPER && computerObject == STONE)
//     || (playerObject == STONE && computerObject == SCISSORS);
// };

// /**
//  * Return standard string representing player's and computer's objects
//  * @param {*} playerObject
//  * @param {*} computerObject
//  */
// var getDefaultObjectsMessage = function (playerObject, computerObject) {
//   return `${userName}'s object: ${playerObject} <br>
//     Computer's object: ${computerObject}.`;
// };

// /**
//  * Return standard string representing player's and computer's win-loss records
//  */
// var getDefaultWinLossMessage = function () {
//   return `${userName}: ${numPlayerWins} | Computer: ${numComputerWins} | Draws: ${numDraws}`;
// };

// /**
//  * Play SPS with user input, return game result.
//  * @param {string} input - Player's object
//  */
// var main = function (input) {
//   var myOutputValue = 'hello world';
//   return myOutputValue;
//   // If userName is not yet set, accept user's first input as userName, and
//   // return an output that prompts the user to start playing SPS.
//   if (!userName) {
//     // If the user did not input anything, prompt them to enter something
//     // as their user name.
//     if (!input) {
//       return 'Please input a non-empty string as your user name!';
//     }
//     userName = input;
//     // Template literals using backticks (`) allow us to include variables
//     // inside strings seamlessly with ${} syntax.
//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
//     return `Thank you ${userName}! To start playing SPS, please enter "scissors", "paper", or "stone".`;
//   }

//   // If userName is populated, validate that input is one of scissors, paper, or stone
//   if (input != SCISSORS && input != PAPER && input != STONE) {
//     return 'Please input 1 of "scissors", "paper", or "stone" to play the game.';
//   }

//   // Input is one of scissors, paper, or stone
//   // Call input playerObject to make game logic clearer
//   var playerObject = input;
//   // Get computer's computer-generated object
//   var computerObject = getRandomObject();
//   // Get a default output message sharing what player's and computer's objects are
//   var defaultObjectsMessage = getDefaultObjectsMessage(playerObject, computerObject);
//   // Compare player's object with computer's object and output win status
//   // If player and computer objects are the same, it's a draw.
//   if (playerObject == computerObject) {
//     // Increment num draws in win-loss record
//     numDraws += 1;
//     // Use <br> to create new lines in HTML output.
//     return `${defaultObjectsMessage} <br><br>
//       It's a draw! <br><br>
//       ${getDefaultWinLossMessage()}`;
//   }
//   // If not draw, check if player wins
//   if (doesPlayerBeatComputer(playerObject, computerObject)) {
//     // Increment num player wins in win-loss record
//     numPlayerWins += 1;
//     return `${defaultObjectsMessage} <br><br>
//       ${userName} wins! <br><br>
//       ${getDefaultWinLossMessage()}`;
//   }
//   // If it's not a draw and player has not won, then computer wins.
//   // Increment num computer wins in win-loss record
//   numComputerWins += 1;
//   return `${defaultObjectsMessage} <br><br>
//     Computer wins! <br><br>
//     ${getDefaultWinLossMessage()}`;
// };
