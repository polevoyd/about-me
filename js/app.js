'use strict';

/*---------------------------------------------------------*/
/*-------------------Global variables----------------------*/
/*---------------------------------------------------------*/
var wrongInputAlrt = 'Wrong input! Only y/n or yes/no allowed';
var answerYes = 'y' || 'yes';
var answerNo = 'n' || 'no';
var totalScore = 0;

/*---------------------------------------------------------*/
/*------------------Answers validators---------------------*/
/*---------------------------------------------------------*/
// "Yes" or "No"
function checkAnswerYN(userAnswer, correctAnswer){

    if (userAnswer.toLowerCase() !== answerYes && userAnswer.toLowerCase() !== answerNo){
        alert(wrongInputAlrt);
    }
    else{
        if (userAnswer.toLowerCase() === correctAnswer){
            alert('Yes! That\'s correct answer!');
            totalScore++;
        } 
        else if (userAnswer.toLowerCase() !== correctAnswer){
            alert('No, you are wrong!');
        }
    }  
}

// Guess number in a range
function checkAnswerNumber(attempts, correctNumber){

    while (attempts !== 0){

        var guessNumber = prompt('Let\'s get serious. \nGuess a number from 1 to 27: ');
        console.log('User input: ' + guessNumber);
        
        if (parseInt(guessNumber)){
            if (parseInt(guessNumber) === correctNumber){
    
                console.log("True!");
                alert('Great job! You guess it with ' + (5 - attempts) + ' attempt(s)');
                totalScore++;
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
        else {
            alert('Wrong input! It should be a whole number\n' + attempts + ' attempts left');
            attempts--;
        }
    }
    
    if ((attempts === 0) && (guessNumber !== correctNumber)){
    
        alert('You wasted all your attempts...');
    }
}

// Guess from array of elements
function checkAnswerArray(attempts, citiesVisited)
    {
        var correctCityArr = [];

        for (var citiesAttempts = attempts; citiesAttempts >= 0; citiesAttempts--) 
        {
            var cityGuess = prompt('Guess what cities I\'ve been to, as many as possible: ').toUpperCase();
            var boolCorrect = false;
            console.log('User input: ' + cityGuess);

            for (var k = 0; k < citiesVisited.length; k++){

                if (cityGuess === citiesVisited[k]){

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
    }

/*---------------------------------------------------------*/
/*-----------------Questions section-----------------------*/
/*---------------------------------------------------------*/
// Question #1

    var questionOneAnswer = prompt('Do I like to be active? y/n, yes/no');
    console.log('User input: ' + questionOneAnswer);
    checkAnswerYN(questionOneAnswer, answerYes);

// Question #2

     var questionTwoAnswer = prompt('Do I play a video games? y/n, yes/no');
     console.log('User input: ' + questionTwoAnswer);
     checkAnswerYN(questionTwoAnswer, answerNo);

// Question #3

    var questionThreeAnswer = prompt('Do I like to change background colors? y/n, yes/no');
    console.log('User input: ' + questionThreeAnswer);
    checkAnswerYN(questionThreeAnswer, answerYes);

// Question #4

    var questionFourAnswer = prompt('Does english in my native language? y/n, yes/no');
    console.log('User input: ' + questionFourAnswer);
    checkAnswerYN(questionFourAnswer, answerNo);

// Question #5

    var questionFiveAnswer = prompt('Do I like animals? y/n, yes/no');
    console.log('User input: ' + questionFiveAnswer);
    checkAnswerYN(questionFiveAnswer, answerYes);

// Question #6

    var randomNum = Math.floor(Math.random() * 27);
    checkAnswerNumber(4, randomNum);

// Question #7

    var citiesVisited = ['MOSCOW', 'LAS VEGAS', 'VANCOUVER', 'SEATTLE', 'PORTLAND', 'LOS ANGELES'];
    checkAnswerArray(5, citiesVisited);

/*---------------------------------------------------------*/
/*---------------------Total score-------------------------*/
/*---------------------------------------------------------*/

if (totalScore > 4){
    alert('Your total score is: ' + totalScore + '/7. Not bad ;)');
}
else{
    alert('Your total score is: ' + totalScore + '/7. You didn\'t try hard enough...');
}

/*---------------------------------------------------------*/
// way to access element on page:
// document.getElementsByTagName('h1')[0].style.fontStyle = 'italic';
