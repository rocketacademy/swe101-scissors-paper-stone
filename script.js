//Generate random number from one to three
var generateOneToThree = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomOneToThree = randomInteger + 1;
  console.log(`randomOneToThree is ${randomOneToThree}`);
  return randomOneToThree;
};

var randomNumber = generateOneToThree();
console.log(`randomNumber is ${randomNumber}`);

//Assign random number to stone, paper or scissors
var assignProgramChoice = function (randomNumber) {
  var programChoice = "program choice not yet set";

  if (randomNumber == 1) {
    programChoice = "scissors ✂️";
  }
  if (randomNumber == 2) {
    programChoice = "paper 🗒";
  }
  if (randomNumber == 3) {
    programChoice = "stone 🪨";
  }
  console.log(`Program choice is ${programChoice}`);
  return programChoice;
};

//Add emojis for corresponding input
var addEmoji = function (input) {
  var inputEmoji = input;
  if (input == "paper") {
    inputEmoji = "paper 🗒";
  }
  if (input == "stone") {
    inputEmoji = "stone 🪨";
  }
  if (input == "scissors") {
    inputEmoji = "scissors ✂️";
  }
  if (input == "reversed paper") {
    inputEmoji = "reversed paper 🗒";
  }
  if (input == "reversed stone") {
    inputEmoji = "reversed stone 🪨";
  }
  if (input == "reversed scissors") {
    inputEmoji = "reversed scissors ✂️";
  }
  return inputEmoji;
};

// //======== Standard SPS Game ========

// var main = function (input) {
//   //Error message: When use enters something other than scissors, paper or stone
//   var inputEmoji = addEmoji(input);
//   var programChoice = assignProgramChoice(generateOneToThree());
//   var myOutputValue = `Opps! <br> You have entered something other than "stone", "paper" or "scissors". <br> Please try again!`;

//   // Result: User wins if user chose paper and program chose stone, or if user chose stone and program chose scissors, or if user chose scissors and program chose paper
//   if (
//     (input == "paper" && programChoice == "stone 🪨") ||
//     (input == "stone" && programChoice == "scissors ✂️") ||
//     (input == "scissors" && programChoice == "paper 🗒")
//   ) {
//     myOutputValue = `You won! <br> I chose ${programChoice}... <br> ${inputEmoji} beats ${programChoice}!`;
//   }

//   //Result: User loses if user chose paper and program chose scissors, or if user chose scissors and program chose stone, or if user chose stone and program chose paper
//   if (
//     (input == "paper" && programChoice == "scissors ✂️") ||
//     (input == "scissors" && programChoice == "stone 🪨") ||
//     (input == "stone" && programChoice == "paper 🗒")
//   ) {
//     myOutputValue = `You lost! <br> I chose ${programChoice}, <br> ${programChoice} beats ${inputEmoji}!`;
//   }

//   // Result: Draw if input is the same as program choice
//   if (
//     (input == "paper" && programChoice == "paper 🗒") ||
//     (input == "scissors" && programChoice == "scissors ✂️") ||
//     (input == "stone" && programChoice == "stone 🪨")
//   ) {
//     myOutputValue = `It's a draw! <br> I chose ${programChoice} too 🙌!`;
//   }
//   return myOutputValue;
// };

//========== Reverse SPS game ===========
var main = function (input) {
  //Error message: When use enters something other than scissors, paper or stone
  var inputEmoji = addEmoji(input);
  var programChoice = assignProgramChoice(generateOneToThree());
  var myOutputValue = `Opps! <br> You have entered something other than "stone", "paper", "scissors" or any of their reversed counterparts. <br> Please try again!`;

  // Result: User loses if user chose paper and program chose stone, or if user chose stone and program chose scissors, or if user chose scissors and program chose paper
  if (
    (input == "paper" && programChoice == "stone 🪨") ||
    (input == "stone" && programChoice == "scissors ✂️") ||
    (input == "scissors" && programChoice == "paper 🗒")
  ) {
    myOutputValue = `You lost! <br> <br> This is the reverse SPS game. <br> I chose ${programChoice}... <br> and unfortunately ${inputEmoji} does not beat ${programChoice}in this game! 😝`;
  }

  //Result: User wins if user chose paper and program chose scissors, or if user chose scissors and program chose stone, or if user chose stone and program chose paper
  if (
    (input == "paper" && programChoice == "scissors ✂️") ||
    (input == "scissors" && programChoice == "stone 🪨") ||
    (input == "stone" && programChoice == "paper 🗒")
  ) {
    myOutputValue = `You won! <br> <br> This is the reverse SPS game. <br> I chose ${programChoice}, <br> and sadly ${programChoice} does not beat ${inputEmoji} in this game 😐.`;
  }

  // Result: Draw if input is the same as program choice
  if (
    (input == "paper" && programChoice == "paper 🗒") ||
    (input == "reversed paper" && programChoice == "paper 🗒") ||
    (input == "scissors" && programChoice == "scissors ✂️") ||
    (input == "reversed scissors" && programChoice == "scissors ✂️") ||
    (input == "stone" && programChoice == "stone 🪨") ||
    (input == "reversed stone" && programChoice == "stone 🪨")
  ) {
    myOutputValue = `It's a draw, whether you reversed it or not! <br> I chose ${programChoice} too 🙌!`;
  }

  // Result: User loses if user chose reverse paper and program chose stone, or if user chose reverse stone and program chose scissors, or if user chose reverse scissors and program chose paper
  if (
    (input == "reversed paper" && programChoice == "stone 🪨") ||
    (input == "reversed stone" && programChoice == "scissors ✂️") ||
    (input == "reversed scissors" && programChoice == "paper 🗒")
  ) {
    myOutputValue = `You lost! <br> <br> You could have won if only you didn't try to reverse the outcome! <br> I chose ${programChoice} and your ${inputEmoji} couldn't have beat that! <br> Better luck next time!`;
  }

  //Result: User wins if user chose reversed paper and program chose scissors, or if user chose reversed scissors and program chose stone, or if user chose reversed stone and program chose paper
  if (
    (input == "reversed paper" && programChoice == "scissors ✂️") ||
    (input == "reversed scissors" && programChoice == "stone 🪨") ||
    (input == "reversed stone" && programChoice == "paper 🗒")
  ) {
    myOutputValue = `Unbelievable... you won! <br> <br> You successfully reversed the outcome! <br> I chose ${programChoice} and did not see your ${inputEmoji} coming! <br> You totally deserve this win!`;
  }
  return myOutputValue;
};
