var userWins = 0;
var computerWins = 0;
var userName = " ";
var userEntry = 0;
var mode = "";

var main = function (input) {
  if (input != "" && userEntry == 0) {
    userName = input;
    userEntry += 1;
    return `Your username is ${userName}.`;
  }
  if (input != "" && userEntry == 1) {
    mode = input;
    userEntry += 1;
    return `You have selected ${mode} mode.`;
  }
  if (mode == "normal" && userEntry == 2) {
    var getNumber = sortNum();
    var returnType = ScissorsPaperStone(getNumber);
    console.log(returnType);
    var returnInput = input.toLowerCase();
    var myOutputValue = outcome(returnType, returnInput);
    return myOutputValue;
  }
  if (mode == "reversed" && userEntry == 2) {
    var getNumber = sortNum();
    var returnType = ScissorsPaperStone(getNumber);
    var returnInput = input.toLowerCase();
    var myOutputValue = reversedOutcome(returnType, returnInput);
  } else return `You have not entered your username.`;
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
  var totalTimes = 0;
  if (
    (input == "scissors" && type == "paper") ||
    (input == "paper" && type == "stone") ||
    (input == "stone" && type == "scissors")
  ) {
    userWins += 1;
    totalTimes = userWins + computerWins;
    return `The computer chose ${type}. <br> You chose ${input}. <br> <br> You win! <br> <br>
   So far${userName}, You've win ${userWins}/${totalTimes} turns. Good on you! 
   
   > Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == type) {
    console.log("Capture");
    return `The computer chose ${type}. <br> You chose ${input}. <br> <br> It's a draw ${userName}! Try again. <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  } else {
    computerWins += 1;
    totalTimes = userWins + computerWins;
    return `The computer chose ${type}. <br> You chose ${input}. <br> <br> You lose! Bummer. <br> <br> 
     So far ${userName}, you've been winning ${computerWins}/${totalTimes} turns. Pretty good!`;
  }
};
var reversedOutcome = function (type, input) {
  var totalTimes = 0;
  if (
    (input == "paper" && type == "scissors") ||
    (input == "stone" && type == "paper") ||
    (input == "scissors" && type == "stone")
  ) {
    userWins += 1;
    totalTimes = userWins + computerWins;
    console.log(input);
    console.log(type);
    return `The computer chose ${type}. <br> You chose ${input}. <br> <br> You win! <br> <br>
   So far${userName}, You've win ${userWins}/${totalTimes} turns. Good on you! 
   
   > Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == type) {
    console.log("Capture");

    return `The computer chose ${type}. <br> You chose ${input}. <br> <br> It's a draw ${userName}! Try again. <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  } else {
    computerWins += 1;
    totalTimes = userWins + computerWins;
    return `The computer chose ${type}. <br> You chose ${input}. <br> <br> You lose! Bummer. <br> <br> 
     So far ${userName}, you've been winning ${computerWins}/${totalTimes} turns. Pretty good!`;
  }
};
