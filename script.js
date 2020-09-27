

//state-- score counter
var scoreCounterUser = 0;
var scoreCounterComputer = 0;

//generate random word
var getRandomWord = function () {
  randomDecimal = Math.random() * 3;
  randomInteger = Math.floor(randomDecimal);
  randomWord = randomInteger + 1;

  var randomWord;
  if (randomWord == '1') {
    randomWord = 'scissors';
  } else if (randomWord == 2) {
    randomWord = 'paper';
  } else randomWord = 'stone';
  return randomWord;
}

//Game modes
var currentGameMode = 'waiting for user name';
var userName = '';

var main = function (input) {
  var myOutputValue = '';

  //set game mode to default mode
  if (currentGameMode == 'waiting for user name') {
    userName = input;
    // now that we have name, switch the game mode
    currentGameMode = 'SPS mode';
    myOutputValue = 'Hello, ' + userName +
      '<br> This game is called  \'scissors, paper, stone\'. Please input \'scissors\', \'paper\', or \'stone\' into the box above';

  } else if (currentGameMode == 'SPS mode') {
    //validate userinput using function
    if (!((input == 'scissors') || (input == 'paper') || (input == 'stone'))) {
      myOutputValue = 'please input either \'scissors\', \'paper\', or\'stone\'only';
    } else {
      //get a randomWord through a randomNumber
      var SPSComputer = getRandomWord();
      console.log('computer throws SPS');
      console.log(SPSComputer);
      //compare randomWord against the user input

      //User will win if (user throw paper and RandomWord is Stone) OR (user throws stone and the randomWOrd is scissors) OR (user throws Scissors and the randomWord is paper)
      if ((input == 'scissors' && SPSComputer == 'paper') || (input == 'paper' && SPSComputer == 'stone') || (input == 'stone' && SPSComputer == 'scissors')) {
        console.log('user wins');
        scoreCounterUser = scoreCounterUser + 1;
        myOutputValue = 'You win, ' + userName + '! The computer threw a ' + SPSComputer + ' and you threw a ' + input +
          '<br><br> SCORE' +
          '<br> You: ' + scoreCounterUser +
          '<br> Computer: ' + scoreCounterComputer;
      }
      //else if both throw the same, it's a draw
      else if (input == SPSComputer) {
        console.log('user draws w computer');
        myOutputValue = 'It\'s a draw, ' + userName + '! You both threw a ' + input +
          '<br><br> SCORE' +
          '<br> You: ' + scoreCounterUser +
          '<br> Computer: ' + scoreCounterComputer;
      }
      //else the user loses
      else {
        console.log('user loses')
        scoreCounterComputer = scoreCounterComputer + 1;
        myOutputValue = 'You lose, ' + userName + '. The computer threw a ' + SPSComputer + ' and you threw a ' + input +
          '<br><br> SCORE' +
          '<br> You: ' + scoreCounterUser +
          '<br> Computer: ' + scoreCounterComputer;
      }
    }
  }
  return myOutputValue;

};
