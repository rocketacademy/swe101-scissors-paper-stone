//input -- text of 'scissors' 'paper' 'stone'
// if input = random == its a draw
// if input is not within the 3 texts, let them know its wrong & provide the options
// system generates random option
//output -- wins if SPS logic makes sense + tells user if they won/lost/draw

var main = function (input) {
  var myOutputValue = compareInputWithRandom(input);
  console.log("checking of compareInputWithRandom");
  return myOutputValue;
};

// here we merge both random number & respective choice + compare it against input to produce outcome
var compareInputWithRandom = function (inputGuess) {
  var randomThrow = getRandomChoice(inputGuess);
  var standardOutput = "Your guess was " + inputGuess + ".";

  if (inputGuess == randomThrow) {
    console.log("returns a draw");
    return (
      standardOutput + "The system generated " + randomThrow + ". It is a Draw."
    );
  }

  if (inputGuess == "Scissors" && randomThrow == "Paper") {
    console.log("Sci vs P = win");
    return (
      standardOutput + "The system generated " + randomThrow + "🧻. You Won."
    );
  }

  if (inputGuess == "Scissors" && randomThrow == "Stone") {
    console.log("Sci vs St = lose");
    return standardOutput + "The system generated " + "💎. You Lost.";
  }

  if (inputGuess == "Paper" && randomThrow == "Scissors") {
    console.log("P vs Sci = lose");
    return (
      standardOutput + "The system generated " + randomThrow + "✂️. You Lost."
    );
  }

  if (inputGuess == "Paper" && randomThrow == "Stone") {
    console.log("P vs St = win");
    return standardOutput + "The system generated " + "💎. You Won.";
  }

  if (inputGuess == "Stone" && randomThrow == "Scissors") {
    console.log("St vs Sci = win");
    return (
      standardOutput + "The system generated " + randomThrow + "✂️. You Won."
    );
  }

  if (inputGuess == "Stone" && randomThrow == "Paper") {
    console.log("St vs P = lose");
    return (
      standardOutput + "The system generated " + randomThrow + "🧻. You Won."
    );
  }

  return "Oops, please enter a valid selection - Scissors, Paper or Stone. (caps sensitive)";
};

// build code for the 3 options
var getRandomChoice = function () {
  var choiceCount = 3;
  var getRandomSelection = getRandomNumber(choiceCount);
  console.log("random number chosen");
  //this will generate random number based on the no. of choices

  if (getRandomSelection == 1) {
    return "Scissors";
  }

  if (getRandomSelection == 2) {
    return "Paper";
  }

  if (getRandomSelection == 3) {
    return "Stone";
  }

  return "Oops, please enter a valid selection - Scissors, Paper or Stone. (caps sensitive)";
};

// build code to generate random number selection, number would be from 1 to 3, 3 inclusive
var getRandomNumber = function () {
  var getDecimal = Math.random() * 3;
  var getInteger = Math.floor(getDecimal);
  var randomNumber = getInteger + 1;
  console.log("random number generated");
  return randomNumber;
};
