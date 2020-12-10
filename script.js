// Global variable declaration
var userWins = 0;
var computerWins = 0;
var drawCount = 0;
var gameCount = 0;
var gameStart = 0;
var userName = '';
var reverseState = 0;
var lastWinner = '';
var koreanVersion = 0;
var turnComputer = -1;
var computerPlay = 0;

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

// Function 3
// Just for the printing
var printing = function (computer, human) {
  var choicesPrint = '<br> <br> Computer: ' + emoji(computer) + '<br>' + userName + ': ' + emoji(human);
  var summaryStats = '<br> <br> SUMMARY <br> Computer: ' + computerWins + '<br> User: ' + userWins + '<br> Draws: ' + drawCount + '<br>' + userName + ' win rate: ' + Math.floor(userWins / gameCount * 100) + '%';

  return choicesPrint + summaryStats;
};

// Function 4
// This is the main function that gets run
var main = function (input) {
  // Initialise myOutputValue
  var myOutputValue = '';
  var summaryMsg = '';

  // If the game counter is 0, the user has just input his name
  if (gameStart == 0) {
    userName = input;
    gameStart = 1;
    myOutputValue = 'Hello ' + input + '! <br> Would you like the computer to play alternate rounds? (Y/N)';
    return myOutputValue;
  }

  // CHeck if the player would like the computer to play alternate game
  if (gameStart == 1) {
    if (input == 'Y') {
      computerPlay = 1;
      myOutputValue = 'You will fite the computer. How brave!';
    }
    else if (input == 'N') {
      computerPlay = 0;
      myOutputValue = 'You will not fite the computer. Wimp.';
    }
    myOutputValue = myOutputValue + '<br> Would you like the korean version? (Y/N)';
    gameStart = 2;
    return myOutputValue;
  }

  // Check if the player would like the korean version
  if (gameStart == 2) {
    if (input == 'Y') {
      koreanVersion = 1;
      gameStart = 3;
      myOutputValue = 'You have selected the Korean version. <br> 한국어 버전을 선택하셨습니다. <br>Input scissors, paper, or stone to begin!';
    }
    else if (input == 'N') {
      koreanVersion = 0;
      gameStart = 3;
      myOutputValue = 'You have selected the regular version. <br>Input scissors, paper, or stone to begin!';
    }
    return myOutputValue;
  }

  // If the player keys in reverse
  if (input == 'reverse') {
    if (reverseState == 0) {
      myOutputValue = 'REVERSEEE TIMMMEE R U RDY <br> Computer: JINJAA?!?';
      reverseState = 1;
      return myOutputValue;
    }
    if (reverseState == 1) {
      myOutputValue = 'GOING BACK TO NORMAL';
      reverseState = 0;
      return myOutputValue;
    }
  }

  // increase game count
  gameCount = gameCount + 1;
  turnComputer = turnComputer + 1;

  // At alternate turn, computer chooses for you!
  if (computerPlay = 1 && turnComputer % 2 == 1) {
    main(randomWord());
  }

  // What did the computer show?
  var computerShowed = randomWord();

  // Who won?
  var outcome = userVsProgram(input, computerShowed);

  // For troubleshooting
  console.log('***STATUS***');
  console.log('Korean Version: ' + koreanVersion);
  console.log('Revese mode: ' + reverseState);
  console.log('Computer turn: ' + turnComputer);
  console.log('Computer: ' + computerShowed);
  console.log('Human: ' + input);
  console.log('Outcome: ' + outcome);

  // Print Outcome
  if (outcome == 1 || (reverseState == 1 && outcome == 2)) {
    userWins = userWins + 1;
    summaryMsg = printing(computerShowed, input);
    myOutputValue = userName + ' won' + summaryMsg;
    if (koreanVersion == 1) {
      lastWinner = userName;
      myOutputValue = userName + ' enthusiastically shouts MUK-JJI-PPA' + summaryMsg;
    }
  }
  else if (outcome == 2 || (reverseState == 1 && outcome == 1)) {
    computerWins = computerWins + 1;
    summaryMsg = printing(computerShowed, input);
    myOutputValue = 'Computer won' + summaryMsg;
    if (koreanVersion == 1) {
      lastWinner = 'Computer';
      myOutputValue = 'The computer excitedly shouts MUK-JJI-PPA-BEEP-BOOP-BEEP' + summaryMsg;
    }
  }
  else if (outcome == 3) {
    drawCount = drawCount + 1;
    summaryMsg = printing(computerShowed, input);
    myOutputValue = 'Draw' + summaryMsg;
    if (koreanVersion == 1) {
      myOutputValue = lastWinner + ' won!!' + summaryMsg;
      lastWinner = '';
    }
  }
  else if (outcome == 0) {
    myOutputValue = 'Invalid game. Please input scissors, paper, or stone.' + summaryStats;
  }

  return myOutputValue;
};
