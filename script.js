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

  // if (!userName) {
  //   if (input) {
  //     return "Please type in your username!";
  //   }
  //   userName = input;
  //   return (
  //     "Thank you " +
  //     userName +
  //     " To start playing SPS, please type in scissors, paper, or stone."
  //   );
  // }

  // if (input != userName) {
  //   return "Please enter your username before attempting the game.";
  // } else if (currentGameMode == "waiting for user name") {
  //   userName = input;
  //   currentGameMode = "sps game";
  //   myOutputValue =
  //     "Welcome " +
  //     userName +
  //     "! Let us begin. Please type scissors, paper or stone to play";
  // }

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

  // UserNumOfCorrectGuess += 1;
  // console.log(UserNumOfCorrectGuess);
  // CompNumOfCorrectGuess += 1;
  // console.log(CompNumOfCorrectGuess);

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

//if user inputs 'scissors' or 'paper' or 'stone', computer randomly chooses 'scissors' or 'paper' or 'stone'.
//and the computer outputs whether the user won, the computer won, or a draw.
//Rule: scissors beat paper, paper beats stone, stone beats scissors. If both parties choose same, draw.
//Input Validation----Sometimes the user types bad and types something other than "scissors", "paper", or "stone" during gameplay. Add input validation to kindly let the user know that there are only 3 input options, and ask them to try again.

// Add state to keep track of the number of times the user has won and the number of times the computer has won.
// Output: Win Loss Draw situation, and/or each party's winning %.

// Add a feature to collect the user's name as the first input after the page loads. We can prompt the user to enter their name first by adding to the page's HTML.
// Once the user submits their name, the program can return output to prompt the user to start playing Scissors Paper Stone by entering one of the 3 objects. Use the user's name to personalise win-loss record and other relevant output.
