// Scissors-Paper-Stone Game V3 (Add Korean SPS Game Mode & Ability to Swtich Versions)

// Set Default game mode
var mode = 'original';

// Get the user's name
var userName = prompt('Key in your name to begin.');

// Create array for options available
var compOptions = ['scissors ✂', 'paper 🗒', 'stone 🗻'];
var userOptions = ['scissors', 'paper', 'stone', 'korean', 'original', 'reverse'];

// Initialise user's score counter (win/draws/win-rate)
var totalTurns = 1;
var scoreCounter = 0;
var drawCounter = 0;
var winRate = 0;

// Track the latest winner for Korean version
var latestWinner = 'To be decided... Play again!';

// Create a random number generator to randomly select one of the options
var randomNumber = function () {
  var randInt = Math.floor(Math.random() * 3);
  return randInt;
};

// Create game mode selector
var gameModeSelector = function (input, computerChoice) {
  var outputValue = `The computer chose ${computerChoice} <br> You chose ${input} `;
  // Activate Original Game Mode if input is 'orginal'
  if (input == 'original') {
    mode = 'original';
    outputValue = 'Back to the start.<br>';
  }
  // Activate Reverse Game Mode if input is 'reverse'
  if (input == 'reverse') {
    mode = 'reverse';
    outputValue = 'Winners are now losers. Losers are now winners.<br>';
  }

  // Activate Korean Game Mode if input is 'korean'
  if (input == 'korean') {
    mode = 'korean';
    outputValue = '여보세요! You have selected the muk-jji-ppa version. This might take a while. <br>';
  }
  return outputValue;
};

// --------------------------------------------------------
// Original Game Mode
// --------------------------------------------------------
var originalGameMode = function (input, computerChoice) {
  var outputValue = `The computer chose ${computerChoice} <br> You chose ${input} `;

  // Option to select game mode
  outputValue = gameModeSelector(input, computerChoice);

  // 1) Scissors Wins Paper
  if (input == 'scissors' && computerChoice == 'paper 🗒') {
    scoreCounter += 1;
    outputValue += '✂ <br> <br> You win! Awesome.';
  } else if (computerChoice == 'scissors ✂' && input == 'paper') {
    outputValue += '🗒 <br> <br> You lose, bummer..';
  }

  // 2) Paper Wins Stone
  if (input == 'paper' && computerChoice == 'stone 🗻') {
    scoreCounter += 1;
    outputValue += '🗒 <br> <br> You win! Awesome.';
  } else if (computerChoice == 'paper 🗒' && input == 'stone') {
    outputValue += '🗻 <br> <br> You lose, bummer..';
  }

  // 3) Stone Wins Scissors
  if (input == 'stone' && computerChoice == 'scissors ✂') {
    scoreCounter += 1;
    outputValue += '🗻 <br> <br>You win! Awesome.';
  } else if (computerChoice == 'stone 🗻' && input == 'scissors') {
    outputValue += '✂ <br> <br> You lose, bummer..';
  }

  // 4) Draw if they are the same
  if ((computerChoice == 'stone 🗻' && input == 'stone') || (computerChoice == 'scissors ✂' && input == 'scissors') || (computerChoice == 'paper 🗒' && input == 'paper')) {
    drawCounter += 1;
    outputValue += '<br><br> It is a draw!<br>';
  }

  return outputValue;
};

