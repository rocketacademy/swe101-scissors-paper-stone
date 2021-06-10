//Declare default output value as global variable
var myOutputValue = 'hello world';
//Declare variable tracking the number of draws
var drawCount = 0;
//Declare variable tracking the number of wins by the user
var winCount_user = 0;
//Declare variable tracking the number of wins by the computer
var winCount_com = 0;
// Declare an array of the 3 possible game options for the user to choose from
var gameOptions = ['scissors', 'paper', 'stone'];


var randomDraw = function () {
  console.log('running randomDraw function')
  
  //Generate a random decimal between 0 to 3, inclusive of 0 and excluding 3
  var randomDecimal = Math.random() * 3;
  //Remove decimal to generate a random integer between 0 to 2, inclusive of 0 and 2
  var randomInteger = Math.floor(randomDecimal);
  //Assign string value of the array 'gameOptions' indexed by the random integer to the variable randomOutput
  var randomOutput = gameOptions[randomInteger];

  console.log('randomOutput');
  console.log(randomOutput);
  //Return the randomly chosen option, scissors paper or stone
  return randomOutput;
};


var main = function (input) {  
  //Generate a random draw of Scissors, Paper or Stone, and store the value in a new variable
  var comOutput = randomDraw();

  //Input validation: If the user types something other than SPS
  if (input != gameOptions[0] && input != gameOptions[1] && input != gameOptions[2]) {
    console.log('==Request to reenter input==');
    myOutputValue = `Please type either ${gameOptions[0]}, ${gameOptions[1]} or ${gameOptions[2]}` ;
  } 
  //If it is a draw
  else if (input == comOutput) {
    console.log('** Draw **')
    myOutputValue = `You chose ${input} and the computer chose ${comOutput}. It is a draw :-)`
  } 
  //If the user wins 
  else if ( (input == 'scissors' && comOutput == 'paper') || (input == 'paper' && comOutput == 'stone') || (input == 'stone' && comOutput == 'scissors') ){
    console.log('** User winning **')
    myOutputValue = `You chose ${input} and the computer chose ${comOutput}. You win :) `
  } 
  //If the computer wins
  else if ((comOutput == 'scissors' && input == 'paper') || (comOutput == 'paper' && input == 'stone') || (comOutput == 'stone' && input == 'scissors')) {
    console.log('** Computer winning **')
    myOutputValue = `You chose ${input} and the computer chose ${comOutput}. You lose. Try again :D `
  }

  console.log('myOutputValue');
  console.log(myOutputValue);
  return myOutputValue;
};
