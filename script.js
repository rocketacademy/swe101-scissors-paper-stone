var userwin = 0;
var computerwin = 0;
var currentgamemode = "waiting for user name";
var username = "";
var myoutputvalue = "";

var main = function (input) {
  if (currentgamemode=="waiting for user name"){
    username = input;
    currentgamemode = "SPS game";
    myoutputvalue = "Hello, " + input;
  }else{
    if (number() == 1){
      var output = "scissors";
    }
    if (number() == 2){
      var output = "paper";
    }
    if (number() == 3){
      var output = "stone";
    }
    
    if (input != "scissors" && input != "paper" && input != "stone"){
      myoutputvalue = "Please enter either scissors paper or stone";
    } else{
      if (input == "scissors" && output == "scissors"){
        userwin = userwin;
        computerwin = computerwin;
        var myoutputvalue = "Draw. User vs Computer = " + userwin + " vs " + computerwin + ". Try again "+ username;
      }
      if (input == "paper" && output == "scissors"){
        userwin = userwin;
        computerwin = computerwin +1;
        var myoutputvalue = "Lose. User vs Computer = " + userwin + " vs " + computerwin + ". Try again "+ username;
        
      }
      if (input == "stone" && output == "scissors"){
        userwin = userwin + 1;
        computerwin = computerwin;
        var myoutputvalue = "Win. User vs Computer = " + userwin + " vs " + computerwin + ". Try again "+ username;
        
      }
      if (input == "scissors" && output == "paper"){
        userwin = userwin + 1;
        computerwin = computerwin;
        var myoutputvalue = "Win. User vs Computer = " + userwin + " vs " + computerwin + ". Try again "+ username;
      }
      if (input == "paper" && output == "paper"){
        userwin = userwin;
        computerwin = computerwin;
        var myoutputvalue = "Draw. User vs Computer = " + userwin + " vs " + computerwin + ". Try again "+ username;
      }
      if (input == "stone" && output == "paper"){
        userwin = userwin;
        computerwin = computerwin +1;
        var myoutputvalue = "Lose. User vs Computer = " + userwin + " vs " + computerwin + ". Try again "+ username;
        
      }
      if (input == "scissors" && output == "stone"){
        userwin = userwin;
        computerwin = computerwin +1;
        var myoutputvalue = "Lose. User vs Computer = " + userwin + " vs " + computerwin + ". Try again "+ username;
      }
      if (input == "paper" && output == "stone"){
        userwin = userwin + 1;
        computerwin = computerwin;
        var myoutputvalue = "Win. User vs Computer = " + userwin + " vs " + computerwin + ". Try again "+ username;
      }
      if (input == "stone" && output == "stone"){
        userwin = userwin;
        computerwin = computerwin;
        var myoutputvalue = "Draw. User vs Computer = " + userwin + " vs " + computerwin + ". Try again "+ username;
      }
    }  
  }  

  return myoutputvalue;
}    

var number = function () {
  var randomdecimal = Math.random() *3;
  var randominteger = Math.floor(randomdecimal) +1;
  var numberoutput = randominteger;
  return numberoutput;
};

