var main = function (input) {
  var myArray = ["scissors", "paper", "stone"];
  var ComputerChoice = myArray[Math.floor(Math.random() * myArray.length)];
  // Scissors lose to stone
  if (input == "scissors" && ComputerChoice == "stone") {
    return (myOutputValue =
      "Computer chooses " +
      ComputerChoice +
      "<br>" +
      "Sorry but you lose. Type the word reversed before your choice to get into the reversed game mode!");
  }
  // Scissors win paper
  if (input == "scissors" && ComputerChoice == "paper") {
    return (myOutputValue =
      "Computer chooses " +
      ComputerChoice +
      "<br>" +
      "You win. Type the word reversed before your choice to get into the reversed game mode!");
  }
  // Scissors draw scissors
  if (input == "scissors" && ComputerChoice == "scissors") {
    return (myOutputValue =
      "Computer chooses " +
      ComputerChoice +
      "<br>" +
      "its a draw. Type the word reversed before your choice to get into the reversed game mode!");
  }
  // Paper lose to scissors
  if (input == "paper" && ComputerChoice == "scissors") {
    return (myOutputValue =
      "Computer chooses " +
      ComputerChoice +
      "<br>" +
      "Sorry but you lose. Type the word reversed before your choice to get into the reversed game mode!");
  }
  // Paper win stone
  if (input == "paper" && ComputerChoice == "stone") {
    return (myOutputValue =
      "Computer chooses " +
      ComputerChoice +
      "<br>" +
      "You win. Type the word reversed before your choice to get into the reversed game mode!");
  }
  // Paper draw paper
  if (input == "paper" && ComputerChoice == "paper") {
    return (myOutputValue =
      "Computer chooses " +
      ComputerChoice +
      "<br>" +
      "its a draw. Type the word reversed before your choice to get into the reversed game mode!");
  }
  // Stone lose to paper
  if (input == "stone" && ComputerChoice == "paper") {
    return (myOutputValue =
      "Computer chooses " +
      ComputerChoice +
      "<br>" +
      "Sorry but you lose. Type the word reversed before your choice to get into the reversed game mode!");
  }
  // Stone win scissors
  if (input == "stone" && ComputerChoice == "scissors") {
    return (myOutputValue =
      "Computer chooses " +
      ComputerChoice +
      "<br>" +
      "You win. Type the word reversed before your choice to get into the reversed game mode!");
  }
  // Stone draw stone
  if (input == "stone" && ComputerChoice == "stone") {
    return (myOutputValue =
      "Computer chooses " +
      ComputerChoice +
      "<br>" +
      "Its a draw. Type the word reversed before your choice to get into the reversed game mode!");
  }
  // reverse gamemode
  //scissors beat stone
  if (input == "reversed scissors" && ComputerChoice == "stone") {
    return (myOutputValue =
      "Computer chooses " +
      ComputerChoice +
      "<br>" +
      "You win. Type the word reversed before your choice to get into the reversed game mode!");
  }
  //scissors lose paper
  if (input == "reversed scissors" && ComputerChoice == "paper") {
    return (myOutputValue =
      "Computer chooses " +
      ComputerChoice +
      "<br>" +
      "You lose. Type the word reversed before your choice to get into the reversed game mode!");
  }
  //scissors & scissors
  if (input == "reversed scissors" && ComputerChoice == "scissors") {
    return (myOutputValue =
      "Computer chooses " +
      ComputerChoice +
      ".The sky rains diamonds tmr!" +
      "<br>" +
      "Type the word reversed before your choice to get into the reversed game mode!");
  }
  //paper beat scissors
  if (input == "reversed paper" && ComputerChoice == "scissors") {
    return (myOutputValue =
      "Computer chooses " +
      ComputerChoice +
      "<br>" +
      "You win. Type the world reversed before your choice to get into the reversed game mode!");
  }
  //paper lose stone
  if (input == "reversed paper" && ComputerChoice == "stone") {
    return (myOutputValue =
      "Computer chooses " +
      ComputerChoice +
      "<br>" +
      "You lose. Type the word reversed before your choice to get into the reversed game mode!");
  }
  //paper & paper
  if (input == "reversed paper" && ComputerChoice == "paper") {
    return (myOutputValue =
      "Computer chooses " +
      ComputerChoice +
      ".The sky rains silver tmr!" +
      "<br>" +
      "Type the word reversed before your choice to get into the reversed game mode!");
  }
  //stone beat paper
  if (input == "reversed stone" && ComputerChoice == "paper") {
    return (myOutputValue =
      "Computer chooses " +
      ComputerChoice +
      "<br>" +
      "You win. Type the word reversed before your choice to get into the reversed game mode!");
  }
  //stone lose scissors
  if (input == "reversed stone" && ComputerChoice == "scissors") {
    return (myOutputValue =
      "Computer chooses " +
      ComputerChoice +
      "<br>" +
      "You lose. Type the word reversed before your choice to get into the reversed game mode!");
  }
  //stone & stone
  if (input == "reversed stone" && ComputerChoice == "stone") {
    return (myOutputValue =
      "Computer chooses " +
      ComputerChoice +
      ".The sky rains gold tmr!" +
      "<br>" +
      "Type the word reversed before your choice to get into the reversed game mode!");
  }
  if (
    input !== "scissors" ||
    "paper" ||
    "stone" ||
    "reversed scissors" ||
    "reversed paper" ||
    "reversed stone"
  ) {
    return (myOutputValue =
      "You have entered an invalid input.Please enter scissors,paper,stone,reversed scissors,reversed paper or reversed stone." +
      "<br>" +
      "Case Sensitive!");
  }
  return myOutputValue;
};
