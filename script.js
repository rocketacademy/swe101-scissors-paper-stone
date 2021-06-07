var main = function (input) {
  var elementfinal = elements();
  myOutputValue = `The computer chose ${elementfinal} .
You chose ${input}.

You lose! Bummer.

Now you can type "scissors" "paper" or "stone" to play another round!`;
  if (
    input != "scissors" &&
    input != "paper" &&
    input != "stone" &&
    input != "reversed stone" &&
    input != "reversed paper" &&
    input != "reversed scissors"
  ) {
    myOutputValue = `You've entered an invalid option. Please type 'scissors'
    , 'paper', 'stone', 'reveresed paper', 'reversed stone' or 'reversed scissors' to try again`;
  }
  if (
    (input == `scissors` && elementfinal == "scissors ✂️") ||
    (input == `paper` && elementfinal == "paper 📃") ||
    (input == `stone` && elementfinal == "stone 💎") ||
    (input == `reversed scissors` && elementfinal == "scissors ✂️") ||
    (input == `reversed paper` && elementfinal == "paper 📃") ||
    (input == `reversed stone` && elementfinal == "stone 💎")
  ) {
    myOutputValue = `The computer chose ${elementfinal} .
You chose ${input}.

It's a draw! Bummer.

Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (
    (input == `scissors` && elementfinal == "paper 📃") ||
    (input == `paper` && elementfinal == "stone 💎") ||
    (input == `stone` && elementfinal == "scissors ✂️") ||
    (input == `reversed scissors` && elementfinal == "stone 💎") ||
    (input == `reversed paper` && elementfinal == "scissors ✂️") ||
    (input == `reversed stone` && elementfinal == "paper 📃")
  ) {
    myOutputValue = `The computer chose ${elementfinal} .
You chose ${input}.

You win! Hooray.

Now you can type "scissors" "paper" or "stone" to play another round!`;
  }

  return myOutputValue;
};
var elements = function () {
  var Decimal = Math.random() * 3 + 1;
  var number = Math.floor(Decimal);
  if (number == 1) {
    var element = "scissors ✂️";
  }
  if (number == 2) {
    var element = "paper 📃";
  }
  if (number == 3) {
    var element = "stone 💎";
  }
  return element;
};
