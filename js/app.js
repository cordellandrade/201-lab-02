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


//7th Question


var  tries  =  6;

while  (tries  >  0)  {



        
    var  answer  =  prompt('Is 1. the Wolf on Wall Street, Starwars, and 50 shades of grey.  2. The Wolf on Wall Street, Starwars, and The Departed or   3. The Wolf on Wall Street, Starwars, and Transformers some of my favorite movies to watch?',  'Enter 1, 2, or 3 to answer').toLowerCase();    
    console.log(answer);


    var  moviesILike  =   ['The Matrix ',  'The wolf on wall street ',  'Starwars ',  'IT ',  'The Departed'];

        
    for  (var  i  =  0;  i  <  moviesILike.length;  i++)  {        
        console.log(moviesILike[i]);    
    }

        
    if  (answer  ===  '2'  ||  answer  ===  2)  {        
        // if it's correct, give them a point
                
        userPoints++;        
        alert('Correct!'); 
        alert('you have '  +  userPoints  +  ' points.');
        break;   
    } 
    else  {         // if it's not correct, tell them to try again
                 alert('Wrong! try again');     }

    tries = tries - 1;


    if (tries == 0) {
        alert('You ran out of tries.  Movies I like to watch are, ' + moviesILike + '.');
        alert('you have '  +  userPoints  +  ' points.');
        break;



    }

}




    