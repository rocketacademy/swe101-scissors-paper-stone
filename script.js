// gamemode , enter username name
var gameMode = 'enter username mode';

// store username
var userNameOfThePlayer = '';

// random number from 0 to 2
var randomNum = function () {
  var numZeroToTwo = Math.floor(Math.random() * 3);
  return numZeroToTwo;
};

// user win
var numOfUserWin = 0;

// computer win
var numOfComputerWin = 0;

// total game
var totalMatch = 0;

// winning percentage
var userWinPercentage = 0;
var computerWinPercentage = 0;

// number of draw
var numOfDraw = 0;

// assign value to words
var assignNumberToWords = function () {
  var numGenerator = randomNum();
  if (numGenerator == 0) {
    return 'scissors';
  }
  if (numGenerator == 1) {
    return 'stone';
  }
  if (numGenerator == 2) {
    return 'paper';
  }
  return 'got bug';
};

var main = function (input) {
  var myOutputValue = 'Please enter one of the 3 options. scissors , paper , stone';

  // do this if gamemode is 'enter username mode.
  if (gameMode == 'enter username mode') {
    // store input as username
    userNameOfThePlayer = input;
    // change game mode to start game.
    gameMode = 'start game';
    myOutputValue = 'Welcome ,' + userNameOfThePlayer
    + ' . Please enter one of the 3 objects. scissors , paper , stone';
    // if gamemode is start game  run this code
  }
  // if gamemode is start game run this code
  else if (gameMode == 'start game') {
    // if condition is true , result will either be draw , win or lose .
    // Otherwise it will prompt user to enter the correct input
    if ((input == 'scissors' || input == 'stone' || input == 'paper') == true) {
      var scissorsPaperStoneObject = assignNumberToWords();
      console.log('scissor-paper-stone');

      // If both parties choose the same object, it's a draw.
      if (input == scissorsPaperStoneObject) {
        numOfDraw = numOfDraw + 1;
        myOutputValue = userNameOfThePlayer + ' choose ' + input + '<br>'
       + ' Computer choose ' + scissorsPaperStoneObject
       + '<br>' + '<br>'
       + 'Draw!! ' + '<br>'
       + userNameOfThePlayer + ' draw ' + numOfDraw + ' times. ' + '<br>'
       + userNameOfThePlayer + ' win ' + numOfUserWin + ' times ' + userWinPercentage + '%.' + '<br>'
       + 'Computer win ' + numOfComputerWin + ' times ' + computerWinPercentage + '%';

        console.log(userNameOfThePlayer + 'choose');
        console.log(input);
        console.log('Computer choose');
        console.log(scissorsPaperStoneObject);
        console.log('draw!');
      }

      // condition of winning = rock > scissor , paper > stone , scissors > paper
      else if (input == 'stone' && scissorsPaperStoneObject == 'scissors'
        || input == 'paper' && scissorsPaperStoneObject == 'stone'
        || input == 'scissors' && scissorsPaperStoneObject == 'paper') {
        totalMatch = totalMatch + 1;
        numOfUserWin = numOfUserWin + 1;
        userWinPercentage = (numOfUserWin / totalMatch) * 100;
        computerWinPercentage = (numOfComputerWin / totalMatch) * 100;
        myOutputValue = userNameOfThePlayer + ' choose ' + input + '<br>'
       + ' Computer choose ' + scissorsPaperStoneObject
       + '<br>' + '<br>'
       + userNameOfThePlayer + ' win ' + numOfUserWin + ' times ' + userWinPercentage + '%.' + '<br>'
       + ' Computer win ' + numOfComputerWin + ' times ' + computerWinPercentage + '%.' + '<br>'
       + userNameOfThePlayer + ' draw ' + numOfDraw + ' times.';

        console.log(userNameOfThePlayer + 'choose');
        console.log(input);
        console.log('Computer choose');
        console.log(scissorsPaperStoneObject);
        console.log(userNameOfThePlayer + ' win ');
      }
      // if not draw or win , the program will run this code which mean the player lose the game .
      else {
        numOfComputerWin = numOfComputerWin + 1;
        totalMatch = totalMatch + 1;
        userWinPercentage = (numOfUserWin / totalMatch) * 100;
        computerWinPercentage = (numOfComputerWin / totalMatch) * 100;
        myOutputValue = userNameOfThePlayer + ' choose ' + input + '<br>'
       + ' Computer choose ' + scissorsPaperStoneObject
       + '<br>' + '<br>'
       + userNameOfThePlayer
       + ' lose.' + '<br>'
       + 'Computer win ' + numOfComputerWin + ' times ' + computerWinPercentage + '%. ' + '<br>'
       + userNameOfThePlayer + ' win ' + numOfUserWin + ' times ' + userWinPercentage + '%.' + '<br>'
       + userNameOfThePlayer + '  draw ' + numOfDraw + ' times.';

        console.log(userNameOfThePlayer + 'choose');
        console.log(input);
        console.log('Computer choose');
        console.log(scissorsPaperStoneObject);
        console.log(userNameOfThePlayer + ' lose');
      }
    }
  }
  return myOutputValue;
};
