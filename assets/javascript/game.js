

//variable for computer choices array
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//variable for images
var imagesForGuess = ["'assets/images/letter a.jpg'", "'assets/images/letter b.jpg'", "'assets/images/letter c.jpg'", "'assets/images/letter d.jpg'", "'assets/images/letter e.jpg'",
    "'assets/images/letter f.jpg'", "'assets/images/letter g.jpg'", "'assets/images/letter h.jpg'", "'assets/images/letter i.jpg'", "'assets/images/letter j.jpg'", "'assets/images/letter k.jpg'",
    "'assets/images/letter L.jpg'", "'assets/images/letter m.jpg'", "'assets/images/letter n.jpg'", "'assets/images/letter o.jpg'", "'assets/images/letter p.jpg'", "'assets/images/letter q.jpg'",
    "'assets/images/letter r.jpg'", "'assets/images/letter s.jpg'", "'assets/images/letter t.jpg'", "'assets/images/letter u.jpg'", "'assets/images/letter v.jpg'", "'assets/images/letter w.jpg'",
    "'assets/images/letter x.jpg'", "'assets/images/letter y.jpg'", "'assets/images/letter z.jpg'"];
//variables for score
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var wrongGuesses = [];

var locationOfLetter = Math.floor(Math.random() * computerChoices.length)
var computerGuess = computerChoices[locationOfLetter];
console.log(computerGuess);
var display = imagesForGuess[locationOfLetter];


//function to reset game
function resetGame() {
    guessesLeft = 10;
    wrongGuesses = [];
    locationOfLetter = Math.floor(Math.random() * computerChoices.length)
    computerGuess = computerChoices[locationOfLetter];
    console.log(computerGuess);
    display = imagesForGuess[locationOfLetter];
}
//function to display pic
function displayPic() {
    $("#images").html("<img src=" + display + ">");
}

//for hell text
function hell() {
    $("#sorry").html("Well, well, well... Your soul is MINE now!!");
    $('#gif').css("background-image", "url(https://media0.giphy.com/media/Lopx9eUi34rbq/200w.webp?cid=3640f6095c77769c636d575945d7af58)");
    body = document.getElementById("body");
    body.style.color = 'orange';
}
function heaven(){
    $("#congrats").html("Congratulations...Your soul is safe. FOR NOW!");
   $('#gif').css("background-image", "url(https://media0.giphy.com/media/xUA7bdb438bTcgY0h2/200w.webp?cid=3640f6095c7770f24476514e6391a1c8)");  
   body = document.getElementById("body");
   body.style.color = 'blue';
   
}


//function for key up event
document.onkeyup = function (event) {


    //variable for the button pressed by user    
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);

    //logic


    if (userGuess === computerGuess) {
        wins++;
        heaven();
        resetGame();
    } else {
        wrongGuesses.push(userGuess);
        guessesLeft--;
        console.log(wrongGuesses);
    }


    if (guessesLeft === 0) {
        losses++;
        hell();
        displayPic();
        resetGame();
    }

    console.log("WinCount: " + wins + " | LossCount: " + losses + " | NumGuesses: " + guessesLeft);
     //to change display
    document.getElementById("wins-text").innerHTML = "Wins: " + wins;
    document.getElementById("loss-text").innerHTML = "Losses: " + losses;
    document.getElementById("guessesLeft-text").innerHTML = "Guesses " + guessesLeft;
    document.getElementById("guessesSoFar-text").innerHTML = "Letters You Guessed: " + wrongGuesses;
    
};
