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
var userName = '';
var inputMode = 'username';

var randomWeapon = function () {
  var randomFloat = Math.random() * 3;
  var resultInteger = Math.floor(randomFloat) + 1;
  return resultInteger;
};

var main = function (input) {
  if (inputMode == 'username') {
    userName = input
    inputMode = 'sps';
    myOutputValue = 'hi, ' + userName + '! select your weapon to start ✂️📄💎'
  } else if (inputMode == 'sps') {
    var numWeapon = randomWeapon();
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

    console.log(nameWeapon); // Displays nameWeapon in the console


    //DRAW
    if (input == 'scissors' && nameWeapon == 'scissors') {
      drawNum = drawNum + 1;
      myOutputValue = 'nooo, ' + userName + '! i chose ' + nameWeapon + ' first. neither of us gets a point 🤦‍♀️ ' + userName + ' score: ' + winNum + ' my score: ' + lossNum;
    }
    if (input == 'paper' && nameWeapon == 'paper') {
      drawNum = drawNum + 1;
      myOutputValue = 'nooo, ' + userName + '! i chose ' + nameWeapon + ' first. neither of us gets a point 🤦‍♀️ ' + userName + ' score: ' + winNum + ' my score: ' + lossNum;
    }
    if (input == 'stone' && nameWeapon == 'stone') {
      drawNum = drawNum + 1;
      myOutputValue = 'nooo, ' + userName + '! i chose ' + nameWeapon + ' first. neither of us gets a point 🤦‍♀️ ' + userName + ' score: ' + winNum + ' my score: ' + lossNum;
    }

    //WIN
    if (input == 'scissors' && nameWeapon == 'paper') {
      winNum = winNum + 1;
      myOutputValue = 'humph, ' + userName + '! ' + input + ' shred ' + nameWeapon + '. you win. 🙇‍♀️ ' + userName + ' score: ' + winNum + ' my score: ' + lossNum;
    }
    if (input == 'paper' && nameWeapon == 'stone') {
      winNum = winNum + 1;
      myOutputValue = 'humph, ' + userName + '! ' + input + ' suffocates ' + nameWeapon + '. you win. 🙇‍♀️ ' + userName + ' score: ' + winNum + ' my score: ' + lossNum;
    }
    if (input == 'stone' && nameWeapon == 'scissors') {
      winNum = winNum + 1;
      myOutputValue = 'humph, ' + userName + '! ' + input + ' crushes ' + nameWeapon + '. you win. 🙇‍♀️ ' + userName + ' score: ' + winNum + ' my score: ' + lossNum;
    }

    //LOSS
    if (nameWeapon == 'scissors' && input == 'paper') {
      lossNum = lossNum + 1;
      myOutputValue = 'sorry, ' + userName + '! ' + nameWeapon + ' shred ' + input + '. you lose. 🙅‍♀️ ' + userName + ' score: ' + winNum + ' my score: ' + lossNum;
    }

    if (nameWeapon == 'paper' && input == 'stone') {
      lossNum = lossNum + 1;
      myOutputValue = 'sorry, ' + userName + '! ' + nameWeapon + ' suffocates ' + input + '. you lose. 🙅‍♀️ ' + userName + ' score: ' + winNum + ' my score: ' + lossNum;
    }
    if (nameWeapon == 'stone' && input == 'scissors') {
      lossNum = lossNum + 1;
      myOutputValue = 'sorry, ' + userName + '! ' + nameWeapon + ' crushes ' + input + '. you lose. 🙅‍♀️ ' + userName + ' score: ' + winNum + ' my score: ' + lossNum;
    }
    if (input != 'scissors' && input != 'paper' && input != 'stone') {
      myOutputValue = 'did you try to encode a bogus weapon? try again!'
    }
  }
  return myOutputValue;
}