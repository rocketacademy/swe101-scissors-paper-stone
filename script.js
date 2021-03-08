var getRandomHand = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal); 
   if (randomInteger == 0) {
    return 'scissors';
  }
   if (randomInteger == 1) {
    return 'paper';
  }
    return 'stone'; 
  }; 
 
var numWin = 0; 
var numGames = 0; 
var username = ''; 
var mode = '';

// main function 
var main = function (input) {

// player name 
if(!username){
  if(!input ) {
    return 'What is your your preferred name for the game?'; 
  }
    username = input; 
    return `Hello ${username}! Hit the button again! `
}

// chooseing a mode 
if(!mode){
  if(!input ) {
    return 'Which mode do you want to play? A. reverse B. Korean C. Comp vs Comp D. normal'; 
  }
    mode = input; 
    var selection = function (){
      if(input == 'A') {
        return 'reverse'
      }
      if(input == 'B') {
        return 'Korean'
      }
      if(input == 'C') {
        return 'Comp vs Comp'
      }
      if(input == 'D') {
        return 'normal'
      }
    };
    var modename = selection(); 
    return `You've chosen the ${modename} mode. <br><br>
    Start the game by keying in any of the three words: scissors, paper, or stone.`; 
}


// userinput 
  var playerinput = input; 
 
  if(playerinput.substring(0,2) != 'sc' && playerinput.substring(0,2) != 'si' && playerinput.substring(0,2) != 'st' && playerinput.substring(0,2) != 'pa')
  {
  return `Remember to only choose among the three following words: scissors, paper, or stone. `
  }




  var robotinput = getRandomHand(); 
  console.log(robotinput);
  numGames += 1; 

// normal mode  
  var result = 'you lost ' + username + '! Your current winning rate is ' + (numWin/numGames).toFixed(2)*100 + '% of all the times';

  if (robotinput == 'scissors' & playerinput.substring(0,2) == ('sc' || 'si')
  || robotinput == 'paper' & playerinput.substring(0,2) == 'pa'
  || robotinput == 'stone' & playerinput.substring(0,2) == 'st') {
  numGames += 1; 
  result = 'it is a draw! You have been winning ' + (numWin/numGames).toFixed(2)*100 + '% of all the times, ' + username; 
}

  if (robotinput == 'scissors' & playerinput.substring(0,2) == 'st'
  || robotinput == 'paper' & playerinput.substring(0,2) == ('sc' || 'si')
  || robotinput == 'stone' & playerinput.substring(0,1) == 'p'){
  numWin += 1; 
  numGames += 1; 
  result = 'you won ' + username + '! You have been winning ' + (numWin/numGames).toFixed(2)*100 + '% of all the times'; 
  }

  return `${result} <br><br>
  the robot chose: ${robotinput} <br>
  and you chose: ${playerinput} <br>
  #game: ${numGames} <br>
  #winning: ${numWin}`
}; 
