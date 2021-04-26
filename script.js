// Defining my global variables
var winCounter = 0;
var gamesPlayed = 0;
var winRatio = 0;

var main = function (input) {
  var myOutputValue = "Default output value";
  //Only kickstart the game if the user's input has been validated to either be scissors, paper, or stone
  if (input == "scissors" || input == "paper" || input == "stone") {
    var gameOutcome = playGame(input);
    winRatio = Math.floor((winCounter / gamesPlayed) * 1000) / 10;
    winRatioOutput = `<br><br>So far, you have won games ${winRatio}% of the time.<br>Note: ties do not count as wins.`;
    myOutputValue = gameOutcome + winRatioOutput;
    return myOutputValue;
  } else {
    myOutputValue =
      'Please input either "scissors", "paper", or "stone". There are no other acceptable inputs 😟.';
    return myOutputValue;
  }
};

var computerChoiceGenerator = function () {
  var randomOption = Math.floor(Math.random() * 3 + 1);
  if (randomOption == 1) {
    return "scissors";
  } else if (randomOption == 2) {
    return "paper";
  } else if (randomOption == 3) {
    return "stone";
  }
  return "something broke";
};

var playGame = function (input) {
  var computerChoice = computerChoiceGenerator();
  // the game starts, so add 1 to the game counter regardless of comupter choice
  gamesPlayed += 1;

  // scenario where computer plays scissors
  if (computerChoice == "scissors") {
    if (input == "paper") {
      return (myOutputValue = `You lose!😭 <br> 
      The computer played ${computerChoice}✂️, <br>
      and you played ${input}📃.`);
    } else if (input == "scissors") {
      return (myOutputValue = `You tie!😊<br> 
      The computer played ${computerChoice}✂️, <br> 
      and you played ${input}✂️.`);
    } else if (input == "stone") {
      // Only add one to win counter if the user wins
      winCounter += 1;
      return (myOutputValue = `You win!🤩 <br>
      The computer played ${computerChoice}✂️<br>
       and you played ${input}💎.`);
    }

    //Scenario where computer plays paper
  } else if (computerChoice == "paper") {
    if (input == "paper") {
      return (myOutputValue = `You tie!😊<br>
       The computer played ${computerChoice}📃<br>
       and you played ${input}📃.`);
    } else if (input == "scissors") {
      // Only add one to win counter if the user wins
      winCounter += 1;
      return (myOutputValue = `You win!🤩 <br>
      The computer played ${computerChoice}📃<br>
       and you played ${input}✂️.`);
    } else if (input == "stone") {
      return (myOutputValue = `You lose!😭 <br>
      The computer played ${computerChoice}📃 <br>
      and you played ${input}💎.`);
    }

    //Scenario where computer plays stone
  } else if ((computerChoice = "stone")) {
    if (input == "paper") {
      // Only add one to win counter if the user wins
      winCounter += 1;
      return (myOutputValue = `You win!🤩 <br>
      The computer played ${computerChoice}💎 <br>
      and you played ${input}📃.`);
    } else if (input == "scissors") {
      return (myOutputValue = `You lose!😭 <br>
      The computer played ${computerChoice}💎 <br>
      and you played ${input}✂️.`);
    } else if (input == "stone") {
      return (myOutputValue = `You tie!😊 <br>
      The computer played ${computerChoice}💎 <br>
      and you played ${input}💎.`);
    }
  }
};
