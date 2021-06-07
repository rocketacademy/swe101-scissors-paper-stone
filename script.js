// User inputs choice of Scissors,Paper or Stone.
// Script will roll 3-sided dice upon input.
// randomDiceNumber will correspond to a variable output name
// e.g 'if (randomDiceNumber = 1){computerAnswer = scissors };'
// Each roll will be compared to User Input, and give out a corresponding string Output.
// Let Scissors be 1, Paper be 2, and Stone be 3

// Script has a trigger (playerNameTrigger)
// if(playerName == input){ }

var playerScore = 0;
var playerTries = 0;
var playerLosses = 0;
var playerNameTrigger = 0;
var playerName = "";
var playerWins = 0;

var main = function (input) {
  var computerAnswer = rollTheDice();
  var myOutputValue =
    "Please enter the correct spelling of either: scissors, paper, or stone. Thanks a bunch playa!";
  playerTries = playerTries + 1;
  if (
    playerNameTrigger == 0 &&
    input !=
      ("scissors" ||
        "paper" ||
        "stone" ||
        "reversed scissors" ||
        "reversed paper" ||
        "reversed stone")
  ) {
    playerName = input;
    playerTries = playerTries - 1;
    playerNameTrigger = 1;
    myOutputValue = "Lets have a good game, Player " + playerName;
  }
  console.log(playerName);

  if (
    input == "scissors" ||
    "paper" ||
    "stone" ||
    "reversed scissors" ||
    "reversed paper" ||
    "reversed stone"
  ) {
    playerNameTrigger = 1;
  }
  if (computerAnswer == 1 && input == "scissors") {
    //___________________If input is 'scissors'________________________________
    myOutputValue =
      "Player " +
      playerName +
      ", Draw! We both threw Scissors! <br> Ah! <br> Caterpie can't cut it! <br> Your Score is: " +
      playerScore;
  }
  if (computerAnswer == 2 && input == "scissors") {
    myOutputValue =
      "Player " +
      playerName +
      ", Win! Scissors beats paper<br> Awesome mate! <br> You cut that paper like Mr Himura<br> Your Score is: " +
      (playerScore + 1);
    playerScore = playerScore + 1;
    playerWins = playerWins + 1;
  }
  if (computerAnswer == 3 && input == "scissors") {
    myOutputValue =
      "Player " +
      playerName +
      ", Loss! Stone beats Scissors <br> Hulk(stone) SMASH puny scissors<br> Your Score is: " +
      (playerScore - 1);
    playerScore = playerScore - 1;
    playerLosses = playerLosses + 1;
  }
  //__________________If input is 'paper'_______________________________
  if (computerAnswer == 1 && input == "paper") {
    myOutputValue =
      "Player " +
      playerName +
      ", Loss! Scissors beats Paper <br> You got sliced in two. <br> Don't worry, i used the back of my blade <br> Your Score is: " +
      (playerScore - 1);
    playerScore = playerScore - 1;
    playerLosses = playerLosses + 1;
  }
  if (computerAnswer == 2 && input == "paper") {
    myOutputValue =
      "Player " +
      playerName +
      ", Draw! We both threw Paper! <br> Both of us used paper, so i guess the game's over. <br> That's a wrap people! <br> Your Score is: " +
      playerScore;
  }
  if (computerAnswer == 3 && input == "paper") {
    myOutputValue =
      "Player " +
      playerName +
      ", Win! Paper beats Stone <br> You can call me a kid, cos you just wrapped my stone like a mummy<br> Your Score is: " +
      (playerScore + 1);
    playerScore = playerScore + 1;
    playerWins = playerWins + 1;
  }
  //__________________If input is 'stone'_______________________________
  if (computerAnswer == 1 && input == "stone") {
    myOutputValue =
      "Player " +
      playerName +
      ", Win! Stone beats Scissors<br> That doesn't make any sense! <br> How can rock beat metal!?<br> Your Score is: " +
      (playerScore + 1);
    playerScore = playerScore + 1;
    playerWins = playerWins + 1;
  }
  if (computerAnswer == 2 && input == "stone") {
    myOutputValue =
      "Player " +
      playerName +
      ", Loss! Paper beats Stone <br> Are you a sweet? Cos i'm your wrapper <br> Your Score is: " +
      (playerScore - 1);
    playerScore = playerScore - 1;
    playerLosses = playerLosses + 1;
  }
  if (computerAnswer == 3 && input == "stone") {
    myOutputValue =
      "Player " +
      playerName +
      ", Draw! We both threw Stone!<br> Ah well, two rocks don't make a right <br> Your Score is: " +
      playerScore;
  }
  //__________________If input is 'reversed scissors'_____________________

  if (computerAnswer == 1 && input == "reversed scissors") {
    myOutputValue =
      "Player " +
      playerName +
      ", Draw! We both threw Scissors!<br> Ah! <br> Caterpie can't cut it!<br> Your Score is: " +
      playerScore;
  }
  if (computerAnswer == 2 && input == "reversed scissors") {
    myOutputValue =
      "Player " +
      playerName +
      ", Loss! Paper beats Scissors in this twisted game..<br> That.. is some thick-a** paper<br> Your Score is: " +
      (playerScore - 1);
    playerScore = playerScore - 1;
    playerLosses = playerLosses + 1;
  }
  if (computerAnswer == 3 && input == "reversed scissors") {
    myOutputValue =
      "Player " +
      playerName +
      ", Win! Scissors beats Stone in this twisted game..<br> What!? <br> Did ghosts of demon-killed anime kids teach you to do that<br> Your Score is: " +
      (playerScore + 1);
    playerScore = playerScore + 1;
    playerWins = playerWins + 1;
  }
  //__________________If input is 'reversed paper'_______________________________
  if (computerAnswer == 1 && input == "reversed paper") {
    myOutputValue =
      "Player " +
      playerName +
      ", Win! Paper beats Scissors in this twisted game..<br> Your paper wrapped my scissors for Christmas<br> Your Score is: " +
      (playerScore + 1);
    playerScore = playerScore + 1;
    playerWins = playerWins + 1;
  }
  if (computerAnswer == 2 && input == "reversed paper") {
    myOutputValue =
      "Player " +
      playerName +
      ", Draw! We both threw Paper!<br> Both of us used paper, so i guess the game's over. <br> That's a wrap people!<br> Your Score is: " +
      playerScore;
  }
  if (computerAnswer == 3 && input == "reversed paper") {
    myOutputValue =
      "Player " +
      playerName +
      ", Loss! Stone beats Paper in this twisted game..<br> My Rock Throw got through your paper thin defences<br> Your Score is: " +
      (playerScore - 1);
    playerScore = playerScore - 1;
    playerLosses = playerLosses + 1;
  }
  //__________________If input is 'reversed stone'_______________________________
  if (computerAnswer == 1 && input == "reversed stone") {
    myOutputValue =
      "Player " +
      playerName +
      ", Loss! Scissors beats Stone in this twisted game..<br> Pikachu used rock cut!<br> Your Score is: " +
      (playerScore - 1);
    playerScore = playerScore - 1;
    playerLosses = playerLosses + 1;
  }
  if (computerAnswer == 2 && input == "reversed stone") {
    myOutputValue =
      "Player " +
      playerName +
      ", Win! Stone beats Paper in this twisted game..<br> Im-Impossibru!<br> Your Score is: " +
      (playerScore + 1);
    ("<br> Now add 1");
    playerScore = playerScore + 1;
    playerWins = playerWins + 1;
  }
  if (computerAnswer == 3 && input == "reversed stone") {
    myOutputValue =
      "Player " +
      playerName +
      ", Draw! We both threw Stone!<br> Ah well, two rocks don't make a right<br> Your Score is: " +
      playerScore;
  }
  console.log(playerScore);
  myOutputValue =
    myOutputValue +
    "<br>You have won: " +
    playerWins +
    " times, and " +
    "<br> You have lost " +
    playerLosses +
    " times";
  //__________________End of Conditions_______________________________
  return myOutputValue;
};

// __________________DICE ROLL FUNCTION________________________________________
rollTheDice = function () {
  var randomMathNumber = Math.random() * 3;
  var diceRoll = Math.ceil(randomMathNumber);
  console.log(diceRoll);
  return diceRoll;
};
