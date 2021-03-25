// function to generate random number
function generateRandomNum(max) {
  let randomNum = Math.floor(Math.random() * max) + 1;
  return randomNum;
}
// create function to generate random item
function generateRandomOption() {
  let randomItemNum = generateRandomNum(3);
  let item;
  if (randomItemNum == 1) {
    item = 'scissors';
  }
  else if (randomItemNum == 2) {
    item = 'paper';
  }
  else if (randomItemNum == 3) {
    item = 'stone';
  }
  return item;
}

// STAGE-2 Win-Loss Record 
let winningCountComp = null;
let winningCountPlayer = null;
let drawCount = null;

let recentWinner = 'yet to decide. keep playing.';
// play normal SPS
function playNormal(randomItem, input) {
  let result = `computer chose ${randomItem} <br> and you chose ${input}. <br>`;
  if (((randomItem == 'scissors') && (input == 'paper')) || ((randomItem == 'paper') && (input == 'stone')) || ((randomItem == 'stone') && (input == 'scissors'))) {
    winningCountComp += 1;
    result += `COMPUTER wins! 💻. so far won ${winningCountComp} number of times.`;
  }
  else if (((randomItem == 'scissors') && (input == 'stone')) || ((randomItem == 'paper') && (input == 'scissors')) || ((randomItem == 'stone') && (input == 'paper'))) {
    winningCountPlayer += 1;
    result += `YOU win!. 🏆</p> so far, ${userName} won ${winningCountPlayer} number of times.`;
  }
  else if (((randomItem == 'scissors') && (input == 'scissors')) || ((randomItem == 'paper') && (input == 'paper')) || ((randomItem == 'stone') && (input == 'stone'))) {
    drawCount += 1;
    result = `computer chose ${randomItem} and you chose ${input}. <p>It's a DRAW!.</p>so far ${drawCount} number of draws.`;
  }
  return result;
}

// play reverse SPS
function playReverse(randomItem, input) {
  let result = `computer chose ${randomItem}  <p>and you chose ${input}.<br>`;
  if (((randomItem == 'scissors') && (input == 'paper')) || ((randomItem == 'paper') && (input == 'stone')) || ((randomItem == 'stone') && (input == 'scissors'))) {
    winningCountPlayer += 1;
    result += `YOU win!. 🏆</p> so far, ${userName} won ${winningCountPlayer} number of times.`;
  }
  else if (((randomItem == 'scissors') && (input == 'stone')) || ((randomItem == 'paper') && (input == 'scissors')) || ((randomItem == 'stone') && (input == 'paper'))) {
    winningCountComp += 1;
    result += `COMPUTER wins! 💻. so far won ${winningCountComp} number of times.`;
  }
  else if (((randomItem == 'scissors') && (input == 'scissors')) || ((randomItem == 'paper') && (input == 'paper')) || ((randomItem == 'stone') && (input == 'stone'))) {
    drawCount += 1;
    result += `It's a DRAW!.</p>so far ${drawCount} number of draws.`;
  }
  console.log(recentWinner);
  return result;
}

// korean version of the game
function koreanVersion(randomItem, input) {
  let result = `computer chose ${randomItem} <br> and you chose ${input}.`;
  if (((randomItem == 'scissors') && (input == 'paper')) || ((randomItem == 'paper') && (input == 'stone')) || ((randomItem == 'stone') && (input == 'scissors'))) {
    winningCountComp += 1;
    result += 'COMPUTER wins! 💻.';
    recentWinner = 'Computer';
  }
  else if (((randomItem == 'scissors') && (input == 'stone')) || ((randomItem == 'paper') && (input == 'scissors')) || ((randomItem == 'stone') && (input == 'paper'))) {
    winningCountPlayer += 1;
    result += 'YOU win!. 🏆 ';
    recentWinner = 'Player';
  }
  else if (((randomItem == 'scissors') && (input == 'scissors')) || ((randomItem == 'paper') && (input == 'paper')) || ((randomItem == 'stone') && (input == 'stone'))) {
    drawCount += 1;
    result = `It's a DRAW!.</p>so far ${drawCount} number of draws. The ULTIMATE WINNER is ${recentWinner}.`;
  }
  console.log(recentWinner);
  return result;
}
// tracking state of the game
function setMode(userInput) {
  let mode;
  if (userInput == '') {
    mode = 'normal';
  }
  else if (userInput == 'reverse') {
    mode = 'reverse';
  }
  else if (userInput == 'normal') {
    mode = 'normal';
  }
  else if (userInput == 'muk-jji-ppa') {
    mode = 'muk-jji-ppa';
  }
  else if (userInput == 'computer') {
    mode = 'computer';
  }
  return mode;
}
let mode = 'set the mode';

var main = function (input) {
  let gameResult;
  if (mode == 'set the mode' || input == 'normal' || input == 'reverse' || input == 'muk-jji-ppa' || input == 'computer') {
    let changeMode = setMode(input);
    mode = changeMode;
    if (mode == 'computer') {
      return `${mode} version game mode is set. Press submit to play the game! (do not enter a choice)`;
    }
    return `${mode} version game mode is set. play the game!`;
  }
  // play the game
  let randomItem = generateRandomOption();
  console.log(`random chosen item: ${randomItem}`);
  if (input == '' && mode == 'computer') {
    let computerRandom1 = generateRandomOption();
    let computerRandom2 = generateRandomOption();
    gameResult = playNormal(computerRandom1, computerRandom2);
  }
  else if ((input !== 'scissors') && (input !== 'paper') && (input !== 'stone')) {
    return `Oopppss ${input} is NOT AN OPTION. </br> <p>Please enter scissors, paper, or stone to play the game.</p>`;
  }
  if (mode == 'normal') {
    gameResult = playNormal(randomItem, input);
  }
  else if (mode == 'reverse') {
    gameResult = playReverse(randomItem, input);
  }
  else if (mode == 'muk-jji-ppa') {
    gameResult = koreanVersion(randomItem, input);
  }
  return gameResult;
};
