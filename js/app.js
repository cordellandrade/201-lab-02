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

addGreeting();
askName();




// function questionNumber1() {
var response = prompt('Am I a student at Code Fellows?').toUpperCase();

if (response === 'YES' || response === 'Y') {
    // console.log('Correct! I am a student at Code Fellows')
    alert('Correct! I am a student at Code Fellows');
}
// }

// function questionNumber2() {
var response = prompt('Do I live in the US?').toUpperCase();

var message;
if (response === 'YES' || response === 'Y') {
    // console.log('Wrong! I live in the Caribbean')
    alert('Wrong! I live in the Caribbean');
}
// }

// function questionNumber3() {
var response = prompt('Do I love dogs?').toUpperCase();

var message;
if (response === 'YES' || response === 'Y') {
    // console.log('Correct!')
    alert('Correct!');
}
// }

// function questionNumber4() {

var response = prompt('Did I live in the states before?').toUpperCase();

var message;
if (response === 'YES' || response === 'Y') {
    // console.log('Correct!')
    alert('Correct!');
}
// }

// function questionNumber5() {

var response = prompt('Do I love sports?').toUpperCase();

var message;
if (response === 'YES' || response === 'Y') {
    // console.log('Correct!')
    alert('Correct!');
}
// }



/*
questionNumber1();
questionNumber2();
questionNumber3();
questionNumber4();
questionNumber5(); */


// Initial setup of variables.
var lowerLimit = 1;
var upperLimit = 10;
var tries = 4;
var answer = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
var guess = '';
var message = 'Guess a number between ' + lowerLimit + ' and ' + upperLimit + ':';

// Keep prompting the user for a guess until the game ends.
while (tries > 0) {
    // Prompt the user for a guess.
    guess = prompt(message, guess);

    // If the cancel button was pushed, let the user know the game is ending and
    // break out of the loop.
    if (guess == null) {
        alert('Quitting game now.');
        break;
    }
    // If the guess is a number...
    else if (isFinite(guess) && guess != '') {
        // Make sure the guess is converted into a number.
        guess = +guess;

        // If the guess is less than the range let the user know.
        if (guess < lowerLimit) {
            alert('Your guess should be no less than ' + lowerLimit + '.');
        }
        // If the guess is greater than the range let the user know.
        else if (guess > upperLimit) {
            alert('Your guess should be no greater than ' + upperLimit + '.');
        }
        // If the guess is too high let the user know.
        else if (guess > answer) {
            alert('Your guess is too high.');
        }
        // If the guess is too low let the user know.
        else if (guess < answer) {
            alert('Your guess is too low');
        }
        // If none of the other cases were true that means the answer must have
        // been guessed so let the user know and break out of the loop.
        else {
            alert('Great job, you got it!');
            break;
        }
    }
    // If the guess is not a number, let the user know.
    else {
        alert('You must enter a number as a guess.');
    }

    tries = tries - 1;
}

if (tries == 0) {
    alert('You ran out of tries.  The number was ' + answer + '.');
}