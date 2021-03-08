
// function to generate random number
function random(max) {
  let randomNum = Math.floor(Math.random() * max) + 1;
  return randomNum;
}
// create function to generate random item
function randomOption() {
  let randomItemNum = random(3);
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

//**STAGE-2 Win-Loss Record */
let winningCountComp = null;
let winningCountPlayer = null;
let drawCount = null;
// **

// play normal SPS
function playNormal(randomItem, input) {
  let result;
  if ((randomItem == 'scissors') && (input == 'paper')) {
    winningCountComp += 1;
    result = `computer chose ${randomItem} ✄ <p>and you chose ${input} 📃.</p> COMPUTER wins! 💻. so far won ${winningCountComp} number of times.`;
  }
  else if ((randomItem == 'scissors') && (input == 'stone')) {
    winningCountPlayer += 1;
    result = `computer chose ${randomItem} ✄ <p>and you chose ${input} 💎. YOU win!. 🏆</p> so far, ${userName} won ${winningCountPlayer} number of times.`;
  }
  else if ((randomItem == 'paper') && (input == 'stone')) {
    winningCountComp += 1;
    result = `computer chose ${randomItem} 📃 <p> and you chose ${input} 💎. COMPUTER wins! 💻. so far won ${winningCountComp} number of times.`;
  }
  else if ((randomItem == 'paper') && (input == 'scissors')) {
    winningCountPlayer += 1;
    result = `computer chose ${randomItem} 📃 <p>and you chose ${input} ✄. YOU win! 🏆. </p>so far, ${userName} won ${winningCountPlayer} number of times.`;
  }
  else if ((randomItem == 'stone') && (input == 'scissors')) {
    winningCountComp += 1;
    result = `computer chose ${randomItem}  💎 <p>and you chose ${input}. </p>COMPUTER wins! 💻. so far won ${winningCountComp} number of times.`;
  }
  else if ((randomItem == 'stone') && (input == 'paper')) {
    winningCountPlayer += 1;
    result = `computer chose ${randomItem} 💎 <p>and you chose ${input}. </p>YOU win! 🏆. so far, ${userName} won ${winningCountPlayer} number of times.`;
  }
  else if (((randomItem == 'scissors') && (input == 'scissors')) || ((randomItem == 'paper') && (input == 'paper')) || ((randomItem == 'stone') && (input == 'stone'))) {
    drawCount += 1;
    result = `computer chose ${randomItem} and you chose ${input}. <p>It's a DRAW!.</p>so far ${drawCount} number of draws.`;
  }
  return result;
}
// play reverse SPS
function playReverse(randomItem, input) {
  let result;
  if ((randomItem == 'scissors') && (input == 'paper')) {
    winningCountComp += 1;
    result = `computer chose ${randomItem} ✄ <p>and you chose ${input} 📃.YOU win!. 🏆</p> so far, ${userName} won ${winningCountPlayer} number of times.`;
  }
  else if ((randomItem == 'scissors') && (input == 'stone')) {
    winningCountPlayer += 1;
    result = `computer chose ${randomItem} ✄ <p>and you chose ${input} 💎. </p> COMPUTER wins! 💻. so far won ${winningCountComp} number of times.`;
  }
  else if ((randomItem == 'paper') && (input == 'stone')) {
    winningCountComp += 1;
    result = `computer chose ${randomItem} 📃 <p> and you chose ${input} 💎.YOU win! 🏆. </p>so far, ${userName} won ${winningCountPlayer} number of times. `;
  }
  else if ((randomItem == 'paper') && (input == 'scissors')) {
    winningCountPlayer += 1;
    result = `computer chose ${randomItem} 📃 <p>and you chose ${input} ✄. COMPUTER wins! 💻. so far won ${winningCountComp} number of times. `;
  }
  else if ((randomItem == 'stone') && (input == 'scissors')) {
    winningCountComp += 1;
    result = `computer chose ${randomItem}  💎 <p>and you chose ${input}. YOU win! 🏆. so far, ${userName} won ${winningCountPlayer} number of times.`;
  }
  else if ((randomItem == 'stone') && (input == 'paper')) {
    winningCountPlayer += 1;
    result = `computer chose ${randomItem} 💎 <p>and you chose ${input}. </p>COMPUTER wins! 💻. so far won ${winningCountComp} number of times.</p>`;
  }
  else if (((randomItem == 'scissors') && (input == 'scissors')) || ((randomItem == 'paper') && (input == 'paper')) || ((randomItem == 'stone') && (input == 'stone'))) {
    drawCount += 1;
    result = `computer chose ${randomItem} and you chose ${input}. <p>It's a DRAW!.</p>so far ${drawCount} number of draws.`;
  }
  return result;
}

// tracking state of the game
let mode = 'normal';

var main = function (input) {
  let gameResult;
  if (input == 'reverse') {
    mode = 'reverse';
    return gameResult = 'reverse mode set. play the game!'
  }
  else if (input == 'normal') {
    mode = 'normal';
    return gameResult = 'normal mode set. play the game!'
  }

  console.log(mode);

  // play the game
  let randomItem = randomOption();
  console.log(`random chosen item: ${randomItem}`);

  if (mode == 'normal') {
    if ((input !== 'scissors') && (input !== 'paper') && (input !== 'stone')) {
      gameResult = `Oopppss ${input} is NOT AN OPTION. </br> <p>Please enter Scissors, Paper, or Stone to play the game.</p>`;
    }
    gameResult = playNormal(randomItem, input);
  }

  else if (mode == 'reverse') {
    if ((input !== 'scissors') && (input !== 'paper') && (input !== 'stone')) {
      gameResult = `Oopppss ${input} is NOT AN OPTION. </br> <p>Please enter Scissors, Paper, or Stone to play the game.</p>`;
    }
    gameResult = playReverse(randomItem, input);
  }
  return gameResult;
};
