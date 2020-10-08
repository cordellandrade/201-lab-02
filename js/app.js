'use strict';



/* function addGreeting() {

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
askName(); */

var user = prompt('What is your name?');

// while (user === '' || user === null) {
// this is the shorter version of the above expression. it uses type coercion to our advantage
{
    while (!user) {
        user = prompt('What is your name? Really, we need it.');
    }

    alert('Hi ' + user + '! I am so glad you decided to come to my site.');

}

var  userPoints  =  0;


// function questionNumber1() {
var response = prompt('Am I a student at Code Fellows?').toUpperCase();

if (response === 'YES' || response === 'Y') {
    // console.log('Correct! I am a student at Code Fellows')
    alert('Correct! I am a student at Code Fellows');
    userPoints++;
}

// }

// function questionNumber2() {
var response = prompt('Do I live in the US?').toUpperCase();

var message;
if (response === 'NO' || response === 'N') {
    // console.log('Wrong! I live in the Caribbean')
    alert('Correct! I live in the Caribbean');
    userPoints++;
}



// }

// function questionNumber3() {
var response = prompt('Do I love dogs?').toUpperCase();

var message;
if (response === 'YES' || response === 'Y') {
    // console.log('Correct!')
    alert('Correct!');
    userPoints++;
}
// }

// function questionNumber4() {

var response = prompt('Did I live in the states before?').toUpperCase();

var message;
if (response === 'YES' || response === 'Y') {
    // console.log('Correct!')
    alert('Correct!');
    userPoints++;
}
// }

// function questionNumber5() {

var response = prompt('Do I love sports?').toUpperCase();

var message;
if (response === 'YES' || response === 'Y') {
    // console.log('Correct!')
    alert('Correct!');
    userPoints++;
}




/*
questionNumber1();
questionNumber2();
questionNumber3();
questionNumber4();
questionNumber5(); */


// Initial setup of variables.

alert('Welcome to my guessing game!');

/*
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
            userPoints++;
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
*/

// How Ryan created it in class

var tries = 0;
var guessNumber = 7; // correct answer
var correctGuess = false;

while (tries < 3 && !correctGuess) {
    tries++;
    var guessGame = parseInt(prompt('I\'m thinking of a number from 1 - 10, can you guess the number?'));
    console.log(typeof guessGame, guessGame);
    if (guessGame < guessNumber) {
        alert(`Sorry ${user} that guess is too low`)
    } else if (guessGame > guessNumber) {
        alert(`Sorry ${user} that guess is too high`)
    } else if (guessGame === 7) {
        alert(`Correct ${user} !`)
        correctGuess = true;
    }
}

if (!correctGuess) {
    alert(`
            You 're out of guesses, the correct one was  ${guessNumber}`);
}





//7th Question

var whatMovie = ['the matrix', 'transformers', 'fifty shades of grey', 'the departer']
var guessAnswer = prompt(' Can you guess what movie is my favorite?');
var attemptsRemaining = 6;
var answeredCorrect = false;

while (attemptsRemaining > 0 && !answeredCorrect) {
    attemptsRemaining--;
    for (var i = 0; i < whatMovie.length; i++) {
        if (guessAnswer === whatMovie[i]) {
            answeredCorrect = true;
            alert(`My favorite movie to watch is ${guessAnswer}`);
        }
    }
    if (attemptsRemaining > 0 && !answeredCorrect) {
        guessAnswer = prompt('Sorry that wasn\'t a correct answer please try again!');
    }
    if (attemptsRemaining === 0 && !answeredCorrect) {
        alert('Sorry you\'re out of tries!');
    }
}

alert('you have '  +  userPoints  +  ' points.');