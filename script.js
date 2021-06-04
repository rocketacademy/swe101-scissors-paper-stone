// user inputs scissors, paper or stone, output will determine win lose or draw or wrong spelling

var main = function (input) {
  var computerChoice = dice();
  var myOutputValue = `please enter any of the following: scissors, paper, stone to proceed!`;

  //scissors =1 dice
  //paper = 2
  //stone =3

  if (input == `scissors` && computerChoice == 1) {
    myOutputValue = `its a draw! the computer chose scissors too!`;
  }
  if (input == `scissors` && computerChoice == 2) {
    myOutputValue = `you win! the computer chose paper!`;
  }

  if (input == `scissors` && computerChoice == 3) {
    myOutputValue = `you lose! the computer chose stone!`;
  }
  if (input == `paper` && computerChoice == 1) {
    myOutputValue = `you lose! computer chose scissors!`;
  }

  if (input == `paper` && computerChoice == 2) {
    myOutputValue = `its a draw! the computer chose paper too!`;
  }

  if (input == `paper` && computerChoice == 3) {
    myOutputValue = `you win! computer chose stone!`;
  }
  if (input == `stone` && computerChoice == 1) {
    myOutputValue = `you win! the computer chose scissors!`;
  }
  if (input == `stone` && computerChoice == 2) {
    myOutputValue = `you lose! the computer chose paper!`;
  }
  if (input == `stone` && computerChoice == 3) {
    myOutputValue = `its a draw! the computer chose stone too!`;
  }

  return myOutputValue;
};

//dice roll
dice = function () {
  var randomDiceNumber = Math.random() * 3;
  var diceRoll = Math.ceil(randomDiceNumber);
  console.log(diceRoll);
  return diceRoll;
};
