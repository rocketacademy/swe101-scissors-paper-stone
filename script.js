//Initialize global states for the program
var totalGames = 0;
var userWins = 0;
var programWins = 0;
var totalDraws = 0;
var userName = "";
var currentInputMode = 'input username'; // input choices: username, gameVersion, input sps

//Initialize global states for Korean SPS game
var userPrevWin = 'no'; //set user's previous win as as no
var programPrevWin = 'no'; //set program's previous win as no
var gameVersion = '' // can switch to 1) 'normal' or 2)'korean' or 3)'restart' when korean game is won

// reinitialize/restart game
var reinitialize = function () {
  totalGames = 0;
  userWins = 0;
  programWins = 0;
  totalDraws = 0;
  userName = "";
  currentInputMode = 'restart';
  userPrevWin = 'no';
  programPrevWin = 'no';
  gameVersion = ''
}

//Main function that controls the logic flow for input of username followed by input of SPS choice
var main = function (input) {
  var outputValue;

  if (currentInputMode == 'input username') {

    userName = input;
    currentInputMode = 'gameVersion';
    outputValue = `Welcome ${userName}! <br> Please input the version that you want: 'normal' or 'korean' or 'reverse'`;

  } else if (currentInputMode == 'gameVersion') {
    gameVersion = input.toLowerCase();

    if (gameVersion != 'normal' && gameVersion != 'korean' && gameVersion != 'reverse') {
      outputValue = "Sorry, please input either 'normal' or 'korean, or reverse"
    } else {
      outputValue = `You have chosen to play ${input} version of the game! <br> Please input scissors, paper or stone next!`;
      currentInputMode = 'input sps'
    }
  }

  else if (currentInputMode == 'input sps') {
    // plucks input as user choice and userName as user input name into gameEngine
    var gameResult = gameEngine(input, gameVersion, userName);
    outputValue = gameResult;

  } else if (currentInputMode == 'restart') {

    currentInputMode = 'gameVersion';
    outputValue = `Please restart the game by typing either 'normal' or 'korean' game mode and press the "Submit" button again!`
    console.log("game is restarting");

  }
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

var gameEngineOutputValue = function (userChoice, randomChoice,) {
  var outputValue = `
      <br> ${userName} chose ${userChoice}.
      <br> Program chose ${randomChoice}. 
    
      <br><br> Total Games = ${totalGames} 
      
      <br> Total ${userName} Wins = ${userWins}. 
      <br> Total Program Wins = ${programWins}. 
      <br> Total Draws = ${totalDraws}.
      <br> Game Mode = ${gameVersion}.
      `;
  return outputValue;
}

//user SPS Input Validation function
var userSPSInputValidation = function (userChoice) {
  var outputValue;
  if (userChoice != 'scissors' && userChoice != 'paper' && userChoice != 'stone') {
    outputValue = "Sorry, please input either 'scissors' , 'paper' or 'stone'. ";
    return outputValue;
  }
}

// Korean Version Enabled - Game Logic takes in user's sps choice, game mode and username
var gameEngine = function (userChoice, gameVersion, userName) {
  var outputValue;
  var randomGenNumber = randomNumberGenerator();
  var randomChoice = convertRandNumToChoice(randomGenNumber);
  console.log(`program generated random choice is ` + randomChoice);

  //Perform user input validation for SPS Choices;
  userSPSInputValidation(userChoice);

  //Perform core SPS logic
  if (randomChoice == userChoice) {
    totalGames += 1;
    totalDraws += 1;
    console.log(totalGames + 'top');

    //input logic for korean game mode in the event of a draw
    if (gameVersion == 'korean' && userPrevWin == 'yes') {
      outputValue = gameEngineOutputValue(userChoice, randomChoice) + `${userName} won the previous round and its a draw this round. <br>${userName} wins Korean SPS!`;
      console.log("Korean Game Draw");

      //restarting the game when korean sps is won: reinitialize global states
      reinitialize();

    } else if (gameVersion == 'korean' && programPrevWin == 'yes') {
      outputValue = `Program won the previous round and its a draw this round. <br> Program wins Korean SPS!`
      console.log("Korean Game Draw");

      //restarting the game when korean sps is won: reinitialize global states
      reinitialize();

    } else { // means if gameversion is not korean or previous game was a draw, then it continues to be a draw
      console.log("Normal Draw");
      outputValue = 'It is a draw. ' + gameEngineOutputValue(userChoice, randomChoice);
      return outputValue;
    }

    //scenario where computer wins in normal conditions
  } else if (randomChoice == 'scissors' && userChoice == 'paper' || randomChoice == 'paper' && userChoice == 'stone' || randomChoice == 'stone' && userChoice == 'scissors') {
    totalGames += 1;

    //scenario where program wins in reverse conditions
    if (gameVersion == 'reverse') {
      userWins += 1;
      outputValue = `${userName} wins! ` + gameEngineOutputValue(userChoice, randomChoice);
      console.log('reverse program win');
      return outputValue;
    }

    programWins += 1;
    outputValue = `Program wins! ` + gameEngineOutputValue(userChoice, randomChoice);
    console.log(gameVersion);

    //including the states of user/program previous wins for Korean Game
    userPrevWin = 'no';
    programPrevWin = 'yes';
    return outputValue;

  } else { //scenario where user wins in normal conditions
    totalGames += 1;
    //scenario where program wins in reverse conditions
    if (gameVersion == 'reverse') {
      programWins += 1;
      outputValue = `Program wins! ` + gameEngineOutputValue(userChoice, randomChoice);
      console.log("reverse User win");
      return outputValue;

    }
    userWins += 1;
    outputValue = `${userName} wins! ` + gameEngineOutputValue(userChoice, randomChoice);

    //including the states of user/program previous wins for Korean Game
    userPrevWin = 'yes';
    programPrevWin = 'no';
    return outputValue;
  }
  console.log('Total Games', totalGames);

  return outputValue;

};

//Computer vs Computer mode: create autoInput functionality
var autoInputFunction = function (autoInput) {
  var userSPSInput;

  if (autoInput == '1') {
    //computer plays game'
    userSPSInput = convertRandNumToChoice(randomNumberGenerator());
    console.log(`autoInputFunction choice is ` + userSPSInput)

  };
  return userSPSInput;
};

// Other Notes/References:
//https://www.hancinema.net/play-muk-zzi-ppa-the-upgraded-rock-paper-scissors-30907.html [How Korean SPS works: Src: wiki footnotes]