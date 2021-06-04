var main = function (input) {
  if (input != "scissors" && input != "papaer" && input != "stone") {
    return "Please type 'scissors', 'paper' or 'stone' to play the game.";
  }

  var diceRoll = function () {
    var randomDecimal = Math.random() * 3;
    var randomInteger = Math.floor(randomDecimal);
    var DiceNumber = randomInteger + 1;
    return DiceNumber;
  };

  var computernumber = diceRoll();

  var GENERATECOMPUTERACTION = function (computernumber) {
    if (computernumber == 1) {
      return "Computer chose scissors ✂.";
    }
    if (computernumber == 2) {
      return "Computer chose paper 🧻.";
    }
    if (computernumber == 3) {
      return "Computer chose stone 🗿.";
    }
  };

  var inputnumber = 0;

  if (input == "scissors") {
    var inputnumber = 1;
  }

  if (input == "paper") {
    var inputnumber = 2;
  }

  if (input == "stone") {
    var inputnumber = 3;
  }

  var GENERATEUSERACTION = function (input) {
    if (input == "scissors") {
      return "You chose scissors ✂️.";
    }
    if (input == "paper") {
      return "You chose paper 🧻.";
    }
    if (input == "stone") {
      return "You chose stone 🗿.";
    }
  };

  var GENERATEOUTCOMEDESCRIPTION = function (a, b) {
    console.log(a, b);
    if (a == b || a == b + 2) {
      return "It is a draw.";
    }
    if (a == b + 1 || a + 2 == b) {
      return "You lost.";
    }
    if (a == b - 1) {
      return "You won. :>";
    }
  };

  var myOutputValue =
    GENERATEUSERACTION(input) +
    " <br>" +
    GENERATECOMPUTERACTION(computernumber) +
    " <br>" +
    GENERATEOUTCOMEDESCRIPTION(inputnumber, computernumber) +
    "<br> <br> Now you can type 'scissors', 'paper' or 'stone' to play another round!";

  return myOutputValue;
};