// --------------------------------------------------------
// Reverse Game Mode
// --------------------------------------------------------
var reverseGameMode = function (input, computerChoice) {
  var outputValue = `The computer chose ${computerChoice} <br> You chose ${input} `;

  // Option to select game mode
  outputValue = gameModeSelector(input, computerChoice);

  // Conditions for determining a winner:
  // 1) Paper Wins Scissors
  if (input == 'scissors' && computerChoice == 'paper 🗒') {
    outputValue += '✂ <br> <br> You lose, bummer.. We are now in REVERSE mode.';
  } else if (computerChoice == 'scissors ✂' && input == 'paper') {
    scoreCounter += 1;
    outputValue += '🗒  <br> <br> You win! Awesome. We are now in REVERSE mode.';
  }

  // 2) Stone Wins Paper
  if (input == 'paper' && computerChoice == 'stone 🗻') {
    outputValue += '🗒  <br> <br> You lose, bummer.. We are now in REVERSE mode.';
  } else if (computerChoice == 'paper 🗒' && input == 'stone') {
    scoreCounter += 1;
    outputValue += '🗻 <br> <br> You win! Awesome. We are now in REVERSE mode.';
  }

  // 3) Scissors Wins Stone
  if (input == 'stone' && computerChoice == 'scissors ✂') {
    outputValue += '🗻 <br> <br> You lose, bummer.. We are now in REVERSE mode.';
  } else if (computerChoice == 'stone 🗻' && input == 'scissors') {
    scoreCounter += 1;
    outputValue += '✂ <br> <br>You win! Awesome. We are now in REVERSE mode.';
  }

  // 4) Draw if they are the same
  if ((computerChoice == 'stone 🗻' && input == 'stone') || (computerChoice == 'scissors ✂' && input == 'scissors') || (computerChoice == 'paper 🗒' && input == 'paper')) {
    drawCounter += 1;
    outputValue += '<br><br> It is a draw!<br> We are now in REVERSE mode.';
  }

  return outputValue;
};
// --------------------------------------------------------
// Korean Game Mode (upgraded SPS version)
// --------------------------------------------------------
var koreanGameMode = function (input, computerChoice) {
  // After 1st round of SPS, winner shouts "muk-jji-ppa!"
  var outputValue = originalGameMode(input, computerChoice);

  // Produce shout of muk-jji-ppa by the winner
  if (outputValue.includes('win')) {
    latestWinner = `${userName}!`;
    outputValue += `<br>${userName} shouts, "MUK-JJI-PPA!"<br>`;
  } else if (outputValue.includes('lose')) {
    latestWinner = 'Computer!';
    outputValue += '<br>Computer shouts, "MUK-JJI-PPA!"<br>';
  }

  // Continue until it is the same item
  if ((computerChoice == 'stone 🗻' && input == 'stone') || (computerChoice == 'scissors ✂' && input == 'scissors') || (computerChoice == 'paper 🗒' && input == 'paper')) {
    drawCounter += 1;
    outputValue += `<br>And the winner is...<br> ${latestWinner}<br>`;
  }
  // The immediate winner prior to this becomes the actual winner

  return outputValue;
};

var main = function (input) {
  // Generate a random selection of SPS for the computer
  var randomSelector = randomNumber();
  var computerChoice = compOptions[randomSelector];
  computerChoice = 'scissors ✂'; // Set early return

  // Ensure user only keys in the available options
  if (userOptions.includes(input) !== true) {
    return 'Oops. Please enter one of these options only: scissors, paper, stone';
  }

  var outputValue = `The computer chose ${computerChoice} <br>
                       You chose ${input} `;

  // Original Game Mode is activated
  if (mode == 'original') {
    outputValue = originalGameMode(input, computerChoice);
  // Reverse game mode is activated
  } else if (mode == 'reverse') {
    outputValue = reverseGameMode(input, computerChoice);
  // Korean game mode is activated
  } else if (mode == 'korean') {
    outputValue = koreanGameMode(input, computerChoice);
  }

  // Calculate winning rate
  winRate = (scoreCounter / totalTurns) * 100;

  // Include more game information
  var gameInfo = ` <br>So far ${userName}, you've been winning ${scoreCounter} / ${totalTurns} turns. <br><br>
  That is a win-rate of ${winRate.toFixed(1)}%. <br>
  You also drew ${drawCounter} times.`;

  // Keep track of number of rounds played
  if (input == 'scissors' || input == 'paper' || input == 'stone') {
    totalTurns += 1;
  }

  // Debugging
  console.log('Score Counter');
  console.log(scoreCounter);
  console.log('Game mode');
  console.log(mode);
  console.log('Latest Winner');
  console.log(latestWinner);

  return outputValue.concat(gameInfo);
};
