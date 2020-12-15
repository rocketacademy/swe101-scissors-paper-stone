// FUNCTION 1: generate a random number to represent scissors, paper or stone.
var genRandomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomIntegar = Math.floor(randomDecimal);
  var randomNumber = randomIntegar + 1;
  return randomNumber;
};

// FUNCTION 2: generate a random gesture to represent the computer gesture.
var genRandomGesture = function () {
  var computerGesture = genRandomNumber();

  if (computerGesture == 1) {
    computerGesture = 'scissors';
  }
  if (computerGesture == 2) {
    computerGesture = 'paper';
  }
  if (computerGesture == 3) {
    computerGesture = 'stone';
  }
  return computerGesture;
};

// create game count.
var gameCount = 0;
// create win record.
var userWin = 0;
var computerWin = 0;
// create lose record.
var userLose = 0;
var computerLose = 0;
// create number of draw record.
var numberOfDraw = 0;
// create winner
var winner = ''
// create last winner
var lastWinner = winner;

var userName = '';

// FUNCTION 3: normal SPS game
var normalSps = function (input) {
  var message = 'Now you are in normal game mode! Enter "scissors", "paper" or "stone" to play!';
  
  // sps game logic
var computerGesture = genRandomGesture();
    // assign a number to each scissors, paper and stone.
    if (input == 'scissors') {
      var userGesture = 1;
      userGesture = 'scissors';
    } 
    if (input == 'paper') {
      var userGesture = 2;
      userGesture = 'paper';
    } 
    if (input == 'stone') {
      var userGesture = 3;
      userGesture = 'stone';
    }
    console.log('user gesture:' + userGesture);
    console.log('computer gesture:' + computerGesture);

    // set a draw condition
    if (userGesture == computerGesture) {
      gameCount = gameCount + 1;
      numberOfDraw = numberOfDraw + 1;
      message = 'The computer chose ' + computerGesture + '.<br> You chose ' + input + '. <br> <br> Its a draw! <br> <br> So far ' + userName + ', we played ' + gameCount + ' turns, and there have been ' + numberOfDraw + ' draws. <br> That is ' + ((100 * numberOfDraw) / gameCount) + '%.';
    }
    // set winning conditions
    if ((userGesture == 'scissors' && computerGesture == 'paper')
    || (userGesture == 'paper' && computerGesture == 'stone')
    || (userGesture == 'stone' && computerGesture == 'scissors')) {
      gameCount = gameCount + 1;
      userWin = userWin + 1;
      message = 'The computer chose ' + computerGesture + '.<br> You chose ' + input + '. <br> <br> You won! :D <br> <br> So far ' + userName + ', we played ' + gameCount + ' turns, and you have been winning ' + userWin + ' turns. <br> That is ' + ((100 * userWin) / gameCount) + '%. Keep it up!';
    }
    // set losing conditions
    if ((userGesture == 'scissors' && computerGesture == 'stone')
    || (userGesture == 'paper' && computerGesture == 'scissors')
    || (userGesture == 'stone' && computerGesture == 'paper')) {
      gameCount = gameCount + 1;
      userLose = userLose + 1;
      message = 'The computer chose ' + computerGesture + '.<br> You chose ' + input + '. <br> <br> You lost! :( <br> <br> So far ' + userName + ', we played ' + gameCount + ' turns, and you have been losing ' + userLose + ' turns. <br> That is ' + ((100 * userLose) / gameCount) + '%. Try again!';
    }
    return message;
};

