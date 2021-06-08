var userWins = 0;
var computerWins = 0;
var userName = "";
var mode = "";
var main = function (input) {
  // Check if player enter username
  if (input != "" && userName == "") {
    userName = input;
    return `Your username is ${userName}. Pls key in normal or reversed or korean for game mode.`;
  }
  // Normal mode selection
  if (input == "normal") {
    mode = input;
    return `You have selected ${mode} mode.`;
  } // Reversed mode selection
  if (input == "reversed") {
    mode = input;
    return `You have selected ${mode} mode.`;
  }
  // Korean mode selection
  if (input == "korean") {
    mode = input;
    return `You have selected ${mode} mode.`;
  }

  //Normal mode game play
  if (mode == "normal") {
    var getNumber = sortNum();
    var returnType = ScissorsPaperStone(getNumber);
    console.log(returnType);
    var returnInput = input.toLowerCase();
    var myOutputValue = sps(returnType, returnInput);
    return myOutputValue;
  } // Reverse mode game play
  if (mode == "reversed") {
    var getNumber = sortNum();
    var returnType = ScissorsPaperStone(getNumber);
    var returnInput = input.toLowerCase();
    var myOutputValue = reversedSps(returnType, returnInput);
    return myOutputValue;
  } // Korean mode game play
  if (mode == "korean") {
    var getNumber = sortNum();
    var returnType = ScissorsPaperStone(getNumber);
    var returnInput = input.toLowerCase();
    var myOutputValue = koreanSps(returnType, returnInput);
    return myOutputValue;
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
var sps = function (type, input) {
  var totalTimes = 0;
  //Enter scissors paper stone
  if (!(input == "scissors" || input == "paper" || input == "stone")) {
    return `Please Enter scissors, paper or stone`;
  }
  //Gameplay
  if (
    (input == "scissors" && type == "paper") ||
    (input == "paper" && type == "stone") ||
    (input == "stone" && type == "scissors")
  ) {
    userWins += 1;
    totalTimes = userWins + computerWins;
    return `The computer chose ${type}. <br> You chose ${input}. <br> <br> You win! <br> <br>
   So far ${userName}, You've won ${userWins}/${totalTimes} turns. Good on you! 
   
  <br><br>  Now you can type "scissors" "paper" or "stone" to play another round or change game mode!`;
  }
  if (input == type) {
    console.log("Capture");
    return `The computer chose ${type}. <br> You chose ${input}. <br> <br> It's a draw ${userName}! Try again. <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  } else {
    computerWins += 1;
    totalTimes = userWins + computerWins;
    return `The computer chose ${type}. <br> You chose ${input}. <br> <br> You lose! Bummer. <br> <br> 
     So far ${userName}, you've been winning ${userWins}/${totalTimes} turns. Pretty good!`;
  }
};
var reversedSps = function (type, input) {
  var totalTimes = 0;
  //Enter scissors paper stone
  if (!(input == "scissors" || input == "paper" || input == "stone")) {
    return `Please Enter scissors, paper or stone`;
  }
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
   
   <br> Now you can type "scissors" "paper" or "stone" to play another round or change!`;
  }
  if (input == type) {
    console.log("Capture");
    return `The computer chose ${type}. <br> You chose ${input}. <br> <br> It's a draw ${userName}! Try again. <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  } else {
    computerWins += 1;
    totalTimes = userWins + computerWins;
    return `The computer chose ${type}. <br> You chose ${input}. <br> <br> You lose! Bummer. <br> <br> 
     So far ${userName}, you've been winning ${userWins}/${totalTimes} turns. Pretty good!`;
  }
};

var koreanSps = function (type, input) {
  var totalTimes = 0;
  //Enter scissors paper stone
  if (!(input == "scissors" || input == "paper" || input == "stone")) {
    return `Please Enter scissors, paper or stone`;
  }
  //Gameplay
  if (
    (input == "scissors" && type == "paper") ||
    (input == "paper" && type == "stone") ||
    (input == "stone" && type == "scissors")
  ) {
    userWins += 1;
    totalTimes = userWins + computerWins;
    return `The computer chose ${type}. <br> You chose ${input}. <br> <br> You win! <br> <br>
   So far ${userName}, You've won ${userWins}/${totalTimes} turns. Good on you! 
   
  <br><br>  Now you can type "scissors" "paper" or "stone" to play another round or change game mode!`;
  }
  if (input == type) {
    if (userWins > computerWins) {
      return `The computer chose ${type}. <br> You chose ${input}. <br> <br> It's a draw ${userName}! The game has ended.. <br> <br> You won.<br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
    } else
      return `The computer chose ${type}. <br> You chose ${input}. <br> <br> It's a draw ${userName}! The game has ended.. <br> <br> You lost. <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  } else {
    computerWins += 1;
    totalTimes = userWins + computerWins;
    return `The computer chose ${type}. <br> You chose ${input}. <br> <br> You lose! Bummer. <br> <br> 
     So far ${userName}, you've been winning ${userWins}/${totalTimes} turns. Pretty good!`;
  }
};
