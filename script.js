var compwin = 0;
var userwin = 0;
var draw = 0;

var currentGameMode = "waiting for user name";
var userName = "";

var main = function (input) {
  var myOutputValue = "";

  // do this if game mode is waiting for username
  if (currentGameMode == "waiting for user name") {
    //set the name
    userName = input;

    // Once username is inputted, switch mode
    currentGameMode = "SPS mode";

    myOutputValue =
      "Hello " +
      userName +
      "! You can start playing the game by entering one of the 3 objects: scissors, paper or stone";
  } else if (currentGameMode == "SPS mode") {
    var randomnumber = number();
    var SorPorS = numbertoSPS(randomnumber);

    console.log(SorPorS);

    compwin = compwin + 1;
    myOutputValue =
      "The computer chose " +
      SorPorS +
      ". <br > You chose " +
      input +
      ". <br >You lose! Bummer " +
      userName +
      "! The computer won " +
      compwin +
      " times against you!";

    // define the winning conditions and draw conditions. If it isn't then the user loses.
    if (input == SorPorS) {
      draw = draw + 1;
      myOutputValue =
        "The computer chose " +
        SorPorS +
        ". <br > You chose " +
        input +
        ". <br >It is a draw! Try again " +
        userName +
        "! You drawed " +
        draw +
        " times with the computer";
    }
    if (
      (input == "scissors" && SorPorS == "paper") ||
      (input == "paper" && SorPorS == "stone") ||
      (input == "stone" && SorPorS == "scissors")
    ) {
      userwin = userwin + 1;

      myOutputValue =
        "The computer chose " +
        SorPorS +
        ". <br > You chose " +
        input +
        ". <br >You win! Congratulation " +
        userName +
        "! You won " +
        userwin +
        " times!";
    }

    //Inputvalidation, user can only type 3 input options

    if (!(input == "scissors" || input == "paper" || input == "stone")) {
      myOutputValue =
        "Please input again, there are only 3 input options: scissors, paper and stone. Thank you!";
    }
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
