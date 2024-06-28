console.log("======================= step 1 ================================");
function greaterNumber(num1, num2) {
    let greater = num1 > num2 ? num1 : num2;
    console.log(`greater number between ${num1} and ${num2} is: ${greater}`);
}

greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("======================  step 2  ======================================");

function isEvenOrOddNum(num) {
    return num % 2 === 0 ? true : false;
}

console.log(isEvenOrOddNum(29));
console.log(isEvenOrOddNum(44));
console.log(isEvenOrOddNum(0));
console.log(isEvenOrOddNum(101));

console.log("======================== step 3  ========================================");

function wordLength(word) {
    return word.length % 2 === 0 ? 'EVEN' : 'ODD';
}

console.log(wordLength("JavaScript"));
console.log(wordLength("developer"));
console.log(wordLength("Google"));