// FUNCTION 4: reverse sps game
var reverseSps = function (input) {
  var reverseMessage = ' Now you are in the reverse game mode! Enter "scissors", "paper" or "stone" to play!';

var computerGesture = genRandomGesture();

    // assign a number to each scissors, paper and stone.
    if (input == 'scissors') {
      var userGesture = 1;
      userGesture = 'scissors';
    }
    if (input == 'paper') {
      var userGesture = 2;
      userGesture = 'paper';
    }
    if (input == 'stone') {
      var userGesture = 3;
      userGesture = 'stone';
    }
    console.log('user gesture:' + userGesture);
    console.log('computer gesture:' + computerGesture);

    // set a draw condition
    if (userGesture == computerGesture) {
      reverseMessage = 'This is the reverse game! The computer chose ' + computerGesture + '.<br> You chose ' + input + '. <br> <br> Its a draw!';
    }

    // set a winning condition
    if ((userGesture == 'scissors' && computerGesture == 'stone')
    || (userGesture == 'paper' && computerGesture == 'scissors')
    || (userGesture == 'stone' && computerGesture == 'paper')) {
      reverseMessage = 'This is the reverse game! The computer chose ' + computerGesture + '.<br> You chose ' + input + '. <br> <br> You won! :D';
    }

    // set a losing condition
    if ((userGesture == 'scissors' && computerGesture == 'paper')
    || (userGesture == 'paper' && computerGesture == 'stone')
    || (userGesture == 'stone' && computerGesture == 'scissors')) {
      reverseMessage = 'This is the reverse game! The computer chose ' + computerGesture + '.<br> You chose ' + input + '. <br> <br> You lost! :(';

    }
    return reverseMessage;
};

// FUNCTION 5: korean SPS
var koreanSps = function (input) {
  
  var koreanMessage = 'You are in the korean game mode! Enter "scissors", "paper" or "stone" to play!';
  // sps game logic
var computerGesture = genRandomGesture();

    // assign a number to each scissors, paper and stone.
    if (input == 'scissors') {
      var userGesture = 1;
      userGesture = 'scissors';
    }
    if (input == 'paper') {
      var userGesture = 2;
      userGesture = 'paper';
    }
    if (input == 'stone') {
      var userGesture = 3;
      userGesture = 'stone';
    }
    console.log('user gesture:' + userGesture);
    console.log('computer gesture:' + computerGesture);

// player with the winning throw shout 'mmuk-jji-ppa'
// user shout
if ((userGesture == 'scissors' && computerGesture == 'paper')
    || (userGesture == 'paper' && computerGesture == 'stone')
    || (userGesture == 'stone' && computerGesture == 'scissors')) {
      gameCount = gameCount + 1;
      userWin = userWin + 1;
      winner = 'you'
      koreanMessage = 'The computer chose ' + computerGesture + '.<br> You chose ' + input + '. <br> <br> You shout MMUK-JJI-PPA!';
    }
//computer shout
if ((userGesture == 'scissors' && computerGesture == 'stone')
    || (userGesture == 'paper' && computerGesture == 'scissors')
    || (userGesture == 'stone' && computerGesture == 'paper')) {
      gameCount = gameCount + 1;
      computerWin = computerWin + 1;
      winner = 'computer';
      koreanMessage = 'The computer chose ' + computerGesture + '.<br> You chose ' + input + '. <br> <br> The computer shouts MMUK-JJI-PPA!';
    }

  // when draw
  if (userGesture == computerGesture) {
    lastWinner = winner;
      koreanMessage = 'The computer chose ' + computerGesture + '.<br> You chose ' + input + '. <br> <br> It matches!! <br><br> So the winner is the last winner, who is ' + lastWinner + '. Congrat!';
    }
  return koreanMessage;
};

var currentGameMode = 'waiting for user name';

// this is the main function
var main = function (input) {
  var myOutputValue = '';

  if (currentGameMode == 'waiting for user name') {
    // set the name
    userName = input;

    myOutputValue = 'Hello ' + userName + '! <br> Choose your game mode: <br> Enter "normal", "reverse" or "korean" to chose! <br> Good luck!';
  }

    // now we have the name, select the game mode
    // normal SPS
  if (input == 'normal') {
    currentGameMode = 'normalSPS'
  }
  if (currentGameMode == 'normalSPS') {
    myOutputValue = normalSps(input);
  } 
    // reverse SPS
  if (input == 'reverse') {
    currentGameMode = 'reverseSPS';
  }
  if (currentGameMode == 'reverseSPS') {
    myOutputValue = reverseSps (input);
  } 
    // korean SPS
  if (input == 'korean') {
    currentGameMode = 'koreanSPS';
  }
  if (currentGameMode == 'koreanSPS') {
    myOutputValue = koreanSps(input);
  }

  return myOutputValue;
};
