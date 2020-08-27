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
    var randomnumber = number();
    
    if (randomnumber == 1){
      var sps = "scissors";
    }
    if (randomnumber == 2){
      sps = "paper";
    }
    if (randomnumber == 3){
      sps = "stone";
    }
    
    if (input != "scissors" && input != "paper" && input != "stone"){
      myoutputvalue = "Please enter either scissors paper or stone";
    } else{
      if (input == "scissors" && sps == "scissors"){
        userwin = userwin;
        computerwin = computerwin;
        myoutputvalue = "Draw. User vs Computer = " + userwin + " vs " + computerwin + ". Try again "+ username;
      }
      if (input == "paper" && sps == "scissors"){
        userwin = userwin;
        computerwin = computerwin +1;
        myoutputvalue = "Lose. User vs Computer = " + userwin + " vs " + computerwin + ". Try again "+ username;
        
      }
      if (input == "stone" && sps == "scissors"){
        userwin = userwin + 1;
        computerwin = computerwin;
        myoutputvalue = "Win. User vs Computer = " + userwin + " vs " + computerwin + ". Try again "+ username;
        
      }
      if (input == "scissors" && sps == "paper"){
        userwin = userwin + 1;
        computerwin = computerwin;
        myoutputvalue = "Win. User vs Computer = " + userwin + " vs " + computerwin + ". Try again "+ username;
      }
      if (input == "paper" && sps == "paper"){
        userwin = userwin;
        computerwin = computerwin;
        myoutputvalue = "Draw. User vs Computer = " + userwin + " vs " + computerwin + ". Try again "+ username;
      }
      if (input == "stone" && sps == "paper"){
        userwin = userwin;
        computerwin = computerwin +1;
        myoutputvalue = "Lose. User vs Computer = " + userwin + " vs " + computerwin + ". Try again "+ username;
        
      }
      if (input == "scissors" && sps == "stone"){
        userwin = userwin;
        computerwin = computerwin +1;
        myoutputvalue = "Lose. User vs Computer = " + userwin + " vs " + computerwin + ". Try again "+ username;
      }
      if (input == "paper" && sps == "stone"){
        userwin = userwin + 1;
        computerwin = computerwin;
        myoutputvalue = "Win. User vs Computer = " + userwin + " vs " + computerwin + ". Try again "+ username;
      }
      if (input == "stone" && sps == "stone"){
        userwin = userwin;
        computerwin = computerwin;
        myoutputvalue = "Draw. User vs Computer = " + userwin + " vs " + computerwin + ". Try again "+ username;
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

