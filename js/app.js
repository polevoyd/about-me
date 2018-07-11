'use strict';

var wrongInputAlrt = 'Wrong input! Only y/n allowed';


// /*---------------------------------------------------------*/
// // amount of correct answers
// var correctAns = 0;

// /*---------------------------------------------------------*/
// // Question #3
// var guessActive = prompt('Do I like to be active? y/n');

// if (guessActive.toLowerCase() === 'n'){

//     alert('You are wrong!');

// } else if (guessActive.toLowerCase() === 'y'){

//     alert('Yes! I actually do!');
//     correctAns++;

// } else alert(wrongInputAlrt);



// /*---------------------------------------------------------*/
// // Question #3
// var guessGames = prompt('Do I play a video games? y/n');

// if (guessGames.toLowerCase() === 'n'){

//     alert('That\'s right, I do like them but doesn\'t play that often!');
//     correctAns++;

// } else if (guessGames.toLowerCase() === 'y'){

//     alert('You are wrong!');

// }else alert('Wrong input! Only y/n allowed');



// /*---------------------------------------------------------*/
// // Question #3
// var guessColors = prompt('Do I like to change background colors? y/n');
// if (guessColors.toLowerCase() === 'n'){

//     alert('You are wrong!');

// } else if (guessColors.toLowerCase() === 'y'){

//     alert('Yes! I actually do!');
//     correctAns++;

// }else alert('Wrong input! Only y/n allowed');



// /*---------------------------------------------------------*/
// // Question #3
// var guessLang = prompt('Does english in my native language? y/n');

// if (guessLang.toLowerCase() === 'n'){

//     document.getElementsByTagName('h1')[0].textContent = 'DMITЯY';

//     alert('You are right!');
//     correctAns++;

// } else if (guessLang.toLowerCase() === 'y'){

//     alert('You are wrong!');

// }else alert('Wrong input! Only y/n allowed');



// /*---------------------------------------------------------*/
// // Question #3
// var guessAnimals = prompt('Do I like animals? y/n');

// if (guessAnimals.toLowerCase() === 'n'){

//     alert('You are wrong!');

// } else if (guessAnimals.toLowerCase() === 'y'){

//     alert('Yes, I do!');
//     correctAns++;

// }else alert('Wrong input! Only y/n allowed');



/*---------------------------------------------------------*/
// Question #6

var correctNumber = 18;
var attempts = 4;

while (attempts !== 0){

    var guessNumber = prompt('Let\'s get serious. Guess a number from 1 to 27:');

    if (parseInt(guessNumber) === correctNumber){

        console.log("True!");
        alert('Great job! You guess it with ' + (5 - attempts) + ' attempt(s)');
        break;
    } 
    else if (parseInt(guessNumber) < correctNumber){

        attempts--;
        alert("Wrong...Go higher!" + attempts + " attempts left");
        
    } 
    else if (parseInt(guessNumber) > correctNumber){

        alert("Wrong...Go lower!" + attempts + " attempts left");
        attempts--; 
    }
}

if ((attempts === 0) && (guessNumber !== correctNumber)){

    alert('You wasted all your attempts...');

}


/*---------------------------------------------------------*/
// Question #7

/*---------------------------------------------------------*/
// way to access element on page:
// document.getElementsByTagName('h1')[0].style.fontStyle = 'italic';


/*
LAB#3: 
use console.log()
use unordered list
use ordered list
do 6th question to guess in 4 attempts
do 7th question to guess in 6 attempts using array


*/