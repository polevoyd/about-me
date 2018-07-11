'use strict';

// 1
var guessActive = prompt('Do I like to be active? y/n');
if (guessActive.toLowerCase() === 'n'){
    alert('You are wrong!');
} else if (guessActive.toLowerCase() === 'y'){
    // 
    
    document.getElementsByTagName('h1')[0].style.fontStyle = 'italic';
    document.getElementsByTagName('h2')[0].style.fontStyle = 'italic';
    alert('Yes! I actually do!');
} else{
    alert('Wrong input! Only y/n allowed');
}

// 2
var guessGames = prompt('Do I play a video games? y/n');
if (guessGames.toLowerCase() === 'n'){
    alert('That\'s right, I do like them but doesn\'t play that often!');
} else if (guessGames.toLowerCase() === 'y'){
    alert('You are wrong!');
}else{
    alert('Wrong input! Only y/n allowed');
}

// 3
var guessColors = prompt('Do I like to change background colors? y/n');
if (guessColors.toLowerCase() === 'n'){
    alert('You are wrong!');
} else if (guessColors.toLowerCase() === 'y'){
    document.body.style.background = '#F3E1DD';
    document.getElementsByTagName('h1')[0].style.color = '#CE796B';
    document.getElementsByTagName('h2')[0].style.color = '#CE796B';
    // document.getElementsByTagName('h1')[0].style.textShadow = '#F3E1DD';
    alert('Yes! I actually do!');
}else{
    alert('Wrong input! Only y/n allowed');
}

// 4
var guessLang = prompt('Does english in my native language? y/n');
if (guessLang.toLowerCase() === 'n'){
    document.getElementsByTagName('h1')[0].textContent = 'DMITЯY';
    alert('You are right!');
} else if (guessLang.toLowerCase() === 'y'){
    alert('You are wrong!');
}else{
    alert('Wrong input! Only y/n allowed');
}

// 5
var guessAnimals = prompt('Do I like animals? y/n');
if (guessAnimals.toLowerCase() === 'n'){
    alert('You are wrong!');
} else if (guessAnimals.toLowerCase() === 'y'){
    alert('Yes, I do!');
}else{
    alert('Wrong input! Only y/n allowed');
}