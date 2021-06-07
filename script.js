/**
 * scissors-paper-stone
 */

//The program internally randomly chooses 'scissors', 'paper', or 'stone'.
//define function for generating a random integer
var generateRandomInteger = function (max) {
  return 1;
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;
  console.log(randomNumber);
  return randomNumber;
};

//assign the three objects to the randomly generated integers ranging from 1-3.
var programObject = function () {
  var totalObjects = 3;
  var randomObjectNum = generateRandomInteger(totalObjects);

  if (randomObjectNum == 1) {
    console.log("paper");
    return "paper";
  } else if (randomObjectNum == 2) {
    console.log("stone");
    return "stone";
  } else if (randomObjectNum == 3) {
    console.log("scissors");
    return "scissors";
  }
};

//user inputs one of 'scissors', 'paper', or 'stone'.

//the program outputs whether the user won, the program won, or it's a draw.

//rules: scissors beats paper, paper beats stone, stone beats scissors, draw if both parties choose the same object.

//rules for reversed SPS: reversed stone beats paper, reversed scissors beats stone, reversed paper beats scissors, draw if both parties choose the same object.

var currentGameMode = "submit username";
var userWon = 0;
var computerWon = 0;
var draw = 0;
var turnsPlayed = userWon + computerWon + draw;
var percentageWon = 0;
var userName = "";
var myOutputValue = "";

