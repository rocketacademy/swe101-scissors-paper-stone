var Tries = 0;
var Wins = 0;
var Loss = 0;
var Draw = 0;
var Reverse = 0;
var WINNER = "";

var main = function (input) {
  if (input != "scissors" && input != "papaer" && input != "stone" && input != "reverse") {
    return "Please type 'scissors', 'paper' or 'stone' to play the game.";
  }

  var diceRoll = function () {
    var randomDecimal = Math.random() * 3;
    var randomInteger = Math.floor(randomDecimal);
    var DiceNumber = randomInteger + 1;
    return DiceNumber;
  };

  var computernumber = diceRoll();
  
var A = 1;
  var B = 2;
  var C = 3;

  if (Reverse == 1) {
    A = 3;
    B = 2;
    C = 1;
  }

  var GENERATECOMPUTERACTION = function (computernumber) {
    if (computernumber == A) {
      return "Computer chose scissors ✂.";
    }
    if (computernumber == B) {
      return "Computer chose paper 🧻.";
    }
    if (computernumber == C) {
      return "Computer chose stone 🗿.";
    }
  };


  var inputnumber = 0;

  if (input == "scissors") {
    var inputnumber = A;
  }

  if (input == "paper") {
    var inputnumber = B;
  }

  if (input == "stone") {
    var inputnumber = C;
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
  
    var MOSTRECENTWINNER = function () {
    if (WINNER == 2) {
      return "The most recent winner is the computer.";
    }
    if (WINNER == 1) {
      return "The most recent winner is you.";
    }
    if (WINNER == 0) {
      return " ";
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

  var STATISTICS = function () {
    var WINPERCENTAGE = (Wins / Tries) * 100;
    var LOSSPERCENTAGE = (Loss / Tries) * 100;
    var DRAWPERCENTAGE = (Draw / Tries) * 100;
    return (
      "You have " +
      Wins +
      " wins for every " +
      Loss +
      " loss. <br> The win% is " +
      WINPERCENTAGE +
      ", the loss% is " +
      LOSSPERCENTAGE +
      " and the draw% is " +
      DRAWPERCENTAGE +
      "."
    );
  };
  
  
  var ENCOURAGEMENT = function (Wins) {
    message = "You can do better. A lot better.";
    if (Wins / Tries >= 0.5) {
      message = "You're doing really well! Keep it up!";
    }
    return message;
  };
  
  var myOutputValue =
    GENERATEUSERACTION(input) +
    " <br>" +
    GENERATECOMPUTERACTION(computernumber) +
    " <br>" +
    STATISTICS() +
    "<br>" +
    ENCOURAGEMENT(Wins) +
    "<br>" +
    MOSTRECENTWINNER() +
    "<br>" +
    GENERATEOUTCOMEDESCRIPTION(inputnumber, computernumber) +
    "<br> <br> Now you can type 'scissors', 'paper' or 'stone' to play another round!";

  if (input == "reverse") {
    Reverse = 1;
    return "Reverse mode activated";
  }
  
  return myOutputValue;
};
