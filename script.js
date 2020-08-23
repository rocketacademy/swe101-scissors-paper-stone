// Disable ESLint rule no-unused-vars on next line because this code
// is a learning tool and not a full-fledged node app.
// eslint-disable-next-line no-unused-vars

//Basic Scissors-Paper-Stone
// 'scissors' = 1
// 'paper' = 2
// 'stone' = 3

var main = function (input) {
  var numWeapon = randomWeapon(); // 1 to 3
  console.log(numWeapon); // Displays numWeapon in the console
  var nameWeapon;

  if (numWeapon == 1) {
    nameWeapon = 'scissors'
  };

  if (numWeapon == 2) {
    nameWeapon = 'paper'
  };

  if (numWeapon == 3) {
    nameWeapon = 'stone'
  };

  var myOutputValue = 'ha! nice try! ' + input + ' is not a valid weapon. >:(';

  //DRAW
  if (input == 'scissors' && nameWeapon == 'scissors') {
    myOutputValue = 'draw! the both of us selected ' + nameWeapon + ' :)';
  }
  if (input == 'paper' && nameWeapon == 'paper') {
    myOutputValue = ' Draw! Both of you selected paper ' + nameWeapon + ' :)';
  }
  if (input == 'stone' && nameWeapon == 'stone') {
    myOutputValue = 'draw! the both of us selected ' + nameWeapon + ' :)';
  }

  //WIN
  if (input == 'scissors' && nameWeapon == 'paper') {
    myOutputValue = 'hooray! ' + input + ' shreds ' + nameWeapon + '. you win!';
  }
  if (input == 'paper' && nameWeapon == 'stone') {
    myOutputValue = 'hooray! ' + input + ' suffocates ' + nameWeapon + '. you win!';
  }
  if (input == 'stone' && nameWeapon == 'scissors') {
    myOutputValue = 'hooray! ' + input + ' clobbers ' + nameWeapon + '. you win!';
  }

  //LOSE
  if (nameWeapon == 'scissors' && input == 'paper') {
    myOutputValue = 'sorry! ' + nameWeapon + ' shreds ' + input + '. you lose :(';
  }
  if (nameWeapon == 'paper' && input == 'stone') {
    myOutputValue = 'sorry! ' + nameWeapon + ' suffocates' + input + '. you lose :(';
  }
  if (nameWeapon == 'stone' && input == 'scissors') {
    myOutputValue = 'sorry! ' + nameWeapon + ' clobbers ' + input + '. you lose :(';
  }
  return myOutputValue;
}


var randomWeapon = function () {
  return 1;
  var randomFloat = Math.random() * 3;
  var resultInteger = Math.floor(randomFloat) + 1;
  return resultInteger;
}