var main = function (input) {
  var program = programObject();

  //when game mode is 'submit username', user has to enter username.
  if (currentGameMode == "submit username") {
    userName = input;
    // after user enters username, game mode changes to 'scissors-paper-stone'
    currentGameMode = "scissors-paper-stone";
    myOutputValue = `Hello ${userName}! <br>Let's play scissors ✂️- paper 🗒- stone 🥌!<br>To play, enter scissors, paper, or stone, then click submit.`;
  } else if (currentGameMode == "scissors-paper-stone") {
    //format the input object name
    var inputObjectFormatted = function (input) {
      if (input == "scissors") {
        return "scissors ✂️";
      }
      if (input == "paper") {
        return "paper 🗒";
      }
      if (input == "stone") {
        return "stone 🥌";
      }
    };

    var inputObject = inputObjectFormatted(input);

    // format program output object name
    var outputObjectFormatted = function (program) {
      if (program == "scissors") {
        return "scissors✂️";
      }
      if (program == "paper") {
        return "paper🗒";
      }
      if (program == "stone") {
        return "stone 🥌";
      }

      return program;
    };

    var outputObject = outputObjectFormatted(program);

    turnsPlayed = turnsPlayed + 1;

    //game rules - how to win
    if (
      (input == "scissors" && program == "paper") ||
      (input == "paper" && program == "stone") ||
      (input == "stone" && program == "scissors")
    ) {
      userWon = userWon + 1;
      computerWon = computerWon;
      draw = draw;
      percentageWon = (userWon / turnsPlayed) * 100;

      if (percentageWon >= 50) {
        return (myOutputValue = `You chose ${inputObject} <br> The computer chose ${outputObject}. <br><br>You win! Congrats!<br><br>So far ${userName}, you have been winning ${userWon}/${turnsPlayed} turns (or ${percentageWon}%). Doing well!`);
      } else if (percentageWon < 50) {
        return (myOutputValue = `You chose ${inputObject} <br> The computer chose ${outputObject}. <br><br>You win! Congrats!<br><br>So far ${userName}, you have been winning ${userWon}/${turnsPlayed} turns (or ${percentageWon}%). <br>Keep up the winning streak to boost your stats!`);
      }
    }

    //game rules - how to lose

    if (
      (input == "paper" && program == "scissors") ||
      (input == "stone" && program == "paper") ||
      (input == "scissors" && program == "stone")
    ) {
      userWon = userWon;
      computerWon = computerWon + 1;
      draw = draw;
      percentageWon = (userWon / turnsPlayed) * 100;

      if (percentageWon >= 50) {
        return (myOutputValue = `You chose ${inputObject} <br> The computer chose ${outputObject}. <br><br>You lose! Bummer.<br><br>So far ${userName}, you have been winning ${userWon}/${turnsPlayed} turns (or ${percentageWon}%).Still doing well!`);
      } else if (percentageWon < 50) {
        return (myOutputValue = `You chose ${inputObject} <br> The computer chose ${outputObject}. <br>You lose! Bummer.<br><br>So far ${userName}, you have been winning ${userWon}/${turnsPlayed} turns (or ${percentageWon}%). Hope your luck turns!`);
      }
    }

    //game rules - how to draw
    if (
      (input == "paper" && program == "paper") ||
      (input == "stone" && program == "stone") ||
      (input == "scissors" && program == "scissors")
    ) {
      userWon = userWon;
      computerWon = computerWon;
      draw = draw + 1;
      percentageWon = (userWon / turnsPlayed) * 100;

      if (percentageWon >= 50) {
        return (myOutputValue = `You chose ${inputObject} <br> The computer chose ${outputObject}. <br><br>It's a draw!<br><br>So far ${userName}, you have been winning ${userWon}/${turnsPlayed} turns (or ${percentageWon}%). Still doing well!`);
      } else if (percentageWon < 50) {
        return (myOutputValue = `You chose ${inputObject} <br> The computer chose ${outputObject}. <br>It's a draw!<br><br>So far ${userName}, you have been winning ${userWon}/${turnsPlayed} turns (or ${percentageWon}%). Hope your luck turns!`);
      }
    }

    if (input == "reverse") {
      turnsPlayed = turnsPlayed - 1;
      currentGameMode = "reverse SPS";
      return (myOutputValue =
        "You are now playing reverse scissors-paper-stone!");
    }

    //input validation: if user doees not input any of three valid options, system should advise on correct input options.

    myOutputValue = `Our program does not recognise your input "${input}". <br> Please try again by entering one of the following: scissors, paper, or stone.`;
  } else if (currentGameMode == "reverse SPS") {
    //format the input object name
    var inputObjectFormatted = function (input) {
      if (input == "scissors") {
        return "scissors ✂️";
      }
      if (input == "paper") {
        return "paper 🗒";
      }
      if (input == "stone") {
        return "stone 🥌";
      }
    };

    var inputObject = inputObjectFormatted(input);

    // format program output object name
    var outputObjectFormatted = function (program) {
      if (program == "scissors") {
        return "scissors✂️";
      }
      if (program == "paper") {
        return "paper🗒";
      }
      if (program == "stone") {
        return "stone 🥌";
      }

      return program;
    };

    var outputObject = outputObjectFormatted(program);

    turnsPlayed = turnsPlayed + 1;

    //reverse game rules - how to win
    if (
      (input == "stone" && program == "paper") ||
      (input == "scissors" && program == "stone") ||
      (input == "paper" && program == "scissors")
    ) {
      userWon = userWon + 1;
      computerWon = computerWon;
      draw = draw;
      percentageWon = (userWon / turnsPlayed) * 100;

      if (percentageWon >= 50) {
        return (myOutputValue = `You chose ${inputObject} <br> The computer chose ${outputObject}. <br><br>You win! Congrats!<br><br>So far ${userName}, you have been winning ${userWon}/${turnsPlayed} turns (or ${percentageWon}%). Doing well!`);
      } else if (percentageWon < 50) {
        return (myOutputValue = `You chose ${inputObject} <br> The computer chose ${outputObject}. <br><br>You win! Congrats!<br><br>So far ${userName}, you have been winning ${userWon}/${turnsPlayed} turns (or ${percentageWon}%). <br>Keep up the winning streak to boost your stats!`);
      }
    }

    // reverse game rules - how to lose
    else if (
      (input == "paper" && program == "stone") ||
      (input == "stone" && program == "scissors") ||
      (input == "scissors" && program == "paper")
    ) {
      userWon = userWon;
      computerWon = computerWon + 1;
      draw = draw;
      percentageWon = (userWon / turnsPlayed) * 100;

      if (percentageWon >= 50) {
        return (myOutputValue = `You chose ${inputObject} <br> The computer chose ${outputObject}. <br><br>You lose! Bummer.<br><br>So far ${userName}, you have been winning ${userWon}/${turnsPlayed} turns (or ${percentageWon}%).Still doing well!`);
      } else if (percentageWon < 50) {
        return (myOutputValue = `You chose ${inputObject} <br> The computer chose ${outputObject}. <br>You lose! Bummer.<br><br>So far ${userName}, you have been winning ${userWon}/${turnsPlayed} turns (or ${percentageWon}%). Hope your luck turns!`);
      }
    }

    //reverse game rules - how to draw
    else if (
      (input == "paper" && program == "paper") ||
      (input == "stone" && program == "stone") ||
      (input == "scissors" && program == "scissors")
    ) {
      userWon = userWon;
      computerWon = computerWon;
      draw = draw + 1;
      percentageWon = (userWon / turnsPlayed) * 100;

      if (percentageWon >= 50) {
        return (myOutputValue = `You chose ${inputObject} <br> The computer chose ${outputObject}. <br><br>It's a draw!<br><br>So far ${userName}, you have been winning ${userWon}/${turnsPlayed} turns (or ${percentageWon}%). Still doing well!`);
      } else if (percentageWon < 50) {
        return (myOutputValue = `You chose ${inputObject} <br> The computer chose ${outputObject}. <br>It's a draw!<br><br>So far ${userName}, you have been winning ${userWon}/${turnsPlayed} turns (or ${percentageWon}%). Hope your luck turns!`);
      }

      // reverse game - invalid input
      else
        return (myOutputValue = `Our program does not recognise your input "${input}". <br> Please try again by entering one of the following: scissors, paper, or stone.`);
    }
  }

  return myOutputValue;
};
