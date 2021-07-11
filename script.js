var main = function (input) {
  var comOutput = randomGen(); //Get the random generated number
  var [reverseCheck, input] = revCheck(input); //check for reverse script
  console.log(reverseCheck);
  var userInput = intInput(input); //Get int value of the user
  console.log("Com-output");
  console.log(comOutput);
  if (userInput == -1) { //Error handler
    return `Error! Please key in text: "stone"/"paper"/"scissors"
    <br> (ps. type 'reversed' at the beginning to trigger reverse-mode)`;
  }
  else { //Scissors paper logic
    if (reverseCheck == 1){
      console.log("REVERSED!");
      var result = revGameLogic(comOutput,userInput); //prints the comparison result
    }
    else {
      var result = gameLogic(comOutput,userInput); //prints the comparison result
    }

  }
  if (result ==2){ //same value
    var myOutputValue = `
    Both the computer and you chose ${symbolMaker(assignOutput(comOutput))}! 
    <br> It's a draw!
    <br>
    <br> Now you can type "scissors", "paper" or "stone" to play another round!
    <br> (ps. type 'reversed' at the beginning to trigger reverse-mode)`;
  }
  if (result ==1){ //user wins
    var myOutputValue = `
    The computer chose ${symbolMaker(assignOutput(comOutput))}.
    <br>You chose ${symbolMaker(input)}.
    <br>
    <br>You win! Good job.
    <br>
    <br> Now you can type "scissors", "paper" or "stone" to play another round!
    <br> (ps. type 'reversed' at the beginning to trigger reverse-mode)`;
  }
  if (result ==0){ //user wins
    var myOutputValue = `
    The computer chose ${symbolMaker(assignOutput(comOutput))}.
    <br>You chose ${symbolMaker(input)}.
    <br>
    <br>You lose! Bummer! Try again!
    <br>
    <br> Now you can type "scissors", "paper" or "stone" to play another round!
    <br> (ps. type 'reversed' at the beginning to trigger reverse-mode)`;
  }
  return myOutputValue;
};

var randomGen = function (){
  var num = Math.random()*2;
  var num = Math.floor(num);//create a number between 0-2
  return num;
}

var assignOutput = function (value){  //Converts random generator to outputs
  if (value == 0){
    return "stone";
  }
  if (value == 1){
    return "paper";
  }
  if (value == 2){
    return "scissors";
  } 
}

var intInput = function(value){ //Converts user inputs into values
  if (value == "stone"){
    return 0;
  }
  if (value == "paper"){
    return 1;
  }
  if (value == "scissors"){
    return 2;
  } 
  else {
    return -1;
  }
}

var symbolMaker = function (textValue){  //Converts random generator to outputs
  if (textValue == "scissors"){
    return "✂️";
  }
  if (textValue == "paper"){
    return "🗒";
  }
  if (textValue == "stone"){
    return "💎";
  } 
}

var gameLogic = function(comInput,userInput){
  if (userInput == 2 && comInput == 0){
    return 0; //if user inputs scissors and computer input stone (cycle case special)
  }
  else if (comInput>userInput){
    return 0; //means user lost 
  }
  else if (comInput<userInput){
    return 1; //means user wins
  }
  else {
    return 2; //means same value
  }
}

var revGameLogic = function(comInput,userInput){
  if (userInput == 0 && comInput == 2){
    return 0; //if user inputs scissors and computer input stone (cycle case special)
  }
  else if (comInput<userInput){
    return 0; //means user lost 
  }
  else if (comInput>userInput){
    return 1; //means user wins
  }
  else {
    return 2; //means same value
  }
}

var revCheck = function(valueInput){
  const words = valueInput.split(' ');
  console.log(words);
  if (words[0]=="reversed"){
    console.log([1,words[1]]);
    return [1,words[1]]; //reversed logic
  }
  else {
    return [0,words[0]]; //default
  }
}