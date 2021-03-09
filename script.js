var main = function (input) {
  var myOutputValue = 'hello world';
  return myOutputValue;
};
// set global var//
var win = 0;
var lose = 0;
var draw = 0;
var troll = 0;

// hack function//
var Hack = function (input) {
  if (input == 'Reverse') {
    troll += 1;
    return 'troll activated';
  }
};

// unhack function//
var Hack = function (input) {
  if (input == 'Unhack') {
    troll -= 1;
    return 'troll deactivated';
  }
};

// normal function//
var normal = function (input) {
  const Play = ['Scissors', 'Paper', 'Stone'];
  const random = Math.floor(Math.random() * Play.length);

  console.log(random, Play[random]);

  if (input == Play[random]) {
    draw += 1;
    return 'draw: ' + draw;
  }

  if (input == 'Scissors' && Play[random] == 'Paper' || input == 'Paper' && Play[random] == 'Stone' || input == 'Stone' && Play[random] == 'Scissors') {
    win += 1;
    return 'Win: ' + win;
  }

  if (input == 'Paper' && Play[random] == 'Scissors' || input == 'Stone' && Play[random] == 'Paper' || input == 'Scissors' && Play[random] == 'Stone') {
    lose += 1;
    return 'lose:  ' + lose;
  }

  return 'Error, try again';
};

// reverse function//
var Fake = function (input) {
  const Play = ['Scissors', 'Paper', 'Stone'];
  const random = Math.floor(Math.random() * Play.length);

  console.log(random, Play[random]);

  if (input == Play[random]) {
    draw += 1;
    return 'draw: ' + draw;
  }

  if (input == 'Scissors' && Play[random] == 'Paper' || input == 'Paper' && Play[random] == 'Stone' || input == 'Stone' && Play[random] == 'Scissors') {
    lose += 1;
    return 'lose: ' + lose;
  }

  if (input == 'Paper' && Play[random] == 'Scissors' || input == 'Stone' && Play[random] == 'Paper' || input == 'Scissors' && Play[random] == 'Stone') {
    win += 1;
    return 'win:  ' + win;
  }

  return 'Error, try again';
};

// calling functions
if (troll == 0) {
  normal();
}

if (troll == 1) {
  Fake();
}
