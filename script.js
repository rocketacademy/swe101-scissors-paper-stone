
//Initialize global states for the program
var totalGames = 0;
var userWins = 0;
var programWins = 0;
var totalDraws = 0;
var userName = "";
var currentInputMode = 'input username'; // input choices: username, gamemode, input sps

//Initialize global states for Korean SPS game
var userPrevWin = 'no'; //set user's previous win as as no
var programPrevWin = 'no'; //set program's previous win as no
var gameMode = '' // can switch to 1) 'normal' or 2)'korean' or 3)'restart' when korean game is won

//Initialie global state for computer mode
var autoInput = 'no';

//Main function that controls the logic flow for input of username followed by input of SPS choice
var main = function (input) {
  var outputValue;

  if (currentInputMode == 'input username') {

    userName = input;
    currentInputMode = 'gamemode';
    outputValue = `Welcome ${userName}! Please input the version that you want: 'normal' or 'korean'`;

  } else if (currentInputMode == 'gamemode') {
    gameMode = input.toLowerCase();

    if (gameMode != 'normal' && gameMode != 'korean') {
      outputValue = "Sorry, please input either 'normal' or 'korean"
    } else {
      outputValue = `You have chosen to play ${input} version of the game! <br> Please input scissors, paper or stone next!`;
      currentInputMode = 'input sps'
    }
  }

  else if (currentInputMode == 'input sps') {
    var gameResult = gameEngine(input, gameMode, userName); // plucks  input as user choice and userName as user input name into gameEngine
    outputValue = gameResult;

  } else if (currentInputMode == 'restart') {

    currentInputMode = 'gamemode';
    outputValue = `Please restart the game by choosing either 'normal' or 'korean' game mode and press the "Submit" button again!`
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

// Korean Version Enabled - Game Logic takes in the "value" from convertUserInputToSPS
var gameEngine = function (userChoice, gameMode, userName) {
  var outputValue = "User loses, program wins!";
  var randomGenNumber = randomNumberGenerator();

  var randomChoice = convertRandNumToChoice(randomGenNumber);
  console.log(randomChoice);

  //Perform user input validation for SPS Choices;
  if (userChoice != 'scissors' && userChoice != 'paper' && userChoice != 'stone') {
    outputValue = "Sorry, please input either 'scissors' , 'paper' or 'stone'. ";

    //Perform core SPS logic
  } else if (randomChoice == userChoice) {
    totalGames += 1;
    totalDraws += 1;

    //input logic for korean game mode in the event of a draw
    if (gameMode == 'korean' && userPrevWin == 'yes') {
      outputValue = `Ultimate winner: ${userName} wins Korean SPS! <br> Previous winner: ${userPrevWin}`;
      console.log("Korean Game Draw");

      //restarting the game: switch currentInputMode to input username etc.
      totalGames = 0;
      userWins = 0;
      programWins = 0;
      totalDraws = 0;
      userName = "";
      currentInputMode = 'restart';
      userPrevWin = 'no';
      programPrevWin = 'no';
      gameMode = ''

    } else if (gameMode == 'korean' && programPrevWin == 'yes') {
      outputValue = `Ultimate winner: Program wins Korean SPS! <br> Previous winner: ${programPrevWin}`
      console.log("Korean Game Draw");

      //restarting the game: switch currentInputMode to input username etc.
      totalGames = 0;
      userWins = 0;
      programWins = 0;
      totalDraws = 0;
      userName = "";
      currentInputMode = 'restart';
      userPrevWin = 'no';
      programPrevWin = 'no';
      gameMode = ''

    } else {
      outputValue = `
      ${userName} chose ${userChoice}.
      <br> Program chose ${randomChoice}. 
      
      <br><br> It is a draw! 
      <br><br> Total Games = ${totalGames} 
      
      <br> Total ${userName} Wins = ${userWins} 
      <br> Total Program Wins = ${programWins}. 
      <br> Total Draws = ${totalDraws}.
      <br> Game Mode = ${gameMode}.`;

      console.log("Normal Draw");
    }

  } else if (randomChoice == 'scissors' && userChoice == 'paper') {
    totalGames += 1;
    programWins += 1;

    outputValue = `${userName} chose ${userChoice}.
    
    <br> Program chose ${randomChoice}.
    
    <br><br> Program wins! ${userName} loses. 
    <br><br> Total Games = ${totalGames} 
    
    <br>Total ${userName} Wins = ${userWins} 
    <br>Total Program Wins = ${programWins}. 
    <br>Total Draws = ${totalDraws}. 
    <br>Game Mode = ${gameMode}.`;
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
    
    <br><br> Program wins! ${userName} loses. 
    <br><br> Total Games = ${totalGames}.
    
    <br>Total ${userName}  Wins = ${userWins} 
    <br>Total Program Wins = ${programWins}. 
    <br>Total Draws = ${totalDraws}. 
    <br>Game Mode = ${gameMode}.
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
   
    <br><br> Program wins! ${userName} loses. 
    <br><br> Total Games = ${totalGames} 
   
    <br>Total ${userName}  Wins = ${userWins} 
    <br>Total Program Wins = ${programWins}. 
    <br>Total Draws = ${totalDraws}. 
    <br>Game Mode = ${gameMode}.
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
    
    <br><br> ${userName} wins! Program loses. 
    <br><br> Total Games = ${totalGames} 
    
    <br>Total ${userName}  Wins = ${userWins}
    <br>Total Program Wins = ${programWins}
    <br>Total Draws = ${totalDraws}
    <br>Game Mode = ${gameMode}
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
    
    <br><br> ${userName} wins! Program loses. 
    <br><br> Total Games = ${totalGames} 
    
    <br>Total ${userName} Wins = ${userWins} 
    <br>Total Program Wins = ${programWins}. 
    <br>Total Draws = ${totalDraws}. 
    <br>Game Mode = ${gameMode}
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
    
    <br><br> ${userName} wins! Program loses. 
    <br><br> Total Games = ${totalGames} 
    
    <br>Total ${userName} Wins = ${userWins} 
    <br>Total Program Wins = ${programWins}. 
    <br>Total Draws = ${totalDraws}. 
    <br>Game Mode = ${gameMode}
    `;

    console.log("User Wins");

    //including the states of user/program previous wins for Korean Game
    userPrevWin = 'yes';
    programPrevWin = 'no';

  };
  console.log('Total Games', totalGames);

  return outputValue;

};


// Other Notes:
//https://www.hancinema.net/play-muk-zzi-ppa-the-upgraded-rock-paper-scissors-30907.html referred to this link for how the Korean SPS works from wikipedia