// Defining my global variables
var winCounter = 0;
var gamesPlayed = 0;
var winRatio = 0;
var gameMode = "normal";

// username related global variables
var nameCollected = false;
var userName = "";

var main = function (input) {
  var myOutputValue = "Default output value";
  // First we need to get the user's name:
  if (nameCollected == false) {
    userName = input;
    //set nameCollected to be true, so that we stop entering this section when main is next called (i.e. when the user hits the submit button)
    nameCollected = true;
    return `Hello ${userName}😊, welcome to our scissors paper stone game!<br>Now that we have your name, let's start playing.<br>Enter 'scissors', 'paper', or 'stone'.`;
  }

  // Next, determine which game mode to enter
  if (input == "reverse" || input == "normal") {
    if (gameMode != input) {
      gameMode = input;
      return `You've found the secret way to change game modes 😊! You are now playing with '${gameMode}' rules.<br>
    To change game modes again, enter 'normal' for normal game mode, and 'reverse' for reverse game mode at any time.`;
    }
    return `You're already playing in ${gameMode} mode. <br><br>Either choose another mode, or continue playing by entering either 'scissors', 'paper' or 'stone'.`;
  }

  //Only kickstart the game if the user's input has been validated to either be scissors, paper, or stone
  if (input == "scissors" || input == "paper" || input == "stone") {
    // Choose the game rules to play the game depending on game mode selected by user:
    var gameOutcome = "";
    if (gameMode == "normal") {
      gameOutcome = playNormalGame(input);
    } else if (gameMode == "reverse") {
      gameOutcome = playReverseGame(input);
    }

    // Regardless of game mode, keep on calculating win ratio
    winRatio = Math.floor((winCounter / gamesPlayed) * 1000) / 10;
    winRatioOutput = `<br><br>${userName}, so far, you have won games ${winRatio}% of the time.<br>Note: ties do not count as wins.`;

    myOutputValue =
      gameOutcome +
      winRatioOutput +
      `<br>This time, you played the game in '${gameMode}' mode.`;

    //Return full game message
    return myOutputValue;
  } else if (input != "reverse" || input != "normal") {
    // Validation error message
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

var playNormalGame = function (input) {
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

// Game play with reversed rules
var playReverseGame = function (input) {
  var computerChoice = computerChoiceGenerator();
  // the game starts, so add 1 to the game counter regardless of comupter choice
  gamesPlayed += 1;

  // scenario where computer plays scissors
  if (computerChoice == "scissors") {
    if (input == "paper") {
      // Only add one to win counter if the user wins
      winCounter += 1;
      return (myOutputValue = `You win!🤩 <br> 
      The computer played ${computerChoice}✂️, <br>
      and you played ${input}📃.`);
    } else if (input == "scissors") {
      return (myOutputValue = `You tie!😊<br> 
      The computer played ${computerChoice}✂️, <br> 
      and you played ${input}✂️.`);
    } else if (input == "stone") {
      return (myOutputValue = `You lose!😭 <br>
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
      return (myOutputValue = `You lose!😭 <br>
      The computer played ${computerChoice}📃<br>
       and you played ${input}✂️.`);
    } else if (input == "stone") {
      // Only add one to win counter if the user wins
      winCounter += 1;
      return (myOutputValue = `You win!🤩 <br>
      The computer played ${computerChoice}📃 <br>
      and you played ${input}💎.`);
    }

    //Scenario where computer plays stone
  } else if ((computerChoice = "stone")) {
    if (input == "paper") {
      return (myOutputValue = `You lose!😭 <br>
      The computer played ${computerChoice}💎 <br>
      and you played ${input}📃.`);
    } else if (input == "scissors") {
      // Only add one to win counter if the user wins
      winCounter += 1;
      return (myOutputValue = `You win!🤩 <br>
      The computer played ${computerChoice}💎 <br>
      and you played ${input}✂️.`);
    } else if (input == "stone") {
      return (myOutputValue = `You tie!😊 <br>
      The computer played ${computerChoice}💎 <br>
      and you played ${input}💎.`);
    }
  }
};
