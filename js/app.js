'use strict';

var user = prompt('What is your name?');

{
    while (!user) {
        user = prompt('What is your name? Really, we need it.');
    }

    alert('Hi ' + user + '! I am so glad you decided to come to my site.');

}

var  userPoints  =  0;


function questionNumber1() {
    var response = prompt('Am I a student at Code Fellows?').toUpperCase();

    if (response === 'YES' || response === 'Y') {
        alert('Correct! I am a student at Code Fellows');
        userPoints++;
    }

}
questionNumber1();


function questionNumber2() {
    var response = prompt('Do I live in the US?').toUpperCase();

    var message;
    if (response === 'NO' || response === 'N') {
        alert('Correct! I live in the Caribbean');
        userPoints++;
    }
}
questionNumber2();


function questionNumber3() {
    var response = prompt('Do I love dogs?').toUpperCase();

    var message;
    if (response === 'YES' || response === 'Y') {
        alert('Correct!');
        userPoints++;
    }
}

questionNumber3();


function questionNumber4() {

    var response = prompt('Did I live in the states before?').toUpperCase();

    var message;
    if (response === 'YES' || response === 'Y') {
        alert('Correct!');
        userPoints++;
    }
}
questionNumber4();


function questionNumber5() {

    var response = prompt('Do I love sports?').toUpperCase();

    var message;
    if (response === 'YES' || response === 'Y') {
        alert('Correct!');
        userPoints++;
    }
}
questionNumber5();



alert('Welcome to my guessing game!');

function questionNumber6() {

    var tries = 0;
    var guessNumber = 7;
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
            userPoints++;
        }
    }

    if (!correctGuess) {
        alert(`
        You 're out of guesses, the correct one was  ${guessNumber}`);
    }
}

questionNumber6();





function questionNumber7() {


    var whatMovie = ['the matrix', 'starwars', 'inception', 'the departer']
    var guessAnswer = prompt(' Can you guess what movie is my favorite?');
    var attemptsRemaining = 6;
    var answeredCorrect = false;

    while (attemptsRemaining > 0 && !answeredCorrect) {
        attemptsRemaining--;
        for (var i = 0; i < whatMovie.length; i++) {
            if (guessAnswer === whatMovie[i]) {
                answeredCorrect = true;
                userPoints++;
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

    if (!answeredCorrect) {
        alert(`Thanks for playing, ${user}, the correct answer was the matrix :)`)
    }

    alert('you have '  +  userPoints  +  ' points.');

}

questionNumber7();