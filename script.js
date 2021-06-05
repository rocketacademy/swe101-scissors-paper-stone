var main = function (input) {
  var computerNum = randomNumber();
  var computerChoice = "null";
  var myOutputValue = "null";

  if (computerNum == 1) {
    computerChoice = "stone";
  }
  if (computerNum == 2) {
    computerChoice = "paper";
  }
  if (computerNum == 3) {
    computerChoice = "scissors";
  }
  if (input == "stone" || input == "reversed paper") {
    if (computerNum == 1) {
      myOutputValue = "Computer puts out " + computerChoice + ", it is a draw!";
    }
    if (computerNum == 2) {
      myOutputValue = "Computer puts out " + computerChoice + ", you lose!";
    }
    if (computerNum == 3) {
      myOutputValue = "Computer puts out " + computerChoice + ", you win!";
    }
  }
  if (input == "paper" || input == "reversed scissors") {
    if (computerNum == 1) {
      myOutputValue = "Computer puts out " + computerChoice + ", you win!";
    }
    if (computerNum == 2) {
      myOutputValue = "Computer puts out " + computerChoice + ", it is a draw!";
    }
    if (computerNum == 3) {
      myOutputValue = "Computer puts out " + computerChoice + ", you lose!";
    }
  }
  if (input == "scissors" || input == "reversed paper") {
    if (computerNum == 1) {
      myOutputValue = "Computer puts out " + computerChoice + ", you lose!";
    }
    if (computerNum == 2) {
      myOutputValue = "Computer puts out " + computerChoice + ", you win!";
    }
    if (computerNum == 3) {
      myOutputValue = "Computer puts out " + computerChoice + ", it is a draw!";
    }
  }
  return myOutputValue;
};

var randomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};
