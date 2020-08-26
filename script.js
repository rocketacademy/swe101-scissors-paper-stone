// Disable ESLint rule no-unused-vars on next line because this code
// is a learning tool and not a full-fledged node app.
// eslint-disable-next-line no-unused-vars


var UserWinCounter = 0; //counter for user wins 
var CompWinCounter = 0; //counter for computer wins 

var main = function (input) {
  var rpcGameOutput = rockPaperScissors();
  console.log(rpcGameOutput)

  if (input == "rock" && rpcGameOutput == "scissors") {
    var myOutputValue = 'Win'
    UserWinCounter += 1;
    ;
  } else if (input == "scissors" && rpcGameOutput == "paper") {
    var myOutputValue = 'Win'
    UserWinCounter += 1;

  } else if (input == "paper" && rpcGameOutput == "rock") {
    var myOutputValue = 'Win'
    UserWinCounter += 1;

  } else if (input == rpcGameOutput) {
    var myOutputValue = 'Draw';
  } else {
    var myOutputValue = 'Lose'
    CompWinCounter += 1;
  }
  return myOutputValue + "<br> Your score is " + UserWinCounter + "<br> The computer score is " + CompWinCounter;
};

var rockPaperScissors = function () {
  var randomDecimal = Math.random() * 3; // returns a random number from 0 - 2 
  var randomInteger = Math.floor(randomDecimal); //Round down decimal to nearest integer 
  var rpsResult = randomInteger + 1; // 

  if (rpcResult == 1) {
    var rpsOutput = 'rock'; // if 1 = rock 
  }
  else if (rpcResult == 2) {
    var rpsOutput = 'paper'; // if 2 = paper 
  }
  else if (rpcResult == 3) { //maybe you could put else 
    var rpsOutput = 'scissors'; // if 3 = scissors  
  }
  return rpsOutput; // return the output of rock paper or scissors 
}


//Logic for function 

//1st condition 
// input (rock)  = random(siccors)  --> Win 
// else --> lose 

//2nd condition 
// input (siccors)  = random(paper)  --> Win 
// else --> lose 

//3rd condition 
// input (paper)  = random(rock)  --> Win 
// else --> lose 

//4th condition 
// input   == random   --> draw
// else --> lose 

// To make this game more personal, add a feature to collect the user's name as the
// first input after the page loads. We can prompt the user to enter their name first by
// adding to the page's HTML. Once the user submits their name, the program can return output 
// to prompt the user to start playing Scissors Paper Stone by entering one of the 3 objects. 
// Use the user's name to personalise win-loss record and other relevant output.



