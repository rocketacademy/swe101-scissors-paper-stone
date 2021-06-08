var UserNumOfCorrectGuess = 0;
var CompNumOfCorrectGuess = 0;
var currentGameMode = "waiting for user name";
var userName = "";
var login = false;

var main = function (input) {
  console.log(input);
  var randomObject = GenerateRandomHand();
  var myOutputValue = "";
  var scissors = "scissors";
  var paper = "paper";
  var stone = "stone";

  if (input == "") {
    return "Please enter your username before attempting the game.";
  }

  if (!login) {
    userName = input;
    login = true;
    return (
      "Welcome " +
      userName +
      "! Let us begin. Please type scissors, paper or stone to play"
    );
  }
  myOutputValue = "Kindly input only scissors, paper, or stone.";
  if (input != paper && input != stone && input != scissors) {
    return myOutputValue;
  }

  if (randomObject == 0) {
    console.log(scissors);
    console.log("scissors runs");
    if (userVComputer(input, "✌️")) {
      if (input == stone) {
        UserNumOfCorrectGuess += 1;
        console.log(UserNumOfCorrectGuess);
      }
      return (
        "You win!💯💯<br> You chose " +
        input +
        ", while the computer chose ✌️ <br> You: " +
        UserNumOfCorrectGuess +
        " VS Computer: " +
        CompNumOfCorrectGuess +
        "<br> Now you can type scissors, paper or stone to play another round!✨"
      );
    }
    if (input == "scissors") {
      return (
        "It's a draw...?👉👈 <br> You chose " +
        input +
        ", while the computer chose ✌️ <br> You: " +
        UserNumOfCorrectGuess +
        " VS Computer: " +
        CompNumOfCorrectGuess +
        "<br> Now you can type scissors, paper or stone to play another round!✨"
      );
    }
    if (input == paper) {
      CompNumOfCorrectGuess += 1;
      console.log(CompNumOfCorrectGuess);
    }
    return (
      "You lose...😧😧<br> You chose " +
      input +
      ", while the computer chose ✌️ <br> You: " +
      UserNumOfCorrectGuess +
      " VS Computer's score: " +
      CompNumOfCorrectGuess +
      "<br> Now you can type scissors, paper or stone to play another round!✨"
    );
  }

  if (randomObject == 1) {
    console.log(paper);
    console.log("paper runs");
    if (userVComputer(input, "✋")) {
      if (input == scissors) {
        UserNumOfCorrectGuess += 1;
        console.log(UserNumOfCorrectGuess);
      }
      return (
        "You win!💯💯<br> You chose " +
        input +
        ", while the computer chose ✋ <br> You: " +
        UserNumOfCorrectGuess +
        " VS Computer: " +
        CompNumOfCorrectGuess +
        "<br> Now you can type scissors, paper or stone to play another round!✨"
      );
    }

    if (input == "paper") {
      return (
        "It's a draw...?👉👈<br> You chose " +
        input +
        ", while the computer chose ✋ <br> You: " +
        UserNumOfCorrectGuess +
        " VS Computer: " +
        CompNumOfCorrectGuess +
        "<br> Now you can type scissors, paper or stone to play another round!✨"
      );
    }

    if (input == stone) {
      CompNumOfCorrectGuess += 1;
      console.log(CompNumOfCorrectGuess);
    }
    return (
      "You lose...😧😧<br> You chose " +
      input +
      ", while the computer chose ✋ <br> You: " +
      UserNumOfCorrectGuess +
      " VS Computer: " +
      CompNumOfCorrectGuess +
      "<br> Now you can type scissors, paper or stone to play another round!✨"
    );
  }

  if (randomObject != 0 || randomObject != 1) {
    console.log(stone);
    console.log("stone runs");
    if (input == paper) {
      UserNumOfCorrectGuess += 1;
      console.log(UserNumOfCorrectGuess);
    }
    return (
      "You win!💯💯<br> You chose " +
      input +
      ", while the computer chose ✊ <br> You: " +
      UserNumOfCorrectGuess +
      " VS Computer: " +
      CompNumOfCorrectGuess +
      "<br> Now you can type scissors, paper or stone to play another round!✨"
    );
  }

  if (input == "stone") {
    return (
      "It's a draw...?👉👈<br> You chose " +
      input +
      ", while the computer chose ✊ <br> You: " +
      UserNumOfCorrectGuess +
      " VS Computer: " +
      CompNumOfCorrectGuess +
      "<br> Now you can type scissors, paper or stone to play another round!✨"
    );
  }

  if (input == scissors) {
    CompNumOfOfCorrectGuess += 1;
    console.log(CompNumOfCorrectGuess);
  }
  return (
    "You lose...😧😧<br> You chose " +
    input +
    ", while the computer chose ✊ <br> You: " +
    UserNumOfCorrectGuess +
    " VS Computer: " +
    CompNumOfCorrectGuess +
    "<br> Now you can type scissors, paper or stone to play another round!✨"
  );
};

var userVComputer = function (input, ComputerHand) {
  return (
    (input == "scissors" && ComputerHand == "paper") ||
    (input == "paper" && ComputerHand == "stone") ||
    (input == "stone" && ComputerHand == "scissors")
  );
};

var GenerateRandomHand = function () {
  var randomNumber = Math.random() * 3;
  var randomHand = Math.floor(randomNumber);
  return randomHand;
};
