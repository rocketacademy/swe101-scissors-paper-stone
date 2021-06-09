var WinCounter = 0;
var LoseCounter = 0;
var DrawCounter = 0;
var TotalTurns = 0;
var Name = " ";
var main = function (input) {
  var myArray = ["scissors", "paper", "stone"];
  var ComputerChoice = myArray[Math.floor(Math.random() * myArray.length)];
  if (input == "scissors" && ComputerChoice == "stone") {
    // Scissors lose to stone
    LoseCounter = LoseCounter + 1;
    TotalTurns = TotalTurns + 1;
    return (myOutputValue =
      "Computer chose " +
      ComputerChoice +
      "." +
      "<br>" +
      "You chose " +
      input +
      "." +
      "<br>" +
      "Sorry but you lose!" +
      "<br>" +
      "So far,you've been losing " +
      LoseCounter +
      "/" +
      TotalTurns +
      " turns.");
  }
  // Scissors win paper
  if (input == "scissors" && ComputerChoice == "paper") {
    WinCounter = WinCounter + 1;
    TotalTurns = TotalTurns + 1;
    return (myOutputValue =
      "Computer chose " +
      ComputerChoice +
      "." +
      "<br>" +
      "You chose " +
      input +
      "<br>" +
      "You win!" +
      "<br>" +
      "So far,you've been winning " +
      WinCounter +
      "/" +
      TotalTurns +
      " turns.");
  }
  // Scissors draw scissors
  if (input == "scissors" && ComputerChoice == "scissors") {
    DrawCounter = DrawCounter + 1;
    TotalTurns = TotalTurns + 1;
    return (myOutputValue =
      "Computer chose " +
      ComputerChoice +
      "." +
      "<br>" +
      "You chose " +
      input +
      "." +
      "<br>" +
      "Its a draw!" +
      "<br>" +
      "So far,you've been drawing " +
      DrawCounter +
      "/" +
      TotalTurns +
      " turns.");
  }
  // Paper lose to scissors
  if (input == "paper" && ComputerChoice == "scissors") {
    LoseCounter = LoseCounter + 1;
    TotalTurns = TotalTurns + 1;
    return (myOutputValue =
      "Computer chose " +
      ComputerChoice +
      "." +
      "<br>" +
      "You chose " +
      input +
      "." +
      "<br>" +
      "Sorry but you lose!" +
      "<br>" +
      "So far,you've been losing " +
      LoseCounter +
      "/" +
      TotalTurns +
      " turns.");
  }
  // Paper win stone
  if (input == "paper" && ComputerChoice == "stone") {
    WinCounter = WinCounter + 1;
    TotalTurns = TotalTurns + 1;
    return (myOutputValue =
      "Computer chose " +
      ComputerChoice +
      "." +
      "<br>" +
      "You chose " +
      input +
      "<br>" +
      "You win!" +
      "<br>" +
      "So far,you've been winning " +
      WinCounter +
      "/" +
      TotalTurns +
      " turns.");
  }
  // Paper draw paper
  if (input == "paper" && ComputerChoice == "paper") {
    DrawCounter = DrawCounter + 1;
    TotalTurns = TotalTurns + 1;
    return (myOutputValue =
      "Computer chose " +
      ComputerChoice +
      "." +
      "<br>" +
      "You chose " +
      input +
      "." +
      "<br>" +
      "Its a draw!" +
      "<br>" +
      "So far,you've been drawing " +
      DrawCounter +
      "/" +
      TotalTurns +
      " turns.");
  }
  // Stone lose to paper
  if (input == "stone" && ComputerChoice == "paper") {
    LoseCounter = LoseCounter + 1;
    TotalTurns = TotalTurns + 1;
    return (myOutputValue =
      "Computer chose " +
      ComputerChoice +
      "." +
      "<br>" +
      "You chose " +
      input +
      "." +
      "<br>" +
      "Sorry but you lose!" +
      "<br>" +
      "So far,you've been losing " +
      LoseCounter +
      "/" +
      TotalTurns +
      " turns.");
  }
  // Stone win scissors
  WinCounter = WinCounter + 1;
  TotalTurns = TotalTurns + 1;
  if (input == "stone" && ComputerChoice == "scissors") {
    return (myOutputValue =
      "Computer chose " +
      ComputerChoice +
      "." +
      "<br>" +
      "You chose " +
      input +
      "<br>" +
      "You win!" +
      "<br>" +
      "So far,you've been winning " +
      WinCounter +
      "/" +
      TotalTurns +
      " turns.");
  }
  // Stone draw stone
  if (input == "stone" && ComputerChoice == "stone") {
    DrawCounter = DrawCounter + 1;
    TotalTurns = TotalTurns + 1;
    return (myOutputValue =
      "Computer chose " +
      ComputerChoice +
      "." +
      "<br>" +
      "You chose " +
      input +
      "." +
      "<br>" +
      "Its a draw!" +
      "<br>" +
      "So far,you've been drawing " +
      DrawCounter +
      "/" +
      TotalTurns +
      " turns.");
  }
};
