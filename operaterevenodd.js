console.log("===TASK1===");
function greaterNumber(num1, num2) {
    let greater = num1 > num2 ? num1 : num2;
    console.log(`greater number between ${num1} and ${num2} is: ${greater}`);
}

greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("===TASK2===");

function isEvenOrOddNum(num) {
    return num % 2 === 0 ? true : false;
}

console.log(isEvenOrOddNum(29));
console.log(isEvenOrOddNum(44));
console.log(isEvenOrOddNum(0));
console.log(isEvenOrOddNum(101));

console.log("===TASK3===");

function wordLength(word) {
    return word.length % 2 === 0 ? 'EVEN WORD % BY 2' : 'ODD WORD NOT % BY 2';
}

console.log(wordLength("JavaScript"));
console.log(wordLength("developer"));
console.log(wordLength("Google"));

