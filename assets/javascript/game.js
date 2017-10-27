// I think I approached this from the wrong perspective, especially the choosing the word bit.
// I should have used a for loop to randomly select a word, loop through it to check against
// the player's input... I think the way I did it is ok, but it's going to take longer than
// I have to complete, and I learned some valuable lessons along the way.  


// document.getElementById("game-display").innerHTML = results;

// Array of Choices
var wordlist = [ "apple", "piano", "wisdom", "groom", "modern", "perspective",
                 "lemon", "melon", "lime", "life", "taxes", "money", "death",
                 "five", "bark", "equip", "ship", "flip"]
// Length of wordlist
var lenRandWord = wordlist.length;

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var blankSpace;
var blankArray = [];
//blank array to fill with the word.


var letterChoice; // User's input of letter, defined in function. Should push to lettersGuessed.
var wordChoice; // Computer's word selection.
var wordSplit; // Array containing individual letters.
var letterCount; //Number of letters in the wordSplit Array.
var trigger = true;


var lettersGuessed = []; //Empty Array to fill with letters already guessed.

// SETTING SCORE VARIABLES
var win = 0;
var guesses = 12;

// run for loop for length of word. Compare user guess with length of split word run for loop.

// compare userInput across word.length as a for loop.


// Trap game inside document.onclick - getElementById(button); // or class.


if (trigger = true) {
    wordChoice = wordlist[Math.floor(Math.random() * lenRandWord)];
    wordSplit = wordChoice.split('');
    letterCount = wordSplit.length;
        // Print Correct number of Blanks to Page.
        // Below should be for loop. if word = CharAt(i)
        if (blankSpace != letterCount) {
            blankSpace = letterCount;
            document.getElementById("spaces").innerHTML = blankArray.join(" _ ");
    }   trigger = false;
}


    document.onkeyup = function(event) {
        var letterChoice = event.key;
        letterChoice.toLowerCase();
        //Run game IF Guesses remain, Valid Letter, Not Duplicate Letter.
        if (guesses > 0 && alphabet.indexOf(letterChoice) != -1 && lettersGuessed.indexOf(lettersGuessed) == -1 ) {
            // Pushes chosen letter to Array. Puts Array on screen!
            lettersGuessed.push(letterChoice);
            document.getElementById("lettersGuess").innerHTML = lettersGuessed.join(" ");
            // Win / Wrong Logic
            for(i = 0; i<wordSplit; i++) {
                if (letterChoice.indexOf(wordSplit) == -1){ //Wrong condition.
                guesses--;

            }
        }

            // Win.



            }
     };

    // Reset button?


// Alphabet array
// Secret words array


// Blank input array (??) -
// (Shows letters as entered, getElementById(); somewhere.)

// computer pick randWord.
// len of word displayed as ‘_’. Maybe show ‘_’ “hiding” letters.

// -capture input:
// -don’t allow entry of same letter twice (D/Q letter regardless of correct or incorrect)
// -check input against Array word (requires placing the randWord from secretWords in its own array, upon which each letter is checked).
// - if letter matches.
// - getElementById(); override        blank spaces. ( hide/show
// -else (letter wrong) remove 1 from guess chances counter.
// -update image(?)
// repeat until all letters are unhidden OR out of guesses
