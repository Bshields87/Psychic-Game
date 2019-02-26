

//variable for computer choices array
var computerChoices = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//variables for score
var wins= 0;
var losses= 0;
var guessesLeft= 10;
var wrongGuesses= [];


var computerGuess= computerChoices[Math.floor(Math.random()* computerChoices.length)];
        console.log(computerGuess);

        //function to reset game
function resetGame(){
    guessesLeft= 10;
    wrongGuesses= [];
    computerGuess= computerChoices[Math.floor(Math.random()* computerChoices.length)];
        console.log(computerGuess);
}

//function for key up event
document.onkeyup = function(event){
    
//variable for the button pressed by user    
    var userGuess = event.key.toLowerCase();
        
        console.log(userGuess);    
    
//logic
//for (var i = 0; i < numBlanks; i++)

if (userGuess === computerGuess){
    wins++;
    alert("Wow you won!");
   
} else {
    wrongGuesses.push(userGuess);
    guessesLeft--;
    console.log(wrongGuesses);
} if (guessesLeft=== 0){
    alert('Sorry maybe next time');
    losses++;
    resetGame();
}
console.log("WinCount: " + wins + " | LossCount: " + losses + " | NumGuesses: " + guessesLeft);
//display guesses, wins and losses.
document.getElementById("wins-text").innerHTML= "Wins: " + wins;
document.getElementById("loss-text").innerHTML= "Losses: " + losses;
document.getElementById("guessesLeft-text").innerHTML= "Guesses " + guessesLeft;
document.getElementById("guessesSoFar-text").innerHTML= "Letters You Guessed: " + wrongGuesses;


};

//need a rest when guesses left reaches 0 giant loop?


