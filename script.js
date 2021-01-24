// initialize user name
var userName = '';
var isUsernameSet = false;

// initialize turns played and turns won
var turnsPlayed = 0;
var turnsWon = 0;

// initialize each possible input
var validInput1 = 'scissors';
var validInput2 = 'paper';
var validInput3 = 'stone';

// initialize reverse settings
var reverseInput = 'reverse';
var isReverse = false;

// initialize most recent winner
var mostRecentWinner = '';

var getComputerSps = function () {
  // generate a value between 0 and 2.9999...
  var randomDecimal = Math.random() * 3;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // number type ranges from 1 to 3, inclusive.
  var numberType = randomInteger + 1;

  // 1: scissors
  if (numberType == 1) {
    return validInput1;
  }

  // 2: paper
  if (numberType == 2) {
    return validInput2;
  }

  // 3: stone
  return validInput3;
};

var getSpsEmoji = function (spsType) {
  // scissors
  if (spsType == validInput1) {
    return '&#9986;&#65039;';
  }

  // paper
  if (spsType == validInput2) {
    return '&#128220;';
  }

  // stone
  return '&#128142;';
};

var getWinningState = function (playerInput, computerInput, reverse) {
  // initialize message to show when there's a draw
  var drawMessage = "<br /><br />It's a draw!";

  // initialize winning condition, assuming non-reverse
  // player chose scissors, computer chose paper
  // player chose paper, computer chose stone
  // player chose stone, computer chose paper
  var isWinning = (playerInput == validInput1 && computerInput == validInput2)
    || (playerInput == validInput2 && computerInput == validInput3)
    || (playerInput == validInput3 && computerInput == validInput1);

  // reverse winning condition
  if (reverse) {
    isWinning = !isWinning;
  }

  // draw conditions:
  // same inputs from both
  if (playerInput == computerInput) {
    // end current game if most recent winner is determined
    if (mostRecentWinner != '') {
      // message to be printed
      drawMessage = drawMessage + ' Since ' + mostRecentWinner + ' was the most recent winner, ' + mostRecentWinner + ' is the ultimate winner of this game! Please type in your name above to start a new game.';

      // reset game state, user name and mostRecentWinner
      turnsPlayed = 0;
      turnsWon = 0;
      mostRecentWinner = '';
      userName = '';
      isUsernameSet = false;
    }
    return drawMessage;
  }

  // winning condition
  // initialized above
  if (isWinning) {
    turnsWon = turnsWon + 1;
    mostRecentWinner = userName;
    return '<br /><br />You win! Congratulations!';
  }

  // losing conditions:
  // everything else
  mostRecentWinner = 'Computer';
  return '<br /><br />You lose! Bummer.';
};

var getWinLossRecord = function () {
  var output = '<br /><br />So far ' + userName + ', you\'ve been winning ' + turnsWon + '/' + turnsPlayed + ' turns.';

  // if you win at least half of the matches
  if (turnsWon * 2 >= turnsPlayed) {
    return output + ' Pretty good!';
  }

  // base case: losing more than half of the matches
  return output + ' Try harder the subsequent rounds!';
};

var setPreGameMessage = function (input) {
  // trim the input, ie. remove trailing and leading spaces
  var trimmedInput = input.trim();

  // base case: input is an empty string
  var output = 'You are not allowed to have an empty name! Please enter a valid name above!';

  // input is valid, ie. not an empty string
  if (trimmedInput != '') {
    userName = trimmedInput;
    isUsernameSet = true;
    output = 'Welcome ' + userName + ', to a game of Scissors, Paper, Stone! Please type in any 1 of the following 3 items: scissors, paper, stone. Hit Submit to choose your item, and begin the game!';
  }

  return output;
};

var setReverseMessage = function (reverse) {
  // base: assume reverse
  var output = userName.toUpperCase() + ', IT\'S NOW TIME TO PLAY REVERSE! The rules are now reversed: scissors beat stone, stone beats paper, and paper beats scissors. Please type in any 1 of the following 3 items: scissors, paper, stone. Hit Submit to choose your item.';

  // if you want to reset back to non-reverse
  if (!reverse) {
    output = 'Welcome back ' + userName + ', to your proper game of Scissors, Paper, Stone! Please type in any 1 of the following 3 items: scissors, paper, stone. Hit Submit to choose your item, and continue the current game!';
  }

  return output;
};

var playTurn = function (input) {
  // when submit is hit, generate random type
  var computerSps = getComputerSps();

  var output = 'The computer chose ' + computerSps + ' ' + getSpsEmoji(computerSps) + '.<br />You chose ' + input + ' ' + getSpsEmoji(input) + '.' + getWinningState(input, computerSps, isReverse);

  // print win loss record if turns played > 0
  // this also prevents win loss record to be printed as 0/0,
  // when the game state is reset under korean rules
  if (turnsPlayed > 0) {
    output = output + getWinLossRecord();
  }

  return output;
};

var main = function (input) {
  var myOutputValue = 'Please enter your name in the text field above.';

  // user is still in the midst of setting name
  if (!isUsernameSet) {
    myOutputValue = setPreGameMessage(input);
    // return to terminate function, this is because
    // we want to display a welcome message instead of
    // starting game straight after entering a proper name
    return myOutputValue;
  }

  // user has already set name
  if (isUsernameSet) {
    // for consistency, we accept capitalization in inputs
    var sanitisedInput = input.toLowerCase();

    // default: assume invalid input
    myOutputValue = "Looks like you are selecting an invalid item, or there's a typo in your text! Please select and type in only one of the following: scissors, paper, stone.";

    // setting introductory message when switching reverse/non-reverse
    if (sanitisedInput == reverseInput) {
      isReverse = !isReverse;
      myOutputValue = setReverseMessage(isReverse);
      return myOutputValue;
    }

    // only play the turn if input matches
    if (
      sanitisedInput == validInput1
      || sanitisedInput == validInput2
      || sanitisedInput == validInput3
    ) {
      turnsPlayed = turnsPlayed + 1;
      myOutputValue = playTurn(sanitisedInput);
    }
  }

  return myOutputValue;
};
