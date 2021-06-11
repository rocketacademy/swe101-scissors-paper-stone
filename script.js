// Declare global state containing username
var username = '';
// Declare global state for game mode
var currentGameMode = 'waiting for user name'
// Declare global state for default output value 
var myOutputValue = '';
// Declare global state tracking the number of attempts
var attemptsCount = 0;
// Declare global state tracking the number of wins by the user
var winCount_user = 0;
// Declare global state tracking the number of wins by the computer
var winCount_com = 0;
// Declare global state tracking the number of draws
var drawCount = 0;
//Declare global state for customised user message at the end
var userMessage = '';

// Declare variables tracking winning percentage of the players
var userWinPercent = 0;
var comWinPercent = 0;

// Declare 3 variables containing the string of 3 possible options
var STONE = 'stone';
var SCISSORS = 'scissors';
var PAPER = 'paper';
// Declare an array of the game options
var gameOptions = [STONE, SCISSORS, PAPER];


// Define a function that randomly generates either scissors, paper or stone
var randomDraw = function () {
  console.log('running randomDraw function');
  
  // Generate a random decimal between 0 to 3, inclusive of 0 and excluding 3
  var randomDecimal = Math.random() * 3;
  // Remove decimal to generate a random integer between 0 to 2, inclusive of 0 and 2
  var randomInteger = Math.floor(randomDecimal);
  // Assign string value of the array 'gameOptions' indexed by the random integer to the variable randomOutput
  var randomOutput = gameOptions[randomInteger];

  console.log('randomOutput');
  console.log(randomOutput);
  // Return the randomly chosen option, scissors paper or stone
  return randomOutput;
};



// Define a function that checks if second input is valid i.e. scissors, paper or stone
var checkInput = function (str) {
  // Convert input string characters to lowercase
  var input = str.toLowerCase();
  console.log('Running user input validation');
  if (input != gameOptions[0] && input != gameOptions[1] && input != gameOptions[2]) {
    return false;
  }
  return true;
}


// Define a function that plays the sps game
var playGame = function(name, userGuess) {
  // Convert input string characters to lowercase
  var user_Guess = userGuess.toLowerCase();
  // Input validation: If the user types something other than SPS
  if (checkInput(user_Guess) == false) {
    console.log('==Invalid input: Request to reenter==');
    myOutputValue = `Please type either ${gameOptions[0]}, ${gameOptions[1]} or ${gameOptions[2]}.` ;
    return myOutputValue;
  } 
  // If the user input is valid, play the game
  // Computer randomly draws an outcome (Scissors, Paper or Stone) that is stored in a new variable
  var comOutput = randomDraw();
  // Update the number of attempts
  attemptsCount += 1; 

  // If it is a draw
  if (user_Guess == comOutput) {
    //Update the number of draws
    drawCount += 1;
    console.log('** Draw **');
    myOutputValue = `${name} chose ${user_Guess} and the computer chose ${comOutput}.<br>It is a draw :-)`;
    return myOutputValue;
  } 
  
  // If the user wins 
  if ( (user_Guess == SCISSORS && comOutput == PAPER) || (user_Guess == PAPER && comOutput == STONE) || (user_Guess == STONE && comOutput == SCISSORS) ){
    // Update the number of user wins
    winCount_user += 1;
    console.log(`** ${name} winning **`);
    myOutputValue = `${name} chose ${user_Guess} and the computer chose ${comOutput}. <br>${name} wins :) `;
    return myOutputValue;
  } 

  // If the computer wins
  if ((comOutput == SCISSORS && user_Guess == PAPER) || (comOutput == PAPER && user_Guess == STONE) || (comOutput == STONE && user_Guess == SCISSORS)) {
    // Update the number of computer wins
    winCount_com += 1;
    console.log('** Computer winning **');
    myOutputValue = `${name} chose ${user_Guess} and the computer chose ${comOutput}. <br>${name} loses. <br>Try again :D`;
    return myOutputValue;
  }
  
  console.log('myOutputValue');
  console.log(myOutputValue);
}


var messageToUser = function(winRate) {
  //Conditions for customised message 
  if (winRate == 0) {
    return '(Aw too bad!)';
  } 
  if (winRate > 0 && winRate < 50) {
    return '(You can do better than that!)';
  } 
  if (winRate == 50) {
    return '(!!! On par !!!)';
  } 
  if (winRate > 50 && winRate < 100) {
    return '(Good job)';
  }
  if (winRate == 100) {
    return '(Impressive!)';
  }
}


var main = function (input) {  
  
  if (currentGameMode == 'waiting for user name') {
    console.log('==Game mode: waiting for user name==');
     // If user did not enter username or entered whitespace only
    if (input === '') {
      console.log('No username entered')
      myOutputValue = 'Please enter a username using alphabets, special characters and/or numbers :-)';
      return myOutputValue;
    }

    // If user entered user name, play game
    // Set the name 
    username = input;
    console.log('*User entered username*');
    console.log(input);

    //Update game mode
    currentGameMode = 'ready for game';
    console.log('==Game mode: ready for game==');
    console.log(currentGameMode);

    myOutputValue = 'Hello ' + username + '! Welcome to the game. Please enter scissors, paper or stone.';
  } else if (currentGameMode == 'ready for game') {
    
    console.log('==Game mode: ready for game==');
    console.log('Running the playGame function');
    myOutputValue = playGame(username, input);
    
  }


  //Calculate winning rates for user and computer
  //If somebody wins, calculate new winning percentage for all players
  console.log('No. of user wins:');
  console.log(winCount_user);
  console.log('No. of computer wins:');
  console.log(winCount_com);
  if (winCount_user + winCount_com > 0) {
    var user_percent_float = 100 * winCount_user / (winCount_user+winCount_com);
    var com_percent_float = 100 - user_percent_float;
    // Convert user winning percentage to 1 decimal place
    userWinPercent = user_percent_float.toFixed(1);
    comWinPercent = com_percent_float.toFixed(1);
  }
  
  //Once game starts, create custom message for user based on performance
  if (attemptsCount > 0) {
    userMessage = messageToUser(userWinPercent);
  }
  

  //return winner/loser statement
  return myOutputValue + `<br>
  <br>Number of attempts: ${attemptsCount}
  <br>Number of wins by ${username}: ${winCount_user}
  <br>Number of wins by computer: ${winCount_com}
  <br>Number of draws: ${drawCount}
  <br> ${username}'s winning rate: ${userWinPercent}% ${userMessage}
  <br> Computer's winning rate: ${comWinPercent}%`;
  
};
