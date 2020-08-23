// Disable ESLint rule no-unused-vars on next line because this code
// is a learning tool and not a full-fledged node app.
// eslint-disable-next-line no-unused-vars

//Basic Scissors-Paper-Stone
// 'scissors' = 1
// 'paper' = 2
// 'stone' = 3

var drawNum = 0;
var winNum = 0;
var lossNum = 0;
var invalidNum = 0;

var main = function (input) {
  var numWeapon = randomWeapon(); // 1 to 3
  console.log(numWeapon); // Displays numWeapon in the console
  var nameWeapon;
  invalidNum = invalidNum + 1;


  if (numWeapon == 1) {
    nameWeapon = 'scissors'
  };

  if (numWeapon == 2) {
    nameWeapon = 'paper'
  };

  if (numWeapon == 3) {
    nameWeapon = 'stone'
  };

  var myOutputValue = 'ha! nice try! ' + input + ' is a bogus weapon. >:( you have made ' + invalidNum + ' invalid attempt/s.';

  //DRAW
  if (input == 'scissors' && nameWeapon == 'scissors') {
    drawNum = drawNum + 1;
    myOutputValue = 'draw! the both of us selected ' + nameWeapon + ' :) total draws: ' + (drawNum) + ' total wins: ' + winNum + ' total losses: ' + lossNum;
  }
  if (input == 'paper' && nameWeapon == 'paper') {
    drawNum = drawNum + 1;
    myOutputValue = ' draw! the both of us selected ' + nameWeapon + ' :) total draws: ' + (drawNum) + ' total wins: ' + winNum + ' total losses: ' + lossNum;
  }
  if (input == 'stone' && nameWeapon == 'stone') {
    drawNum = drawNum + 1;
    myOutputValue = 'draw! the both of us selected ' + nameWeapon + ' :) total draws: ' + (drawNum) + ' total wins: ' + winNum + ' total losses: ' + lossNum;
  }

  //WIN
  if (input == 'scissors' && nameWeapon == 'paper') {
    winNum = winNum + 1;
    myOutputValue = 'hooray! ' + input + ' shreds ' + nameWeapon + '. you win! total draws: ' + drawNum + ' total wins: ' + winNum + ' total losses: ' + lossNum;
  }
  if (input == 'paper' && nameWeapon == 'stone') {
    winNum = winNum + 1;
    myOutputValue = 'hooray! ' + input + ' suffocates ' + nameWeapon + '. you win! total draws: ' + drawNum + ' total wins: ' + winNum + ' total losses: ' + lossNum;
  }
  if (input == 'stone' && nameWeapon == 'scissors') {
    winNum = winNum + 1;
    myOutputValue = 'hooray! ' + input + ' clobbers ' + nameWeapon + '. you win! total draws: ' + drawNum + ' total wins: ' + winNum + ' total losses: ' + lossNum;
  }

  //LOSS
  if (nameWeapon == 'scissors' && input == 'paper') {
    lossNum = lossNum + 1;
    myOutputValue = 'sorry! ' + nameWeapon + ' shreds ' + input + '. you lose :( total draws: ' + drawNum + ' total wins: ' + winNum + ' total losses: ' + lossNum;
  }
  if (nameWeapon == 'paper' && input == 'stone') {
    lossNum = lossNum + 1;
    myOutputValue = 'sorry! ' + nameWeapon + ' suffocates ' + input + '. you lose :( total draws: ' + drawNum + ' total wins: ' + winNum + ' total losses: ' + lossNum;
  }
  if (nameWeapon == 'stone' && input == 'scissors') {
    lossNum = lossNum + 1;
    myOutputValue = 'sorry! ' + nameWeapon + ' clobbers ' + input + '. you lose :( total draws: ' + drawNum + ' total wins: ' + winNum + ' total losses: ' + lossNum;
  }
  return myOutputValue;
}


var randomWeapon = function () {
  return 2;
  var randomFloat = Math.random() * 3;
  var resultInteger = Math.floor(randomFloat) + 1;
  return resultInteger;
}
