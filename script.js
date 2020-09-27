
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


//Main function that controls the logic flow for input of username followed by input of SPS choice
var main = function (input) {
  var outputValue;

  if (currentInputMode == 'input username') {

    userName = input;
    currentInputMode = 'gameVersion';
    outputValue = `Welcome ${userName}! <br> Please input the version that you want: 'normal' or 'korean'`;

  } else if (currentInputMode == 'gameVersion') {
    gameVersion = input.toLowerCase();

    if (gameVersion != 'normal' && gameVersion != 'korean') {
      outputValue = "Sorry, please input either 'normal' or 'korean"
    } else {
      outputValue = `You have chosen to play ${input} version of the game! <br> Please input scissors, paper or stone next!`;
      currentInputMode = 'input sps'
    }
  }

  else if (currentInputMode == 'input sps') {

    var gameResult = gameEngine(input, gameVersion, userName); // plucks  input as user choice and userName as user input name into gameEngine
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

// Korean Version Enabled - Game Logic takes in user's sps choice, game mode and username
var gameEngine = function (userChoice, gameVersion, userName) {
  var outputValue = "User loses, program wins!";
  var randomGenNumber = randomNumberGenerator();
  var randomChoice = convertRandNumToChoice(randomGenNumber);
  console.log(`program generated random choice is ` + randomChoice);


  //Perform user input validation for SPS Choices;
  if (userChoice != 'scissors' && userChoice != 'paper' && userChoice != 'stone') {
    outputValue = "Sorry, please input either 'scissors' , 'paper' or 'stone'. ";

    //Perform core SPS logic
  } else if (randomChoice == userChoice) {
    totalGames += 1;
    totalDraws += 1;

    //input logic for korean game mode in the event of a draw
    if (gameVersion == 'korean' && userPrevWin == 'yes') {
      outputValue = `${userName} won the previous round and its a draw this round. <br>${username} wins Korean SPS!`;
      console.log("Korean Game Draw");

      //restarting the game when korean sps is won: reinitialize global states
      totalGames = 0;
      userWins = 0;
      programWins = 0;
      totalDraws = 0;
      userName = "";
      currentInputMode = 'restart';
      userPrevWin = 'no';
      programPrevWin = 'no';
      gameVersion = ''

    } else if (gameVersion == 'korean' && programPrevWin == 'yes') {
      outputValue = `Program won the previous round and its a draw this round. <br> Program wins Korean SPS!`
      console.log("Korean Game Draw");

      //restarting the game when korean sps is won: reinitialize global states
      totalGames = 0;
      userWins = 0;
      programWins = 0;
      totalDraws = 0;
      userName = "";
      currentInputMode = 'restart';
      userPrevWin = 'no';
      programPrevWin = 'no';
      gameVersion = ''

    } else {
      outputValue = `
      ${userName} chose ${userChoice}.
      <br> Program chose ${randomChoice}. 
      
      <br><br> It is a draw! 
      <br><br> Total Games = ${totalGames} 
      
      <br> Total ${userName} Wins = ${userWins} 
      <br> Total Program Wins = ${programWins}. 
      <br> Total Draws = ${totalDraws}.
      <br> Game Mode = ${gameVersion}.`;

      console.log("Normal Draw");
    }

  } else if (randomChoice == 'scissors' && userChoice == 'paper') {
    totalGames += 1;
    programWins += 1;

    outputValue = `${userName} chose ${userChoice}.
    
    <br> Program chose ${randomChoice}.
    
    <br><br> Program wins! 
    <br><br> Total Games = ${totalGames} 
    
    <br>Total ${userName} Wins = ${userWins} 
    <br>Total Program Wins = ${programWins}. 
    <br>Total Draws = ${totalDraws}. 
    <br>Game Mode = ${gameVersion}.`;
    console.log("Program Wins");

    //including the states of user/program previous wins for Korean Game
    userPrevWin = 'no';
    programPrevWin = 'yes';


  } else if (randomChoice == 'paper' && userChoice == 'stone') {
    totalGames += 1;
    programWins += 1;

    outputValue = `
    ${userName} chose ${userChoice}.
    <br> Program chose ${randomChoice}.
    
    <br><br> Program wins! 
    <br><br> Total Games = ${totalGames}.
    
    <br>Total ${userName}  Wins = ${userWins} 
    <br>Total Program Wins = ${programWins}. 
    <br>Total Draws = ${totalDraws}. 
    <br>Game Mode = ${gameVersion}.
    `;

    console.log("Program Wins");

    //including the states of user/program previous wins for Korean Game
    userPrevWin = 'no';
    programPrevWin = 'yes';


  } else if (randomChoice == 'stone' && userChoice == 'scissors') {
    totalGames += 1;
    programWins += 1;

    outputValue = `
    ${userName} chose ${userChoice}.
    <br>Program chose ${randomChoice}.
   
    <br><br> Program wins! 
    <br><br> Total Games = ${totalGames} 
   
    <br>Total ${userName}  Wins = ${userWins} 
    <br>Total Program Wins = ${programWins}. 
    <br>Total Draws = ${totalDraws}. 
    <br>Game Mode = ${gameVersion}.
    `;

    console.log("Program Wins");

    //including the states of user/program previous wins for Korean Game
    userPrevWin = 'no';
    programPrevWin = 'yes';


  } else if (randomChoice == 'scissors' && userChoice == 'stone') {
    totalGames += 1;
    userWins += 1;

    outputValue = `
    ${userName} chose ${userChoice}.
    <br> Program chose ${randomChoice}.
    
    <br><br> ${userName} wins! 
    <br><br> Total Games = ${totalGames} 
    
    <br>Total ${userName}  Wins = ${userWins}
    <br>Total Program Wins = ${programWins}
    <br>Total Draws = ${totalDraws}
    <br>Game Mode = ${gameVersion}
    `;

    console.log("User Wins");

    //including the states of user/program previous wins for Korean Game
    userPrevWin = 'yes';
    programPrevWin = 'no';

  } else if (randomChoice == 'paper' && userChoice == 'scissors') {
    totalGames += 1;
    userWins += 1;

    outputValue = `
    ${userName} chose ${userChoice}.
    <br> Program chose ${randomChoice}.
    
    <br><br> ${userName} wins! 
    <br><br> Total Games = ${totalGames} 
    
    <br>Total ${userName} Wins = ${userWins} 
    <br>Total Program Wins = ${programWins}. 
    <br>Total Draws = ${totalDraws}. 
    <br>Game Mode = ${gameVersion}
    `;

    console.log("User Wins");

    //including the states of user/program previous wins for Korean Game
    userPrevWin = 'yes';
    programPrevWin = 'no';

  } else if (randomChoice == 'stone' && userChoice == 'paper') {
    totalGames += 1;
    userWins += 1;

    outputValue = `
    ${userName} chose ${userChoice}.
    <br> Program chose ${randomChoice}.
    
    <br><br> ${userName} wins! 
    <br><br> Total Games = ${totalGames} 
    
    <br>Total ${userName} Wins = ${userWins} 
    <br>Total Program Wins = ${programWins}. 
    <br>Total Draws = ${totalDraws}. 
    <br>Game Mode = ${gameVersion}
    `;

    console.log("User Wins");

    //including the states of user/program previous wins for Korean Game
    userPrevWin = 'yes';
    programPrevWin = 'no';

  };
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