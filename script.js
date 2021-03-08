var main = function (input) {
  var myOutputValue = 'hello world';
  var words = computerGenResult();
  if(input == 'scissors' && words == 2){
    console.log('scissors vs paper')
    console.log('scissors win')
    return 'you won!!';
  }
  if(input == 'scissors' && words == 3){
    console.log('scissors v stone')
    console.log('stone wins')
    return 'you lost';
  }
  if(input == 'scissors' && words == 1){
    console.log('both words are the same, its a draw')
    return 'It is a draw!!'
  }  
  if(input == 'paper' && words == 1){
    console.log('paper vs scissors')
    console.log('paper loses')
    return 'you lost';
  }
  if(input == 'paper' && words == 3){
    console.log('paper v stone')
    console.log('paper wins')
    return 'you win!!'
  }
  if(input == 'paper' && words == 2){
    console.log('It is a draw both words are the same')
    return ' it is a draw! both words are the same'
  }  
  
  if(input == 'stone' && words == 1){
    console.log('stone v scissors')
    console.log('stone wins')
    return 'you win!!'
  }
  if(input == 'stone' && words == 2){
    console.log('stone v paper')
    console.log(' paper wins, stone loses')
    return ' you lose';
  }
  if(input == 'stone' && words == 3){
    console.log('both words are the same')
    console.log('its a draw')
    return 'it is a draw!! Both words guessed are the same';
  }  
    
};       
computerGenResult = function(){
var randomNumber = Math.random() * 3
var randomNumberROff = Math.floor(randomNumber)
var finalNumber = randomNumberROff + 1
return finalNumber;
}

    











