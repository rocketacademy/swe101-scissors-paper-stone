var main = function (input) {
  var getNumber = sortNum();
  var returnType = ScissorsPaperStone(getNumber);
  console.log(returnType);
  var returnInput = input.toLowerCase();
  var myOutputValue = outcome(returnType, returnInput);
  return myOutputValue;
};

var sortNum = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;

  return randomNumber;
};

var ScissorsPaperStone = function (translateNumber) {
  if (translateNumber == 1) {
    return "scissors";
  }
  if (translateNumber == 2) {
    return "paper";
  } else return "stone";
};

var outcome = function (type, input) {
  if (
    (input == "scissors" && type == "paper") ||
    (input == "paper" && type == "stone") ||
    (input == "stone" && type == "scissors")
  ) {
    return "You Win";
  }
  if (input == type) {
    console.log("Capture");
    return "Again!";
  } else return "You Lose";
};
