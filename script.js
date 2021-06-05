var main = function (input) {
  var human = input;
  inputValidation(human);
  var machine = randomSelect();
  console.log("machine:");
  console.log(machine);

  if (human == machine) {
    myOutputvalue = "draw";
  } else if (human == "scissors" && machine == "stone") {
    myOutputvalue = "human lost";
  } else if (human == "stone" && machine == "scissors") {
    myOutputvalue = "human won";
  } else if (human == "paper" && machine == "scissors") {
    myOutputvalue == "human lost";
  } else if (human == "scissors" && machine == "paper") {
    myOutputvalue == "human won";
  } else if (human == "stone" && machine == "paper") {
    myOutputvalue == "human lost";
  } else if (human == "paper" && machine == "stone") {
    myOutputvalue == "human won";
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
  if (input != "scissors" || input != "paper" || input != "stone") {
    myOutputvalue = "please check your spelling";
  }
  return myOutputvalue;
};
