console.log("===TASK 1===");
function squareOfWordLength(word) {
    var length = word.length;
    var square = length * length;
    return square;
}

var words = ["JavaScript", "Google Chrome", "Developer Smart"];
words.forEach(function(word) {
    var result = squareOfWordLength(word);
    console.log(`The length of "${word}" is ${word.length} and its square is ${result}.`);
});

console.log("===TASK 2===");

function lengthDividedByWords() {
    var str = "I am Angular Developer";
    var length = str.length;
    var words = str.split(" ").length;
    var result = length / words;
    console.log(`The length of the string is ${length}. Divided by words: ${words}, result is ${result}.`);
}

function lengthMultipliedByWords() {
    var str = "I am Angular Developer";
    var length = str.length;
    var words = str.split(" ").length;
    var result = length * words;
    console.log(`The length of the string is ${length}. Multiplied by words: ${words}, result is ${result}.`);
}

lengthDividedByWords();
lengthMultipliedByWords();



console.log("----------------------------------------------------------------------");