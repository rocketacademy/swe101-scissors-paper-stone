var main = function (input) {
  // 1 = Scissors, 2 = Paper, 3 = Stone
  var randomAction = randomSPS();
  myOutputValue =
    'Error. Please input only "Scissors", "Paper" or "Stone". Try agin!';
  if (randomAction == 1) {
    actionThrown = "Scissors";
  }
  if (randomAction == 2) {
    actionThrown = "Paper";
  }
  if (randomAction == 3) {
    actionThrown = "Stone";
  }
  console.log("action: " + actionThrown);
  // when user wins
  if (
    (input == "Scissors" && actionThrown == "Paper") ||
    (input == "Stone" && actionThrown == "Scissors") ||
    (input == "Paper" && actionThrown == "Stone")
  ) {
    var myOutputValue = "User win";
  }
  // when program wins
  if (
    (input == "Scissors" && actionThrown == "Stone") ||
    (input == "Paper" && actionThrown == "Scissors") ||
    (input == "Stone" && actionThrown == "Paper")
  ) {
    var myOutputValue = "Program Win";
  }
  if (input == actionThrown) {
    // draw
    var myOutputValue = "It is a draw";
  }
  //REVERSE MODE
  if (
    (input == "Reversed Stone" && actionThrown == "Paper") ||
    (input == "Reversed Paper" && actionThrown == "Scissors") ||
    (input == "Reversed Scissors" && "Stone")
  ) {
    var myOutputValue = "User Win";
  }
  if (
    (input == "Reversed Stone" && actionThrown == "Scissors") ||
    (input == "Reversed Paper" && actionThrown == "Stone") ||
    (input == "Reversed Scissors" && actionThrown == "Paper")
  ) {
    var myOutputValue = "Program Win";
  }
  if (
    (input == "Reversed Stone" && actionThrown == "Stone") ||
    (input == "Reversed Paper" && actionThrown == "Paper") ||
    (input == "Reversed Scissors" && actionThrown == "Scissors")
  ) {
    var myOutputValue = "It is a draw";
  }
  return myOutputValue;
};
//create random action
var randomSPS = function () {
  var randomDecimal = Math.random() * 3;
  var randomIntegar = Math.floor(randomDecimal);
  var actionChoice = randomIntegar + 1;
  return actionChoice;
};
