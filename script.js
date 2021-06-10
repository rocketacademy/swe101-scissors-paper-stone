// Declare default output value as global variable
var myOutputValue = 'hello world';
// Declare variable tracking the number of attempts
var attemptsCount = 0;
// Declare variable tracking the number of wins by the user
var winCount_user = 0;
// Declare variable tracking the number of wins by the computer
var winCount_com = 0;
// Declare variable tracking the number of draws
var drawCount = 0;
// Declare an array of the 3 possible game options for the user to choose from
var gameOptions = ['scissors', 'paper', 'stone'];


// Define a function that randomly generates either scissors, paper or stone
var randomDraw = function () {
  console.log('running randomDraw function')
  
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

// Define a function that checks if the user input is valid i.e. scissors, paper or stone
var checkInput = function (input) {
  console.log('Running user input validation');
  if (input != gameOptions[0] && input != gameOptions[1] && input != gameOptions[2]) {
    return false;
  }
  return true;
}

var main = function (input) {  
  
  // Input validation: If the user types something other than SPS
  if (checkInput(input) == false) {
    console.log('==Invalid input: Request to reenter==');
    myOutputValue = `Please type either ${gameOptions[0]}, ${gameOptions[1]} or ${gameOptions[2]}` ;
  } 
  // Where input is valid, generate a random draw of Scissors, Paper or Stone, and store the value in a new variable
  else {
    // Computer randomly draws an outcome
    var comOutput = randomDraw();
    // Update the number of attempts
    attemptsCount += 1; 

    // If it is a draw
    if (input == comOutput) {
      //Update the number of draws
      drawCount += 1;
      console.log('** Draw **');
      myOutputValue = `You chose ${input} and the computer chose ${comOutput}.<br>It is a draw :-)`;
    } 
    // If the user wins 
    else if ( (input == 'scissors' && comOutput == 'paper') || (input == 'paper' && comOutput == 'stone') || (input == 'stone' && comOutput == 'scissors') ){
      // Update the number of user wins
      winCount_user += 1;
      console.log('** User winning **');
      myOutputValue = `You chose ${input} and the computer chose ${comOutput}. <br>You win :) `;
    } 
    // If the computer wins
    else if ((comOutput == 'scissors' && input == 'paper') || (comOutput == 'paper' && input == 'stone') || (comOutput == 'stone' && input == 'scissors')) {
      // Update the number of computer wins
      winCount_com += 1;
      console.log('** Computer winning **');
      myOutputValue = `You chose ${input} and the computer chose ${comOutput}. <br>You lose. <br>Try again :D`;
    }

  }

  console.log('myOutputValue');
  console.log(myOutputValue);

  //Return the outcomes
  return `${myOutputValue}
          <br>
          <br>Number of attempts: ${attemptsCount}
          <br>Number of wins by user: ${winCount_user}
          <br>Number of wins by computer: ${winCount_com}
          <br>Number of draws: ${drawCount}`;
};
