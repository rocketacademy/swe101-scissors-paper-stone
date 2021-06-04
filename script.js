var RandomSPS = function () {
  randomDecimal = Math.random();
  randomInteger0to2 = Math.floor(randomDecimal * 3);
  RandomInterger1to3 = randomInteger0to2 + 1;
  if (RandomInterger1to3 == 1) {
    computerChoiceMsg = "The computer chose Scissors!";
    return "Scissors";
  }
  if (RandomInterger1to3 == 2) {
    computerChoiceMsg = "The computer chose Paper!";
    return "Paper";
  }
  if (RandomInterger1to3 == 3) {
    computerChoiceMsg = "The computer chose Stone!";
    return "Stone";
  }
};

var reverseModeStatus = false;

var main = function (input) {
  SPS = RandomSPS();
  if (input == "Reverse") {
    reverseModeStatus = true;
    return "Secret Reverse Mode On!";
  }

  if (input == "Reverse Off") {
    reverseModeStatus = false;
    return "Secret Reverse Mode Off!";
  }

  if (
    input != "Scissors" &&
    input != "Paper" &&
    input != "Stone" &&
    input != "Reverse" &&
    input != "Reverse Off"
  ) {
    yourChoiceMsg = "Please input either Scissors, Paper, or Stone.";
    result = "You did not pick a valid option.";
  }

  if (!reverseModeStatus) {
    if (SPS == "Scissors") {
      if (input == "Scissors") {
        yourChoiceMsg = "You chose Scissors!";
        result = "It is a draw!";
      }
      if (input == "Paper") {
        yourChoiceMsg = "You chose Paper!";
        result = "You lose!";
      }
      if (input == "Stone") {
        yourChoiceMsg = "You chose Stone!";
        result = "You win!";
      }
    }

    if (SPS == "Paper") {
      if (input == "Paper") {
        yourChoiceMsg = "You chose Paper!";
        result = "It is a draw!";
      }
      if (input == "Stone") {
        yourChoiceMsg = "You chose Stone!";
        result = "You lose!";
      }
      if (input == "Scissors") {
        yourChoiceMsg = "You chose Scissors!";
        result = "You win!";
      }
    }

    if (SPS == "Stone") {
      if (input == "Stone") {
        yourChoiceMsg = "You chose Stone!";
        result = "It is a draw!";
      }
      if (input == "Scissors") {
        yourChoiceMsg = "You chose Scissors!";
        result = "You lose!";
      }
      if (input == "Paper") {
        yourChoiceMsg = "You chose Paper!";
        result = "You win!";
      }
    }
  }

  if (reverseModeStatus) {
    if (SPS == "Scissors") {
      if (input == "Scissors") {
        yourChoiceMsg = "You chose Scissors!";
        result = "It is a draw!";
      }
      if (input == "Stone") {
        yourChoiceMsg = "You chose Stone!";
        result = "You lose!";
      }
      if (input == "Paper") {
        yourChoiceMsg = "You chose Paper!";
        result = "You win!";
      }
    }

    if (SPS == "Paper") {
      if (input == "Paper") {
        yourChoiceMsg = "You chose Paper!";
        result = "It is a draw!";
      }
      if (input == "Scissors") {
        yourChoiceMsg = "You chose Scissors!";
        result = "You lose!";
      }
      if (input == "Stone") {
        yourChoiceMsg = "You chose Stone!";
        result = "You win!";
      }
    }

    if (SPS == "Stone") {
      if (input == "Stone") {
        yourChoiceMsg = "You chose Stone!";
        result = "It is a draw!";
      }
      if (input == "Paper") {
        yourChoiceMsg = "You chose Paper!";
        result = "You lose!";
      }
      if (input == "Scissors") {
        yourChoiceMsg = "You chose Scissors!";
        result = "You win!";
      }
    }
  }

  myOutputValue =
    computerChoiceMsg + "<br><br>" + yourChoiceMsg + "<br><br>" + result;

  return myOutputValue;
};
