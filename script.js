//Initialize global states for the program
var totalGames = 0;
var userWins = 0;
var programWins = 0;
var totalDraws = 0;
var userName = "";
var currentInputMode = 'input username';

//Main function that controls the logic flow for input of username followed by input of SPS choice
var main = function (input) {
  var outputValue;

  if (currentInputMode == 'input username') {

    userName = input;
    currentInputMode = 'input sps';
    outputValue = `Welcome ${userName}! Please input scissors, paper or stone! next!`;

  } else if (currentInputMode == 'input sps') {
    var gameResult = gameEngine(input, userName); // plucks  input as user choice and userName as user input name into gameEngine
    outputValue = gameResult;
  }
  return outputValue;
};


// Game Logic takes in the "value" from convertUserInputToSPS
var gameEngine = function (userChoice, userName) {
  var outputValue = "User loses, program wins!";
  var randomGenNumber = randomNumberGenerator();

  var randomChoice = convertRandNumToChoice(randomGenNumber);
  console.log(randomChoice);


  var lineBreak = '<br>'; //formatting of the line breaks
  var dblLineBreak = '<br><br>';

  //Perform user input validation for game;

  if (userChoice != 'scissors' && userChoice != 'paper' && userChoice != 'stone') {
    outputValue = "Sorry, please input either 'scissors' , 'paper' or 'stone'. ";

    //Perform core SPS logic
  } else if (randomChoice == userChoice) {
    totalGames += 1;
    totalDraws += 1;
    outputValue = `${userName} chose ${userChoice}.${lineBreak} Program chose ${randomChoice}. ${dblLineBreak} It is a draw! ${dblLineBreak} Total Games = ${totalGames} ${lineBreak}Total ${userName} Wins = ${userWins} ${lineBreak} Total Program Wins = ${programWins}. ${lineBreak} Total Draws = ${totalDraws}.`;
    console.log("Draw");

  } else if (randomChoice == 'scissors' && userChoice == 'paper') {
    totalGames += 1;
    programWins += 1;
    outputValue = `${userName} chose ${userChoice}.${lineBreak} Program chose ${randomChoice}.${dblLineBreak} Program wins! ${userName} loses. ${dblLineBreak} Total Games = ${totalGames} ${lineBreak}Total ${userName} Wins = ${userWins} ${lineBreak}  Total Program Wins = ${programWins}. ${lineBreak}Total Draws = ${totalDraws}`;
    console.log("Program Wins");

  } else if (randomChoice == 'paper' && userChoice == 'stone') {
    totalGames += 1;
    programWins += 1;
    outputValue = `${userName} chose ${userChoice}.${lineBreak} Program chose ${randomChoice}.${dblLineBreak} Program wins! ${userName}  loses. ${dblLineBreak} Total Games = ${totalGames} ${lineBreak}Total ${userName}  Wins = ${userWins} ${lineBreak}  Total Program Wins = ${programWins}. ${lineBreak}Total Draws = ${totalDraws}`;
    console.log("Program Wins");

  } else if (randomChoice == 'stone' && userChoice == 'scissors') {
    totalGames += 1;
    programWins += 1;
    outputValue = `${userName} chose ${userChoice}.${lineBreak}Program chose ${randomChoice}.${dblLineBreak} Program wins! ${userName}  loses. ${dblLineBreak} Total Games = ${totalGames} ${lineBreak}Total ${userName}  Wins = ${userWins} ${lineBreak}  Total Program Wins = ${programWins}. ${lineBreak}Total Draws = ${totalDraws}`;
    console.log("Program Wins");

  } else if (randomChoice == 'scissors' && userChoice == 'stone') {
    totalGames += 1;
    userWins += 1;
    outputValue = `${userName} chose ${userChoice}.${lineBreak} Program chose ${randomChoice}.${dblLineBreak} ${userName} wins! Program loses. ${dblLineBreak} Total Games = ${totalGames} ${lineBreak}Total ${userName}  Wins = ${userWins} ${lineBreak}  Total Program Wins = ${programWins}. ${lineBreak}Total Draws = ${totalDraws}`;
    console.log("User Wins");

  } else if (randomChoice == 'paper' && userChoice == 'scissors') {
    totalGames += 1;
    userWins += 1;
    outputValue = `${userName} chose ${userChoice}.${lineBreak} Program chose ${randomChoice}.${dblLineBreak} ${userName} wins! Program loses. ${dblLineBreak} Total Games = ${totalGames} ${lineBreak} Total ${userName} Wins = ${userWins} ${lineBreak} Total Program Wins = ${programWins}. ${lineBreak}Total Draws = ${totalDraws}`;
    console.log("User Wins");

  } else if (randomChoice == 'stone' && userChoice == 'paper') {
    totalGames += 1;
    userWins += 1;
    outputValue = `${userName} chose ${userChoice}.${lineBreak} Program chose ${randomChoice}.${dblLineBreak}  ${userName} wins! Program loses. ${dblLineBreak} Total Games = ${totalGames} ${lineBreak}Total ${userName} Wins = ${userWins} ${lineBreak}  Total Program Wins = ${programWins}. ${lineBreak}Total Draws = ${totalDraws}`;
    console.log("User Wins");

  };
  console.log('Total Games', totalGames);
  return outputValue;
};

//generate a random number associated with Scissors, Paper, and Stone respectively
var randomNumberGenerator = function () {
  var randNum = Math.floor(Math.random() * 3);
  return randNum;
}

var convertRandNumToChoice = function (randNum) {
  var computerChoice = "";
  if (randNum == 0) {
    computerChoice = 'scissors';
  } else if (randNum == 1) {
    computerChoice = 'paper';
  } else if (randNum == 2) {
    computerChoice = 'stone';
  }

  return computerChoice;

}