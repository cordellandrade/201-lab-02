'use strict';


function questionNumber1() {
  var response = prompt('Am I a student at Code Fellows?').toUpperCase();

  if (response === 'YES' || response === 'Y') {
    // console.log('Correct! I am a student at Code Fellows')
    alert('Correct! I am a student at Code Fellows');
  }
}

function questionNumber2() {
  var response = prompt('Do I live in the US?').toUpperCase();

  var message;
  if (response === 'YES' || response === 'Y') {
    // console.log('Wrong! I live in the Caribbean')
    alert('Wrong! I live in the Caribbean');
  }
}

function questionNumber3() {
  var response = prompt('Do I love dogs?').toUpperCase();

  var message;
  if (response === 'YES' || response === 'Y') {
    // console.log('Correct!')
    alert('Correct!');
  }
}

function questionNumber4() {

  var response = prompt('Did I live in the states before?').toUpperCase();

  var message;
  if (response === 'YES' || response === 'Y') {
    // console.log('Correct!')
    alert('Correct!');
  }
}

function questionNumber5() {

  var response = prompt('Do I love sports?').toUpperCase();

  var message;
  if (response === 'YES' || response === 'Y') {
    // console.log('Correct!')
    alert('Correct!');
  }
}


questionNumber1();
questionNumber2();
questionNumber3();
questionNumber4();
questionNumber5();