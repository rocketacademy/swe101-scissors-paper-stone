//generate a random number to be assigned to Rock, Paper or Scissors
var generateRandomInterger = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInterger = Math.floor(randomDecimal) + 1;
  return randomInterger;
};
//assigning RandomInterger generated to Rock, Paper or Scissors
var generateSPS = function () {
  var possibleSPS = 3;
  var randomSPS = generateRandomInterger(possibleSPS);
  if (randomSPS == 1) {
    return "Rock";
  }
  if (randomSPS == 2) {
    return "Paper";
  }
  if (randomSPS == 3) {
    return "Scissors";
  }
};

//accept input and compare against generated number to check who wins
var main = function (input) {
  var computerSPS = generateSPS();
  console.log(computerSPS);
  var genericOutput =
    "The computer chose " +
    computerSPS +
    "." +
    "<br>" +
    "You chose " +
    input +
    "." +
    "<br>";
  var myOutputValue = genericOutput + "You lose! Bummer";
  //draw conditions
  if (input == computerSPS) {
    myOutputValue = genericOutput + "It's a draw!";
  }
  //winning conditions
  if (input == "Rock" && computerSPS == "Scissors") {
    myOutputValue = genericOutput + "You win!";
  }
  if (input == "Paper" && computerSPS == "Rock") {
    myOutputValue = genericOutput + "You win!";
  }
  if (input == "Scissors" && computerSPS == "Paper") {
    myOutputValue = genericOutput + "You win!";
  }

  return (
    myOutputValue +
    "<br>Now you can type 'Scissors' 'paper' or 'stone' to play another round!"
  );
};
//reject answers that are not Rock, Paper, Scissors
//var acceptableEntry = function (accept) {
//if (input != "Rock" || input != "Paper" || input != "Scissors") {
//return "Invalid entry, try Rock, Paper or Scissors";
//}
//};
