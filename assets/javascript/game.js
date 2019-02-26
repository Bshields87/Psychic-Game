

//variable for computer choices array
var computerChoices = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//variables for score
let wins= 0;
let losses= 0;
let guessesLeft= 10;

//variables for location inhtml that needs updating
let winsScoreText= document.getElementById("winsScore-text");
let lossScoreText= document.getElementById("lossScore-text");
let guessesLeftText= document.getElementById("guessesLeft-text");
let guessesSoFarText= document.getElementById("guessesSoFar-text");

//function for key up event
document.onkeyup = function(event){

//variable for the button pressed by user    
    var userGuess = event.key.toLowerCase();
        
        console.log(userGuess);

//variable for compter random selection    
    var computerGuess= computerChoices[Math.floor(Math.random()* computerChoices.length)];
        console.log(computerGuess);
//logic
if (userGuess === computerGuess){
wins++;
} else {
    losses++;
    guessesLeft--;
}
//display guesses, wins and losses.
winsScoreText.textContent= "Wins: " + wins;
lossScoreText.textContent= "Losses: " + losses;
guessesLeftText.textContent= "Guesses Left: " + guessesLeft;
guessesSoFarText.textContent= "You Guessed: " + userGuess;
}
;


