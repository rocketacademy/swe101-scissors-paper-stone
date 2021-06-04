// User inputs choice of Scissors,Paper or Stone.
// Script will roll 3-sided dice upon input.
// randomDiceNumber will correspond to a variable output name
// e.g 'if (randomDiceNumber = 1){computerAnswer = scissors };'
// Each roll will be compared to User Input, and give out a corresponding string Output.
// Let Scissors be 1, Paper be 2, and Stone be 3

var main = function (input) {
  var computerAnswer = rollTheDice();
  var myOutputValue =
    "Please enter the correct spelling of either: scissors, paper, or stone. Thanks a bunch playa!";

  //___________________If input is 'scissors'________________________________
  if (computerAnswer == 1 && input == "scissors") {
    myOutputValue =
      "Draw! We both threw Scissors! <br> Ah! <br> Caterpie can't cut it!";
  }
  if (computerAnswer == 2 && input == "scissors") {
    myOutputValue =
      "Win! Scissors beats paper<br> Awesome mate! <br> You cut that paper like Mr Himura";
  }
  if (computerAnswer == 3 && input == "scissors") {
    myOutputValue =
      "Loss! Stone beats Scissors <br> Hulk(stone) SMASH puny scissors";
  }
  //__________________If input is 'paper'_______________________________
  if (computerAnswer == 1 && input == "paper") {
    myOutputValue =
      "Loss! Scissors beats Paper <br> You got sliced in two. <br> Don't worry, i used the back of my blade";
  }
  if (computerAnswer == 2 && input == "paper") {
    myOutputValue =
      "Draw! We both threw Paper! <br> Both of us used paper, so i guess the game's over. <br> That's a wrap people!";
  }
  if (computerAnswer == 3 && input == "paper") {
    myOutputValue =
      "Win! Paper beats Stone <br> You can call me a kid, cos you just wrapped my stone like a mummy";
  }
  //__________________If input is 'stone'_______________________________
  if (computerAnswer == 1 && input == "stone") {
    myOutputValue =
      "Win! Stone beats Scissors<br> That doesn't make any sense! <br> How can rock beat metal!?";
  }
  if (computerAnswer == 2 && input == "stone") {
    myOutputValue =
      "Loss! Paper beats Stone <br> Are you a sweet? Cos i'm your wrapper";
  }
  if (computerAnswer == 3 && input == "stone") {
    myOutputValue =
      "Draw! We both threw Stone!<br> Ah well, two rocks don't make a right";
  }
  //__________________If input is 'reversed scissors'_____________________

  if (computerAnswer == 1 && input == "reversed scissors") {
    myOutputValue =
      "Draw! We both threw Scissors!<br> Ah! <br> Caterpie can't cut it!";
  }
  if (computerAnswer == 2 && input == "reversed scissors") {
    myOutputValue =
      "Loss! Paper beats Scissors in this twisted game..<br> That.. is some thick-a** paper";
  }
  if (computerAnswer == 3 && input == "reversed scissors") {
    myOutputValue =
      "Win! Scissors beats Stone in this twisted game..<br> What!? <br> Did ghosts of demon-killed anime kids teach you to do that";
  }
  //__________________If input is 'reversed paper'_______________________________
  if (computerAnswer == 1 && input == "reversed paper") {
    myOutputValue =
      "Win! Paper beats Scissors in this twisted game..<br> Your paper wrapped my scissors for Christmas";
  }
  if (computerAnswer == 2 && input == "reversed paper") {
    myOutputValue =
      "Draw! We both threw Paper!<br> Both of us used paper, so i guess the game's over. <br> That's a wrap people!";
  }
  if (computerAnswer == 3 && input == "reversed paper") {
    myOutputValue =
      "Loss! Stone beats Paper in this twisted game..<br> My Rock Throw got through your paper thin defences";
  }
  //__________________If input is 'reversed stone'_______________________________
  if (computerAnswer == 1 && input == "reversed stone") {
    myOutputValue =
      "Loss! Scissors beats Stone in this twisted game..<br> Pikachu used rock cut!";
  }
  if (computerAnswer == 2 && input == "reversed stone") {
    myOutputValue =
      "Win! Stone beats Paper in this twisted game..<br> Im-Impossibru!";
  }
  if (computerAnswer == 3 && input == "reversed stone") {
    myOutputValue =
      "Draw! We both threw Stone!<br> Ah well, two rocks don't make a right";
  }
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
