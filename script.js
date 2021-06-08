var Counter = 0;
var winningCounter = 0;
var myOutputvalue;
var main = function (input, userID) {
  Counter = Counter + 1;
  console.log(
    "hey " +
      userID +
      "! You have played " +
      Counter +
      "and you have been winning " +
      winningCounter
  );

  var human = input;

  if (inputValidation(human) != true) {
    myOutputvalue = "please check your spelling";
    return myOutputvalue;
  }
  var machine = randomSelect();
  console.log("machine: " + machine);

  if (human == machine) {
    console.log("draw");
    myOutputvalue =
      "draw. <br>" + "So far " + userID + ", You have played " + Counter;
    return myOutputvalue;
  } else if (human == "scissors" && machine == "stone") {
    console.log("human lost");
    myOutputvalue =
      "The computer chose stone <br>" +
      "You chose scissors <br> <br>" +
      "You lost! Bummer. <br>" +
      "So far " +
      userID +
      ", You have played " +
      Counter;
  } else if (human == "stone" && machine == "scissors") {
    winningCounter = +1;
    console.log("human won");
    myOutputvalue =
      "The computer chose scissors <br>" +
      "You chose stone <br> <br>" +
      "You won! <br>" +
      "So far " +
      userID +
      ", You have played " +
      Counter;
  } else if (human == "paper" && machine == "scissors") {
    console.log("human lost");
    myOutputvalue ==
      "The computer chose scissors <br>" +
        "You chose paper <br> <br>" +
        "You lost! Bummer. <br>" +
        "So far " +
        userID +
        ", You have played " +
        Counter;
  } else if (human == "scissors" && machine == "paper") {
    winningCounter = +1;
    console.log("human won");
    myOutputvalue ==
      "The computer chose paper <br>" +
        "You chose scissors <br> <br>" +
        "You won! <br>" +
        "So far " +
        userID +
        ", You have played " +
        Counter;
  } else if (human == "stone" && machine == "paper") {
    console.log("human lost");
    myOutputvalue ==
      "The computer chose stone <br>" +
        "You chose paper <br> <br>" +
        "You lost! Bummer <br>" +
        "So far " +
        userID +
        ", You have played " +
        Counter;
  } else if (human == "paper" && machine == "stone") {
    winningCounter = +1;
    console.log("human won");
    myOutputvalue ==
      "The computer chose paper <br>" +
        "You chose stone <br> <br>" +
        "You won. <br>" +
        "hey " +
        userID +
        ", You have played " +
        Counter;
  }
  return myOutputvalue;
};

var randomSelect = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);

  randomScissorsPaperStone = ["scissors", "paper", "stone"];

  return randomScissorsPaperStone[randomInteger];
};

var inputValidation = function (input) {
  console.log("input validation: " + input);
  if (input == "scissors" || input == "paper" || input == "stone") {
    return true;
  } else return false;
};

//hehe
