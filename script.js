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

var main = function (input) {
  SPS = RandomSPS();

  if (input != "Scissors" && input != "Paper" && input != "Stone") {
    yourChoiceMsg = "Please input either Scissors, Paper, or Stone.";
    result = "You did not pick a valid option.";
  }

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

  myOutputValue =
    computerChoiceMsg + "<br><br>" + yourChoiceMsg + "<br><br>" + result;

  return myOutputValue;
};
