// Global variable declaration
var userWins = 0;
var computerWins = 0;
var drawCount = 0;
var gameCount = 0;
var gameStart = 0;
var userName = '';

// Function 1
// random scissors-paper-stone generator
var randomWord = function (prevRandomWord) {
  // produces a decimal between 0 and 3
  var randomDecimal = Math.random() * 3;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 2 ... add 1
  var wordNumber = randomInteger + 1;

  if (wordNumber == 1) {
    secretWord = 'scissors';
  }
  if (wordNumber == 2) {
    secretWord = 'paper';
  }
  if (wordNumber == 3) {
    secretWord = 'stone';
  }

  return secretWord;
};

// Function 2
// Figures out who won (0 - error; 1 - user won; 2 - computer won; 3 - draw)
var userVsProgram = function (user, computer) {
  var winner = 0;
  if (user == 'scissors' && computer == 'stone') {
    winner = 2;
  }
  else if (user == 'scissors' && computer == 'paper') {
    winner = 1;
  }
  else if (user == 'stone' && computer == 'scissors') {
    winner = 1;
  }
  else if (user == 'stone' && computer == 'paper') {
    winner = 2;
  }
  else if (user == 'paper' && computer == 'stone') {
    winner = 1;
  }
  else if (user == 'paper' && computer == 'scissors') {
    winner = 2;
  }
  else if (user == computer) {
    winner = 3;
  }
  else {
    winner = 0;
  }
  return winner;
};

// Function 3
// gets the emoji
var emoji = function (input) {
  if (input == 'scissors') {
    emojiPrint = '✌️';
  }
  else if (input == 'paper') {
    emojiPrint = '✋';
  }
  else if (input == 'stone') {
    emojiPrint = '✊';
  }
  else {
    emojiPrint = '❓';
  }
  return emojiPrint;
};

// Function 4
// This is the main function that gets run
var main = function (input) {
  // Initialise myOutputValue
  var myOutputValue = '';

  // If the game counter is 0, the user has just input his name
  if (gameStart == 0) {
    userName = input;
    myOutputValue = 'Hello ' + input + '! Are you ready to play? Input scissors, paper, or stone to begin!';
    gameStart = gameStart + 1;
    return myOutputValue;
  }

  // increase game count
  gameCount = gameCount + 1;

  // What did the computer show?
  var computerShowed = randomWord();

  // Who won?
  var outcome = userVsProgram(input, computerShowed);

  // For troubleshooting
  console.log('Computer: ' + computerShowed);
  console.log('Human: ' + input);
  console.log('Outcome: ' + outcome);

  // Summary stats
  var choicesPrint = '<br> <br> Computer: ' + emoji(computerShowed) + '<br>' + userName + ': ' + emoji(input);
  var summaryStats = '<br> <br> SUMMARY <br> Computer: ' + computerWins + '<br> User: ' + userWins + '<br> Draws: ' + drawCount + '<br>' + userName + ' win rate: ' + Math.floor(userWins / gameCount * 100) + '%';

  // Determine print
  if (outcome == 1) {
    userWins = userWins + 1;
    myOutputValue = userName + ' won' + choicesPrint + summaryStats;
  }
  else if (outcome == 2) {
    computerWins = computerWins + 1;
    myOutputValue = 'Computer won' + choicesPrint + summaryStats;
  }
  else if (outcome == 3) {
    drawCount = drawCount + 1;
    myOutputValue = 'Draw' + choicesPrint + summaryStats;
  }
  else if (outcome == 0) {
    myOutputValue = 'Invalid game. Please input scissors, paper, or stone.' + summaryStats;
  }

  return myOutputValue;
};
