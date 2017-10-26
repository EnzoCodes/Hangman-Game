
// document.getElementById("game-display").innerHTML = results;

// Array of Choices
var wordlist = [ "apple", "piano", "wisdom", "groom", "modern", "perspective",
                 "lemon", "melon", "lime", "life", "taxes", "money", "death",
                 "five", "bark", "equip", "ship", "flip"]
// Length of wordlist
var len = wordlist.length;

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var blankSpace = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];
//blank array to fill with the word.


var letterChoice; // User's input of letter, defined in function. Should push to lettersGuessed.
var wordChoice; // Goin' Global.
var wordSplit; // Makin' it Global.

wordChoice = wordlist[Math.floor(Math.random() * len)];
wordSplit = wordChoice.split('');

var lettersGuessed = []; //Empty Array to fill with letters already guessed.



// SETTING SCORE VARIABLES
var win = 0;
var lose = 0;
var guesses = 12;

     document.onkeyup = function(event) {

         var letterChoice = event.key; {
             letterChoice.toLowerCase();
             letterChoice.push(lettersGuessed);
             //Only runs game IF letter has not been guessed previously. Letter is valid character. Guesses are > 0.
             if (guesses > 0 &&
                 alphabet.indexOf(letterChoice) != -1 &&
                 lettersGuessed.indexOf(lettersGuessed) == -1 ) {
                //Game
             }
     };


// Alphabet array
// Secret words array


// Blank input array (??) -
// (Shows letters as entered, getElementById(); somewhere.)

// function 1.
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
