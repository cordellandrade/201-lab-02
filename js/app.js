'use strict';

function addGreeting() {

  var today = new Date();
  var hourNow = today.getHours();
  var greeting;
  if (hourNow > 18) {
    greeting = 'Good evening!';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon!';
  } else if (hourNow > 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Welcome!';
  }
  return document.write('<h3>' + greeting + '</h3>');
}

function askName() {
  var userName = prompt('What is your name?');

  return document.write('<h3>' + 'Hello, ' + userName + '</h3>');

}


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

addGreeting();
askName();
questionNumber1();
questionNumber2();
questionNumber3();
questionNumber4();
questionNumber5();