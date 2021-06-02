var generateRandomInteger = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;

  return diceNumber;
};
var generateRandomPlay = function () {
  number = generateRandomInteger();
  if (number == 1) play = "stone";
  if (number == 2) play = "paper";
  if (number == 3) play = "scissor";
  console.log(play);
  return play;
};

var paperScissorStone = function (input) {
  if (input == "stone") return stonePlay();
  else if (input == "paper") return paperPlay();
  else if (input == "scissor") return scissorPlay();
};

var stonePlay = function () {
  var randomPlay = generateRandomPlay();
  if (randomPlay == "paper")
    return `The computer chose ${randomPlay}.<br>You chose stone.<br>You lose!<br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  else if (randomPlay == "scissor")
    return `The computer chose ${randomPlay}.<br>You chose stone.<br>You win!<br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  else if (randomPlay == "stone")
    return `The computer choose ${randomPlay}.<br>You chose stone.<br>draw!<br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  console.log(randomPlay);
};

var paperPlay = function () {
  var randomPlay = generateRandomPlay();
  if (randomPlay == "paper")
    return `The computer chose ${randomPlay}.<br>You chose paper.<br>draw<br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  else if (randomPlay == "scissor")
    return `The computer chose ${randomPlay}.<br>You chose paper.<br>You lose!<br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  else if (randomPlay == "stone")
    return `The computer chose ${randomPlay}.<br>You chose paper.<br>You Win!<br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  console.log(randomPlay);
};

var scissorPlay = function () {
  var randomPlay = generateRandomPlay();
  if (randomPlay == "paper")
    return `The computer chose ${randomPlay}.<br>You chose scissor.<br>You Win!<br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  else if (randomPlay == "scissor")
    return `The computer chose ${randomPlay}.<br>You chose scissor.<br>draw!<br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  else if (randomPlay == "stone")
    return `The computer chose ${randomPlay}.<br>You chose scissor.<br>You lose!<br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  console.log(randomPlay);
};
var main = function (input) {
  return paperScissorStone(input);
};
