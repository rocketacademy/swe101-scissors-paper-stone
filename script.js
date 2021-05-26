var main = function (input) {
  var RandChoice = RandRoll();
  console.log(RandChoice);
  var myOutputValue = "Wrong input! Please only input Scissors, Rock or Paper.";
  //1 is paper, 2 is rock, and 3 is scissors
  if (input == "scissors" && RandChoice == 1) {
    myOutputValue =
      "The computer chose paper." +
      "<br>" +
      "You chose scissors and therefore you have won!" +
      "<br>" +
      " You can type again to play again.";
  }
  if (input == "scissors" && RandChoice == 2) {
    myOutputValue =
      "The computer chose rock." +
      "<br>" +
      "You chose scissors and therefore you have lost. :(" +
      "<br>" +
      "Try again?";
  }
  if (input == "scissors" && RandChoice == 3) {
    myOutputValue = "You both have chosen scissors." + "<br>" + "Its a draw!";
  }
  if (input == "paper" && RandChoice == 2) {
    myOutputValue =
      "The computer chose rock." +
      "<br>" +
      "You chose paper and therefore you have won!" +
      "<br>" +
      "You can type again to play again.";
  }
  if (input == "paper" && RandChoice == 3) {
    myOutputValue =
      "The computer chose scissors." +
      "<br>" +
      "You chose paper and therefore you have lost. :(" +
      "<br>" +
      "Try again?";
  }
  if (input == "paper" && RandChoice == 1) {
    myOutputValue = "You both have chosen paper." + "<br>" + "Its a draw!";
  }
  if (input == "rock" && RandChoice == 3) {
    myOutputValue =
      "The computer chose scissors." +
      "<br>" +
      "You chose rock and therefore you have won!" +
      "<br>" +
      "You can type again to play again.";
  }
  if (input == "rock" && RandChoice == 2) {
    myOutputValue = "You both have chosen rock." + "<br>" + "Its a draw!";
  }
  if (input == "rock" && RandChoice == 1) {
    myOutputValue =
      "The computer chose paper." +
      "<br>" +
      "You chose rock and therefore you have lost. :(" +
      "<br>" +
      "Try again?";
  }
  return myOutputValue;
};

var RandRoll = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var RandNumber = randomInteger + 1;
  return RandNumber;
};
