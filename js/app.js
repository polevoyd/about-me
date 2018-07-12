'use strict';

var wrongInputAlrt = 'Wrong input! Only y/n allowed';

/*---------------------------------------------------------*/
// amount of correct answers
var correctAns = 0;

/*---------------------------------------------------------*/
// Question #3
var guessActive = prompt('Do I like to be active? y/n');
console.log('User input: ' + guessActive);

if ((guessActive.toLowerCase() === 'n') || (guessActive.toLowerCase() === 'no')){

    alert('You are wrong!');

} else if ((guessActive.toLowerCase() === 'y')|| (guessActive.toLowerCase() === 'yes')){

    alert('Yes! I actually do!');
    correctAns++;

} else alert(wrongInputAlrt);



/*---------------------------------------------------------*/
// Question #3
var guessGames = prompt('Do I play a video games? y/n');
console.log('User input: ' + guessGames);

if ((guessGames.toLowerCase() === 'n') || (guessGames.toLowerCase() === 'no')){

    alert('That\'s right, I do like them but doesn\'t play that often!');
    correctAns++;

} else if ((guessGames.toLowerCase() === 'y') || (guessGames.toLowerCase() === 'yes')){

    alert('You are wrong!');

}else alert('Wrong input! Only y/n allowed');



/*---------------------------------------------------------*/
// Question #3
var guessColors = prompt('Do I like to change background colors? y/n');
console.log('User input: ' + guessColors);

if ((guessColors.toLowerCase() === 'n') || (guessColors.toLowerCase() === 'no')){

    alert('You are wrong!');

} else if ((guessColors.toLowerCase() === 'y') || (guessColors.toLowerCase() === 'yes')){

    alert('Yes! I actually do!');
    correctAns++;

}else alert('Wrong input! Only y/n allowed');



/*---------------------------------------------------------*/
// Question #3
var guessLang = prompt('Does english in my native language? y/n');
console.log('User input: ' + guessLang);

if ((guessLang.toLowerCase() === 'n') || (guessLang.toLowerCase() === 'no')){

    document.getElementsByTagName('h1')[0].textContent = 'DMITЯY';
    alert('You are right!');
    correctAns++;

} else if ((guessLang.toLowerCase() === 'y') || (guessLang.toLowerCase() === 'yes')){

    alert('You are wrong!');

}else alert('Wrong input! Only y/n allowed');



/*---------------------------------------------------------*/
// Question #3
var guessAnimals = prompt('Do I like animals? y/n');
console.log('User input: ' + guessAnimals);

if ((guessAnimals.toLowerCase() === 'n') || (guessAnimals.toLowerCase() === 'no')){

    alert('You are wrong!');

} else if ((guessAnimals.toLowerCase() === 'y') || (guessAnimals.toLowerCase() === 'yes')){

    alert('Yes, I do!');
    correctAns++;

}else alert('Wrong input! Only y/n allowed');



/*---------------------------------------------------------*/
// Question #6

// number will be random from 0 to 30
var correctNumber = Math.floor(Math.random() * 30);
var attempts = 4;

while (attempts !== 0){

    var guessNumber = prompt('Let\'s get serious. Guess a number from 1 to 50:');
    console.log('User input: ' + guessNumber);

    if (parseInt(guessNumber)){
        if (parseInt(guessNumber) === correctNumber){

            console.log("True!");
            alert('Great job! You guess it with ' + (5 - attempts) + ' attempt(s)');
            correctAns++;
            break;
        } 
        else if (parseInt(guessNumber) < correctNumber){
    
            console.log(parseInt(guessNumber) + ' lower than ' + correctNumber);
            attempts--;
            alert("Wrong...Go higher!" + attempts + " attempts left");
            
        } 
        else if (parseInt(guessNumber) > correctNumber){
    
            console.log(parseInt(guessNumber) + ' bigger that ' + correctNumber);
            attempts--; 
            alert("Wrong...Go lower!" + attempts + " attempts left");
            
        }
        
    }
    else alert('Wrong input! It should be a whole number');
}

if ((attempts === 0) && (guessNumber !== correctNumber)){

    alert('You wasted all your attempts...');
}

/*---------------------------------------------------------*/
// Question #7

var citiesVisited = ['Moscow', 'Las Vegas', 'Rostov-On-Don', 'Vancouver', 'Seattle', 'Portland', 'Los Angeles'];
var correctCityArr = [];

for (var citiesAttempts = 5; citiesAttempts >= 0; citiesAttempts--) 
{
    var cityGuess = prompt('Guess a city I\'ve been to: ');
    var boolCorrect = false;
    console.log('User input: ' + cityGuess);

    for (var k = 0; k < citiesVisited.length; k++){

        if (cityGuess === citiesVisited[k]){ // oh, its in array!

            boolCorrect = true;
            break;
        }
    }

    if (boolCorrect){
        correctCityArr.push(cityGuess);
        alert('That\'s right! You have ' + citiesAttempts + ' attempts left');
    }
    else{
        alert('That\'s wrong! You have ' + citiesAttempts + ' attempts left');
    }
}

// checking which cities guess correctly (if any)
if (correctCityArr.length !== 0){
    alert('Done! Here is a cities you guessed: ' + correctCityArr);
}
else{
    alert('Done! You didn\'t guessed any...');
}

// checking total score
if (correctAns > 4){
    alert('Your total score is: ' + correctAns + '/7. Not bad ;)');
}
else{
    alert('Your total score is: ' + correctAns + '/7. You didn\'t try hard enough...');
}


/*---------------------------------------------------------*/
// way to access element on page:
// document.getElementsByTagName('h1')[0].style.fontStyle = 'italic';
