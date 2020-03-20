var wins = 0;
var losses = 0;
var lettersGuessed = [];
var guessesLeft = 12;
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var directionsText = document.getElementById("directions-text");
var letters = document.getElementById("letters-guessed");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var currentWord = document.getElementById("empty-array");

var words = ["belmont", "dracula", "alucard", "death", "medusa", "trevor", "simon", "carmilla", "sypha",
    "grant", "frankenstein", "slogra", "gaibon", "golem", "legion", "mummy", "hector", "isaac"];
var word = words[Math.floor(Math.random() * words.length)];
var lettersLeft = word.length;
var emptyArray = [];

function makeEmptyArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        emptyArray.push('_');
    }
    currentWord.textContent = emptyArray.join(" ");
}

makeEmptyArray(word);

console.log(word);
console.log(emptyArray);

function gameState() {
    if (!emptyArray.includes("_") && guessesLeft >= 1) {
        console.log("You've defeated Dracula");
        wins++;
        winsText.innerHTML = "Wins: " + wins;
        document.getElementById("picture").setAttribute("src", "assets/images/" + word + ".jpg");
        newWord();

    } else if (guessesLeft <= 0) {
        console.log("Dracula wins!");
        losses++;
        lossesText.innerHTML = "Losses: " + losses;
        newWord();
    }
}

function newWord() {
    word = words[Math.floor(Math.random() * words.length)];
    emptyArray = [];
    lettersGuessed = [];
    guessesLeft = 12;
    makeEmptyArray(word);
    document.getElementById("guesses-left").innerHTML = "Guesses left: " + guessesLeft;
    document.getElementById("empty-array").innerHTML;
    letters.innerHTML = "Guesses: ";
}

document.onkeyup = function (event) {
    if (alphabet.includes(event.key) && !lettersGuessed.includes(event.key)) {
        lettersGuessed.push(event.key);
        letters.innerHTML = lettersGuessed;

        if (word.includes(event.key)) {
            for (var i = 0; i < word.length; i++) {
                if (word[i] === event.key) {
                    emptyArray[i] = word[i];
                }
            }
            currentWord.textContent = emptyArray.join(" ");

        } else {
            guessesLeft -= 1;
            document.getElementById("guesses-left").innerHTML = "Guesses left: " + guessesLeft
        }

        gameState();

    } else if (lettersGuessed.includes(event.key)) {
        console.log("You've already guessed " + event.key);
    } else {
        console.log("Please enter a valid key a-z.");
    }
}