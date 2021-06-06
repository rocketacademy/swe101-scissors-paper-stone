var main = function (input) {
  var randomnumber = number();
  var SorPorS = numbertoSPS(randomnumber);

  console.log(SorPorS);

  var myOutputValue =
    "The computer chose " +
    SorPorS +
    ". <br > You chose " +
    input +
    ". <br >You lose! Bummer!";

  // define the winning conditions and draw conditions. If it isn't then the user loses.
  if (input == SorPorS) {
    myOutputValue =
      "The computer chose " +
      SorPorS +
      ". <br > You chose " +
      input +
      ". <br >It is a draw! Try again!";
  }
  if (
    (input == "scissors" && SorPorS == "paper") ||
    (input == "paper" && SorPorS == "stone") ||
    (input == "stone" && SorPorS == "scissors")
  ) {
    myOutputValue =
      "The computer chose " +
      SorPorS +
      ". <br > You chose " +
      input +
      ". <br >You win! Congratulation!";
  }

  //Inputvalidation, user can only type 3 input options

  if (!(input == "scissors" || input == "paper" || input == "stone")) {
    myOutputValue =
      "Please input again, there are only 3 input options: scissors, paper and stone. Thank you!";
  }

  return myOutputValue;
};

var number = function () {
  var randomDecimal = Math.random() * 3;

  var randomInteger = Math.floor(randomDecimal);

  var SPSno = randomInteger + 1;

  return SPSno;
};

var numbertoSPS = function (SPSno) {
  // converting number to the dishes

  var output = "Invalid";

  if (SPSno == 1) {
    output = "scissors";
  }

  if (SPSno == 2) {
    output = "paper";
  }
  if (SPSno == 3) {
    output = "stone";
  }

  return output;
};
